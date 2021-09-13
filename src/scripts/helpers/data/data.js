import axios from 'axios';
import firebaseConfig from '../../../api/apiKeys';
// API CALLS FOR vocabulary

const dbUrl = firebaseConfig.databaseURL;

// GET VOCABULARY
const getVocabulary = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/vocabulary.json`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

// DELETE vocabulary
const deleteVocabulary = (firebaseKey) => new Promise((resolve, reject) => {
  axios.delete(`${dbUrl}/vocabulary/${firebaseKey}.json`)
    .then(() => {
      getVocabulary().then(resolve);
    })
    .catch(reject);
});

// GET SINGLE VOCABULARY
const getSingleVocab = (firebaseKey) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/vocabulary/${firebaseKey}.json`)
    .then((response) => resolve(response.data))
    .catch(reject);
});

// CREATE VOCABULARY
const createVocabulary = (vocabularyObj) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/vocabulary.json`, vocabularyObj)
    .then((response) => {
      const body = { firebaseKey: response.data.name };
      axios.patch(`${dbUrl}/vocabulary/${response.data.name}.json`, body)
        .then(() => {
          getVocabulary().then(resolve);
        });
    }).catch((error) => reject(error));
});

// UPDATE VOCABULARY
const updateVocabulary = (vocabularyObj) => new Promise((resolve, reject) => {
  axios.patch(`${dbUrl}/vocabulary/${vocabularyObj.firebaseKey}.json`, vocabularyObj)
    .then(() => getVocabulary().then(resolve))
    .catch(reject);
});

export {
  getVocabulary,
  createVocabulary,
  deleteVocabulary,
  updateVocabulary,
  getSingleVocab
};
