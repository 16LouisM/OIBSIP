// Simple JavaScript for additional interactivity

document.addEventListener('DOMContentLoaded', function() {
    // Add click event to gallery images
    const galleryImages = document.querySelectorAll('.gallery-img');
    
    galleryImages.forEach(img => {
        img.addEventListener('click', function() {
            alert('Paul Walker had a passion for fast cars both on and off screen.');
        });
    });
    
    // Add smooth scroll to internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
    
    // Add current year to footer
    const currentYear = new Date().getFullYear();
    const footer = document.querySelector('footer');
    const yearElement = document.createElement('p');
    yearElement.textContent = `© ${currentYear} Mashele Technologies`;
    yearElement.style.marginTop = '10px';
    yearElement.style.fontSize = '0.9rem';
    footer.appendChild(yearElement);
    
    // Console tribute message
    console.log('%c In memory of Paul Walker (1973-2013)', 'color: #e63946; font-size: 16px; font-weight: bold;');
    console.log('%c "If one day the speed kills me, do not cry because I was smiling."', 'color: #1d3557; font-size: 14px;');
});