const form = document.querySelector('#form');
const username = document.querySelector('#username');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const password1 = document.querySelector('#password1');

// form.addEventListener('submit', onSubmit)
form.addEventListener('submit',(e) =>{
    e.preventDefault();
    
    checkInput();
});

function checkInput(){
    
    //get the values from the inputs
    const usernameValue = username.value.trim()//here 'trim()' removes space
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password1Value = password1.value.trim();
    
    if (usernameValue === ''){
        //show error
        //add errorclass
        setErrorFor(username, 'Username cannot be blank.');
    }
    else{
        //add success classs
        setSuccessFor(username);
    }

    if (emailValue ===''){
        setErrorFor(email, 'Email cannot be blank.');
    }else if(!isEmail(emailValue)){
        setErrorFor(email, 'Email is not valid.');
    }
    else{
        setSuccessFor(email);
    }

    if (passwordValue === ''){
        setErrorFor(password, 'Password cannot be empty.');
    }
    else{
        setSuccessFor(password);
    }

    if (password1Value === ''){
        setErrorFor(password1, 'Password cannot be empty.');
    }else if(passwordValue !== password1Value){
        setErrorFor(password1, 'Password does not match');
    }
    else{
        setSuccessFor(password1);
    }


}

function setErrorFor(input, message){
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');

    //add error message inside small
    small.innerText = message;

    //add error class
    formControl.className = 'form-control error';
}

function setSuccessFor(input){
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

function isEmail(email){
    return /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
  
}