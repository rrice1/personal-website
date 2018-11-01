import $ from 'jquery';

const loadProjects = () => {
  const projectPromise = new Promise((resolve, reject) => {
    $.get('http://localhost:3004/project')
      .done((data) => {
        resolve(data);
      })
      .fail((error) => {
        reject(error);
      });
  });

  return projectPromise;
};

export default { loadProjects };
