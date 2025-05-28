// Declerations
const container = document.querySelector(".container");
let n = 16
let size = `${500 / n}px`
let color = "black"
let boxes
let isMouseDown = false;
let isRainbow = false;

//Grid Function

function setupGrid() {
    for (let i = 1; i <= n; i++) {
        let row = document.createElement("div");
        row.classList.add("row");
        container.append(row);

        for (let j = 1; j <= n; j++) {
            let box = document.createElement("div");
            box.classList.add("box");
            box.style.height = size
            box.style.width = size
            row.append(box);
        }
    }
    boxes = document.querySelectorAll(".box");

    document.body.addEventListener("mousedown", () => {
        isMouseDown = true;
    });
    document.body.addEventListener("mouseup", () => {
        isMouseDown = false;
    });

    boxes.forEach((box) => {
        box.addEventListener("mousedown", () => {
            applyColor(box)
        });

        box.addEventListener("mouseover", () => {
            if (isMouseDown) {
            applyColor(box)
            }
        });
    });
}


// Creating The Default grid

setupGrid();


// Rainbow Button

let rainbow = document.querySelector(".rainbow");
rainbow.addEventListener("click", () => {
    isRainbow = true
})

// Rainbow Function

function rainbowColor() {
    return `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`
}

// Applying color to box

function applyColor(box) {
    box.style.backgroundColor = isRainbow ? rainbowColor() : color;
}

// Reset Functiom

let reset = document.querySelector(".reset");
reset.addEventListener("click", () => {
    boxes.forEach((box) => {
        box.style.backgroundColor = "rgb(245, 245, 245)"
    })
    isRainbow = false
})


// Custom Grid

let grid = document.querySelector(".grid");
grid.addEventListener("click", () => {
    document.querySelectorAll(".row").forEach(el => el.remove());
    n = gridSize()
    size = `${500 / n}px`
    setupGrid();

})

// Taking grid size from user

function gridSize() {
    let inputSize;
    while (inputSize === null || !(inputSize > 0 && inputSize <= 100)) {
        inputSize = prompt("Enter Grid Size");
    }
    return inputSize
}

let colorInput = document.querySelector("#colorInput")
colorInput.addEventListener("input",()=>{
    color = colorInput.value;
    isRainbow = false;

})
colorInput.addEventListener("click",()=>{
    color = colorInput.value;
    isRainbow = false;
})

