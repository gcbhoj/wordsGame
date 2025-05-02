window.addEventListener("load", () => {
    let completeData = [];
    let firstAlphabetsArray =[]

  fetch(
    "https://raw.githubusercontent.com/gcbhoj/SBDatabase/main/DataBase.json"
  )
    .then((response) => response.json())
    .then((jsonData) => {
      console.log("JSON DATA", jsonData);

      if (jsonData != null) {
        completeData.push(...jsonData);

          for (let i = 0; i < completeData.length; i++) {
              const items = completeData[i].types;
            console.log("Complete Data", completeData[i].category);
              for (let j = 0; j < items.length; j++){
                  console.log("starting Alphabet", items[j].starting_alphabet)
              }

        }
      }
    });
});
