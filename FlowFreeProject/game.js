const params = new URLSearchParams(window.location.search);
const id = Number(params.get("level"));  // המרה למספר

console.log("Level ID:", id);
let gameLevels = [

    // שלב 1
    [
        { color: "red",    start: {row:0,col:0}, end: {row:4,col:1} },
        { color: "blue",   start: {row:1,col:2}, end: {row:4,col:2} },
        { color: "green",  start: {row:3,col:1}, end: {row:0,col:2} },
        { color: "yellow", start: {row:0,col:4}, end: {row:3,col:3} },
        { color: "orange", start: {row:1,col:4}, end: {row:4,col:3} }
    ]
];

let currentLevel = gameLevels[id-1];
console.log(gameLevels);
console.log(currentLevel);
let gameBoard = document.getElementById("game-container");
gameBoard.style.gridTemplateColumns = `repeat(${currentLevel.length}, 1fr)`;
gameBoard.style.gridTemplateRows = `repeat(${currentLevel.length}, 1fr)`;
const size = currentLevel.length; 
let cells = [];
for (let i = 0; i < size; i++) {
    cells[i] = [];
    for (let j = 0; j < size; j++) {
        let cell = document.createElement("div");
        cell.style.border = "1px solid #ccc";
        cell.style.width = "50px";
        cell.style.height = "50px";
        gameBoard.appendChild(cell);
        cells[i][j] = cell;
    }
}

// צובע את נקודות ההתחלה והסיום של כל צבע
for (let colorObj of currentLevel) {
    let {start, end, color} = colorObj;
    cells[start.row][start.col].style.backgroundColor = color;
    cells[end.row][end.col].style.backgroundColor = color;
}
let c1=null, c2=null;
for (let i = 0; i < gameBoard.children.length; i++) {
    gameBoard.children[i].addEventListener("click", handleMouseDown);
    gameBoard.children[i].addEventListener("mouseover", handleMouseEnter);

    


}
function handleMouseDown(event) 
{
    if(c1==null)
    {
        if(event.target.style.backgroundColor!="")
        {
             c1=event.target;
       

        c1.style.border="2px solid black";
 

        }
        
    }
    else if(c2!=null)

    {
       c1=null;
       c2.style.border="1px solid #ccc";
       c2=null;
    }
   

}
function handleMouseEnter(event) 
{

    if(c1!=null)

    {
        c2=event.target;
        c2.style.border="2px solid black";
        event.target.style.backgroundColor=c1.style.backgroundColor;
    }

}

