const form = document.querySelector('.login-form');
form.addEventListener('submit', handleSubmit);

function handleSubmit(event){
    event.preventDefault();
    const element = event.target.elements;
    const emailValue = element.email.value.trim();
    const passwordValue = element.password.value.trim();
    if(emailValue === "" || passwordValue === ""){
        alert("All form fields must be filled in");
        return;
    }

    const output = {
        email: emailValue,
        password: passwordValue,
    };

    console.log(output);
    event.target.reset();
}