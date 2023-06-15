const container = document.querySelector('.container');
for(let i = 0; i < 16; i++){
    for(let j = 0; j< 16; j++){
        const square = document.createElement('div');
        square.style.cssText = 'width: 100px; height: 100px; background-color: grey';
        container.appendChild(square);
    }
}