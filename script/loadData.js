//fuction that fetches vowels from the jsondata
export async function loadVowels() {
  try {
    const response = await fetch(
      "https://raw.githubusercontent.com/gcbhoj/SBDatabase/main/vowels.json"
    );

    const jsonData = await response.json();

    return jsonData;
  } catch (error) {
    console.log("Error fetching Data");
  }
}
//fuction that fetches consonents from the jsondata
export async function loadConsonents() {
  try {
    const response = await fetch("https://raw.githubusercontent.com/gcbhoj/SBDatabase/main/consonents.json");

    const jsonData = await response.json();

    return jsonData;
  } catch (error) {
    console.log("Error Fetching File");
  }
}
