// Add event listener
document.getElementById('btn-deposit').addEventListener('click', function(){
    // Get the amount from input
    const depositField = document.getElementById('deposit-field');
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);
    
    // get the deposit total 
    // for non input(element other than input, textarea) use innerText to get the text 
    const depositTotalElem = document.getElementById('deposit-total');
    const previousDepositTotalString = depositTotalElem.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);
    const currentDepositTotal = previousDepositTotal + newDepositAmount;
    depositTotalElem.innerText = currentDepositTotal;

    // Balance current Total
    const balanceTotalElem = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElem.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);
    const currentBalanceTotal = previousBalanceTotal + newDepositAmount;
    balanceTotalElem.innerText = currentBalanceTotal;


    // Clear the deposit field
    depositField.value = '';
})