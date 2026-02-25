// ----------------- Account Numbers -----------------
let accNumber = Number(localStorage.getItem("currentAccNumber")) || 0;
let accNumber2 = Number(localStorage.getItem("currentAccNumber2")) || 0;

function accNumberIncrease() {
    accNumber++;
    localStorage.setItem("currentAccNumber", accNumber);
    return accNumber;
}

function accNumber2Increase() {
    accNumber2++;
    localStorage.setItem("currentAccNumber2", accNumber2);
    return accNumber2;
}

// ----------------- Sign Up -----------------
function submitSignUp() {
    const emailInput = document.getElementById("emailInput").value;
    const passwordInput = document.getElementById("passwordInput").value;
    const errorMsg = document.getElementById("error");

    try {
        if (localStorage.getItem(emailInput) !== null) {
            throw new Error("Email already in use");
        }

        // Store mapping: email -> accNumber, accNumber -> password
        const id1 = accNumberIncrease() - 1;
        const id2 = accNumber2Increase() - 1;
        localStorage.setItem(emailInput, id1);
        localStorage.setItem(String(id2), passwordInput);

        alert("Account Created Successfully!");
        errorMsg.classList.add("hidden");
    } catch (err) {
        errorMsg.textContent = err.message;
        errorMsg.classList.remove("hidden");
    }
}

// ----------------- Sign In -----------------
function validateSignIn() {
    const emailInput = document.getElementById("signinEmail").value;
    const passwordInput = document.getElementById("signinPassword").value;
    const errorMsg = document.getElementById("signinError");

    try {
        const userId = localStorage.getItem(emailInput);
        if (userId === null) throw new Error("NoAcc");

        const storedPass = localStorage.getItem(userId);
        if (passwordInput !== storedPass) throw new Error("Invalid Login Details");

        localStorage.setItem("currentAcc", emailInput);
        window.location.href = "FoxAcc.html";
    } catch (err) {
        errorMsg.classList.remove("hidden");
        if (err.message === "NoAcc") {
            errorMsg.textContent = "Account Does Not Exist";
        } else {
            errorMsg.textContent = "Invalid Login Details";
        }
    }
}

// ----------------- Current User / Logout -----------------
function currentUser() {
    const display = document.getElementById("signedinas");
    display.textContent = "Signed In As " + (localStorage.getItem("currentAcc") || "Guest");
}

function logOut() {
    localStorage.removeItem("currentAcc");
    window.location.href = "Signin.html";
}

// ----------------- Redirect Logic -----------------
function checkLoggedInStatus() {
    const currentUserEmail = localStorage.getItem("currentAcc");
    const page = window.location.href;

    if (page.includes("FoxAcc.html") && !currentUserEmail) {
        window.location.href = "Signin.html";
    } else if (page.includes("Signin.html") && currentUserEmail) {
        window.location.href = "FoxAcc.html";
    }
}

// ----------------- Init -----------------
window.onload = () => {
    currentUser();
    checkLoggedInStatus();
};
