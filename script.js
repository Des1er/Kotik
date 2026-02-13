// Elements
const envelope = document.getElementById("envelope-container");
const letter = document.getElementById("letter-container");
const noBtn = document.querySelector(".no-btn");
const yesBtn = document.querySelector(".btn[alt='Yes']");

const title = document.getElementById("letter-title");
const catImg = document.getElementById("letter-cat");
const buttons = document.getElementById("letter-buttons");
const finalText = document.getElementById("final-text");

// Click Envelope

envelope.addEventListener("click", () => {
    envelope.style.display = "none";
    letter.style.display = "flex";

    setTimeout( () => {
        document.querySelector(".letter-window").classList.add("open");
    },50);
});

// Logic to move the NO btn

// noBtn.addEventListener("mouseover", () => {
//     const min = 200;
//     const max = 200;

//     const distance = Math.random() * (max - min) + min;
//     const angle = Math.random() * Math.PI * 2;

//     const moveX = Math.cos(angle) * distance;
//     const moveY = Math.sin(angle) * distance;

//     noBtn.style.transition = "transform 0.3s ease";
//     noBtn.style.transform = `translate(${moveX}px, ${moveY}px)`;
// });

// Logic to make YES btn to grow

let yesScale = 1;

yesBtn.style.transition = "transform 0.3s ease";

noBtn.addEventListener("click", () => {
    yesScale += 1.5; // Grow slightly slower on mobile to not fill screen instantly

    yesBtn.style.transform = `scale(${yesScale})`;
    
    // Optional: Move NO button away purely visually so it doesn't overlap
    // noBtn.style.transform = "translateX(100px)"; 
});

// YES is clicked

// YES is clicked
yesBtn.addEventListener("click", () => {
    title.textContent = " ";
    catImg.src = "cat_dance.gif";
    document.querySelector(".letter-window").classList.add("final");

    // Hide buttons properly
    buttons.style.display = "none";
    
    // Reset any transform on the Yes button so it doesn't interfere with layout
    yesBtn.style.transform = "scale(1)";

    finalText.style.display = "block";
});