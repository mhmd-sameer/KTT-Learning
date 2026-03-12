
function camelize(str) {
    let words = str.split("-");
    let newWords = words.map((word, index) => index==0 ? word : word[0].toUpperCase() + word.slice(1));
    alert(newWords.join(""));
}

camelize("background-color")
camelize("list-style-image") 
camelize("-webkit-transition")