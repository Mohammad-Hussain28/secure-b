var selectedRow = null;
function submit(e){
    event.preventDefault();
    var formData = readFormData();
    if(selectedRow === null){
        insertNewRecord(formData);
    }else{
        updateRecord(formData)
    }
    resetForm();
    }
// Read operation using this function
function readFormData(){
    var formData = {};
    formData["Name"] = document.getElementById("Name").value;
    formData["MoblieNumber"] = document.getElementById("MobileNumber").value;
    formData["Email"] = document.getElementById("Email").value;
    formData["Subject"] = document.getElementById("Subject").value;
    formData["Message"] = document.getElementById("Message").value;
    return formData;
}

// Create operation
function insertNewRecord(data){
    var table = document.getElementById("CustomerData").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    var cell1 = newRow.insertCell(0);
        cell1.innerHTML = data.Name;
    var cell2 = newRow.insertCell(1);
        cell2.innerHTML = data.MobileNumber;
    var cell3 = newRow.insertCell(2);
        cell3.innerHTML = data.Email;
    var cell4 = newRow.insertCell(3);
        cell4.innerHTML = data.Subject;
    var cell5 = newRow.insertCell(4);
        cell5.innerHTML = data.Message;
    var cell6 = newRow.insertCell(5);
        cell6.innerHTML = `<a href="#" onClick='onEdit(this)'>Edit</a>
                        <a href="#" onClick='onDelete(this)'>Delete</a>`;
}

// To Reset the data of fill input
function resetForm(){
    document.getElementById('Name').value = '';
    document.getElementById('MobileNumber').value = '';
    document.getElementById('Email').value = '';
    document.getElementById('Subject').value = '';
    document.getElementById('Message').value = '';
    selectedRow = null;
}

// For Edit operation
function onEdit(td){
    selectedRow = td.parentElement.parentElement;
    document.getElementById('Name').value = selectedRow.cells[0].innerHTML;
    document.getElementById('MobileNumber').value = selectedRow.cells[1].innerHTML;
    document.getElementById('Email').value = selectedRow.cells[2].innerHTML;
    document.getElementById('Subject').value = selectedRow.cells[3].innerHTML;
    document.getElementById('Message').value = selectedRow.cells[4].innerHTML;
}
function updateRecord(formData){
    selectedRow.cells[0].innerHTML = formData.Name;
    selectedRow.cells[1].innerHTML = formData.MobileNumber;
    selectedRow.cells[2].innerHTML = formData.Email;
    selectedRow.cells[3].innerHTML = formData.Subject;  
    selectedRow.cells[4].innerHTML = formData.Message;
}111
function onDelete(td){
    if(confirm('Are you sure you want to delete this record?')){
        row = td.parentElement.parentElement;
        document.getElementById('CustomerData').deleteRow(row.rowIndex);
        resetForm();
    }    
}