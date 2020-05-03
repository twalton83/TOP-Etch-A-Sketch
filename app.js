const container = document.querySelector('#container')
const createButton = document.querySelector('#create')
const clearButton = document.querySelector('#clear')
let input = document.querySelector('input')

function createGrid(){
    columns = input.value
    container.style.gridTemplateColumns = `repeat(${columns}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${columns}, 1fr)`;
    container.style.gridGap = '1px'
    for (i = 0; i < columns * columns; i++){
        let div = document.createElement('div') 
        div.className = 'gridItem'
        div.style.backgroundColor = 'black'
        container.appendChild(div)
    }
    items = document.querySelectorAll('.gridItem')
    items.forEach(item => {
        item.addEventListener('mouseenter', function(e){
            e.target.style.backgroundColor = 'white'
        })
    }
        
    );
    
    
}

function clearGrid(){
    //while firstElementChild exists, remove it
    while (container.firstElementChild){
        container.removeChild(container.firstElementChild)
    }
}


createButton.addEventListener('click', function(){
    createGrid()
})
clearButton.addEventListener('click', function(){
    clearGrid()
})