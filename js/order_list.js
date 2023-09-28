var orders = []
$.ajax({
    url: server_url + '/orders',
    method: "GET",
    success: function(response) {
        orders  = response;
        show_orders(orders)
    },
    error: function(xhr, textStatus, errorThrown) {
        console.error("AJAX Error:", textStatus, errorThrown);
    }
})

function show_orders(orders){
    var orders_body_list = "";
    var modal_listHtml = "";
    var quant = -1;

    orders.forEach(function (element, index) {
        var order_sum = element.items.reduce(function (sum, item) {
            return sum + item.price;
        }, 0);

        const uniqueItemNames = Array.from(
            new Set(element.items.map((item) => item.name))
        ).join(", ");

        var orders_body = `
          <tr>
            <td>${element.id}</td>
            <td>
                <div data-time-btn class="work-time">${uniqueItemNames}</div>
            </td>
            <td>${element.customerName}</td>
            <td>${element.customerPhone}</td>
            <td>${element.status}</td>
            <td>${element.orderDate}</td>
            <td>${order_sum}</td>
          </tr>
        `;

        orders_body_list += orders_body;

// Create an object to store item quantities and totals
        const itemInfo = {};

        element.items.forEach(function (item) {
            const itemName = item.name;
            if (!itemInfo[itemName]) {
                itemInfo[itemName] = {
                    quantity: 1,
                    total: item.price,
                };
            } else {
                itemInfo[itemName].quantity++;
                itemInfo[itemName].total += item.price;
            }
        });

        // Create the table body for items
        var orders_item_body = Object.keys(itemInfo)
            .map((itemName, index) => {
                const item = itemInfo[itemName];
                return `
                    <tr>
                        <th class="time-title">${index + 1}</th>
                        <th class="time-title">${itemName}</th>
                        <th class="time-title">${item.total / item.quantity}</th>
                        <th class="time-title">${item.quantity}</th>
                        <th class="time-title">${item.total}</th>
                    </tr>
                `;
            })
            .join("");

        var modal_list = `
        <div data-modal-time class="fade-block hidden">
            <div class="modal-window">
                <div class="time">
                    <table class="modal-tables">
                        <thead>
                            <tr>
                                <th class="time-title">  №  </th>
                                <th class="time-title">Название продукта</th>
                                <th class="time-title">Цена</th>
                                <th class="time-title">Количество продукта</th>
                                <th class="time-title">Сумма</th>
                            </tr>
                        </thead>
                        <tbody id="modal_order${index}">
                            ${orders_item_body}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        `;

        modal_listHtml += modal_list;
        quant++
    });

    $('#order_body').append(orders_body_list);
    $('#modal_list').append(modal_listHtml);
    var modal = document.getElementById("modal_order" + quant)
    console.log("modal_order" + quant)

    modal_check(modal)
}

function order_item_list(){

}

function modal_check(modal){
    if(modal){
        console.log("modal")
        const timeBtn = document.querySelectorAll("[data-time-btn]");
        const timeModal = document.querySelectorAll("[data-modal-time]");
        const timeCloseBtn = document.querySelectorAll("[data-close-time ]");

        timeBtn.forEach(function (item, index) {
            item.addEventListener("click", function () {
                timeModal[index].classList.remove("hidden");
            });
        });

        timeCloseBtn.forEach(function (item, index) {
            item.addEventListener("click", function () {
                timeModal[index].classList.add("hidden");
            });
        });


        timeModal.forEach(function (item, index) {
            item.addEventListener("click", function () {
                timeModal[index].classList.add("hidden");
            });
        });
    } else {
        setTimeout(function() {
            modal_check();
        }, 500);
        console.log("no modal")

    }

}
