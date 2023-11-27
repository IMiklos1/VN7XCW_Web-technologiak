//script for form
function saveData() {
    const fullName = document.getElementById("fullName").value;
    const email = document.getElementById("email").value;
    const largeText = document.getElementById("largeText").value;
    const acceptTerms = document.getElementById("acceptTerms").checked;
    //window.confirm("Igen?");
    if (acceptTerms == true && email.includes("@")) {
        const data = {
            fullName: fullName,
            email: email,
            largeText: largeText,
            acceptTerms: acceptTerms
        };
        document.getElementById("myForm").reset();
        console.log("Saved data:", data);
    }
    else {
        if (!email.includes("@")) {
            window.alert("Add a valid email address");
        }
        else {
            window.alert("Please accept the terms and conditions field!");
        }
    }
    console.log(acceptTerms);

}
// script.js
function validateEmail() {
    // Get the input element
    var email = document.getElementById('email');

    // Check if the input value contains '@'
    if (email.value.includes('@')) {
        // If it contains '@', remove any border styling
        email.style.borderColor = 'initial';
    } else {
        // If it doesn't contain '@', add a red border
        email.style.borderColor = 'red';
    }
}

//script for about page
function isElementOnScreen(element) {
    const rect = element.getBoundingClientRect();

    // Check if the element is fully visible in the viewport
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

const cards = document.querySelectorAll(".card"); // get all text cards from the page

//Checks the first few cards if it is on the screen
document.addEventListener('DOMContentLoaded', () => {
    cards.forEach((card) => {

        if (isElementOnScreen(card)) {
            card.style.opacity = '1';
        }
        else {
            card.style.opacity = '0.2';
        }
    })
})

//On scroll it changes the opacity of the cards which on the screen
window.addEventListener("scroll", () => {
    const scrollTop = window.scrollY;
    const halfScreenWidth = window.innerWidth / 2;

    cards.forEach((card) => {
        const cardPosition = card.getBoundingClientRect();
        const cardCenter = cardPosition.left + cardPosition.width / 2;
        if (isElementOnScreen(card)) {
            card.style.opacity = '1';
        }
        else {
            card.style.opacity = '0.2';
        }
    }
    )
}
)
