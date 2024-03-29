function toggleContacts() {
    var contactContainer = document.getElementById("contact-container");
    if (contactContainer.style.display === "none") {
        contactContainer.style.display = "block";
    } else {
        contactContainer.style.display = "none";
    }
}

document.getElementById("toggle-contact-button").addEventListener("click", toggleContacts);
