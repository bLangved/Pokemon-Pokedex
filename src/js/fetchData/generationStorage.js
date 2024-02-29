import { fetchGeneration } from './generation';

document.addEventListener('DOMContentLoaded', () => {
  const storedGenNumber = sessionStorage.getItem('pendingGenNumber');
  if (storedGenNumber) {
    fetchGeneration(storedGenNumber).then(() => {
      sessionStorage.removeItem('pendingGenNumber');
    });
  }
});
