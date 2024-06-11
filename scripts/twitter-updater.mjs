/**
 * Get the latest information about each "person" in people folder
 * using official Twitter API
 *
 * Used to update following count, profile pictures, etc
 */
import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';
import { Client } from 'twitter.js';

dotenv.config();

const bearerToken = process.env.TWITTER_BEARER_TOKEN;

const client = new Client();
await client.loginWithBearerToken(bearerToken);

const peopleDir = path.join('.', 'content', 'people');
const peopleFiles = fs.readdirSync(peopleDir);

for (const file of peopleFiles) {
  if (file.endsWith('.json') && ['ybhrdwj.json'].includes(file)) {
    console.log('Working on', file);
    try {
      const filePath = path.join(peopleDir, file);
      const personData = JSON.parse(fs.readFileSync(filePath, 'utf8'));
      const username = personData.username.substring(1);
      const rawUserData = await client.users.fetchByUsername(username);
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
    } catch (error) {
      console.error('Error updating', file, error);
    }
  }
}

/**
Example Response:

User {
  id: '1253316035878375424',
  name: 'Shubham Parihar �',
  username: 'iShiibi',
  createdAt: 2020-04-23T13:33:39.000Z,
  description: 'Contributing to open-source � | Maintaining https://t.co/nPqK9JYgn1',
  entities: UserEntities {
    url: UserURLEntity {
      start: 0,
      end: 23,
      url: 'https://t.co/fFprmMN7BN',
      expandedURL: 'https://bio.link/shibi',
      displayURL: 'bio.link/shibi'
    },
    description: UserDescriptionEntity {
      urls: [Array],
      hashtags: [],
      mentions: [],
      cashtags: []
    }
  },
  location: 'Dehradun, India',
  pinnedTweetId: '1510671182432927749',
  profileImageURL: 'https://pbs.twimg.com/profile_images/1598289177250258944/JaMTGW7X_normal.jpg',
  protected: false,
  publicMetrics: UserPublicMetrics {
    followersCount: 18,
    followingCount: 115,
    tweetCount: 38,
    listedCount: 2
  },
  url: 'https://t.co/fFprmMN7BN',
  verified: false,
  withheld: null,
  pinnedTweet: SimplifiedTweet {
    id: '1510671182432927749',
    text: 'twitter.js v0.14.0 has been released �\n' +
      '\n' +
      `Learn how you can use twitter.js to automate the "What's Happening" on our brand new website: https://t.co/WXApusHqaI`,
    attachments: null,
    authorId: '1253316035878375424',
    contextAnnotations: [ [TweetContextAnnotation], [TweetContextAnnotation] ],
    conversationId: '1510671182432927749',
    createdAt: 2022-04-03T17:30:51.000Z,
    entities: TweetEntities {
      annotations: [Array],
      cashtags: [],
      hashtags: [],
      mentions: [],
      urls: [Array]
    },
    geo: null,
    inReplyToUserId: null,
    lang: 'en',
    nonPublicMetrics: null,
    organicMetrics: null,
    possiblySensitive: false,
    promotedMetrics: null,
    publicMetrics: TweetPublicMetrics {
      retweetCount: 1,
      replyCount: 0,
      likeCount: 1,
      quoteCount: 0
    },
    referencedTweets: [],
    replySettings: 'everyone',
    source: null,
    withheld: null
  }
}
*/