const elSiteThemaToggler = document.querySelector('.site-header-theme-toggler');


elSiteThemaToggler.addEventListener('click', function () {
     document.body.classList.toggle('dark-mode');
});
