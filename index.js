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



document.addEventListener("DOMContentLoaded", function () {
    // Default user information
    const defaultUser = {
        firstname: "Isaac",
        lastname: "Ngugi",
        email: "1049049@cuea.edu",
        password: "1049049"
    };

    // Simulated "database" for storing user data, including default user
    const usersDB = [defaultUser];

    // Signup Logic
    const signupForm = document.getElementById("signup-form");
    if (signupForm) {
        signupForm.addEventListener("submit", function (event) {
            event.preventDefault();

            const firstname = document.getElementById("firstname").value;
            const lastname = document.getElementById("lastname").value;
            const email = document.getElementById("email").value;
            const password = document.getElementById("password").value;
            const confirmPassword = document.getElementById("confirmPassword").value;

            // Check if passwords match
            if (password !== confirmPassword) {
                alert("Passwords do not match!");
                return;
            }

            // Check if the email already exists in the "database"
            const userExists = usersDB.some(user => user.email === email);
            if (userExists) {
                alert("Email already exists! Please log in.");
                window.location.href = "login.html"; // Redirect to login page
                return;
            }

            // Save the new user to the "database"
            usersDB.push({ firstname, lastname, email, password });
            alert("Signup successful! You can now log in.");
            window.location.href = "login.html"; // Redirect to login page
        });
    }

    // Login Logic
    const loginForm = document.getElementById("login-form");
    if (loginForm) {
        loginForm.addEventListener("submit", function (event) {
            event.preventDefault();

            const email = document.getElementById("email").value;
            const password = document.getElementById("password").value;

            // Find the user in the "database"
            const user = usersDB.find(user => user.email === email);

            if (!user) {
                alert("Email not found! Please sign up.");
                window.location.href = "signup.html"; // Redirect to signup page
                return;
            }

            // Check if the password matches
            if (user.password !== password) {
                alert("Incorrect password!");
                return;
            }

            alert("Login successful!");
            window.location.href = "home.html"; // Redirect to home page
        });
    }
});

