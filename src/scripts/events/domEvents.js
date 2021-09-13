import addVocabulary from '../components/forms/addVocabulary';
import {
  createVocabulary, deleteVocabulary, getSingleVocab, updateVocabulary
} from '../helpers/data/data';
import { showVocabulary } from '../components/vocabulary';
import viewVocabulary from '../components/viewVocabulary';

const domEvents = () => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    // CLICK EVENT FOR DELETING A VOCABULARY
    if (e.target.id.includes('delete-vocabulary')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Want to delete?')) {
        const getKey = e.target.id.split('--');
        const [, b] = getKey;
        deleteVocabulary(b).then((vocabularyArray) => showVocabulary(vocabularyArray));
      }
    }

    // CLICK EVENT FOR SHOWING FORM FOR ADDING A VOCABULARY
    if (e.target.id.includes('add-vocabulary-btn')) {
      addVocabulary();
    }
    // CLICK EVENT FOR SUBMITTING FORM FOR ADDING A VOCABULARY
    if (e.target.id.includes('submit-vocabulary')) {
      e.preventDefault();
      const vocabularyObj = {
        title: document.querySelector('#title').value,
        definition: document.querySelector('#definition').value,
        user_ID: document.querySelector('#user_ID').value,
        language: document.querySelector('#language').value,

      };
      console.warn(vocabularyObj);
      createVocabulary(vocabularyObj).then((vocabularyArray) => showVocabulary(vocabularyArray));
    }

    // CLICK EVENT EDITING/UPDATING A VOCABULARY
    if (e.target.id.includes('edit-vocabulary-btn')) {
      const [, id] = e.target.id.split('--');

      getSingleVocab(id).then((vocabularyObj) => addVocabulary(vocabularyObj));
    }

    // CLICK EVENT FOR EDITING A VOCABULARY
    if (e.target.id.includes('update-vocabulary')) {
      e.preventDefault();
      const getKey = e.target.id.split('--');
      const [, firebaseKey] = getKey;
      const vocabularyObj = {
        title: document.querySelector('#title').value,
        definition: document.querySelector('#definition').value,
        user_ID: document.querySelector('#user-ID').value,
        language: document.querySelector('#language').value,
        firebaseKey
      };
      updateVocabulary(vocabularyObj).then(showVocabulary);
    }

    if (e.target.id.includes('view-vocabulary-btn')) {
      const [, firebaseKey] = e.target.id.split('--');

      getSingleVocab(firebaseKey).then(viewVocabulary);
    }
  });
};

export default domEvents;
