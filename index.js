const container = document.querySelector('.container');
container.style.cssText = `width: ${16 * 10}px; height: ${16 * 10}px`;
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
    createBoard(num);
}
function createBoard(size){
    while(container.hasChildNodes()){
        container.removeChild(container.firstChild);
    };
    container.style.cssText = `width: ${size * 10}px; height: ${size * 10}px`;
    for(let i = 0; i < size; i++){
        for(let j = 0; j< size; j++){
            const square = document.createElement('div');
            square.style.cssText = 'width: 10px; height: 10px; background-color: grey';
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
    container.style.cssText = `width: ${16 * 10}px; height: ${16 * 10}px`;
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
}