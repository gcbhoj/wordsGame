import { loadVowels, loadConsonents, loadData } from "./loadData.js";

const completeVowels = [];
const completeConsonents = [];
const completeData = [];

window.addEventListener("load", () => {
  //loading all vowels from database
  loadVowels().then((vowels) => {
    completeVowels.push(...vowels);
    // console.log("Loaded Vowels:", completeVowels);

    const 
    completeVowels.forEach((item) => {
      //  console.log("Vowels", item.alphabet);

    });
  });
  displayAlphabetImage();

  //loading all consonets
  loadConsonents().then((consonents) => {
    completeConsonents.push(...consonents);
    // console.log("Loaded Consonents", consonents);
    //accessing each item from the complete consonents array
    completeConsonents.forEach((item) => {
      // console.log("consonets", item.alphabet);
    });
  });

  //loading all Data

  loadData().then((data) => {
    completeData.push(...data);
    //console.log("All Data", data);
  });
});

function displayAlphabetImage() {
  const vowelsImage = document.getElementById("vowelsImageDisplay");
  let images = "";

  completeVowels.forEach((element) => {
    images += `<img src="${element.image}" alt="Vowel" style="width:30px; margin-right:5px;">`;
  });
  console.log(images)

  vowelsImage.innerHTML = images;
}

