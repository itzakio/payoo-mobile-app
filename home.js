document.getElementById('log-out')
.addEventListener('click', function(){
    window.location.href = './index.html';
})

// add money features
document.getElementById('add-money-submit').addEventListener('click', function(e){
    e.preventDefault();
    console.log("button clicked")

    const bank = document.getElementById('bank').value;
    const accountNumber = document.getElementById('account-number').value;
    const addAmountStr = document.getElementById('add-amount').value;
    const addAmount = parseInt(addAmountStr);
    const pinNumber = document.getElementById('add-pin').value;
    const availableBalance = parseInt(document.getElementById('available-balance').innerText);

    const myPin = '2001';
    const myAccountNum = '19091291960';
    if (accountNumber === ''){
        alert('Please provide account number');
        return;
    }
    else if (accountNumber !== myAccountNum){
        alert('Please provide valid account number');
        return;
    }
    else if (addAmountStr === ''){
        alert('Please provide add amount');
        return;
    }
    else if (pinNumber === ''){
        alert('Please provide pin number');
        return;
    }
    else if (pinNumber === myPin){
        const newBalance = availableBalance + addAmount;
        document.getElementById('available-balance').innerText = newBalance;
        document.getElementById('add-amount').value = '';
        document.getElementById('add-pin').value = '';
    }
    else {
        alert('Pin number is invalid');
    }


})

// cash out features
document.getElementById('cash-out-submit')
.addEventListener('click', function(e){
    e.preventDefault();
    const availableBalance = parseInt(document.getElementById('available-balance').innerText);
    const agentNumber = document.getElementById('agent-number').value;
    const withdrawStr = document.getElementById('withdraw-amount').value;
    const withdrawAmount = parseInt(withdrawStr); 
    const withdrawPin = document.getElementById('cash-out-pin').value;
    const myWithdrawPin = '2001';

    if (agentNumber.length != 11){
        alert('Please provide a valid agent number');
        return;
    }
    else if (withdrawAmount <= 0 || withdrawStr === ''){
        alert('Please entered the withdraw amount');
        return;
    }
    else if (withdrawPin !== myWithdrawPin){
        alert('Pin number is invalid');
        return;
    }
    else if (availableBalance < withdrawAmount){
        alert('Insufficient Balance');
        return;
    }
    const newBalance = availableBalance - withdrawAmount;
    document.getElementById('available-balance').innerText = newBalance;
    document.getElementById('withdraw-amount').value = '';
    document.getElementById('cash-out-pin').value = '';

})


// toggle features

document.getElementById('btn-add-money')
.addEventListener('click', function(){
    document.getElementById('add-money-section').style.display = 'block';
    document.getElementById('cash-out-section').style.display = 'none';
})

document.getElementById('btn-cash-out')
.addEventListener('click', function(){
    document.getElementById('add-money-section').style.display = 'none';
    document.getElementById('cash-out-section').style.display = 'block';
})