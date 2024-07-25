document.addEventListener('DOMContentLoaded', () => {
    const decorations = document.querySelectorAll('.gif-decorations img.decoration');

    decorations.forEach(decoration => {
        // Apply a random vertical movement to each decoration
        const duration = Math.random() * 10 + 5; // Random duration between 5 and 15 seconds
        const distance = Math.random() * 50 - 25; // Random distance between -25px and 25px

        decoration.style.animation = `moveDecoration ${duration}s infinite alternate ease-in-out`;
        decoration.style.transform = `translateY(${distance}px)`;

        // Ensure the GIF is muted
        decoration.muted = true;
    });

    // Add the keyframes style to the document
    const styleSheet = document.styleSheets[0];
    const keyframes =
        `@keyframes moveDecoration {
            0% { transform: translateY(0); }
            100% { transform: translateY(1); }
        }`;
    styleSheet.insertRule(keyframes, styleSheet.cssRules.length);
});

