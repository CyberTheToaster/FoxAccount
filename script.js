var accNumber = Number(localStorage.getItem("currentAccNumber"))
function accNumberIncrease() {
    accNumber = accNumber + 1;
    localStorage.setItem("currentAccNumber", accNumber)
    return accNumber;
}
var accNumber2 = Number(localStorage.getItem("currentAccNumber2"))
function accNumber2Increase() {
    accNumber2 = accNumber2 + 1;
    localStorage.setItem("currentAccNumber2", accNumber2);
    return accNumber2;
}
function submit() {
    try {
        var emailForm = document.getElementById(1).value;
        if (emailForm in localStorage) {
            throw ("Email already in use")

        }
        if (!(emailForm in localStorage)) {
            localStorage.setItem(document.getElementById('1').value, (accNumberIncrease() - 1)); localStorage.setItem((accNumber2Increase() - 1), document.getElementById('2').value)
            alert("Account Created Successfully!")
            document.getElementById("e").style.visibility = "hidden";
        }

    }
    catch (err) {
        document.getElementById("e").InnerHTML = err.message;
        document.getElementById("e").style.visibility = "visible";
        document.getElementById("e").style.color = "red";
    }
}
function validate() {
    try {
        var userIdEmail = (localStorage.getItem(String(document.getElementById("3").value)))
        var userIdPass = (localStorage.getItem(String(userIdEmail)))
        var userPassInput = document.getElementById("4").value
        if (userPassInput === userIdPass) {
            var userEmailInput = document.getElementById("3").value
            localStorage.setItem("currentAcc", userEmailInput)
            window.location = "FoxAcc.html"
        }
        document.getElementById("wrong").style.visibility = "hidden";
        if (userIdEmail == null) {
            throw ("NoAcc")
        }

        if (!(!(userPassInput ?? userIdPass))) {
            throw ("Invalid Login Details")
        }
    }
    catch (err) {
        if (err == "NoAcc") {
            document.getElementById("wrong").style.visibility = "visible";
            document.getElementById("wrong").style.color = "red";
            document.getElementById("wrong").innerHTML = "Account Does Not exist";
        }
        if (err == "Invalid Login Details") {
            document.getElementById("wrong").style.visibility = "visible";
            document.getElementById("wrong").style.color = "red";
            document.getElementById("wrong").innerHTML = "Invalid Login Details";
        }
    }

}
var currentLoggedinUser = localStorage.getItem("currentAcc")

function logOut() {
    localStorage.removeItem("currentAcc")
    window.location = "Signin.html"
}
function currentUser() {
    document.getElementById("signedinas").innerHTML = "Signed In As " + localStorage.getItem("currentAcc")
}
function checkLoggedInStatus() {
    var currentLoggedinUser = localStorage.getItem("currentAcc")
    console.log(currentLoggedinUser == null && window.location.href == "file:///C:/Users/jwozc/Documents/GitHub/FoxAccount/FoxAcc.html")
    console.log(!(!(currentLoggedinUser ?? true)))
    if ((window.location.href.indexOf("FoxAcc.html") != -1) && ((currentLoggedinUser == null)))
        window.location = "Signin.html"
    else if ((window.location.href.indexOf("Signin.Html")!= -1) && (currentLoggedinUser == null))
        var s = 2
    else if ((window.location.href.indexOf("Signin.html") != -1 ) && !(currentLoggedinUser == null))
        window.location = "FoxAcc.html"
    else
        var s = 1

}


