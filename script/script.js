import { loadVowels, loadConsonents } from "./loadData.js";

window.addEventListener("load", () => {
  const completeVowels = [];
  const completeConsonents = [];
  //loading all vowels from database
  loadVowels().then((vowels) => {
    completeVowels.push(...vowels);

    console.log("Loaded Vowels:", completeVowels);
    //accessing each item from the complete vowels array
    completeVowels.forEach((item) => {
      console.log("Vowels", item.alphabet);
    });
  });
  //loading all consonets
  loadConsonents().then((consonents) => {
    completeConsonents.push(...consonents);
    console.log("Loaded Consonents", consonents);
    //accessing each item from the complete consonents array
    completeConsonents.forEach((item) => {
      console.log("consonets", item.alphabet);
    });
  });
});
