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