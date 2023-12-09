document.addEventListener("DOMContentLoaded", function() {
    const elements = document.querySelectorAll('.grid-item, h2');
  
    function checkInView() {
        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementBottom = element.getBoundingClientRect().bottom;
            const windowHeight = window.innerHeight;

            if (elementTop < windowHeight && elementBottom >= 0) {
                element.classList.add('in-view');
            } else {
                element.classList.remove('in-view');
            }
        });
    }

    document.addEventListener('scroll', checkInView);
    window.addEventListener('resize', checkInView);
    checkInView();
});

document.addEventListener("DOMContentLoaded", function() {
    function typeWriter(text, i, fnCallback) {
        if (i < text.length) {
            document.getElementById("typed-text").innerHTML += text.charAt(i);
            i++;
            setTimeout(function() {
                typeWriter(text, i, fnCallback);
            }, 100); // Adjust the delay between characters (in milliseconds)
        } else if (typeof fnCallback == "function") {
            setTimeout(fnCallback, 1000); // Delay after typing
        }
    }

    // Start the typing animation on page load
    window.onload = function() {
        var text = document.getElementById("typed-text").innerHTML;
        document.getElementById("typed-text").innerHTML = "";
        typeWriter(text, 0, function() {
            // Additional callback after typing (if needed)
        });
    };
});