const emailValue = document.getElementById("email")
const submitValue = document.getElementById("msg")
const error = document.querySelector(".two")
const success = document.querySelector(".success")
const wrapper = document.querySelector(".wrapper")


submitValue.addEventListener("click", (e) => {
    e.preventDefault()

    const emailCheck = emailValue.value
    
    if(emailCheck == "" || emailCheck.length <= 3){
        error.style.visibility = "visible";

        emailValue.classList.add("later")
    }
    else{
        setTimeout(() => {
            emailValue.classList.remove("later")
            error.style.visibility = "hidden";
            wrapper.style.display = "none"
            success.style.display = "block"
        }, 1000)
    }

   
})


document.getElementById("dismiss").addEventListener("click", () => {
    success.style.display = "none";
    wrapper.style.display = "flex";
    emailValue.value = '';
})


