function typeWriter(text, i, isDeleting, fnCallback) {
    const speed = 200; // Adjust the speed of typing/deleting (in milliseconds)
    const displayText = document.getElementById("glow-paragraph");
  
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