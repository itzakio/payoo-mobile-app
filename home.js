document.getElementById('log-out')
.addEventListener('click', function(){
    window.location.href = './index.html';
})

const transactionData = [];

// get inner value
function getInnerValue (id){
    const val = document.getElementById(id).value;
    return val;
}

// get inner text in number
function getInnerTextNum (id){
    const text = parseInt(document.getElementById(id).innerText);
    return text;
}

// set inner text (only for balance)
function setInnerText (text){
    document.getElementById('available-balance').innerText = text;
}
// set inner value
function setInnerValue (id, value){
    document.getElementById(id).value = value;
}

// add money features
document.getElementById('add-money-submit').addEventListener('click', function(e){
    e.preventDefault();

    const bank = getInnerValue('bank');
    const accountNumber = getInnerValue('account-number');
    const addAmountStr = getInnerValue('add-amount')
    const addAmount = parseInt(addAmountStr);
    console.log(typeof addAmount);
    const pinNumber = getInnerValue('add-pin');
    const availableBalance = getInnerTextNum('available-balance');

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
    else if (addAmount <= 0 || typeof addAmount !== 'number'){
        alert('Invalid amount');
        return;
    }
    else if (pinNumber === ''){
        alert('Please provide pin number');
        return;
    }
    else if (pinNumber === myPin){
        const newBalance = availableBalance + addAmount;
        setInnerText(newBalance);
        document.getElementById('add-amount').value = '';
        document.getElementById('add-pin').value = '';
    }
    else {
        alert('Pin number is invalid');
    }

    const data = {
        name:'Add Money',
        date: new Date().toLocaleTimeString(),
        src:"./assets/addmoney.png ",
        changes: '+',
        amount: addAmount
    }

    transactionData.push(data);
    

})

// cash out features
document.getElementById('cash-out-submit')
.addEventListener('click', function(e){
    e.preventDefault();
    const availableBalance = getInnerTextNum ('available-balance');
    const agentNumber = getInnerValue('agent-number');
    const withdrawStr = getInnerValue('withdraw-amount');
    const withdrawAmount = parseInt(withdrawStr); 
    const withdrawPin = getInnerValue('cash-out-pin');

    const myWithdrawPin = '2001';

    if (agentNumber.length != 11){
        alert('Please provide a valid agent number');
        return;
    }
    else if (withdrawAmount <= 0 || withdrawStr === '' || typeof withdrawAmount !== 'number'){
        alert('Please enter the withdraw amount');
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
    setInnerText(newBalance);
    setInnerValue('withdraw-amount','');
    setInnerValue('cash-out-pin','');

     const data = {
        name:'Cash out',
        date: new Date().toLocaleTimeString(),
        src:"./assets/cashout.png ",
        changes: '-',
        amount: withdrawAmount
    }

    transactionData.push(data);
    

})

// Transfer Money features
document.getElementById('transfer-money-submit')
.addEventListener('click', function(e){
    e.preventDefault();
    const availableBalance = getInnerTextNum ('available-balance');
    const userAccNum = getInnerValue('user-acc-number');
    const transferStr = getInnerValue('transfer-amount');
    const transferAmount = parseInt(transferStr); 
    const transferPin = getInnerValue('transfer-pin');

    const myTransferPin = '2001';
    const myUserAccNumber = '15687774710';

    if (userAccNum === ''){
        alert('Please provide account number');
        return;
    }
    else if(userAccNum !== myUserAccNumber){
        alert('No user exist in this account number');
        return;
    }
    else if (transferAmount <= 0 || transferStr === '' || typeof transferAmount !== 'number'){
        alert('Please enter the withdraw amount');
        return;
    }
    else if (transferPin !== myTransferPin){
        alert('Pin number is invalid');
        return;
    }
    else if (availableBalance < transferAmount){
        alert('Insufficient Balance');
        return;
    }
    const newBalance = availableBalance - transferAmount;
    setInnerText(newBalance);
    setInnerValue('transfer-amount','');
    setInnerValue('transfer-pin','');

     const data = {
        name:'Transfer Money',
        date: new Date().toLocaleTimeString(),
        src:"./assets/transfer.png ",
        changes: '-',
        amount: transferAmount
    }

    transactionData.push(data);
    

})

// Transaction features
document.getElementById('btn-transaction')
.addEventListener('click', function(){
    const transactionContainer = document.getElementById('transaction-container');
    transactionContainer.innerText = '';
    for (const data of transactionData){
        const div = document.createElement('div')
        div.innerHTML=`
        <div class="max-w-sm w-full mx-auto p-2  mt-2 bg-white rounded-xl flex justify-between items-center">
        <div class="flex items-center">
            <div class="size-12 bg-[#f4f5f7] rounded-full flex justify-center items-center ">
            <img src="${data.src}" alt="">
        </div>
        <div class="ml-3">
            <h2>${data.name}</h2>
            <p>${data.date}</p>
        </div>
        </div>
        <div class = "flex items-center gap-2">
        <p class = "text-lg font-semibold ">${data.changes} ${data.amount} TK</p>
        <i class="fa-solid fa-ellipsis-vertical"></i>
        </div>
    </div>
        `
    transactionContainer.appendChild(div);
    }
    
})

document.getElementById('btn-latest-payment')
.addEventListener('click', function(){
    const data = document.getElementById('transaction-container').innerHTML
    const latestPaymentContainer = document.getElementById('latest-payment-container');
    latestPaymentContainer.innerHTML = data;
})


// toggle features
/** 
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
*/

// function for button active

function buttonToggle (id){
    document.getElementById(id)
    .addEventListener('click', function(){
        const allBtn = document.getElementsByClassName('features-btn')
        //console.log(allBtn);
        for (const btn of allBtn){
            btn.classList.remove('bg-blue-200', 'border-blue-500');
            btn.classList.add('border-gray-300');
        }
        document.getElementById(id).classList.add('bg-blue-200', 'border-blue-500');
        document.getElementById(id).classList.remove('border-gray-300');
    })
}

buttonToggle('btn-add-money');
buttonToggle('btn-cash-out');
buttonToggle('btn-transfer-money');
buttonToggle('btn-get-bonus');
buttonToggle('btn-pay-bill');
buttonToggle('btn-transaction');


// toggle features in function 

function elementBlock (btnId, elementId){
    document.getElementById(btnId)
    .addEventListener('click', function(){
    const allSection = document.querySelectorAll('.features');
    for (const el of allSection){
        const theSectionId = el.id;
        if (theSectionId === elementId){
            document.getElementById(theSectionId).style.display = 'block';
        }
        else{
            document.getElementById(theSectionId).style.display = 'none';
        }
    }
})
}

elementBlock('btn-add-money','add-money-section');
elementBlock('btn-cash-out','cash-out-section');
elementBlock('btn-transfer-money', 'transfer-money-section');
elementBlock('btn-get-bonus', 'get-bonus-section');
elementBlock('btn-pay-bill', 'pay-bill-section');
elementBlock('btn-transaction', 'transaction-section');
elementBlock('btn-latest-payment', 'latest-payment-section');



