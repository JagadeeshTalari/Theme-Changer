const button = document.querySelector('button');
let bgColor = 'white';
let textColor = 'black';

function update(color){
    if(color == 'white'){
    document.body.style.backgroundColor = 'white';
    document.body.style.color = 'black';
    bgColor = 'white';
    }
    else{
    document.body.style.backgroundColor = '#212121';
    document.body.style.color = 'white';
    bgColor = '#212121';
    }
}

button.addEventListener( 'click', () => bgColor == 'white'? update('#212121'): update('white'));