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

//links

const section = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('header .navbar a');

window.onscroll = ()=>{
  navbar.classList.remove('active');

  section.forEach(sec =>{

     let top = window.scrollY;
     let height = sec.offsetHeight;
     let offset = sec.offsetTop - 250;
     let id = sec.getAttribute('id');
 
     if(top >= offset && top < offset + height){
       navLinks.forEach(links =>{
         links.classList.remove('active');
         document.querySelector('.header .navbar a[href*='+id+']').classList.add('active');
       });
     };
 
   });
}


//services

class servicesCard{
  constructor(icon,title,discription,parentSelector, ...classes){
    this.icon = icon
    this.title = title
    this.discription = discription
    this.parent = document.querySelector(parentSelector)
    this.classes = classes
  }


    render(){
      const element = document.createElement('div');
      if(this.classes.length === 0){
        this.classes = 'card'
        element.classList.add(this.classes)
      }else{
        this.classes.forEach(className => element.classList.add(className))
      }
      element.innerHTML = `
      <div class="card">
        <div class="cardContent">
          <i class="${this.icon}"></i>
          <a href="#">${this.title}</a>
          <p>${this.discription}</p>
        </div>
      </div>`;
      this.parent.append(element)
    }


}
new servicesCard(
  'fab fa-dribbble',
  'lorem ipsum',
  'Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate',
  '.services .servicesCards'
).render();
new servicesCard(
  'fas fa-file-alt',
  'Sed ut perspiciatis',
  'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla',
  '.services .servicesCards'
).render();
new servicesCard(
  'fas fa-tachometer-alt',
  'Magni Dolores',
  'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim',
  '.services .servicesCards'
).render();
new servicesCard(
  'fas fa-globe-americas',
  'Nemo Enim',
  'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum',
  '.services .servicesCards'
).render();

//portfolio

// class portfolioCard{
//   constructor(set,img,parentSelector,...classes){
//     this.set= set
//     this.img = img
//     this.parent = document.querySelector(parentSelector)
//     this.classes = classes
//   }

//   render(){
//     const element = document.createElement('div');
//     if(this.classes.length === 0){
//       this.classes = 'portcard'
//       element.classList.add(this.classes)
//     }else{
//       this.classes.forEach(className => element.classList.add(className))
//     }
//     element.innerHTML = `
//     <div class="portcard ${this.set}">
//       <img src=${this.img} alt="">
//     </div>`;
//     this.parent.append(element)
//   }

// }

// new portfolioCard(
//   'app',
//   'img/portfolio/portfolio-1.jpg',
//   '.portfolio .portfolioCards'
// ).render();
// new portfolioCard(
//   'app',
//   'img/portfolio/portfolio-2.jpg',
//   '.portfolio .portfolioCards'
// ).render();
// new portfolioCard(
//   'app',
//   'img/portfolio/portfolio-3.jpg',
//   '.portfolio .portfolioCards'
// ).render();
// new portfolioCard(
//   'cards',
//   'img/portfolio/portfolio-4.jpg',
//   '.portfolio .portfolioCards'
// ).render();
// new portfolioCard(
//   'cards',
//   'img/portfolio/portfolio-5.jpg',
//   '.portfolio .portfolioCards'
// ).render();
// new portfolioCard(
//   'cards',
//   'img/portfolio/portfolio-6.jpg',
//   '.portfolio .portfolioCards'
// ).render();
// new portfolioCard(
//   'web',
//   'img/portfolio/portfolio-7.jpg',
//   '.portfolio .portfolioCards'
// ).render();
// new portfolioCard(
//   'web',
//   'img/portfolio/portfolio-8.jpg',
//   '.portfolio .portfolioCards'
// ).render();
// new portfolioCard(
//   'web',
//   'img/portfolio/portfolio-9.jpg',
//   '.portfolio .portfolioCards'
// ).render();


// //portfolio filter

// const btn = document.querySelectorAll('.filterItem')
// const product = document.querySelectorAll('.portcard');

// for(let i=0; i<btn.length;i++){
//   btn[i].addEventListener('click',(e)=>{
//     e.preventDefault();

//     const filter = e.target.dataset.filter;
//     console.log(filter);
//     product.forEach((prod)=>{
//       if(filter == "all"){
//           prod.style.display = "block";
//       }else{
//           if(prod.classList.contains(filter)){
//               prod.style.display = "block";
//           }else{
//               prod.style.display = "none";

//           }
//       }
//   })
    
//   })
// }


// portfolio filter 

const btn = document.querySelectorAll('.filterItem')
const product = document.querySelectorAll('.portcard');

for(let i=0; i<btn.length;i++){
  btn[i].addEventListener('click',(e)=>{
    e.preventDefault();

    const filter = e.target.dataset.filter;
    // console.log(filter);
    
    
    product.forEach((prod)=>{
        if(filter == "all"){
            prod.style.display = "block";
        }else{
            if(prod.classList.contains(filter)){
                prod.style.display = "block";
            }else{
                prod.style.display = "none";

            }
        }
    })

})}


//accordion

const accordion = document.querySelectorAll('.accordion');

accordion.forEach(acc => {
  acc.addEventListener('click', () => {
    const accordionText = acc.nextElementSibling
    if(accordionText.style.maxHeight) {
      accordionText.style.maxHeight = null
    }else{
      accordionText.style.maxHeight = accordionText.scrollHeight + 'px'
    }
  })
})

// clients slider


});