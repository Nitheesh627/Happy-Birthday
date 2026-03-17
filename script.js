const stage = document.getElementById('theaterStage');
const curtainL = document.querySelector('.curtain-left');
const curtainR = document.querySelector('.curtain-right');
const prompt = document.querySelector('.stage-prompt');

// 1. Theater Reveal Logic
stage.addEventListener('click', () => {
    // Gather and Pull animation (the "Theater" effect)
    gsap.to(curtainL, { 
        x: '-100%', 
        scaleX: 0.5, 
        duration: 2, 
        ease: "power2.inOut" 
    });
    
    gsap.to(curtainR, { 
        x: '100%', 
        scaleX: 0.5, 
        duration: 2, 
        ease: "power2.inOut" 
    });

    gsap.to(prompt, { opacity: 0, duration: 0.5 });

    // Reveal the original page content
    setTimeout(() => {
        stage.style.display = 'none';
        revealOriginalContent();
    }, 1500);
});

// 2. Original Content Animations
function revealOriginalContent() {
    // Fade in Title
    gsap.to(".birthday-title", { opacity: 1, y: -20, duration: 1 });

    // Start Typewriter
    const text = "To the most special girl... today is your day! ✨";
    let i = 0;
    function type() {
        if (i < text.length) {
            document.getElementById("typewriter-text").innerHTML += text.charAt(i);
            i++;
            setTimeout(type, 50);
        } else {
            // Fade in Button after typing finishes
            gsap.to(".enter-btn", { opacity: 1, y: -10, duration: 1 });
        }
    }
    type();
}

// 3. Custom Cursor
document.addEventListener('mousemove', (e) => {
    gsap.to(".custom-cursor", { 
        x: e.clientX, 
        y: e.clientY, 
        duration: 0.1 
    });
});