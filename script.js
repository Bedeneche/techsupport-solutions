console.log("TechSupport Solutions website is running!");

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function(event) {
    event.preventDefault();

    alert("Thank you! Your message has been received.");

    contactForm.reset();
});