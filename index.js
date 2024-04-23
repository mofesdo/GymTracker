console.log("connected")

generateTable();
function generateTable(){
    let table = document.querySelector("#tableBody");
    console.log(table)
    for(let i = 0; i < table.children.length; i++){
        let row = table.children[i];
        for(let i = 0; i < 52; i++){
            let box = document.createElement("td");
            box.innerHTML = ""
            row.appendChild(box)
        }
        console.log(row)
    }
}

function table2(){
    let table = document.querySelector("#table2");
    let day = 1;
    for(let i = 0; i < 365; i++){
        let box = document.createElement("td");
        box.innerHTML = "";
        box.classList.add(`day${i}`)
    }
}