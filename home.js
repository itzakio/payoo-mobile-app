document.getElementById('btn-add-money')
.addEventListener('click', function(e){
    e.preventDefault();
    console.log('add money clicked')

    const bank = document.getElementById('bank').value;
    const accountNumber = document.getElementById('account-number').value;
    const addAmount = parseInt(document.getElementById('add-amount').value);
    const pinNumber = document.getElementById('add-pin').value;
    const availableBalance = parseInt(document.getElementById('available-balance').innerText);
    
    const newBalance = availableBalance + addAmount;
    document.getElementById('available-balance').innerText = newBalance;
    document.getElementById('add-amount').value = '';

    console.log(bank, accountNumber, addAmount, pinNumber);
    console.log(availableBalance);
    
    
})