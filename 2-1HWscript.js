//Team things
const teamSelect = document.querySelector("#teamNames");
const teamDisplaySpan = document.querySelector("#outputName");
const newTeamNameBox = document.querySelector("#newTeamName");
const addTeamButton = document.querySelector("#addTeamButton");
const resetButton = document.querySelector("#resetButton");



//TEAM SHENANIGANS
teamSelect.addEventListener("change", function(){
  console.log(teamSelect.value);
  let selectedTeam = teamSelect.value
  teamDisplaySpan.innerHTML = selectedTeam;
})

addTeamButton.addEventListener("click", function(){
  let newTeam = newTeamNameBox.value.trim();
  
  if(newTeam === ""){
    alert("Please enter a team name!");
    return
  }
  
  let option = document.createElement("option");
  option.value = newTeam;
  option.innerHTML = newTeam;
  teamSelect.appendChild(option);
  console.log("Added a new Team", newTeam);
  newTeamNameBox.value = "";
})

resetButton.addEventListener("click", function(){
  teamSelect.value = ""
  newTeamNameBox.value = ""
  teamDisplaySpan.innerHTML = ""
  displayCandyButton.checked = false
  displayCookiesButton.checked = false
  loadProducts(blankArray)
})

//COOKIES AND CANDY SHENANIGANS

//Cookies/Candy Things
const productDisplay = document.querySelector("#productDisplay");
const outputProductSpan = document.querySelector("#outputProduct");
const displayCookiesButton = document.querySelector("#displayCookies");
const displayCandyButton = document.querySelector("#displayCandy");
const cookies = ["Chocolate Chip Cookie", "Sugar Cookie", "Peanut Butter Cookie"];
const candies = ["M&Ms", "Baby Ruth", "Snickers"];
const blankArray = ["Select a Product"]

displayCookiesButton.addEventListener("click", function(){
  loadProducts(cookies)
})

displayCandyButton.addEventListener("click", function(){
  loadProducts(candies)
})

function loadProducts(productArray){
  productDisplay.innerHTML = "Select a Product"
  productArray.forEach((product) =>  {
        let option = document.createElement("option");
        option.value = product;
        option.text = product;
        productDisplay.add(option);

})
}