const errorMessageContainer = document.querySelector('#errorMessageContainer');
const errorMessage = document.querySelector('#errorMessage');

function showError(message = 'There was an unexpected error') {
  errorMessageContainer.style.display = 'block';
  errorMessage.innerText = message;
}

export default showError;
