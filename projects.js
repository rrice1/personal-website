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
            
            newString +=    `<p>${projects.project[i].url}</p>`;
            newString +=    `<p>${projects.project[i].githubUrl}</p>`;
            newString += `</div>`;
            printToDom(newString, 'projectsPage')
            }
        }
        
        };

    createProjectCards();