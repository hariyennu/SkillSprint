document.addEventListener("DOMContentLoaded", () => {
  const words = ["Skills", "Vision", "Journey", "Mind", "Future"];
  const colors = ["#facc15", "#34d399", "#60a5fa", "#f472b6", "#f87171"];

  let i = 0;
  let charIndex = 0;
  let isDeleting = false;

  const changingWord = document.getElementById("changingWord");

  function typeEffect() {
    const word = words[i];
    const color = colors[i];
    changingWord.style.color = color;

    if (isDeleting) {
      charIndex--;
    } else {
      charIndex++;
    }

    changingWord.textContent = word.substring(0, charIndex);

    let delay = isDeleting ? 60 : 120;

    if (!isDeleting && charIndex === word.length) {
      delay = 1500;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      i = (i + 1) % words.length;
      delay = 500;
    }

    setTimeout(typeEffect, delay);
  }

  typeEffect();
});
