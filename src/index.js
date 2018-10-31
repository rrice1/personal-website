import $ from 'jquery';
import 'bootstrap';


import './index.scss';




let projects = {
    project : [
   {
    title: "Cool Project", 
    screenshot: "http://gotoflashgames.com/files/file/033.jpg", 
    description: "This is the best project", // A good project description includes 'the what', 'the why', and 'the how'.
    technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
    available: true,
    url: "https://github.com/nss-evening-cohort-8/js-part-deux", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
    githubUrl: "https://github.com/nss-evening-cohort-8/js-part-deux"
  },
  {
    title: "Cooler Project", 
    screenshot: "http://gotoflashgames.com/files/file/033.jpg", 
    description: "I thought that was the best project, but it turns out that this is the best project", // A good project description includes 'the what', 'the why', and 'the how'.
    technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
    available: true,
    url: "https://github.com/nss-evening-cohort-8/js-part-deux", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
    githubUrl: "https://github.com/nss-evening-cohort-8/js-part-deux"
  },
  {
    title: "Coolest Project", 
    screenshot: "http://gotoflashgames.com/files/file/033.jpg", 
    description: "I was wrong yet again. This is the best project", // A good project description includes 'the what', 'the why', and 'the how'.
    technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
    available: true,
    url: "https://github.com/nss-evening-cohort-8/js-part-deux", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
    githubUrl: "https://github.com/nss-evening-cohort-8/js-part-deux"
  }
]
};



const printToDom = (stringToPrint, divId) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = stringToPrint;
    };


    const createProjectCards = () => {
        let newString = '';

        for(let i=0; i<projects.project.length;i++){
            if(projects.project[i].available===true){
            newString += `<div class="fullPage">`;
            newString +=    `<h3>${projects.project[i].title}</h3>`;
            newString +=    `<img src="${projects.project[i].screenshot}"></>`;
            newString +=    `<p>${projects.project[i].description}</p>`;
            newString +=    `<p>${projects.project[i].technologiesUsed}</p>`;
            
            newString +=    `<a href=${projects.project[i].url}>Click here to go to this project's repository</a><br><br>`;
            newString +=    `<a href=${projects.project[i].githubUrl}>Click here to go to this project's repository</a><br><br>`;
            newString += `</div>`;
            printToDom(newString, 'projectsPage')
            }
        }
        
        };

    const home = () => {
      document.getElementById('home').addEventListener('click',()=>{
        var e = document.getElementById('home');//same thing
        e.addEventListener('click',function(){location.reload()})
      })
    }

    const hideNonBioStuff = () => {
document.getElementById('navToBio').addEventListener('click', () => {
  var e = document.getElementById('navToBio');//same thing
  e.addEventListener('click',function(){location.reload()})
  document.getElementById('technologiesPage').style.display = 'none';
  document.getElementById('projectsPage').style.display = 'none';
})
    }


    const hideNonTechStuff = () => {
      document.getElementById('navToTechnologies').addEventListener('click', () => {
        var e = document.getElementById('navToTechnologies');//same thing
        e.addEventListener('click',function(){location.reload()})
        document.getElementById('bioPage').style.display = 'none';
        document.getElementById('projectsPage').style.display = 'none';
      })
          }


          const hideNonProjectStuff = () => {
            document.getElementById('navToProjects').addEventListener('click', () => {
              // "window.location.href=window.location.href" 
    const e = document.getElementById('navToProjects');// same thing
    e.addEventListener('click',function(){location.reload()})
    document.getElementById('technologiesPage').style.display = 'none';
    document.getElementById('bioPage').style.display = 'none';
  });
};
hideNonTechStuff();
hideNonBioStuff();
hideNonProjectStuff();
createProjectCards();
