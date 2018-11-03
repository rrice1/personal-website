import axios from 'axios';

const loadProjects = () => axios.get('http://localhost:3004/project');

export default loadProjects;
