document.addEventListener("DOMContentLoaded", function() {
    const animateBtn = document.getElementById("animateBtn");
    const animationBox = document.getElementById("animationBox");

    // Check if the animation preference is stored in localStorage
    if (localStorage.getItem("animationPlayed") === "true") {
        animationBox.style.opacity = "1"; // Show the animation box if previously played
    }

    // Event listener to trigger the animation when the button is clicked
    animateBtn.addEventListener("click", function() {
        // Toggle animation visibility
        animationBox.style.opacity = "1"; // Make the box visible
        localStorage.setItem("animationPlayed", "true"); // Store user preference in localStorage

        // Additional animation handling can be added here
    });
});
