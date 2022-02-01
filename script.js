document.addEventListener('DOMContentLoaded',()=>{
    const menuBar = document.querySelector('.menu_bar');
    const navbar = document.querySelector('.navbar');

    window.onscroll = ()=>{
        menuBar.classList.remove('fa-times');
        navbar.classList.remove('active');
    }

    menuBar.addEventListener('click',()=>{
        menuBar.classList.toggle('fa-times');
        navbar.classList.toggle('active');
    });

    const scrollBtn = document.querySelector(".scrollToTop-btn");
    window.addEventListener("scroll", () => {
    scrollBtn.classList.toggle("active", window.scrollY > 100);
  });
  scrollBtn.addEventListener("click", () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  });







});