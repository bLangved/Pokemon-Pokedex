const loading = document.querySelector('#loadingContainer');

// Function to show the loading animation
export function showLoadingAnimation() {
  loading.style.display = 'flex';
}
// Function to hide the loading animation
export function hideLoadingAnimation() {
  loading.style.display = 'none';
}
