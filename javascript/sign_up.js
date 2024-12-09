//Camilla 

let choosecourse = ["Print din egen mini-figur", "Introduktion til 3D print", "Lasercut til brug i undervisningen", "Brug af Design Thinking i dit projekt", "Åbent Lab - Vis din idé og mød andre skabere"];

let modal = document.getElementById("myModal");
let closeBtn = document.getElementsByClassName("close")[0];

function showModal() {
    modal.style.display = "block";
    populateDropdown(); // Sørg for at drop-down bliver fyldt
}

closeBtn.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

function populateDropdown() {
    let dropdown = document.getElementById("choosecourse");

    dropdown.innerHTML = "";

    for (let i = 0; i < choosecourse.length; i++) {
        let option = document.createElement("option");
        option.value = choosecourse [i].toLowerCase();
        option.text = choosecourse [i];
        dropdown.appendChild(option);
    };
}

function submitForm() {
    let firstName = document.getElementById("fname").value;
    let lastName = document.getElementById("lname").value;
    let email = document.getElementById("email").value;
    let choosecourse = document.getElementById("choosecourse").value;

    console.log("Fornavn:", firstName);
    console.log("Efternavn:", lastName);
    console.log("Email:", email);
    console.log("Valg af kursus:", choosecourse);

    modal.style.display = "none";

    alert("Tilmelding registreret! Tak fordi du tilmeldte dig et kursus.");
}