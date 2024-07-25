document.querySelectorAll('.outlet-card').forEach(card => {
    card.querySelector('.get-direction').addEventListener('click', () => {
        gsap.to(window, {duration: 1, scrollTo: {y: "#map-section", offsetY: 70}});
    });
});