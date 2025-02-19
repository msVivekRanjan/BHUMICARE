// Redirect to login page when "Get Started" button is clicked
function redirectToLogin() {
    window.location.href = "login.html"; // Redirect to login page
}

// Handle login form submission
document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById("loginForm");

    if (loginForm) {
        loginForm.addEventListener("submit", function(event) {
            event.preventDefault(); // Prevent default form submission

            // Get input values
            const username = document.getElementById("username").value.trim();
            const email = document.getElementById("email").value.trim();
            const phone = document.getElementById("phone").value.trim();
            const farmSize = document.getElementById("farmSize").value.trim();
            const location = document.getElementById("location").value.trim();

            // Regular expressions for validation
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Simple email validation
            const phonePattern = /^[0-9]{10}$/; // Ensures phone number is exactly 10 digits
            const numberPattern = /^[0-9]+$/; // Ensures farm size is numeric

            // Validation checks
            if (!username || !email || !phone || !farmSize || !location) {
                alert("All fields are required!");
                return;
            }
            if (!emailPattern.test(email)) {
                alert("Invalid email format!");
                return;
            }
            if (!phonePattern.test(phone)) {
                alert("Phone number must be exactly 10 digits!");
                return;
            }
            if (!numberPattern.test(farmSize)) {
                alert("Farm size must be a numeric value!");
                return;
            }

            // Store username in localStorage for use in the dashboard
            localStorage.setItem("username", username);
            localStorage.setItem("location", location);
            localStorage.setItem("farmSize", farmSize);
        

            // Show success message
            alert("Login Successful!");

            // Redirect to dashboard page
            window.location.href = "dashboard.html";
        });
    }
});
