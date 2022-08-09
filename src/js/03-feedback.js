import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';
const feedbackFormData = {};

const refs = {
  form: document.querySelector('.feedback-form'),
  input: document.querySelector('.feedback-form input'),
  textarea: document.querySelector('.feedback-form textarea'),
};

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onFormInputs, 500));

populateFormInputs();

function onFormSubmit(e) {
  e.preventDefault();

  e.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}

function onFormInputs(e) {
  feedbackFormData[e.target.name] = e.target.value;
  console.log(feedbackFormData);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(feedbackFormData));
}

function populateFormInputs() {
  const savedData = localStorage.getItem(STORAGE_KEY);
  if (savedData) {
    const parsedData = JSON.parse(savedData);
    console.log(parsedData.email);
    refs.input.value = parsedData.email;
    refs.textarea.value = parsedData.message;
  }
}
