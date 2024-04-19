// const calculator = document.getElementById("calculator");



// const key = document.getElementById("key");


const display = document.getElementById("display");

function appendToDisplay(input){
    display.value += input;
}

function clareDisplay(){
    display.value = "";
}

function calculate(){
    try{
        display.value =eval(display.value);
    }
    catch(error){
        display.value = "error";
    }
}
