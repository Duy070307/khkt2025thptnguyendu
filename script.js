document.addEventListener('DOMContentLoaded', () => {
    const toolsSection = document.querySelector('#tools');
    const prevButton = document.querySelector('#prev-slide');
    const nextButton = document.querySelector('#next-slide');

    prevButton.addEventListener('click', () => {
        // Logic to handle the previous slide
        console.log('Previous Slide');
    });

    nextButton.addEventListener('click', () => {
        // Logic to handle the next slide
        console.log('Next Slide');
    });

    // Example to show/hide tools section
    document.querySelector('nav ul li a[href="#tools"]').addEventListener('click', (event) => {
        event.preventDefault();
        toolsSection.classList.toggle('hidden');
    });
});
