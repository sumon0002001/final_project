const titles = {
  '/bugs/new': 'Assign a task',
  '/projects': 'All Projects',
  '/bugs': 'All Tasks',
  '/more': 'Task Tracking App',
  '/signup': 'Sign Up',
};

const getNavTitle = route => titles[route];

export default getNavTitle;
