import { loadVowels } from "./loadData.js";

const completeVowels = [];

window.addEventListener("DOMContentLoaded", () => {
  const vowelPagesContainer = document.querySelector(".pages");
  let pageNumber = 1; // Starting from 3 since 1 & 2 are already used

  loadVowels().then((vowels) => {
    completeVowels.push(...vowels);

    const firstVowel = completeVowels[0];
    console.log(firstVowel.image);
    const firstPage = document.getElementById("three_four_page");

    if (firstPage) {

      var alphabetPronounciation = document.getElementById(
        "alphabet_Pronounciation"
      );
      alphabetPronounciation.src = firstVowel.pronounciation;
     // alphabetPronounciation.play()
      document.getElementById("alphabetDisplay").innerHTML = firstVowel.alphabet;
    
      document.getElementById("imageDisplay").src = firstVowel.image;
    }
     

  });
});
