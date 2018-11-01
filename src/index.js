import 'jquery';
import 'bootstrap';


import './index.scss';

import events from './javascripts/helpers/events';
import projectView from './javascripts/components/projects';

const initializeApp = () => {
  events();
  projectView.initializeProjectsView();
};

initializeApp();
