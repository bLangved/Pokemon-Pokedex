const cardContainer = document.querySelector('#cardContainer');

function clearCardContainer() {
  while (cardContainer.firstChild) {
    cardContainer.removeChild(cardContainer.firstChild);
  }
}
export default clearCardContainer;
