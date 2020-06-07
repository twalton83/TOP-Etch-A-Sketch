const container = document.querySelector('#container')
const createButton = document.querySelector('.create')
const clearButton = document.querySelector('.clear')
let input = document.querySelector('input')
let color = changeColors()

function createGrid(){
    if(container.firstElementChild){while(container.firstElementChild){container.removeChild(container.firstElementChild)}}
    columns = input.value
    container.style.gridTemplateColumns = `repeat(${columns}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${columns}, 1fr)`;
    container.style.gridGap = '1px'
    color = changeColors()
    for (i = 0; i < columns * columns; i++){
        let div = document.createElement('div') 
        div.className = 'gridItem'
        div.style.backgroundColor = 'black'
        div.addEventListener('mouseover', mouseOverColor)
        container.appendChild(div)
    }
}

function clearGrid(){
    //while firstElementChild exists, remove it
    while (container.firstChild){
        container.removeChild(container.firstChild)
    } 
}
function mouseOverColor(e){
  
    console.log(e.target.style.backgroundColor)
    e.target.style.backgroundColor = color
}

function changeColors(){
    let startingRed = Math.floor(Math.random() * 256);
    let startingBlue = Math.floor(Math.random() * 256);
    let startingGreen = Math.floor(Math.random() * 256);
    let randomColor = `rgb(${startingRed}, ${startingBlue}, ${startingGreen})`
    return randomColor
}

createButton.addEventListener('click', createGrid)
clearButton.addEventListener('click', function(){
    clearGrid()
})