$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})

window.onscroll = () => {scrollNavbar()};

scrollNavbar = () => {
    // Target elements
    const navbar = document.getElementById("navbar");
    

  if (document.documentElement.scrollTop > 35) {
    navbar.classList.add("navbar-color");

  } else {
    navbar.classList.remove("navbar-color");
  }
}

/* Outra maneira mais simples de fazer, utilizando return e sem precisar do else
if (document.documentElement.scrollTop > 35) {
    navbar.classList.add("navbar-color");

    return
  } 
    navbar.classList.remove("navbar-color");
}
*/
