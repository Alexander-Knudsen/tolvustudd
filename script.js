// Example: Add a simple click event to the "Learn More" button on the home page
document.addEventListener("DOMContentLoaded", () => {
    const learnMoreBtn = document.getElementById("learnMoreBtn");
  
    if (learnMoreBtn) {
      learnMoreBtn.addEventListener("click", () => {
        alert("This website was created for a university project using HTML, CSS, and JavaScript!");
      });
    }
  });
  