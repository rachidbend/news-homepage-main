const openNav = document.querySelector('.mobile-menu--open');
const closeNav = document.querySelector('.mobile-menu--close');
const nav = document.querySelector('.nav');
const body = document.querySelector('body');

console.log(openNav);
console.log(closeNav);

openNav.addEventListener('click', e => {
  console.log('nav open');
  nav.classList.add('active');
  body.classList.add('nav-is-toggled');
});

closeNav.addEventListener('click', e => {
  console.log('nav close');
  nav.classList.remove('active');
  body.classList.remove('nav-is-toggled');
});
