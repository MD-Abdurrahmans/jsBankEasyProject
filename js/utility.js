
function getInputFieldValueById(inputFieldGet){


  
    const inputField=document.getElementById(inputFieldGet);
    const inputFieldString=inputField.value;
    const newInputFieldNumber=parseFloat(inputFieldString);

    inputField.value="";
    return newInputFieldNumber;


}


function getTextValue(textValue){

 const text=document.getElementById(textValue);
 const textValueString=text.innerText;
 const textValueAmount=parseFloat(textValueString);

  return textValueAmount;
}



function setTextValue(p1,p2){

  const setId=  document.getElementById(p1);
  const setIdValue=setId.innerHTML =p2;

  return setIdValue;
}

