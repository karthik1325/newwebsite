const image = document.getElementById("bouncingImage");

// Function to handle the bounce animation
function handleBounce() {
    // Remove the 'bounce' class to reset the animation (allows it to run again on subsequent touches/clicks)
    image.classList.remove("bounce");

    // Trigger a reflow to restart the CSS animation
    void image.offsetWidth; 

    // Add the 'bounce' class to start the animation
    image.classList.add("bounce");
}

// Add event listeners for both "click" (for desktop) and "touchend" (for mobile touch events)
image.addEventListener("click",handleBounce);
image.addEventListener("touchend", handleBounce);