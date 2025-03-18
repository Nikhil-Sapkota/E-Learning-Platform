const indicationLine = document.querySelector('.Indication-line');

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  const documentHeight = document.documentElement.scrollHeight - window.innerHeight; // Total scrollable height

  // Calculate the percentage of scroll
  const scrollPercentage = (scrollY / documentHeight) * 100;

  // Map the scroll percentage to a color range
  const hue = (scrollPercentage * 7.2); // Adjust the multiplier to control the color range
  const saturation = 100;
  const lightness = 50;

  // Generate the HSL color string
  const newColor = `hsl(${hue}, ${saturation}%, ${lightness}%)`;

  // Apply the new color to the indication line
  indicationLine.style.background = newColor;
});


// password see feature
let password = document.querySelector("#Password");
let checkPassword = document.querySelector('#Show-Password')

checkPassword.addEventListener('click', () =>{
  if(checkPassword.checked){
    password.type = 'text'
  }
  else{
    password.type = 'password'
  }
})

// const changingSpan = document.querySelector('.heading span');
// const words = ["Learning Journey", "Certification", "Professionalism", "Creativeness"];
// let wordIndex = 0;

// function changeWord() {
//     changingSpan.textContent = ""; // Clear the span

//     const currentWord = words[wordIndex];
//     let charIndex = 0;

//     const typingInterval = setInterval(() => {
//         if (charIndex < currentWord.length) {
//             changingSpan.textContent += currentWord.charAt(charIndex);
//             charIndex++;
//         } else {
//             clearInterval(typingInterval); // Stop typing
//             setTimeout(() => {
//                 wordIndex = (wordIndex + 1) % words.length;
//                 changeWord(); // Call changeWord again after a delay
//             }, 2500); // Delay before next word
//         }
//     }, 50); // Typing speed (milliseconds per character)
// }

// changeWord(); // Initial call


const changingSpan = document.querySelector('.heading span');
const words = ["Learning Journey", "Certification", "Professionalism", "Creativeness"];
let wordIndex = 0;
let charIndex = 0;
let isTyping = true; // Flag to track typing/erasing

function typeOrErase() {
    const currentWord = words[wordIndex];

    if (isTyping) {
        if (charIndex < currentWord.length) {
            changingSpan.textContent += currentWord.charAt(charIndex);
            charIndex++;
            setTimeout(typeOrErase, 50); // Typing speed
        } else {
            isTyping = false; // Switch to erasing
            setTimeout(typeOrErase, 1000); // Delay before erasing
        }
    } else {
        if (charIndex > 0) {
            changingSpan.textContent = currentWord.substring(0, charIndex - 1);
            charIndex--;
            setTimeout(typeOrErase, 30); // Erasing speed
        } else {
            isTyping = true; // Switch to typing
            wordIndex = (wordIndex + 1) % words.length;
            setTimeout(typeOrErase, 500); // Delay before typing next word
        }
    }
}

typeOrErase(); // Start the animation