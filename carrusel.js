document.addEventListener("DOMContentLoaded", function () {
    const slideContainer = document.querySelector(".carousel-slide");
    const images = document.querySelectorAll(".carousel-slide img");
  
    // Variables de control
    let currentIndex = 0;
    const slideInterval = 3000; // Intervalo de cambio de imagen (3 segundos)
  
    function nextSlide() {
      currentIndex = (currentIndex + 1) % images.length;
      updateSlidePosition();
    }
  
    function updateSlidePosition() {
      slideContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
    }
  
    // Iniciar el carrusel
    function startCarousel() {
      setInterval(nextSlide, slideInterval);
    }
  
    // Agregar evento click a las imágenes para detener el carrusel
    images.forEach((image) => {
      image.addEventListener("click", function () {
        clearInterval(slideIntervalId);
      });
    });
  
    startCarousel(); // Iniciar el carrusel al cargar la página
  });
  