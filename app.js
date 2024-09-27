let count = 2; 

function addRow() {
    const table = document.getElementById("employeeTable");
    const newRow = table.insertRow();

    newRow.innerHTML = `
        <td>${count}</td>
        <td><input type="text" placeholder="Adınız" id="newName"></td>
        <td><input type="text" placeholder="Soyadınız" id="newSurname"></td>
        <td><input type="text" placeholder="Maaşınız" id="newSalary"></td>
        <td>
            <button onclick="saveRow(this)">Yadda saxla</button>
            <button onclick="cancelRow(this)">İmtina et</button>
        </td>
    `;
    count++;
}

function saveRow(button) {
    const row = button.parentNode.parentNode;
    const name = row.querySelector("#newName").value;
    const surname = row.querySelector("#newSurname").value;
    const salary = row.querySelector("#newSalary").value;

    if (name && surname && salary) {
        row.innerHTML = `
            <td>${row.rowIndex}</td>
            <td>${name}</td>
            <td>${surname}</td>
            <td>${salary}</td>
            <td><button onclick="editRow(this)">Düzəliş et</button> <button onclick="deleteRow(this)">Sil</button></td>
        `;
    } else {
        alert("Zəhmət olmasa bütün xanalari doldurun!");
    }
}

function cancelRow(button) {
    const row = button.parentNode.parentNode;
    row.remove();
    count--;
}

function editRow(button) {
    const row = button.parentNode.parentNode;
    const name = row.cells[1].innerText;
    const surname = row.cells[2].innerText;
    const salary = row.cells[3].innerText;

    row.innerHTML = `
        <td>${row.rowIndex}</td>
        <td><input type="text" value="${name}"></td>
        <td><input type="text" value="${surname}"></td>
        <td><input type="text" value="${salary}"></td>
        <td>
            <button onclick="saveEdit(this)">Yadda saxla</button>
            <button onclick="cancelEdit(this)">İmtina et</button>
        </td>
    `;
}

function saveEdit(button) {
    const row = button.parentNode.parentNode;
    const name = row.querySelector("input:nth-child(1)").value;
    const surname = row.querySelector("input:nth-child(2)").value;
    const salary = row.querySelector("input:nth-child(3)").value;

    row.innerHTML = `
        <td>${row.rowIndex}</td>
        <td>${name}</td>
        <td>${surname}</td>
        <td>${salary}</td>
        <td><button onclick="editRow(this)">Düzəliş et</button> <button onclick="deleteRow(this)">Sil</button></td>
    `;
}

function cancelEdit(button) {
    const row = button.parentNode.parentNode;
    row.innerHTML = `
        <td>${row.rowIndex}</td>
       
        <td><button onclick="editRow(this)">Düzəliş et</button> <button onclick="deleteRow(this)">Sil</button></td>
    `;
}

function deleteRow(button) {
    const row = button.parentNode.parentNode;
    row.remove();
    count--;
}