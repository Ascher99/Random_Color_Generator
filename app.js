let container = document.querySelector('.container');
let button = document.querySelector('#btn');
let displayHex = document.querySelector('#hex');

const chars ='0123456789ABCDEF';
const hexlength=6;

function randomInt (min,max){
    return Math.floor(Math.random() * (max-min+1) + min);
}

function getRandomColor(){
    let color = '#';
    for (let i=0;i<6;i++){
        let getRandomChar=chars.charAt(randomInt(0,15));
        color += getRandomChar;
    }

    displayHex.innerHTML = color;
    container.style.backgroundColor = color;

}

getRandomColor();

button.addEventListener('click',function(){
getRandomColor();

},false);