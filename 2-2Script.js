const displayContainer = document.querySelector(".displayContainer");
const complaintsDiv = document.querySelector("#complaintsDiv")
const technicalProblemsDiv = document.querySelector("#technicalProblemsDiv")
const productIssuesDiv = document.querySelector("#productIssuesDiv")

const contactType = document.getElementById("contactType");
console.log(contactType.value)
contactType.addEventListener("change", (event) => {
    const hideDetails = () => {
        complaintsDiv.classList.add("hidden");
        technicalProblemsDiv.classList.add("hidden");
        productIssuesDiv.classList.add("hidden");
        complaintsDiv.classList.remove("active");
        technicalProblemsDiv.classList.remove("active");
        productIssuesDiv.classList.remove("active");
    }
    
    const problemTypeSelectValue = event.target.value;
    
    hideDetails();
    if(problemTypeSelectValue === "C"){   
        complaintsDiv.classList.remove("hidden");
        complaintsDiv.classList.add("active");
    } else if(problemTypeSelectValue === "T"){
        hideDetails();
        technicalProblemsDiv.classList.remove("hidden"); 
        technicalProblemsDiv.classList.add("active");
    } else if(problemTypeSelectValue === "P") {        
        hideDetails();
        productIssuesDiv.classList.remove("hidden");
        productIssuesDiv.classList.add("active");
    }
})