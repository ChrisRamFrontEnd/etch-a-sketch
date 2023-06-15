const container = document.querySelector('.container');
for(let i = 0; i < 16; i++){
    for(let j = 0; j< 16; j++){
        const square = document.createElement('div');
        square.style.cssText = 'width: 10px; height: 10px; background-color: grey';
        square.addEventListener('mouseover',()=>{
            square.style.backgroundColor = 'black';
        });
        container.appendChild(square);
    }
}
function boardSize(){
    let num = prompt('Please enter the size of the board you would like, limit: 100');
    while(num > 100){
        num = prompt('Please try again, enter the size of the board limit: 100');
    };
}