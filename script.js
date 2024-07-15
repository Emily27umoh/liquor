
document.addEventListener("DOMContentLoaded", () => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        } else {
          entry.target.classList.remove('visible');
        }
      });
    });
  
    const elements = document.querySelectorAll('.scroll-animation');
    elements.forEach(element => {
      observer.observe(element);
    });
  });
  





  
  