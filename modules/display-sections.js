export const addClassDisplay = (input) => {
  switch (input) {
    case 'list':
      document.getElementById('listContainer').style.display = '';
      document.getElementById('formContainer').style.display = 'none';
      document.getElementById('contactContainer').style.display = 'none';

      document.getElementById('nav-list').classList.add('active');
      document.getElementById('nav-new').classList.remove('active');
      document.getElementById('nav-contact').classList.remove('active');
      break;

    case 'addNew':
      document.getElementById('listContainer').style.display = 'none';
      document.getElementById('formContainer').style.display = '';
      document.getElementById('contactContainer').style.display = 'none';

      document.getElementById('nav-list').classList.remove('active');
      document.getElementById('nav-new').classList.add('active');
      document.getElementById('nav-contact').classList.remove('active');
      break;

    case 'contact':
      document.getElementById('listContainer').style.display = 'none';
      document.getElementById('formContainer').style.display = 'none';
      document.getElementById('contactContainer').style.display = '';

      document.getElementById('nav-list').classList.remove('active');
      document.getElementById('nav-new').classList.remove('active');
      document.getElementById('nav-contact').classList.add('active');
      break;

    default:
      break;
  }
};

export { addClassDisplay as default };