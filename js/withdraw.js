document.getElementById('btn-withdraw').addEventListener('click', function(){
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);

    const withdrawTotalElem = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = withdrawTotalElem.innerHTML;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);

    const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    withdrawTotalElem.innerText = currentWithdrawTotal;


    const balanceTotalElem = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElem.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    balanceTotalElem.innerText = newBalanceTotal;
    withdrawField.value = '';
 })