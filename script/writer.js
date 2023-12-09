function typeWriter(text, i, isDeleting, fnCallback) {
    const speed = 200; // Adjust the speed of typing/deleting (in milliseconds)
    const displayText = document.getElementById("typed-text");
  
    if (isDeleting) {
        displayText.innerHTML = text.substring(0, i - 1);
        i--;
    } else {
        displayText.innerHTML = text.substring(0, i + 1);
        i++;
    }

    if (!isDeleting && i === text.length + 1) {
        isDeleting = true;
    }

    if (isDeleting && i === 0) {
        isDeleting = false;
    }

    const delta = isDeleting ? speed / 2 : speed;

    setTimeout(function() {
        typeWriter(text, i, isDeleting, fnCallback);
    }, delta);

    if (i === 0 && !isDeleting && typeof fnCallback == "function") {
        setTimeout(fnCallback, 6000); // Delay after typing
    }
}

// Start the typing animation on page load
document.addEventListener("DOMContentLoaded", function() {
    const text = document.getElementById("typed-text").innerHTML;
    document.getElementById("typed-text").innerHTML = "";
    typeWriter(text, 0, false, function() {
        // Additional callback after typing (if needed)
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const paragraph = document.getElementById('glow-paragraph');

    function pulseEffect() {
        let fontWeight = window.getComputedStyle(paragraph).getPropertyValue('font-weight');
        fontWeight = (fontWeight === 'normal') ? 'bold' : 'normal';
        paragraph.style.fontWeight = fontWeight;
    }

    setInterval(pulseEffect, 500); // Adjust the time interval for the pulse effect (in milliseconds)
});