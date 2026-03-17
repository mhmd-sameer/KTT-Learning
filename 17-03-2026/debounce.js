function getData() {
    console.log("Get data from the server");
}

function debounce(getData, ms) {
    let timer;
    return function() {
        clearTimeout(timer);
        timer = setTimeout(() => getData(),ms);
    }
}

let debounceCall = debounce(getData,300);


