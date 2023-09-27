// Get references to the select element and table
var select = document.getElementById("categoryFilter");
var table = document.getElementById("items_table");
var rows = table.getElementsByTagName("tr");
// Add an event listener to the select element
select.addEventListener("change", function () {
    var selectedCategoryText = select.options[select.selectedIndex].text; // Get the text of the selected option
    // Loop through all table rows (skip the header row)
    for (var i = 1; i < rows.length; i++) {
        var row = rows[i];
        var categoryCell = row.cells[5]; // Get the cell containing the category
        // Check if the selected category is "All" or matches the text in the row
        if (selectedCategoryText === "Все" || categoryCell.textContent === selectedCategoryText) {
            row.style.display = "table-row"; // Show the row
        } else {
            row.style.display = "none"; // Hide the row
        }
    }
});
