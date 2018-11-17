import $ from 'jquery';
// import loadProjects from '../data/projectsData';
import './projects.scss';


const createProjectCards = (projects) => {
  let newString = '';
  //   newString += '<div class="fullPage">';
  //   newString += `<h3>${projects.title}</h3>`;
  //   newString += `<img src="${projects.screenshot}"></>`;
  //   newString += `<p>${projects.description}</p>`;
  //   newString += `<p>${projects.technologiesUsed}</p>`;
  //   newString += `<a href=${projects.url}>Click here to go to this
  //  project's repository</a><br><br>`;
  //   newString += `<a href=${projects.githubUrl}>Click here to go
  // to this project's repository</a><br><br>`;
  //   newString += '</div>';
  //   return newString;
  // };
  projects.forEach((project) => {
    // if (project.available === true)
    newString += '<div class="fullPage">';
    newString += `<h3>${project.title}</h3>`;
    newString += `<img src="${project.screenshot}"></>`;
    newString += `<p>${project.description}</p>`;
    newString += `<p>${project.technologiesUsed}</p>`;

    newString += `<a href=${project.url}>Click here to go
 to this project's repository</a><br><br>`;
    newString += `<a href=${project.githubUrl}>Click here to
 go to this project's repository</a><br><br>`;
    newString += '</div>';
    $('#projectsPage').html(newString);
  });
};

// const initializeProjectsView = () => {
//   projectData.loadProjects().then((projects) => {
//     createProjectCards(projects);
//   }).catch((error) => {
//     console.error(error);
//   });
// };

// const initializeProjectsView = () => {
//   loadProjects()
//     .then((data) => {
//       createProjectCards(data.data);
//     })
//     .catch((error) => {
//       console.error({ error });
//     });
// };

export default createProjectCards;
