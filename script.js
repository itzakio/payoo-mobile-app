// Login functionality
document.getElementById('btn-login')
.addEventListener('click', function(e){
    e.preventDefault();
    const myMobNumber = 01909129196;
    const myPinNumber = 2001;

    const mobNumber = document.getElementById('mob-number').value;
    const mobNumberConverted = parseInt(mobNumber);
    const pinNumber = document.getElementById('password').value;
    const pinNumberConverted = parseInt(pinNumber);
    
    if (myMobNumber === mobNumberConverted && myPinNumber === pinNumberConverted){
        window.location.href='./home.html'
    }
    else{
        alert('Invalid Phone number of Pin Number')
    }
})