/**
 * @description Changes Light/dark theme on website
 */
export function systemTheme() {
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const navbar = document.querySelector('.navbar');
  const offcanvas = document.querySelector('.offcanvas');
  const btnClose = document.querySelector('.offcanvas .btn-close');
  const apiLink = document.querySelector('.offcanvas-end .link');

  btnClose.classList.remove('btn-close-white', 'btn-close-dark');
  apiLink.classList.remove('link-dark', 'link-light');
  if (prefersDark) {
    navbar.classList.remove('navbar-dark', 'bg-dark');
    navbar.classList.add('navbar-light', 'bg-light');
    offcanvas.classList.remove('text-bg-dark');
    offcanvas.classList.add('text-bg-light');
    btnClose.classList.remove('btn-close-white');
    btnClose.classList.add('btn-close-dark');
    apiLink.classList.add('link-dark');
  } else {
    navbar.classList.remove('navbar-light', 'bg-light');
    navbar.classList.add('navbar-dark', 'bg-dark');
    offcanvas.classList.remove('text-bg-light');
    offcanvas.classList.add('text-bg-dark');
    btnClose.classList.add('btn-close-white');
    apiLink.classList.add('link-light');
  }
}

const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
const lightModeMediaQuery = window.matchMedia('(prefers-color-scheme: light)');

darkModeMediaQuery.addEventListener('change', systemTheme);
lightModeMediaQuery.addEventListener('change', systemTheme);
