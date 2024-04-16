
$('.customer-logos').slick({
    centerMode: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    centerPadding: '60px',
    autoplaySpeed: 2000,
    autoplay: true,
    responsive: [
        {
            breakpoint: 1200,
            settings: {
              arrows: true,
              centerMode: false,
              centerPadding: '40px',
              slidesToShow: 4
            }
          },
      {
        breakpoint: 1000,
        settings: {
          arrows: true,
          centerMode: false,
          centerPadding: '40px',
          slidesToShow: 4
        }
      },
      {
        breakpoint: 800,
        settings: {
          arrows: true,
          centerMode: false,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
    {
      breakpoint: 650,
      settings: {
        arrows: true,
        centerMode: false,
        centerPadding: '40px',
        slidesToShow: 2
      }
    },
      {
        breakpoint: 400,
        settings: {
          arrows: true,
          centerMode: false,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });


let toggleButton = document.querySelector('.toggle-menu');
let navBar = document.querySelector('.nav-bar');
toggleButton.addEventListener('click', function () {
	navBar.classList.toggle('toggle');
});

let navItem = document.querySelector('.nav-list-item-button')
navItem.addEventListener('click', function () {
navBar.classList.remove('toggle');
});


  const header = document.querySelector('.fixed-header');
  const logo = document.querySelector('.logo-img');

  
  window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY;

    if (scrollPosition > 100) {
      header.classList.add('scrolled');
      logo.classList.add('scrolled')
    } else {
      header.classList.remove('scrolled');
      logo.classList.remove('scrolled')   
    }
  });

  // document.addEventListener('DOMContentLoaded', function() {
  //   const form = document.getElementById('form-req');
  
  //   // Проверяем, существует ли форма на странице
  //   if (form) {
  //     const orderButtons = document.querySelectorAll('.button');
  //     const orderButton = document.querySelectorAll('.button-order');
  //     // Получаем координаты верхней грани формы и вычитаем 100 пикселей
  //     const formTop = form.offsetTop - 300;

  //     orderButton.forEach(function(button) {
  //       button.addEventListener('click', function() {
  //         window.scrollTo({
  //           top: formTop,
  //           behavior: 'smooth'
  //         });
  //       });
  //     });

  //     orderButtons.forEach(function(button) {
  //       button.addEventListener('click', function() {
  //         window.scrollTo({
  //           top: formTop,
  //           behavior: 'smooth'
  //         });
  //       });
  //     });
  //   }
  // })



  