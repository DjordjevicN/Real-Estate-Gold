




let signIn = document.querySelector('.signIn');

signIn.addEventListener('click', () => {
    let emailInput = document.querySelector('.email');
    let passwordInput = document.querySelector('.passwords');
    let logInBtn = document.querySelector('.logIn');
    let dorpdown = document.querySelector('.dropdown-menu');


    dorpdown.style.display = 'block';
    dorpdown.classList.toggle('opened');
    dorpdown.classList.contains('opened') ? dorpdown.style.display = 'block' : dorpdown.style.display = 'none';


    logInBtn.addEventListener('click', () => {
        console.log(emailInput.value);
        console.log(passwordInput.value);
        // let nameVal = emailInput.value;
        // let passVal = passwordInput.value;


        // console.log(nameVal, passVal);


    })





})

    ////////////////////// 


