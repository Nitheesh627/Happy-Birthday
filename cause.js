const reasons = [
    { text: "You’re such a kind and wonderful person. I feel lucky to share such a bond with you! 💖" },
    { text: "May your day be filled with love, laughter, and all the joy you bring to others. 🌸" },
    { text: "Wishing you massive success and everything your heart desires. ✨" },
    { text: "Stay exactly who you are—the world needs more of your positivity! 🥳" }
];

let index = 0;
const reasonText = document.getElementById('reason-text');
const nextBtn = document.getElementById('nextBtn');
const counterText = document.getElementById('counter');

// 1. Decorative Starfield
function createStars() {
    const container = document.querySelector('.stars-container');
    for (let i = 0; i < 100; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        const size = Math.random() * 2 + 1;
        star.style.width = size + 'px';
        star.style.height = size + 'px';
        star.style.left = Math.random() * 100 + 'vw';
        star.style.top = Math.random() * 100 + 'vh';
        star.style.setProperty('--duration', Math.random() * 3 + 2 + 's');
        container.appendChild(star);
    }
}

// 2. Floating Balloons
function createBalloon() {
    const balloon = document.createElement('div');
    balloon.className = 'balloon';
    const colors = ['#ff69b4', '#ff1493', '#ffd700', '#87ceeb'];
    const color = colors[Math.floor(Math.random() * colors.length)];
    balloon.innerHTML = `<div class="balloon-inner" style="background: ${color}"></div>`;
    balloon.style.left = Math.random() * 100 + 'vw';
    document.body.appendChild(balloon);

    gsap.to(balloon, {
        y: -window.innerHeight - 200,
        x: "+=" + (Math.random() * 100 - 50),
        duration: Math.random() * 5 + 8,
        ease: "none",
        onComplete: () => balloon.remove()
    });
}

// 3. 3D Tilt Interaction
document.addEventListener('mousemove', (e) => {
    gsap.to(".custom-cursor", { x: e.clientX, y: e.clientY, duration: 0.1 });
    const xAxis = (window.innerWidth / 2 - e.clientX) / 25;
    const yAxis = (window.innerHeight / 2 - e.clientY) / 25;
    document.querySelector('.glass-card').style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

// 4. Reason Switcher Logic
function handleNextReason() {
    if (index < reasons.length) {
        gsap.to(".reason-display", {
            opacity: 0,
            y: -20,
            duration: 0.3,
            onComplete: () => {
                reasonText.innerText = reasons[index].text;
                counterText.innerText = `Part ${index + 1} of ${reasons.length}`;
                gsap.to(".reason-display", { opacity: 1, y: 0, duration: 0.4 });
                index++;

                if (index === reasons.length) {
                    const btnSpan = nextBtn.querySelector('.btn-content');
                    btnSpan.innerText = "Enter Our Storylane 📸";
                    btnSpan.style.background = "linear-gradient(45deg, #00dbde, #fc00ff)";
                    nextBtn.onclick = () => window.location.href = 'last.html';
                }
            }
        });
        // Release some balloons on click!
        for(let i=0; i<5; i++) createBalloon();
    }
}

// Initialize
window.onload = () => {
    createStars();
    handleNextReason(); // Show first reason
    setInterval(createBalloon, 2000);
};

nextBtn.addEventListener('click', handleNextReason);