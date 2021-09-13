import clearDom from '../helpers/data/clearDom';

const showVocabulary = (array) => {
  clearDom();

  document.querySelector('#add-button').innerHTML = '<button class="btn btn-success btn-lg mb-4" id="add-vocabulary-btn">Add A Vocabulary</button>';

  array.forEach((item) => {
    console.warn(item);
    document.querySelector('#store').innerHTML += `
      <div class="card">
        <div class="card-body" style="height: 180px;">
          <h5 class="card-title">${item.title}</h5>
          <p class="card-text">${item.definition}</p>
          <p class="card-text">${item.language}</p>
          <p class="card-text">${item.user_ID}</p>
            <hr>
            <i class="btn btn-success fas fa-eye" id="view-vocabulary-btn--${item.firebaseKey}"></i>
            <i id="edit-vocabulary-btn--${item.firebaseKey}" class="fas fa-edit btn btn-info"></i>
            <i id="delete-vocabulary--${item.firebaseKey}" class="btn btn-danger fas fa-trash-alt"></i>
        </div>
      </div>`;
  });
};

const emptyVocabulary = () => {
  document.querySelector('#store').innerHTML = '<h1>No Items</h1>';
};

export { showVocabulary, emptyVocabulary };
