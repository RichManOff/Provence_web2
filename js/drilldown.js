// var oldId = "";
// function showBtn(btnId) {
//   if (oldId != "") {
//       var oldRow = document.getElementById(oldId);
//       oldRow.style.display = 'none';
//   }
//   oldId = btnId;
//   var row = document.getElementById(btnId);
//   row.style.display = 'flex';
// }

// function checkStatus(form_status, myguid, afm_response) {
//     var tokens = splunkjs.mvc.Components.getInstance("default");
//     if(myguid == "не отправлено"){
      
//     } else {
//         hide_button_list()
//         showBtn("form_sended")
//     }
// }

var oldTableNumber = 0;
showTable(1)
function showTable(tableNumber) {
    if (oldTableNumber == 0) {
        const tableId = 'table' + tableNumber;

        const activeTableId = 'setTable' + tableNumber;
        changeDisplayToBlock(tableId, activeTableId);
        oldTableNumber = tableNumber;
    }
    else {
        const tableId = 'table' + tableNumber;
        const oldTableId = 'table' + oldTableNumber;

        const activeTableId = 'setTable' + tableNumber;
        const inactiveTableId = 'setTable' + oldTableNumber;
        changeDisplayToNone(oldTableId, inactiveTableId);
        changeDisplayToBlock(tableId, activeTableId);
        oldTableNumber = tableNumber;
    }
}

function changeDisplayToBlock(tableId, activeTableId) {
    var table = document.getElementById(tableId);
    table.style.display = 'block';
    var active_table = document.getElementById(activeTableId);
    active_table.classList.add("active");
}

function changeDisplayToNone(tableId, inactiveTableId) {
    var table = document.getElementById(tableId);
    table.style.display = 'none';
    var inactive_table = document.getElementById(inactiveTableId);
    inactive_table.classList.remove("active");
}
//   Event listener for the button click to update the query
document.getElementById("setTable1").addEventListener("click", function () {
    showTable(1);
});

document.getElementById("setTable2").addEventListener("click", function () {
    showTable(2);
});

document.getElementById("setTable3").addEventListener("click", function () {
    showTable(3);
});
