const container = document.querySelector(".container");

//create 16x16 square of divs in container
//make them appear as a grid using flexbox
//to make them visible give a outline (not border) to each


function generateGrid(numSquares) {
    for (let i = 0; i < numSquares; i++) {
        let div = document.createElement("div");
        div.classList.add("rowDiv")
        container.append(div);
        for (let j = 0; j < numSquares; j++) {
            let divIn = document.createElement("div");
            divIn.classList.add("columnDiv")
            divIn.style.width = 960 / numSquares + "px";
            divIn.style.height = 960 / numSquares + "px";
            div.append(divIn);
        }
    }
}

function changeSquares(e) {
    let numSquares = -1;
    while (numSquares <= 0 || numSquares > 100) {
        numSquares = prompt("Please enter the number of Squares between 0 and 100");
    }
    container.innerHTML = "";
    generateGrid(numSquares);

    //in case the grid number is changed
    hover();
}

function hover(){
    let columnDivs = document.querySelectorAll(".columnDiv");
    columnDivs.forEach(columnDiv => columnDiv.onmouseover = function () {
        console.log(columnDiv);
        columnDiv.classList.add("hover");
    })
}

function emptyGrid(){
    let columnDivs = document.querySelectorAll(".columnDiv");;
    columnDivs.forEach(columnDiv =>  {
        if (columnDiv.classList.contains("hover")){
            columnDiv.classList.remove("hover");
            return;
        }
        return;
    })
}

//Generates the base 16x16 grid and checks for the change Squares button being clicked
generateGrid(16);
const button = document.querySelector(".changeSquares");
button.addEventListener('click', changeSquares);

//changes the background if you hover over it for the base 16x16 grid
hover();

const clearButton = document.querySelector(".empty");
clearButton.addEventListener('click', emptyGrid);