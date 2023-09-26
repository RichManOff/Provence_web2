var items = []
$.ajax({
    url: server_url + '/items',
    method: "GET",
    success: function(response) {
        items  = response;
        show_items(items)
        delete_items()
    },
    error: function(xhr, textStatus, errorThrown) {
        console.error("AJAX Error:", textStatus, errorThrown);
    }
})

var categories = []
$.ajax({
    url: server_url + '/categories',
    method: "GET",
    success: function(response) {
        categories  = response;
        show_categories(categories)
        delete_categories()
    },
    error: function(xhr, textStatus, errorThrown) {
        console.error("AJAX Error:", textStatus, errorThrown);
    }
})

// var orders = []
// $.ajax({
//     url: server_url + '/orders',
//     method: "GET",
//     success: function(response) {
//         orders  = response;
//         show_orders(categories)
//     },
//     error: function(xhr, textStatus, errorThrown) {
//         console.error("AJAX Error:", textStatus, errorThrown);
//     }
// })

function show_items(items){
    var items_body_list = ``

    items.forEach(function(element) {
        if(element.description === "null"){
            element.description = ""
        }
        var id = BigInt(element.id)
        var items_body = `
          <tr>
            <td>`+element.id+`</td>
            <td>`+element.name+`</td>
            <td><img src="`+element.picture+`" alt="" style="width: 100px; object-fit: contain;"/></td>
            <td>`+element.description+`</td>
            <td>`+element.price+`</td>
            <td>`+element.category.name+`</td>
            <td>
              <button class="btn btn-danger delete_btn" data-id="`+id+`">Удалить</button>
            </td>
          </tr>
        `
        items_body_list += items_body
    });
    $('#items_body').append(items_body_list); 
}

function delete_items(){
    $(".delete_btn").on("click", function(event) {
        var button = $(this);
        var id = button.data('id');
        if (confirm("Вы точно хотите удалить?")) {     
            $.ajax({
                type: 'POST',
                url: server_url + '/items/delete',
                data: { id: id },
                success: function(response) {
                    console.log('Deleted successfully!');
                    location.reload();
                },
                error: function(xhr, status, error) {
                    console.log('Error toggling favorite:', error);
                }
            });
            alert("Удалено!");
        }     
    });

}

function show_categories(categories){
    var categories_body_list = ``
    var categories_show_list = ``

    categories.forEach(function(element) {
        var categories_body = `
        <option value="`+element.id+`">`+element.name+`</option>
        `
        categories_body_list += categories_body

        var id = BigInt(element.id)
        var categories_body = `
          <tr>
            <td>`+element.id+`</td>
            <td>`+element.name+`</td>
            <td>
              <button class="btn btn-danger delete_category_btn" data-id="`+id+`">Удалить</button>
            </td>
          </tr>
        `
        categories_show_list += categories_body
    });
    $('#categories_body').append(categories_show_list); 
    $('#category').append(categories_body_list); 
}

function add_item(){
    $("#add_item_btn").on("click", function(event) {
        var name = document.getElementById("product_name").value;
        var suptitle = document.getElementById("product_suptitle").value;
        var product_price = document.getElementById("product_price").value;
        var category = document.getElementById("category").value;
        var product_picture = document.getElementById("product_picture").value;

        var item = {
            name: name,
            description: suptitle,
            price: product_price,
            category: {
                id: category
            },
            picture: product_picture
        }
        $.ajax({
            type: "POST",
            contentType: 'application/json',
            url: server_url + '/items/add_to_category',
            data: JSON.stringify(item),
            cache: false,
            success: function (result) {
                console.log("added!")
                location.reload();
            },
            error: function(xhr, textStatus, errorThrown) {
                console.error("AJAX Error:", textStatus, errorThrown);
            }
        });
    });
}
add_item()

function add_category(){
    $("#add_category_btn").on("click", function(event) {
        var category = document.getElementById("product_category").value;

        var product_category = {
            name: category
        }
        $.ajax({
            type: "POST",
            contentType: 'application/json',
            url: server_url + '/categories/add_category',
            data: JSON.stringify(product_category),
            cache: false,
            success: function (result) {
                console.log("added!")
                location.reload();
            },
            error: function(xhr, textStatus, errorThrown) {
                console.error("AJAX Error:", textStatus, errorThrown);
            }
        });
    });
}

add_category()

function delete_categories(){
    $(".delete_category_btn").on("click", function(event) {
        var button = $(this);
        var id = button.data('id');
        if (confirm("Если вы удалите категорию все продукты этой категории будет удалено. Вы точно хотите удалить?")) {     
            if (confirm("Вы точно хотите удалить?")) {
                    $.ajax({
                    type: 'POST',
                    url: server_url + '/categories/delete',
                    data: { id: id },
                    success: function(response) {
                        location.reload();
                    },
                    error: function(xhr, status, error) {
                        console.log('Error deleting category:', error);
                    }
                });
                alert("Удалено!");
            }
        }     
    });

}
function parse(){
    const menuText = `
    Американо			        700/900 тенге
    Каппучино			        800/900 тенге
    Латте				        800/900 тенге
    Какао				       1200/1500 тенге
    Горячий шоколад		       1200/1500 тенге
    `;
    
    // Define arrays to store names and flattened price values
    const names = [];
    const minPrices = [];
    const maxPrices = [];
    
    // Use regular expressions to extract data
    const regex = /(.+?)\s+(\d+)\/(\d+)\s+тенге/g;
    let match;
    
    while ((match = regex.exec(menuText)) !== null) {
      const name = match[1].trim();
      const minPrice = parseInt(match[2], 10);
      const maxPrice = parseInt(match[3], 10);
      names.push(name);
      minPrices.push(minPrice); // Push both minimum and maximum prices as separate values
      maxPrices.push(maxPrice); // Push both minimum and maximum prices as separate values
    }
    
    // Print the results
    console.log("Names:", names);
    console.log("Prices:", minPrices, maxPrices);
    
    // maxminprice(names, minPrices)
    maxminprice(names, maxPrices)

    
}
function maxminprice(names, prices){
    for(let i = 0; i < names.length; i++){
        var item = {
            name: names[i]+ " 2",
            description: "",
            price: prices[i],
            category: {
                id: 9
            },
            picture: "./img/lagman.jpg"
        }
        console.log("item:", item);
        $.ajax({
            type: "POST",
            contentType: 'application/json',
            url: server_url + '/items/add_to_category',
            data: JSON.stringify(item),
            cache: false,
            success: function (result) {
                console.log("added!")
                // location.reload();
            },
            error: function(xhr, textStatus, errorThrown) {
                console.error("AJAX Error:", textStatus, errorThrown);
            }
        });
    }
}
    // parse()
