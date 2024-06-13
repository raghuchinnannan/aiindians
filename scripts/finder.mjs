import fs from 'fs';
import path from 'path';

const PEOPLE_DIR = path.join('.', 'content/people');
const PROJECTS_DIR = path.join('.', 'content/projects');

function readJsonFile(filePath) {
  try {
    const data = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(data);
  } catch (err) {
    console.error(`Error reading file from disk: ${err}`);
    return null;
  }
}

function findPeopleWithFollowerRange(minFollowers, maxFollowers) {
  const peopleFiles = fs.readdirSync(PEOPLE_DIR);
  return peopleFiles.map(file => {
    const person = readJsonFile(path.join(PEOPLE_DIR, file));
    if (person && person.profileMetrics && person.profileMetrics.followersCount >= minFollowers && person.profileMetrics.followersCount <= maxFollowers) {
      return person;
    }
    return null;
  }).filter(person => person !== null);
}

function findProjectByUsername(username) {
  const projectFiles = fs.readdirSync(PROJECTS_DIR);
  for (const file of projectFiles) {
    const project = readJsonFile(path.join(PROJECTS_DIR, file));
    if (project && project.author && project.author.username === username) {
      return project;
    }
  }
  return null;
}

function logPeopleAndProjects(minFollowers, maxFollowers) {
  const people = findPeopleWithFollowerRange(minFollowers, maxFollowers);
  people.forEach(person => {
    const project = findProjectByUsername(person.username);
    if (project) {
      console.log({
        username: person.username,
        name: person.name,
        profileMetrics: person.profileMetrics,
        project: {
          description: project.description,
          url: project.url
        }
      });
    }
  });
}

// Example usage:
logPeopleAndProjects(200, 2000);
