import { showVocabulary } from '../components/vocabulary';
import logoutButton from '../components/buttons/logoutButton';
import domBuilder from '../components/domBuilder';
import navBar from '../components/navBar';
import domEvents from '../events/domEvents';
import navigationEvents from '../events/navigationEvents';
import { getVocabulary } from '../helpers/data/data';

const startApp = () => {
  domBuilder(); // BUILD THE DOM
  domEvents(); // ADD THE EVENT LISTENTERS TO THE DOM
  navBar(); // DYNAMICALLY ADD THE NAV
  // Put all vocabulary on the DOM
  navBar(); // DYNAMICALLY ADD THE NAV
  logoutButton(); // ADD THE LOGOUT BUTTON COMPONENT
  navigationEvents(); // ATTACH THE EVENT LISTENERS TO THE NAVBAR
  // Put all vocabulary on the DOM
  getVocabulary().then((vocabulary) => showVocabulary(vocabulary));
};

export default startApp;
