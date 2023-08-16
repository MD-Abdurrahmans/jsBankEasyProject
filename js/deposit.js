




document.getElementById("depositBtn").addEventListener("click",function(){

    const newDepositAmount= getInputFieldValueById('depositField');

    const previousDepositAmount =getTextValue('deposit');

    const currentDepositAmount=previousDepositAmount + newDepositAmount;

     setTextValue('deposit',currentDepositAmount);

//  balance
     const balance=getTextValue('balance');

    const currentBalance= balance+ newDepositAmount;

    setTextValue('balance',currentBalance);


// withdraw






})