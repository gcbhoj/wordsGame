import { loadVowels, loadConsonents, loadData } from "./loadData.js";

const completeVowels = [];
const completeConsonents = [];
const completeData = [];
const threePage = document.getElementById("three_four_page");
const pageTitle = document.getElementById("page-head");

window.addEventListener("load", () => {
  const vowelPagesContainer = document.querySelector(".pages");
  let pageNumber = 1;
  //loading all vowels from database
  loadVowels().then((vowels) => {
    completeVowels.push(...vowels);
    // console.log("Loaded Vowels:", completeVowels);

    completeVowels.forEach((item) => {
      //  console.log("Vowels", item.alphabet);
      const page = document.createElement("div");
      page.classList.add("page");

      //creating front side
      const front = document.createElement("div");
      front.classList.add("page-side", "front");

      front.innerHTML = `
<div class="page-head">
          <div class="page-title">${item.alphabet}</div>
        </div>
        <div class="page-content">
          <img src="${item.vowelsImage}" alt="${item.alphabet}" width="100">
        </div>
        <div class="page-footer">
          <span>May 2025</span>
          <span class="pg-no">${pageNumber}</span>
        </div>
      
      `;
      pageNumber++;
    });
  });

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
