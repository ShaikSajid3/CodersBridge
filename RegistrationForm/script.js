const fnameId = document.getElementById("fname");
const pwdId = document.getElementById("pwd");
const cpwdId = document.getElementById("cpwd");
const error1Id = document.getElementById("error1");
const dobId = document.getElementById("dob");


window.addEventListener("load", function () {
    fnameId.focus();
});

document.getElementById("form1").addEventListener("submit", function (event) {
    let valid = true;

    // Password confirmation validation
    if (pwdId.value !== "" && cpwdId.value !== "" && pwdId.value !== cpwdId.value) {
        error1Id.style.display = "inline-block";
        error1Id.innerHTML = "Passwords do not match";
        valid = false;
    } else {
        error1Id.style.display = "none";
    }

    // Date of birth validation
    const today = new Date();
    const birthDate = new Date(dobId.value);
    if (dobId.value) { // Check if dobId has a value
        const age = today.getFullYear() - birthDate.getFullYear();
        const monthDifference = today.getMonth() - birthDate.getMonth();
        if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }

        if (age < 18) {
            alert("You must be at least 18 years old.");
            valid = false;
        }
    } else {
        alert("Please enter your date of birth.");
        valid = false;
    }

    if (!valid) {
        event.preventDefault(); // Prevent form submission
    }
});
