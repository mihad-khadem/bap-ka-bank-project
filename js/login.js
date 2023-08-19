// Step-1: add click event handler with submit btn
document.getElementById('btn-submit').addEventListener('click', function(){
    // step-2: get the email address inside the input field
    // note: always remember to use .value to get text from an input
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    // console.log(email);
    // console.log('submit btn clicked');

    // Password 
    const passField = document.getElementById('user-pass');
    const password = passField.value;
    console.log(email, password);


    // Do not verify on client side

    if( email === 'admin@baaperbank.com' && password === 'admin'){
        console.log('Valid User');
        window.location.href = 'bank.html';
    }
    else{
        alert('invalid!!!');
    }
})