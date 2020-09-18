// hamburger menu
const toggle = document.querySelector('.toggle');
const backdrop = document.querySelector('.backdrop');
const navMobile = document.getElementById("navtoggle");
const navLink = document.querySelectorAll('#nav-link');


// gallery
const modal = document.querySelector('.modal');
const preview = document.querySelectorAll('.gallery img');
const original = document.querySelector('.full-img');
const caption = document.querySelector('.caption');

const float = document.querySelector(".float");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    float.classList.add("active");
  } else {
    float.classList.remove("active");
  }
})

toggle.addEventListener("click", () => {
  if(navMobile.classList.contains('active')){
    navMobile.classList.remove('active');
    backdrop.classList.remove('show');
  }
  else if(navMobile.classList.contains('nav-mobile')){
    navMobile.classList.add('active');
    backdrop.classList.add('show');
  }
})



// navLink.addEventListener("click", () => {
//   if(navMobile.classList.contains('active')){
//     navMobile.classList.remove('active');
//     backdrop.classList.remove('show');
//   }
// })

// navlink.addEventListener('click', (e) => {
//   console.log(e.target);
// })

// navMobile.addEventListener('click', () => {
//   if(navMobile.classList.contains('active')){
//     navMobile.classList.remove('active')
//   }
// })

backdrop.addEventListener('click', () => {
  navMobile.classList.remove('active');
  backdrop.classList.remove('show');
})

preview.forEach(preview => {
  preview.addEventListener('click', () =>{
    modal.classList.add("open");
    original.classList.add('open')
    // dynamic content
    const originalSrc = preview.getAttribute("data-original");
    original.src = `./img/${originalSrc}`;
    const altText =preview.alt;
    caption.textContent = altText;
  })
})

modal.addEventListener("click", (e) => {
  if(e.target.classList.contains('modal')){
    modal.classList.remove("open")
  }
})

// for (var i = 0 ; i < navLink.length; i++) {
//   navLink.addEventListener('click' , () => {
//     if(navMobile.classList.contains('active')){
//            navMobile.classList.remove('active')
//            backdrop.classList.remove('show')
//          }
//   }); 
// }