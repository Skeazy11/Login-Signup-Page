const pageButtonsContainer = document.querySelector(".page");
const formContainer = document.querySelector(".form-container");
const formFormContainer = document.querySelector(".form-form-container");
const btnSignUp = document.querySelector(".sign-up");
const btnSignIn = document.querySelector(".sign-in");

pageButtonsContainer.addEventListener("click", (e) => {
    if (e.target && e.target.nodeName === "BUTTON") {

        if (e.target.classList.contains("sign-up")) {
            formContainer.classList.add("inv");
            updateForm("./singup.xml");
            addAndRemoveClass(btnSignUp, "btn-active", "btn-notactive");
            addAndRemoveClass(btnSignIn, "btn-notactive", "btn-active");
            window.setTimeout(() => { formContainer.classList.remove("inv"); }, 250);

        }
        else if (e.target.classList.contains("sign-in")) {
            formContainer.classList.add("inv");
            updateForm("./signin.xml");
            addAndRemoveClass(btnSignUp, "btn-notactive", "btn-active");
            addAndRemoveClass(btnSignIn, "btn-active", "btn-notactive");
            window.setTimeout(() => { formContainer.classList.remove("inv"); }, 250);
        }
    }
})


function updateForm(form) {
    let xmlhttp = new XMLHttpRequest();
    xmlhttp.open("POST", "" + form, true);

    xmlhttp.onreadystatechange = function () {
        if (this.readyState = 4 && this.status == 200) {

            window.setTimeout(() => { formContainer.innerHTML = this.response; }, 250);
        }
    }

    xmlhttp.send();
}

function addAndRemoveClass(element, addedClass, removedClass) {
    element.classList.add(addedClass);
    element.classList.remove(removedClass);
}

window.onload = () => {
    updateForm("./signin.xml");
    window.setTimeout(() => { formFormContainer.classList.remove("inv"); }, 250);
}




