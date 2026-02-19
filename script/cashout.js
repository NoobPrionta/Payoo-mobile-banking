document.getElementById("cashout-btn").addEventListener("click",function(){
    //1.Get the agent number and validate
    const cashoutNumberInput=document.getElementById('cashout-number');
    const cashoutNumber = cashoutNumberInput.value;
    console.log(cashoutNumber);
    if(cashoutNumber.length !=11){
        alert("Invalid Agent Number");
        return;
    }

    //2.get the amount,validate
    const cashoutAmountInput = document.getElementById("cashout-amount");
    const cashoutAmount = cashoutAmountInput.value;
    console.log(cashoutAmount);

    //3.get the Current balance,validate ,convert to number
    const balanceElement=document.getElementById("balance");
    const balance = balanceElement.innerText;
    console.log('Available balance:',balance);

    //4.Calculate new balance
    const newBalance = Number(balance)-Number(cashoutAmount);
    
    if(newBalance<0){
        alert("Invalid balance");
        return;
    }
    console.log('new balance',newBalance);

    //5.get the pin and verify
    const cashoutPinInput = document.getElementById("cashout-pin");
    const pin = cashoutPinInput.value;
    if(pin === '1234'){
        //5-1 true :: show an alert>set balace
        alert("Cashout Successful");
        console.log('new balance',newBalance);
        balanceElement.innerText = newBalance;
    }else{
        //5-1 false :: show an error alert>return
        alert("Invalid pin");
        return;
    }
})