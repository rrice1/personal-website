import 'jquery';
import 'bootstrap';
import firebase from 'firebase/app';
import './index.scss';

import apiKeys from '../db/apiKeys.json';

import events from './javascripts/helpers/events';
import createProjectCards from './javascripts/components/projects';
import getAllProjectsFromDb from './javascripts/helpers/dataGetter';

const getAndPrintAllProjects = () => {
  getAllProjectsFromDb()
    .then((allProjectsArray) => {
      $('#projectsPage').html(createProjectCards(allProjectsArray));
    })
    .catch((error) => {
      console.error('Error in getting projects', error);
    });
};

const initializeApp = () => {
  firebase.initializeApp(apiKeys.firebaseKeys);
  events.setEvents();
  getAndPrintAllProjects();
};

initializeApp();
