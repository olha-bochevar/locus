const btnSignUp = document.querySelector('.header__button');
const btnSignUpLink = document.querySelector('.header__button a');
const containerSignUp = document.querySelector('.signup');
const formSignUp = document.querySelector('.signup__form');
const inputs = document.querySelectorAll('.signup__input');
const btmCloseFormSignUp = document.querySelector('.signup__close');


function closeFormSignUp() {
    containerSignUp.classList.add('d-none');
  };
function clearInputs(){
    inputs.forEach(input =>input.value='');
};

function checkUserName(){
    const namePattern = /^[a-zA-Z]{6,}$/;
    const userName = formSignUp.username.value;
    let result = namePattern.test(userName);
    if(!result){
        alert('Input only characters');
        
    } else return true;
};

function checkUserPhone(){
    const phonePattern = /^[0-9]{10}$/;
    const userPhone = formSignUp.userphone.value;
    let result = phonePattern.test(userPhone);
    if(!result){
        alert('Input only nubmers and at least 10');
    } else return true;
}



btnSignUp.addEventListener('click', () =>{
    containerSignUp.classList.remove('d-none');
    formSignUp.signup__submit.value = "Call me"
    clearInputs();
});
btmCloseFormSignUp.addEventListener('click', () =>{
    closeFormSignUp();
    
});
containerSignUp.addEventListener('click', e =>{
    if(e.target == containerSignUp){
        closeFormSignUp();
    };
   
});

formSignUp.addEventListener('submit', e=>{
    e.preventDefault();

    if(checkUserName() && checkUserPhone()){
       formSignUp.signup__submit.value= "OK!";
       setTimeout(closeFormSignUp, 1000);
    };
    
});

