
 document.querySelectorAll('.nav-item').forEach(item => {
  item.addEventListener('click', function() {
    const target = this.getAttribute('data-target');
    document.getElementById(target).scrollIntoView({ behavior: 'smooth' });
  });
});
 
 
 const hamburger = document.getElementsByClassName('hamburger');
  const navMenu = document.getElementsByTagName('nav');

  hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');// toggle the active class on the navigation menu
  });

