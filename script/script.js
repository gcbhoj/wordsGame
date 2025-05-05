import { loadVowels } from "./loadData.js";

const completeVowels = [];

window.addEventListener("DOMContentLoaded", () => {
  const vowelPagesContainer = document.querySelector(".pages");
  let pageNumber = 1; // Starting from 3 since 1 & 2 are already used

  loadVowels().then((vowels) => {
    completeVowels.push(...vowels);

    const firstVowel = completeVowels[0];
    const firstPage = document.getElementById("three_four_page");

    if (firstPage) {
      var alphabetPronounciation = document.getElementById(
        "alphabet_Pronounciation"
      );
      alphabetPronounciation.src = firstVowel.pronounciation;
      alphabetPronounciation.play()
      document.getElementById("alphabetDisplay").innerHTML =
        firstVowel.alphabet;

      document.getElementById("imageDisplay").src = firstVowel.image;
    } else {
      document.getElementById("imageDisplay").src = " No Image Available";
      document.getElementById("alphabetDisplay").innerHTML =
        " No Alphabet Available";
      document.getElementById("alphabet_Pronounciation").src =
        " No Audio Available";
    }

    for (let i = 1; i < completeVowels.length; i++) {
      const vowels = completeVowels[i];
      const vowelsDisplay = document.createElement("div");
      vowelsDisplay.className = "page";
      vowelsDisplay.innerHTML = `
        <div class="page-side front" id="third_page">
    <img
      id="third_page_backgroud_image"
      src="https://raw.githubusercontent.com/gcbhoj/SBDatabase/main/images/dog/dog_1.jpg"
      alt="dog image"
    />

    <div class="third_page-head">
      <h3 id="alphabetDisplay">${vowels.alphabet}</h3>
      <span class="material-icons-outlined">hearing </span>
      <audio id="alphabet_Pronounciation" src="${
        vowels.pronounciation
      }"></audio>
      <img
        id="imageDisplay" src="${vowels.image}"  
        alt="${vowels.alphabet}"
      />
    </div>

    <div class="page-content">first page for contents</div>

    <div class="page-footer">
      <span>May 2025</span>
      <span class="pg-no">"${i + 1}"</span>
    </div>
  </div>
      `;

      vowelPagesContainer.appendChild(vowelsDisplay);
    }
  });
});
