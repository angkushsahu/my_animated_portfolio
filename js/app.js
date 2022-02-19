const root = document.getElementById("root");
const contactDiv = document.getElementById("contact_div");

function showContactDetails() {
    const nodes = root.getElementsByTagName('*');
    root.style.opacity = "0.5";
    for(let i = 0; i < nodes.length; i++){
        nodes[i].disabled = true;
    }

    contactDiv.classList.add("toggle_contact_div");
}

function hideContactDetails() {
    const nodes = root.getElementsByTagName('*');
    root.style.opacity = "1";
    for(let i = 0; i < nodes.length; i++){
        nodes[i].disabled = false;
    }

    contactDiv.classList.remove("toggle_contact_div");
}

const button = document.getElementsByClassName("button_for_connection");
for (let i = 0; i < button.length; i ++) {
    button[i].addEventListener("click", showContactDetails);
}

const closeButton = document.getElementsByClassName("close_button")[0];
closeButton.addEventListener("click", hideContactDetails);