const container = document.querySelector('#container')
const createButton = document.querySelector('.create')
const clearButton = document.querySelector('.clear')
let input = document.querySelector('input')

function createGrid(){
    if(container.firstElementChild){container.removeChild(container.firstElementChild)}
    columns = input.value
    container.style.gridTemplateColumns = `repeat(${columns}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${columns}, 1fr)`;
    container.style.gridGap = '1px'
    let color = changeColors()
    for (i = 0; i < columns * columns; i++){
        let div = document.createElement('div') 
        div.className = 'gridItem'
        div.style.backgroundColor = 'black'
        container.appendChild(div)
    }
    items = document.querySelectorAll('.gridItem')
    items.forEach(item => {
        item.addEventListener('mouseenter', function(e){
            e.target.style.backgroundColor = color
        })
    }
        
    );
    
    
}

function clearGrid(){
    //while firstElementChild exists, remove it
    while (container.firstChild){
        container.removeChild(container.firstChild)
    } 
}

function changeColors(){
    let startingRed = Math.floor(Math.random() * 256);
    let startingBlue = Math.floor(Math.random() * 256);
    let startingGreen = Math.floor(Math.random() * 256);
    let randomColor = `rgb(${startingRed}, ${startingBlue}, ${startingGreen})`
    return randomColor
}

createButton.addEventListener('click', function(){
    createGrid()
})
clearButton.addEventListener('click', function(){
    clearGrid()
})