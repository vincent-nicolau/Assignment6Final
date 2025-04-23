document.getElementById("button").addEventListener("click", function () {
    const input = document.getElementById("sentence").value.trim();
    console.log("sentence after trim:", input);
    const nums = [];
    const words = [];
    let word = "";
    Array.from(input).forEach(char => {
        if (char === " ") {
            if (word !== "") {
                if (!isNaN(word) && !word.includes(",")) {
                    nums.push(parseFloat(word));
                } else {
                    words.push(word);
                }
                word = "";
            }
        } else {
            word += char;
        }
    });
    if (word !== "") {
        if (!isNaN(word) && !word.includes(",")) {
            nums.push(parseFloat(word));
        } else {
            words.push(word);
        }
    }
    console.log("nums b4 sort", nums);
    console.log("words b4 sort", words);
    const sortedNums = nums.sort((a, b) => a - b);
    const sortedWords = words.sort((a, b) => a.localeCompare(b));
    const nwList = document.querySelector(".nw ul");
    const nnwList = document.querySelector(".nnw ul");
    nwList.innerHTML = sortedNums.map(n => `<li>${n}</li>`).join("");
    nnwList.innerHTML = sortedWords.map(w => `<li>${w}</li>`).join("");
    console.log("nums after sort", sortedNums);
    console.log("words after sort", sortedWords);
});