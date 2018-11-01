import $ from 'jquery';

import projectData from '../data/projectsData';


const createProjectCards = (projects) => {
  let newString = '';

  for (let i = 0; i < projects.length; i + 1) {
    if (projects[i].available === true) {
      newString += '<div class="fullPage">';
      newString += `<h3>${projects[i].title}</h3>`;
      newString += `<img src="${projects[i].screenshot}"></>`;
      newString += `<p>${projects[i].description}</p>`;
      newString += `<p>${projects[i].technologiesUsed}</p>`;

      newString += `<a href=${projects[i].url}>Click here to go to this project's repository</a><br><br>`;
      newString += `<a href=${projects[i].githubUrl}>Click here to go to this project's repository</a><br><br>`;
      newString += '</div>';
    }
  }
  $('#projectsPage').html(newString);
};
//   projects.foreach((project) => {
//     if (project.available === true) {
//       newString += '<div class="fullPage">';
//       newString += `<h3>${project.title}</h3>`;
//       newString += `<img src="${project.screenshot}"></>`;
//       newString += `<p>${project.description}</p>`;
//       newString += `<p>${project.technologiesUsed}</p>`;

//       newString += `<a href=${project.url}>Click here to go
//  to this project's repository</a><br><br>`;
//       newString += `<a href=${project.githubUrl}>Click here to
//  go to this project's repository</a><br><br>`;
//       newString += '</div>';
//     }
//     $('#projectsPage').html(newString);
//   });
// };

const initializeProjectsView = () => {
  projectData.loadProjects().then((projects) => {
    createProjectCards(projects);
  }).catch((error) => {
    console.error(error);
  });
};

export default { initializeProjectsView };
