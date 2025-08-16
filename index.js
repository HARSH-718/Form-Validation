let nameError=document.getElementById("name-error");
let phoneError=document.getElementById("Phone-error");
let emailError=document.getElementById("Email-error");
let messageError=document.getElementById("Message-error");
let SubmitError=document.getElementById("subit-error");



function validateName(){
    let name=document.getElementById("name-contact").value;

    if(name.length === 0){
        nameError.innerHTML="Name is required";
        return false;
    }

    if(!name.match(/^[A-Za-z]+(\s[A-Za-z]+)+$/)){
        nameError.innerHTML="Write full name (First & Last)";
        return false;
    }

    nameError.innerHTML='<i class="fa-solid fa-circle-check"></i>';
    return true;
}

function validatephone(){
    let phone=document.getElementById("phone-contact").value;

    if(phone.length === 0){
        phoneError.innerHTML="Number is required";
        return false;
    }

    if(!phone.match(/^[0-9]{10}$/)){
        phoneError.innerHTML="phone no should be 10 digit";
        return false;
    }

    phoneError.innerHTML='<i class="fa-solid fa-circle-check"></i>';
    return true;
}
function validateemail(){
    let email=document.getElementById("email-contact").value;

    if(email.length === 0){
        emailError.innerHTML="email is required";
        return false;
    }

    if(!email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)){
        emailError.innerHTML="email Invalid";
        return false;
    }

    emailError.innerHTML='<i class="fa-solid fa-circle-check"></i>';
    return true;
}
function validatemsg(){
    let msg=document.getElementById("message-contact").value;

    if(msg.length === 0){
        messageError.innerHTML="message is required";
        return false;
    }

    if(!msg.match(/^[A-Za-z0-9\s.,!?'-]{10,}$/)){
        messageError.innerHTML="write minimum 10 charcters";
        return false;
    }

    messageError.innerHTML='<i class="fa-solid fa-circle-check"></i>';
    return true;
}

function validateform(){
    if(!validateName() || !validatephone() || !validateemail() || !validatemsg()){
        SubmitError.style.display="block";
        
        SubmitError.innerHTML='please fix the error to submit';
        setTimeout(function(){SubmitError.style.display="none";},3000);
        return false;
    }
}