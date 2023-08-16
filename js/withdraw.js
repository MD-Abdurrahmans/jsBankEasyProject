
document.getElementById("withdrawBtn").addEventListener("click",function(){


 
    const newWithdraw=getInputFieldValueById('withdrawField');

    const previousWithdraw=getTextValue('withdrow');

    const currentWithdraw=previousWithdraw + newWithdraw;

    setTextValue('withdrow',currentWithdraw);


    // minus from balance from withdraw


    const nowBalance=getTextValue('balance');

    const nowCurrentBalance=nowBalance - newWithdraw;

    setTextValue('balance',nowCurrentBalance);

})