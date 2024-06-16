/**
 * Get the latest information about each "person" in people folder
 * using official Twitter API
 *
 * Used to update following count, profile pictures, etc
 */
import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';
import * as twitterApi from './twitter-api.mjs'

const peopleDir = path.join('.', 'content', 'people');
const peopleFiles = fs.readdirSync(peopleDir);

const setCompleteUserData = (filePath, personData, rawUserData) => {
  const userData = {
    profileCreatedAt: rawUserData.createdAt,
    profileDescription: rawUserData.description,
    profileImageUrl: rawUserData.profileImageURL,
    profileMetrics: rawUserData.publicMetrics,
    profileLocation: rawUserData.location,
    profileUrl: rawUserData.entities?.url?.expandedURL || rawUserData.url,
    profileIsVerified: rawUserData.verified,
  }
  const updatedPersonData = { ...personData, ...userData };
  fs.writeFileSync(filePath, JSON.stringify(updatedPersonData, null, 2));
  console.log('Updated', file);
}

const updateCurrentMetrics = (filePath, personData, rawUserData) => {
  // instantiate first, if 'profileMetricsLog' doesn't exist
  if (!personData.profileMetricsLog) {
    if (!personData.profileMetrics.followersCount) return false
    personData.profileMetricsLog = [{
      date: '2024-06-12',
      followersCount: personData.profileMetrics.followersCount,
      followingCount: personData.profileMetrics.followingCount,
      tweetCount: personData.profileMetrics.tweetCount,
    }];
  }
  // first, ensure no entry for today exists to avoid duplication
  const today = new Date().toISOString().split('T')[0];
  const existingEntry = personData.profileMetricsLog.find(entry => entry.date === today);
  if (existingEntry) return false;
  // then, add a new entry with today's date
  personData.profileMetricsLog.push({
    date: today,
    followersCount: rawUserData.followers_count,
    followingCount: rawUserData.friends_count,
    tweetCount: rawUserData.statuses_count,
  });
  // Now, write and update
  fs.writeFileSync(filePath, JSON.stringify(personData, null, 2));
  console.log('Updated', filePath);
}

for (const file of peopleFiles) {
  if (file.endsWith('.json')) {
    console.log('Working on', file);
    try {
      const filePath = path.join(peopleDir, file);
      const personData = JSON.parse(fs.readFileSync(filePath, 'utf8'));
      const username = personData.username.substring(1);
      const rawUserData = await twitterApi.getUserInfo(username);
      // setCompleteUserData(filePath, personData, rawUserData);
      updateCurrentMetrics(filePath, personData, rawUserData);
    } catch (error) {
      console.error('Error updating', file, error);
    }
  }
}
