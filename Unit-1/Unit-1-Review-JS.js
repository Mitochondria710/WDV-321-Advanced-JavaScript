//Finding things
console.log("Hacker voice: 'im in'");

//Fields
const container = document.querySelector("#container");
const gameName = document.querySelector("#gameName");
const gameType = document.querySelector("#gameType");
const gamePlayers = document.querySelector("#gamePlayers");

//Buttons
const addGameToLibrary = document.querySelector("#submitBtn");
const newGame = document.querySelector("#newGameButton");
const displayGameLibraryButton = document.querySelector("#displayGameLibraryButton");

//1. Use the following parallel arrays to dynamically populate the select element
    const gameTypes = ["board", "video", "tabletop", "rpg"];
    const gameTypeAbb = ['b','v','t','r'];

//2. Use the following array to dynamically create a set of radio buttons
    const gameDifficulty = ["Easy","Moderate","Difficult","Hard"];

//3. Use the following array to dynamicall create a set of checkboxes
    const gameOptions = ["Good for Kids","Multiplayer","Fast Play","Long Game","Solitaire"];

    //game types
    const select =document.getElementById("gameType");
    gameTypes.forEach((type, index) => {
        select.innerHTML += `<option value="${gameTypeAbb[index]}">${type}</option>`
    });

    function validateForm() {
        console.log("here")
        if(!name || name.length > 50) {
            alert("Game name is required (max 50 characters)")
            return false;
        }
        return true;
    }
    const form = document.querySelector("form");
    const addBtn = document.getElementById("gameType");


    addBtn.addEventListener("click", (e) => {
        e.preventDefault();
        if(validateForm()) {
            //validation passed
            alert("Validation Passed");
        };
    });
