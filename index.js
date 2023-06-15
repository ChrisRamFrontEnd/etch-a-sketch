const container = document.querySelector('.container');
let num = 16;
for(let i = 0; i < 16; i++){
    for(let j = 0; j< 16; j++){
        const square = document.createElement('div');
        square.style.cssText = `background-color: grey; width: ${500/16}px; height: ${500/16}px`;
        square.addEventListener('mouseover',()=>{
            square.style.backgroundColor = 'black';
        });
        container.appendChild(square);
    }
}

function boardSize(){
    num = prompt('Please enter the size of the board you would like, limit: 100');
    while(num > 100){
        num = prompt('Please try again, enter the size of the board limit: 100');
    };
    createBoard(num);
}
function createBoard(size){
    while(container.hasChildNodes()){
        container.removeChild(container.firstChild);
    };
    for(let i = 0; i < size; i++){
        for(let j = 0; j< size; j++){
            const square = document.createElement('div');
            square.style.cssText = `width: ${500/ size}px; height: ${500/size}px; background-color: grey`;
            square.addEventListener('mouseover',()=>{
                square.style.backgroundColor = 'black';
            });
            container.appendChild(square);
        }
    }
}
function resetBoard(){
    while(container.hasChildNodes()){
        container.removeChild(container.firstChild);
    };
    createBoard(num);
}