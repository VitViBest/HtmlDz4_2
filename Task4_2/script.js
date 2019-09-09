document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("create").addEventListener("click", function (e) {
        let table = document.createElement("table");
        let columns = parseInt(document.getElementById("columns").value);
        let rows = parseInt(document.getElementById("rows").value);
        if (columns <= 0 || rows <= 0 || isNaN(columns) || isNaN(rows)) {
            alert("Invalid input data");
            e.preventDefault();
            return false;
        }
        for (let i = 1; i <= rows; i++) {
            let tr = document.createElement("tr");
            for (let j = 1; j <= columns; j++) {
                let td = document.createElement("td");
                td.width = 100 / columns - 1 + "%";
                tr.appendChild(td);
            }
            table.appendChild(tr);
        }
        let main = document.getElementById("main");
        main.innerHTML = "";
        main.appendChild(table);
        e.preventDefault();
    });

    document.getElementById("create").addEventListener("click", function (e) {
        let table = document.getElementsByTagName("table")[0];
        for (let i = 1; i <= table.childNodes.length; i++)
            for (let j = 1; j <= table.childNodes[i - 1].childNodes.length; j++)
                table.childNodes[i - 1].childNodes[j - 1].innerText = i.toString() + j.toString();
    });

    document.getElementById("main").addEventListener("click", function (e) {
        if (e.target.tagName == "TD")
            if (e.target.style.background != "yellow")
                e.target.style.background = "yellow";
            else
                e.target.style.background = "none";
    });

});