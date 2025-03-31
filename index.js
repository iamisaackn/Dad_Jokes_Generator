// Get the button element and store it in the btnEl variable
const btnEl = document.getElementById("btn");

// Get the joke element and store it in the jokeEl variable
const jokeEl = document.getElementById("joke");

// Define the API key
const apiKey = "s7hrJiC06YHzY/KGSKJY/A==2j7TlUBB6mHmL5ep";

// Set the options for the fetch request
const options = {
    method: 'GET',
    headers: { "X-Api-Key": apiKey },
};

// Define the API URL to fetch a single dad joke
const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1";

async function getJoke() {
    try {
        // Display "Updating..." while fetching the joke
        jokeEl.innerText = "Updating...";

        // Fetch the joke from the API
        const response = await fetch(apiURL, options);
        const data = await response.json();

        // Update the joke text with the fetched joke
        jokeEl.innerText = data[0].joke;
    } catch (error) {
        // Handle errors
        jokeEl.innerText = "An error happened. Please try again later.";
        console.error("Error fetching joke:", error);
    }
}


// Add a click event listener to the button, which calls the getJoke function
btnEl.addEventListener("click", getJoke);

const startsE1 = document.querySelectorAll(".fa-star");
const emojisE1 = document.querySelectorAll(".fa-face");

const colors = ["red", "orange", "lightblue", "green", "purple"];

updateRating(0);

startsE1.forEach((startE1, index) => {
    startE1.addEventListener("click", () => {
        updateRating(index);
    });
});

function updateRating(index) {
    startsE1.forEach((startE1, idx) => {
        if (idx <= index) {
            startE1.classList.add("active");
        } else {
            startE1.classList.remove("active");
        }
    });
    emojisE1.forEach((emoji) => {
        emoji.style.transform = `translateX(-${index * 48}px)`;
        emoji.style.color = colors[index];
    });
}




// -------------------------------- sign up ---------------------------------------
document.getElementById('signup-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const firstname = document.getElementById('firstname').value;
    const lastname = document.getElementById('lastname').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    console.log('Firstname:', firstname);
    console.log('Lastname:', lastname);
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Confirm Password:', confirmPassword);

    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
    }

    // Add your signup logic here (e.g., AJAX request to a server)
});




// ----------------------------- Log In -------------------------------------
document.addEventListener("DOMContentLoaded", function () {
    // Register Form Submission
    let registerForm = document.getElementById("registerForm");
    if (registerForm) {
        registerForm.addEventListener("submit", function (event) {
            event.preventDefault();

            let password = document.getElementById("password").value;
            let confirmPassword = document.getElementById("confirmPassword").value;

            if (password !== confirmPassword) {
                alert("Passwords do not match!");
            } else {
                alert("Registration successful!");
                this.reset();
            }
        });
    }

    // Login Form Submission
    let loginForm = document.getElementById("loginForm");
    if (loginForm) {
        loginForm.addEventListener("submit", function (event) {
            event.preventDefault();

            let email = document.getElementById("email").value;
            let password = document.getElementById("password").value;

            if (email === "user@example.com" && password === "password123") {
                alert("Login successful!");
                window.location.href = "dashboard.html"; // Redirect to dashboard
            } else {
                alert("Invalid email or password!");
            }
        });
    }
});


