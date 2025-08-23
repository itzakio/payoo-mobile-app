document.getElementById('btn-add-money')
.addEventListener('click', function(e){
    e.preventDefault();

    const bank = document.getElementById('bank').value;
    const accountNumber = document.getElementById('account-number').value;
    const addAmountStr = document.getElementById('add-amount').value;
    const addAmount = parseInt(addAmountStr);
    const pinNumber = document.getElementById('add-pin').value;
    const availableBalance = parseInt(document.getElementById('available-balance').innerText);
    
    
    const myPin = '2001';
    const myAccountNum = '19091291960';
    
    if (accountNumber !== myAccountNum){
        alert('Please provide valid account number')
    }
    if (addAmountStr === ''){
        alert('Please provide add amount')
    }
    else if (pinNumber === myPin){
        const newBalance = availableBalance + addAmount;
        document.getElementById('available-balance').innerText = newBalance;
        document.getElementById('add-amount').value = '';
        document.getElementById('add-pin').value = '';
    }
    else {
        alert('Pin number is invalid')
    }

    // console.log(bank, accountNumber, addAmount, pinNumber);
    // console.log(availableBalance);
    
    
})