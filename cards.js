// Tilføjet tags for education og machine
const projectData = [
    {
        image: "img/gronburger skitse.jpg",
        title: "3D-printet hjerte",
        subtitle: "Sygeplejerske | 3D-print",
        paragraphs: ["Et 3D-printet hjerte til forskning i hjerteoperationer", "mere tekst","lidt mere tekst."],
        tags: {education:"Sygeplejerske", machine:"3D-print"}
    },
    {
        image: "img/gronburger skitse.jpg",
        title: "Noget andet",
        subtitle: "Personligt | Badges",
        paragraphs: ["Et 3D-printet hjerte til forskning i hjerteoperationer"],
        tags: {education:"Personligt", machine:"Badges"}
    },
    {
        image: "img/gronburger skitse.jpg",
        title: "Noget helt andet",
        subtitle: "Bygningskonstruktør | Laserskærer",
        paragraphs: ["Et 3D-printet hjerte til forskning i hjerteoperationer"],
        tags: {education:"Bygningskonstuktør", machine:"Laserskærer"}
    },
    {
        image: "img/gronburger skitse.jpg",
        title: "3D-printet hjerte",
        subtitle: "Sygeplejerske | 3D-print",
        paragraphs: ["Et 3D-printet hjerte til forskning i hjerteoperationer", "mere tekst","lidt mere tekst."],
        tags: {education:"Sygeplejerske", machine:"3D-print"}
    },
    {
        image: "img/gronburger skitse.jpg",
        title: "3D-printet hjerte",
        subtitle: "Sygeplejerske | 3D-print",
        paragraphs: ["Et 3D-printet hjerte til forskning i hjerteoperationer", "mere tekst","lidt mere tekst."],
        tags: {education:"Sygeplejerske", machine:"3D-print"}
    },
    {
        image: "img/gronburger skitse.jpg",
        title: "3D-printet hjerte",
        subtitle: "Sygeplejerske | 3D-print",
        paragraphs: ["Et 3D-printet hjerte til forskning i hjerteoperationer", "mere tekst","lidt mere tekst."],
        tags: {education:"Sygeplejerske", machine:"3D-print"}
    },
    {
        image: "img/gronburger skitse.jpg",
        title: "3D-printet hjerte",
        subtitle: "Sygeplejerske | 3D-print",
        paragraphs: ["Et 3D-printet hjerte til forskning i hjerteoperationer", "mere tekst","lidt mere tekst."],
        tags: {education:"Sygeplejerske", machine:"3D-print"}
    },
    {
        image: "img/gronburger skitse.jpg",
        title: "3D-printet hjerte",
        subtitle: "Sygeplejerske | 3D-print",
        paragraphs: ["Et 3D-printet hjerte til forskning i hjerteoperationer", "mere tekst","lidt mere tekst."],
        tags: {education:"Sygeplejerske", machine:"3D-print"}
    },
    {
        image: "img/gronburger skitse.jpg",
        title: "3D-printet hjerte",
        subtitle: "Sygeplejerske | 3D-print",
        paragraphs: ["Et 3D-printet hjerte til forskning i hjerteoperationer", "mere tekst","lidt mere tekst."],
        tags: {education:"Sygeplejerske", machine:"3D-print"}
    },
]

function addProjectCard(root, data) {
    let projectCardDiv = document.createElement("div");
    projectCardDiv.className = "project_card";

//Tilføjet de to linjer herunder
    projectCardDiv.setAttribute("data-education", data.tags.education);
    projectCardDiv.setAttribute("data-machine", data.tags.machine);

    root.appendChild(projectCardDiv);
    
    let imageDiv = document.createElement("div");
    imageDiv.className = "image_filters";
    projectCardDiv.appendChild(imageDiv);
    
    let image = document.createElement("img");
    image.src = data.image;
    imageDiv.appendChild(image);

    let title = document.createElement("h3");
    title.innerText = data.title;
    projectCardDiv.appendChild(title);

    let subtitle = document.createElement("h4");
    subtitle.innerText = data.subtitle;
    projectCardDiv.appendChild(subtitle);

    data.paragraphs.forEach(text =>
    {
        let paragraph = document.createElement("p");
        paragraph.innerText = text;
        paragraph.className = "project_paragraph";
        projectCardDiv.appendChild(paragraph);
    });
    
    let button = document.createElement("button");
    button.innerText = "Læs mere";
    projectCardDiv.appendChild(button);
}

let projectsDiv = document.getElementById("projects");
//hvis projectsDiv er forskellig for null, altså hvis projectsDiv eksistere, skal den køre for loopet. 
if(projectsDiv != null)
{
    for (i=0; i<projectData.length; i++)
    {
        addProjectCard(projectsDiv, projectData[i]);    
    }
}

//Integreret filtreringslogik
//Arrays til dropdown-menu
const educations = ["Personligt", "Sygeplejerske", "Bygningskonstruktør"];
const machines = ["3D-print", "Laserskærer", "Badges", "T-shirt"];

//Referencer til dropdown-menu
const educationDropdown = document.getElementById("education");
const machineDropdown = document.getElementById("machine");

//Funktion til at genere dropdown-menu
function createDropdown(options, dropdown, defaultOptionText) {
    const defaultOption = document.createElement("option");
    defaultOption.value = "";
    defaultOption.textContent = defaultOptionText;
    dropdown.appendChild (defaultOption);

    options.forEach(option => {
        const opt = document.createElement("option");
        opt.value = option;
        opt.textContent = option;
        dropdown.appendChild(opt);
    });
}

//Funktion til filtrering
function filterCards() {
    const selectedEducation = educationDropdown.value;
    const selectedMachine = machineDropdown.value;

    const cards = document.querySelectorAll(".project_card");
    cards.forEach(card => {
        const cardEducation = card.getAttribute("data-education");
        const cardMachine = card.getAttribute("data-machine");
    

    const matchesEducation = !selectedEducation || cardEducation === selectedEducation;
    const matchedMachine = !selectedMachine || cardMachine === selectedMachine;

    if(matchesEducation && matchedMachine) {
        card.style.display = "block";
    } else {
        card.style.display = "none";
    }
});
}

//Funktion til at generere cards og filtre dem
function generateAndFilterCards() {
    //Rydder alle eksisterende cards
    const projectDiv = document.getElementById("projects");
    projectsDiv.innerHTML = ""; //Fjerner

    //Generere
    projectData.forEach(project => addProjectCard(projectsDiv, project));

    //Filtrere
    filterCards();
}

//Opsætning
createDropdown(educations, educationDropdown, "Vælg uddannelse");
createDropdown(machines, machineDropdown, "Vælg maskine");
educationDropdown.addEventListener("change", filterCards);
machineDropdown.addEventListener("change", filterCards);

//Generer cards og filtrering ved første initialisering
generateAndFilterCards();

