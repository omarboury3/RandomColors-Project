const pText = document.getElementsByClassName("color-number");
const inputRange = document.getElementsByClassName("input-rgb");

const body = document.getElementsByTagName("body");



for(let i = 0; i<inputRange.length; i++) {

    pText[i].textContent = inputRange[i].value;

}


function RangeNumber() {

    let value1;
    let value2;
    let value3;
    
    for(let i = 0; i<inputRange.length; i++) {

        pText[i].textContent = inputRange[i].value;
        if(i == 0) {

            value1 = inputRange[i].value;

        }
        else if(i == 1) {

            value2 = inputRange[i].value;

        }
        else {

            value3 = inputRange[i].value;

        }


    }
    
    body[0].style.backgroundColor = `rgb(${value1}, ${value2}, ${value3})`;
    
    
}





