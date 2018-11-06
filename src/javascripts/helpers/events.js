import $ from 'jquery';


const home = () => {
  $('#home').click(() => {
    const e = document.getElementById('home');// same thing
    e.addEventListener('click', () => { window.location.reload(); });
  });
};

const hideNonBioStuff = () => {
  $('#navToBio').click(() => {
    $('#bioPage').show();
    $('#projectsPage').hide();
    $('#technologiesPage').hide();
  });
};


// const hideNonTechStuff = () => {
//   $('#navToTechnologies').click(() => {
//     const e = document.getElementById('navToTechnologies');// same thing
//     e.addEventListener('click', () => { window.location.reload(); });
//     document.getElementById('bioPage').style.display = 'none';
//     document.getElementById('projectsPage').style.display = 'none';
//   });
// };

const hideNonTechStuff = () => {
  $('#navToTechnologies').click(() => {
    $('#bioPage').hide();
    $('#projectsPage').hide();
    $('#technologiesPage').show();
  });
};


const hideNonProjectStuff = () => {
  $('#navToProjects').click(() => {
    $('#bioPage').hide();
    $('#projectsPage').show();
    $('#technologiesPage').hide();
  });
};

// for(let i=0; i<famousPeople.length;i++){
//   document.getElementById(`s${[i]}`).addEventListener('click',(e)=>{
//       // for if class=selected then classlist.toggle('unselected')
//       for(let i=0; i<famousPeople.length;i++){
//           if(document.getElementById(`s${[i]}`).classList.contains('selected')){
//               // document.getElementsByClassName('selected').classList.toggle('selected')
//               document.getElementById(`s${[i]}`).classList.toggle('selected')

//           }
//       }

const setEvents = () => {
  hideNonTechStuff();
  hideNonBioStuff();
  hideNonProjectStuff();
  home();
};

export default { setEvents };
