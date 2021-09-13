import clearDom from '../../helpers/data/clearDom';

const addVocabulary = (obj = {}) => {
  clearDom();
  document.querySelector('#form-container').innerHTML = `
      <form id="vocabulary-form" class="mb-4">
        <div class="form-group">
          <label for="title">vocabulary Title</label>
          <input type="text" class="form-control" id="title" aria-describedby="vocabularyTitle" placeholder="Enter vocabulary Title" value="${obj.title || ''}" required>
        </div>
        <div class="form-group">
        <label for="definition">definition</label>
        <textarea class="form-control" placeholder="vocabulary Definition" id="definition" style="height: 100px">${obj.definition || ''}</textarea>
      </div>
        <div class="form-group">
          <label for="user ID">User_ID</label>
          <input type="text" class="form-control" id="user_ID" placeholder="user ID" value="${obj.user_ID || ''}" required>
        </div>
        <div class="form-group" id="language">
        <label for="category">Language</label>
        <select class="form-control form-select" id="language" required>
          <option value="" disabled selected>${obj.language || 'Select A Language'}</option>
          <option value="css">CSS</option>
          <option value="javaScript">JavaScript</option>
          <option value="programming">programming</option>
          <option value="computer">computer</option>
        </select>
        </div>
        <button type="submit" 
          id="${obj.firebaseKey ? `update-vocabulary--${obj.firebaseKey}` : 'submit-vocabulary'}" class="btn btn-primary">Submit Vocabulary
        </button>
      </form>`;
};

export default addVocabulary;
