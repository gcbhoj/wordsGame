window.addEventListener("load", () => {
  let completeData = [];

  fetch(
    "https://raw.githubusercontent.com/gcbhoj/SBDatabase/main/DataBase.json"
  )
    .then((response) => response.json())
    .then((jsonData) => {
      console.log("JSON DATA", jsonData);

      if (jsonData != null) {
        completeData.push(...jsonData);

        for (let i = 0; i < completeData.length; i++) {
          console.log("Complete Data", completeData[i].category);
        }
      }
    });
});
