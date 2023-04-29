let password = document.querySelector("#user-password");
let confirmPassword = document.querySelector("#user-confirm-password");
let checkMark = document.querySelector(".user-confirm-password .check-mark");
let xMark = document.querySelector(".user-confirm-password .x-mark");

let check1 = document.querySelector(".check1");
let check2 = document.querySelector(".check2");
let check3 = document.querySelector(".check3");

let checkMarkCheck1 = document.querySelector(".check1 .check-check-mark");
let checkMarkCheck2 = document.querySelector(".check2 .check-check-mark");
let checkMarkCheck3 = document.querySelector(".check3 .check-check-mark");

let xMarkCheck1 = document.querySelector(".check1 .check-x-mark");
let xMarkCheck2 = document.querySelector(".check2 .check-x-mark");
let xMarkCheck3 = document.querySelector(".check3 .check-x-mark");


confirmPassword.addEventListener("input", () => {
    if (password.value !== confirmPassword.value){
        confirmPassword.classList.add("invalid");
        checkMark.style.visibility = "hidden";
        xMark.style.visibility = "visible";
    } else {
        confirmPassword.classList.remove("invalid");
        xMark.style.visibility = "hidden";
        checkMark.style.visibility = "visible";
    }

    confirmPassword.addEventListener("focusout", () => {
        if (confirmPassword.value === ""){
            confirmPassword.classList.remove("invalid");
        }
    });
});

password.addEventListener("input", () => {
    if (password.value.length >= 8){
        check1.classList.add("check-valid");
        checkMarkCheck1.style.visibility = "visible";
        xMarkCheck1.style.visibility = "hidden";
    
    } else {
        check1.classList.remove("check-valid");
        xMarkCheck1.style.visibility = "visible";
        checkMarkCheck1.style.visibility = "hidden";
    }

    if (password.value.match("^(?=.*[A-Za-z])")){
        check2.classList.add("check-valid");
        checkMarkCheck2.style.visibility = "visible";
        xMarkCheck2.style.visibility = "hidden";
    } else {
        check2.classList.remove("check-valid");
        xMarkCheck2.style.visibility = "visible";
        checkMarkCheck2.style.visibility = "hidden";
    }

    if (password.value.match("[0-9]")){
        check3.classList.add("check-valid");
        checkMarkCheck3.style.visibility = "visible";
        xMarkCheck3.style.visibility = "hidden";
    } else {
        check3.classList.remove("check-valid");
        xMarkCheck3.style.visibility = "visible";
        checkMarkCheck3.style.visibility = "hidden";
    }
});