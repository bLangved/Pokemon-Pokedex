// Get current page based on body"s id
const currentPage = document.body.id;
// console.log('Active site: ' + currentPage + '.html');

// Find corresponding link for navigation
const activeLinks = document.querySelectorAll('.li_banner');
activeLinks.forEach(function (link) {
  if (link.querySelector('a').getAttribute('href') === currentPage + '.html') {
    link.classList.add('active-site');
  }
});
