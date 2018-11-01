import $ from 'jquery';


const home = () => {
  $('#home').addEventListener('click', () => {
    const e = document.getElementById('home');// same thing
    e.addEventListener('click', () => { window.location.reload(); });
  });
};

const hideNonBioStuff = () => {
  document.getElementById('navToBio').addEventListener('click', () => {
    const e = document.getElementById('navToBio');// same thing
    e.addEventListener('click', () => { window.location.reload(); });
    document.getElementById('technologiesPage').style.display = 'none';
    document.getElementById('projectsPage').style.display = 'none';
  });
};


const hideNonTechStuff = () => {
  document.getElementById('navToTechnologies').addEventListener('click', () => {
    const e = document.getElementById('navToTechnologies');// same thing
    e.addEventListener('click', () => { window.location.reload(); });
    document.getElementById('bioPage').style.display = 'none';
    document.getElementById('projectsPage').style.display = 'none';
  });
};


const hideNonProjectStuff = () => {
  document.getElementById('navToProjects').addEventListener('click', () => {
    // "window.location.href=window.location.href"
    const e = document.getElementById('navToProjects');// same thing
    e.addEventListener('click', () => { window.location.reload(); });
    document.getElementById('technologiesPage').style.display = 'none';
    document.getElementById('bioPage').style.display = 'none';
  });
};


const setEvents = () => {
  hideNonTechStuff();
  hideNonBioStuff();
  hideNonProjectStuff();
  home();
};

export default { setEvents };
