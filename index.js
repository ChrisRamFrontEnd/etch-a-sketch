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
