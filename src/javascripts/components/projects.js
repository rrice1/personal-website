import $ from 'jquery';

import projectData from '../data/projectsData';


const createProjectCards = (projects) => {
  let newString = '';

  for (let i = 0; i < projects.project.length; i + 1) {
    if (projects.project[i].available === true) {
      newString += '<div class="fullPage">';
      newString += `<h3>${projects.project[i].title}</h3>`;
      newString += `<img src="${projects.project[i].screenshot}"></>`;
      newString += `<p>${projects.project[i].description}</p>`;
      newString += `<p>${projects.project[i].technologiesUsed}</p>`;

      newString += `<a href=${projects.project[i].url}>Click here to go to this project's repository</a><br><br>`;
      newString += `<a href=${projects.project[i].githubUrl}>Click here to go to this project's repository</a><br><br>`;
      newString += '</div>';
    }
  }
  $('#projectsPage').html(newString);
};


const initializeProjectsView = () => {
  projectData.loadProjects().then((projects) => {
    createProjectCards(projects);
    console.log(projects);
  }).catch((error) => {
    console.error(error);
  });
};

export default { initializeProjectsView };
