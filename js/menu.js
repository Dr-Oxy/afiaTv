//Select Menu Elements
const hamburgerMenu = document.querySelector('.mobile-menu');
const nav = document.querySelector('nav');
const navLinks = document.querySelectorAll('.nav-items a');
const navItems = document.querySelectorAll('.nav-items');

//Toggle menu open and close
const ToggleNav = () => {
  hamburgerMenu.classList.toggle('active');
  nav.classList.toggle('active');
};

hamburgerMenu.addEventListener('click', ToggleNav);

// Menu closes after when a link is clicked
const closeMenu = () => {
  hamburgerMenu.classList.remove('active');
  nav.classList.remove('active');
};

navLinks.forEach((navLink) => navLink.addEventListener('click', closeMenu));

//adding active state to lis after being clicked
navItems.forEach((navItem) =>
  navItem.addEventListener('click', function () {
    let current = document.getElementsByClassName('activeState');

    if (current.length > 0) {
      current[0].className = current[0].className.replace(' activeState', '');
    }
    this.classList.add('activeState');
  }),
);
