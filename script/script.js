import { loadVowels, loadData } from "./loadData.js";

const completeVowels = [];
const completeData = [];
const wordsArray = [];
let orderedWordsByVowels = [];
const groupedWordsByVowels = {};

window.addEventListener("load", function () {
  const vowelPagesContainer = document.querySelector(".pages");
  //loading all vowels
  loadVowels().then((vowels) => {
    completeVowels.push(...vowels);
    // reading the first vowel
    const firstVowel = completeVowels[0];
    const firstPage = document.getElementById("three_four_page");
    // updating the first vowel to the flipbook
    if (firstPage) {
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
    // updating the flipbook with rest of the vowels
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
  //loading data for words
  loadData().then((data) => {
    completeData.push(...data);
    console.log("Complete Data", completeData);
    completeData.forEach((category) => {
      category.types.forEach((type) => {
        if (type.starting_alphabet === "अ") {
          wordsArray.push({
            name: type.common_name,
            pronounciation: type.pronounciation,
            nameSplit: type.common_name_split,
            image: type.images,
          });
        } else if (type.other_names?.name_one_split?.first_letter === "अ") {
          wordsArray.push({
            name: type.other_names.name_one,
            pronounciation: type.name_one_pronounciation,
            nameSplit: type.name_one_split,
            image: type.images,
          });
        } else if (type.other_names?.name_two_split?.first_letter === "अ") {
          wordsArray.push({
            name: type.other_names.name_two,
            pronounciation: type.name_two_pronounciation,
            nameSplit: type.name_two_split,
            image: type.images,
          });
        } else if (type.other_names?.name_three_split?.first_letter === "अ") {
          console.log("Name 3", type.other_names.name_three);
          wordsArray.push({
            name: type.other_names.name_three,
            pronounciation: type.name_three_pronounciation,
            nameSplit: type.name_three_split,
            image: type.images,
          });
        } else if (type.opposite_gender_split?.first_letter === "अ") {
          console.log("Opposite Gender", type.other_names.name_three);
          wordsArray.push({
            name: type.opposite_gender,
            pronounciation: type.opposite_gender_pronounciation,
            nameSplit: type.opposite_gender_split,
            image: type.images,
          });
        } else if (type.wild_name_split?.first_letter === "अ") {
          console.log("Opposite Gender", type.wild_name);
          wordsArray.push({
            name: type.wild_name,
            pronounciation: type.wild_name_pronounciation,
            nameSplit: type.wild_name_split,
            image: type.images,
          });
        }
      });
    });
    console.log("Words Array", wordsArray);

    // working with arranging data with vowels

    completeVowels.forEach((element) => {
      var vowelAlphabet = element.alphabet;
      // console.log("Alphabet", vowelAlphabet);

      if (!groupedWordsByVowels[vowelAlphabet]) {
        groupedWordsByVowels[vowelAlphabet] = [];
      }

      completeData.forEach((category) => {
        category.types.forEach((type) => {
          if (type.starting_alphabet === vowelAlphabet) {
            groupedWordsByVowels[vowelAlphabet].push({
              name: type.common_name,
              pronounciation: type.pronounciation,
              nameSplit: type.common_name_split,
              image: type.images,
            });
          } else if (
            type.other_names?.name_one_split?.first_letter === vowelAlphabet
          ) {
            groupedWordsByVowels[vowelAlphabet].push({
              name: type.other_names.name_one,
              pronounciation: type.other_names.name_one_pronounciation,
              nameSplit: type.name_one_split,
              image: type.images,
            });
          } else if (
            type.other_names?.name_two_split?.first_letter === vowelAlphabet
          ) {
            groupedWordsByVowels[vowelAlphabet].push({
              name: type.other_names.name_two,
              pronounciation: type.other_names.name_two_pronounciation,
              nameSplit: type.name_two_split,
              image: type.images,
            });
          } else if (
            type.other_names?.name_three_split?.first_letter === vowelAlphabet
          ) {
            groupedWordsByVowels[vowelAlphabet].push({
              name: type.other_names.name_three,
              pronounciation: type.other_names.name_three_pronounciation,
              nameSplit: type.name_three_split,
              image: type.images,
            });
          } else if (
            type.opposite_gender_split?.first_letter === vowelAlphabet
          ) {
            groupedWordsByVowels[vowelAlphabet].push({
              name: type.opposite_gender,
              pronounciation: type.opposite_gender_pronounciation,
              nameSplit: type.opposite_gender_split,
              image: type.images,
            });
          } else if (type.wild_name_split?.first_letter === vowelAlphabet) {
            groupedWordsByVowels[vowelAlphabet].push({
              name: type.wild_name,
              pronounciation: type.wild_name_pronounciation,
              nameSplit: type.wild_name_split,
              image: type.images,
            });
          }
        });
      });
    });
  });

  console.log("Ordered Words", groupedWordsByVowels);

  window.addEventListener("click", (e) => {
    const buttonId = e.target.id;

    if (buttonId === "playVowelPronounciation") {
      const audioSrc = completeVowels[0].pronounciation;
      playAudio(audioSrc);
    }
  });

  function playAudio(src) {
    const audio = new Audio(src);
    audio.play().catch((err) => {
      console.error("Error playing audio:", err);
    });
  }
});
