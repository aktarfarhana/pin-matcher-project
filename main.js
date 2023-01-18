var generateBtn = document.getElementById('generate-btn');
generateBtn.addEventListener('click',function(){

    var generateInput = document.getElementById('generate-input').value;
    var generateInputNumber = parseInt(generateInput);
    var generateInputValue = Math.random()*10000;
    var generateValue = Math.round(generateInputValue);
    document.getElementById('generate-input').value = generateValue;

})

function ClearInput(){
        document.getElementById('calc-output').value = "";
    }
function del(){
    var a = document.getElementById('calc-output').value;
    var b = a.slice(0,-1);
    document.getElementById('calc-output').value = b;
}
function calculator(NewValue){
    document.getElementById('calc-output').value += NewValue;
}


var submitButton = document.getElementById('submit-button');
submitButton.addEventListener('click',function(){
var generateInput = document.getElementById('generate-input');
var generetValue = generateInput.value;

var calOutput = document.getElementById('calc-output');
var calcValue = calOutput.value;

var pinFailue = document.getElementById('pin-failue');

var pinSuccess = document.getElementById('pin-success');

if(calcValue === generetValue){
    pinSuccess.style.display = 'block';
    pinFailue.style.display = 'none';
}
else{
    pinSuccess.style.display = 'none';
    pinFailue.style.display = 'block';
}
})