
function confetti(){

for(let i=0;i<100;i++){

let c=document.createElement("div");

c.style.position="fixed";

c.style.width="8px";

c.style.height="8px";

c.style.background=`hsl(${Math.random()*360},100%,50%)`;

c.style.left=Math.random()*100+"vw";

c.style.top="-10px";

document.body.appendChild(c);

c.animate(
[
{transform:"translateY(0)"},
{transform:"translateY(100vh)"}
],
{
duration:3000
}
);

}

alert("Happy Birthday 🎂");

}

