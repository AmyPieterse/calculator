
let sum ='';
let calculation = [];
let result = document.querySelector('#display');
let numbers = document.querySelectorAll('.numbers');

    function operators(symbol){
    let resultArr = result.value.split(' ');
    switch(symbol){
        case '+':
            if(resultArr[resultArr.length-1] == '+'){
                result.value = output.slice(0, -1);
            } else {
                result.value += '+'
            }
            
        break;
        case '-':
            if(resultArr[resultArr.length-1] == '-'){
                result.value = output.slice(0, -1);
            } else {
                result.value += '-'
            }
        
        break;
        case '/':
            if(resultArr[resultArr.length-1] == '/'){
                result.value = output.slice(0, -1);
            } else {
                result.value += '/'
            }
        break;
        case '*':
            if(resultArr.includes('*')){
                result.value = output.slice(0, result.indexOf('*'));
            } else {
                result.value += '*'
            }
        break;
        case '=':
            result.value = eval(result.value);
        break;
        
    }
}
numbers.forEach(number => number.addEventListener('click', (event) => {
    let value = event.target.value;
    if (value === '.') {
        if (!result.value.includes('.')) {
            result.value += value;
        }
    } 
    else {
        result.value += value;
    }

}));

document.querySelector('#CE').addEventListener('click', ()=>{
    let output = result.value;
    result.value = output.slice(0, -1);
})
function clear() {
    result.value = "";
}
document.querySelector('#AC').addEventListener('click', ()=>{
    clear(); 
})

//function isButtonClicked()