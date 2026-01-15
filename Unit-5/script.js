
const makeRequest = (url, callback) => {
    const xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function() {
        if(xhr.readyState === 4 && xhr.status === 200){
            callback(xhr.responseText);
        }
    };

    xhr.open("GET", url, true);

    xhr.send();
}

makeRequest("snippet.php", (responseText) => {
    document.getElementById("container").innerHTML = responseText;
})