// Example for form validation (optional)
document.querySelector("form").addEventListener("submit", function(event) {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    if (!name || !email || !message) {
        alert("Please fill out all fields.");
        event.preventDefault();  // Prevent form submission
    }
});

// Scroll to Top functionality
window.onscroll = function() {
    let scrollButton = document.getElementById("scrollToTopBtn");
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        scrollButton.style.display = "block";
    } else {
        scrollButton.style.display = "none";
    }
};

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

// Modal functionality
function openModal(projectId) {
    const modal = document.getElementById("modal");
    const projectDetails = document.getElementById("projectDetails");

    // Add dynamic content based on the project clicked
    if (projectId === 1) {
        projectDetails.textContent = "Detailed information about Project 1.";
    } else if (projectId === 2) {
        projectDetails.textContent = "Detailed information about Project 2.";
    } else if (projectId === 3) {
        projectDetails.textContent = "Detailed information about Project 3.";
    }

    modal.style.display = "block";
}

function closeModal() {
    const modal = document.getElementById("modal");
    modal.style.display = "none";
}
