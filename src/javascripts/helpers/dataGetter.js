import axios from 'axios';

import apiKeys from '../../../db/apiKeys';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getAllProjectsFromDb = () => new Promise((resolve, reject) => {
  axios
    .get(`${baseUrl}/project.json`)
    .then((result) => {
      const allProjectsObject = result.data;
      const allProjectsArray = [];
      if (allProjectsObject != null) {
        Object.keys(allProjectsObject).forEach((ProjectId) => {
          const newProject = allProjectsObject[ProjectId];
          newProject.id = ProjectId;
          allProjectsArray.push(newProject);
        });
      }
      resolve(allProjectsArray);
    })
    .catch((err) => {
      reject(err);
    });
});

export default getAllProjectsFromDb;
