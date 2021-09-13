import clearDom from '../helpers/data/clearDom';

const viewVocabulary = (obj) => {
  clearDom();

  document.querySelector('#view').innerHTML += `
  <div class="mt-5 d-flex flex-wrap">
   <div class="d-flex flex-column">
     <div class="mt-5">
       <i id="edit-vocabulary-btn--${obj.firebaseKey}" class="fas fa-edit btn btn-info"></i>
       <i id="delete-vocabulary--${obj.firebaseKey}" class="btn btn-danger fas fa-trash-alt"></i>
     </div>
   </div>
   <div class="text-white ms-5 details">
     <h5>${obj.title} by ${obj.user_ID}</h5>
     <p>${obj.definition || ''}</p>
     <p>${obj.language || ''}</p>
     <hr>  
      </div>
    </div>`;
};

export default viewVocabulary;
