localStorage.setItem("name", 
    JSON.stringify({
        address: "123 Main St"
    })
)
console.log(JSON.parse(localStorage.getItem("name")))

const value = localStorage.getItem("name");
const valueParsed = JSON.parse(value);
console.log(valueParsed)


//sessionStorage.setItem("myTemporaryKey", "myTemporaryValue");
console.log(sessionStorage.getItem("myTemporaryKey"))