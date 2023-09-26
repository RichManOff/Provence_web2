var server_url = "https://provence-backend.onrender.com/provence"

// function parse2(){
//     const menuText = `
//     Американо			        700/900 тенге
//     Каппучино			        800/900 тенге
//     Латте				        800/900 тенге
//     Какао				       1200/1500 тенге
//     Горячий шоколад		       1200/1500 тенге
//     `;
//
//     // Define arrays to store names and flattened price values
//     const names = [];
//     const minPrices = [];
//     const maxPrices = [];
//
//     // Use regular expressions to extract data
//     const regex = /(.+?)\s+(\d+)\/(\d+)\s+тенге/g;
//     let match;
//
//     while ((match = regex.exec(menuText)) !== null) {
//         const name = match[1].trim();
//         const minPrice = parseInt(match[2], 10);
//         const maxPrice = parseInt(match[3], 10);
//         names.push(name);
//         minPrices.push(minPrice); // Push both minimum and maximum prices as separate values
//         maxPrices.push(maxPrice); // Push both minimum and maximum prices as separate values
//     }
//
//     // Print the results
//     console.log("Names:", names);
//     console.log("Prices:", minPrices, maxPrices);
//
//     maxminprice(names, minPrices, "")
//     maxminprice(names, maxPrices, " 2")
//
//
// }
// function maxminprice(names, prices, id){
//     for(let i = 0; i < names.length; i++){
//         var item = {
//             name: names[i]+id,
//             description: "",
//             price: prices[i],
//             category: {
//                 id: 9
//             },
//             picture: "./img/lagman.jpg"
//         }
//         console.log("item:", item);
//         $.ajax({
//             type: "POST",
//             contentType: 'application/json',
//             url: server_url + '/items/add_to_category',
//             data: JSON.stringify(item),
//             cache: false,
//             success: function (result) {
//                 console.log("added!")
//                 // location.reload();
//             },
//             error: function(xhr, textStatus, errorThrown) {
//                 console.error("AJAX Error:", textStatus, errorThrown);
//             }
//         });
//     }
// }
// // parse2()
// parse()
// function parse(){
//     const menuText = `
//    Круассан с семгой    1500 тенге
// (круассан классический, филе семги, огурцы, салатные листья, плавленный сыр)
// Круассан с курицей    1200 тенге
// (круассан классический, куриное филе, салатные листья, огурцы, помидор, соус)
// Круассан с капрезе     1200 тенге
// (круассан классический, моцарелла гальбани, соус песто, помидор, салатные листья)
// Рисовая каша                700 тенге
// (рис, молоко)
// Завтрак «Прованс»    1500 тенге
// (яйцо, охотничьи колбаски, кетчуп)
// `;
//     parseandsend(1,menuText)
//     const menuText2 = `
// Дапанджи          1400 тенге
// (окорочка, картофель, полугорький перец, тесто для дапанджи, соевый соус, лук)
// Манты 6 штук          1400 тенге
// (фарш из говядины, лук, тесто)
// Фри с мясом          1800 тенге
// (говядина, фри, лук, соевый соус)
// Гуйру лагман          1500 тенге
// (говядина, полугорький перец, пекинская капуста, сельдерей, тесто на лагман)
// Шашлык лагман          1600 тенге
// (говядина, полугорький перец, огурцы, лук, сельдерей, тесто на лагман)
// Цомян                      1600 тенге
// (говядина, болгарский перец, лук, сельдерей, соевый соус, чеснок, тесто для цомяна)
// Мясо по тайски           1700 тенге
// (говядина, болгарский перец, пекинская капуста, соевый соус, лук, огурцы, гарнир)
// Голубцы             1500 тенге
// (фарш из говядины, рис, капуста)
// Котлеты                 1500 тенге
// (фарш из говядины, гарнир)
// Стейк семги 3500 тенге
// (семга, сливочный соус, гарнир)
// Колбаски гриль из курицы2290 тенге
// (колбаски гриль из курицы, гарнир)
// Колбаски гриль из говядины2590 тенге
// (колбаски гриль из говядины, гарнир)
// Бефстроганов1600 тенге
// (говядина, лук, шампиньоны, сметана)
// Фрикасе с курицей1600 тенге
// (куриное филе, шампиньоны, сливки)
// Феттучини с курицей2190 тенге
// (куриное филе, сливки, паста феттучини, шампиньоны, пармезан)
// `;
// parseandsend(3,menuText2)
//     const menuText3 = `
// Сырне 1 табак        10000 тенге
// (баранина, картофель, морковь, лук)
// Долма 1 табак         9500 тенге
// (фарш из говядины с рисом, болгарский перец, кабачки, баклажаны, виноградные листья)
// Манты 1 табак         7000 тенге
// (фарш из говядины, лук, тесто)
// Дапанджи 1 табак            7000 тенге
// (окорочка, картофель, полугорький перец, тесто для дапанджи, соевый соус, лук)
// Ассорти 1 табак         9500 тенге
// (10 шт манты, 10шт жареные манты, 10шт голубцы)
// Балгынет 1 табак           15000 тенге
// (говядина, картофельные шарики, лук)
//
// `;
// parseandsend(4,menuText3)
//     const menuText4 = `
// Свежий салат            1200 тенге
// (помидор, огурцы)
// Малибу               1500 тенге
// (куриное филе, помидор, огурцы, сыр, кириешки, майонез)
// Греческий              1500 тенге
// (помидор, огурцы, салатные листья, фетакса, маслины, оливковое масло, орегано, лимон)
// Цезарь с курицей             1600 тенге
// (куриное филе, айсберг, перепелиное яйцо, помидоры черри, сухари, сыр, соус)
// Баклажаны с помидорами 1400 тенге
// (баклажан, помидор, кинза, соус)
// Оливье 1000 тенге
// (колбаса, катофель, морковь, яйцо, огурцы соленые, горошек зеленый, майонез)
// Селедка под шубой1000 тенге
// (cеледка, лук, картофель, морковь, яйцо, свекла, майонез)
// Винегрет 800 тенге
// (картофель, морковь, свекла, горошек зеленый, лук, огурцы соленые, масло подсолнечное)
// Свекольный салат800 тенге
// (свекла, чеснок, грецкий орех, майонез)
// Гнездо глухаря1200 тенге
// (куриное филе, кукуруза, огурцы, яйцо, картофель пай)
// Стир фрай2000 тенге
// (куриное филе, помидор, салатные листья, болгарский перец, соус)
// Мясной салат1850 тенге
// (мясо говядины, огурцы, помидор, лук, полугорький перец, болгарский перец)
// `;
// parseandsend(9, menuText4)
//     const menuText5 = `
// Лапша по домашнему  1000 тенге
// Борщ   1100 тенге
// Пельмени 1200 тенге
// Солянка1200 тенге
// `;
//     parseandsend2(2,menuText5)
//     const menuText7 = `
// Ташкентский чай       1100 тенге
// Марокканский чай       1100 тенге
// Цитрусовый чай       1100 тенге
// Малиновый чай       1100 тенге
// Зеленый чай                                 500 тенге
// Чай с молоком         500 тенге
// Черный чай         500 тенге
// Большой чайник чая       1500 тенге
// Кружка чая                                     150 тенге
// Кофе 3 в 1                                      250 тенге
// `;
//     parseandsend2(5,menuText7)
//
//     const menuText8 = `
// Цитрусовый          1600 тенге
// Киви-тархун         1600 тенге
// Манго-маракуйя         1800 тенге
// Клубника ананас         1600 тенге
// `;
//     parseandsend2(6,menuText8)
//     const menuText9 = `
// Компот                                          1000 тенге
// Компот стакан                               150 тенге
// Кола 1 л        680 тенге
// Спрайт 1 л        680 тенге
// Фанта 1 л         680 тенге
// Фьюсти 1л         680 тенге
// Сок Пико        700 тенге
// Сок Пико 250мл        350 тенге
// `;
//     parseandsend2(7,menuText9)
// }
//
// function parseandsend(parseid, menuText){
//     const names = [];
//     const descriptions = [];
//     const prices = [];
//
// // Use regular expressions to extract data
//     const regex = /(.+?)\s+(\d+)\s+тенге\s*\((.*?)\)/g;
//     let match;
//
//     while ((match = regex.exec(menuText)) !== null) {
//         names.push(match[1].trim());
//         descriptions.push(match[3].trim());
//         prices.push(parseInt(match[2].trim(), 10));
//     }
//
// // Print the results
//     console.log("Names:", names);
//     console.log("Descriptions:", descriptions);
//     console.log("Prices:", prices);
//
//     for(let i = 0; i < names.length; i++){
//         var item = {
//             name: names[i]+ " 2",
//             description: descriptions[i],
//             price: prices[i],
//             category: {
//                 id: parseid
//             },
//             picture: "./img/lagman.jpg"
//         }
//         console.log("item:", item);
//         $.ajax({
//             type: "POST",
//             contentType: 'application/json',
//             url: server_url + '/items/add_to_category',
//             data: JSON.stringify(item),
//             cache: false,
//             success: function (result) {
//                 console.log("added!")
//                 // location.reload();
//             },
//             error: function(xhr, textStatus, errorThrown) {
//                 console.error("AJAX Error:", textStatus, errorThrown);
//             }
//         });
//     }
// }
//
// function parseandsend2(parseid, menuText){
//     const names = [];
//     const prices = [];
//
// // Use regular expressions to extract data
//     const regex = /(.+?)\s+(\d+)\s+тенге/g;
//     let match;
//
//     while ((match = regex.exec(menuText)) !== null) {
//         names.push(match[1].trim());
//         prices.push(parseInt(match[2].trim(), 10));
//     }
//
// // Print the results
//     console.log("Names:", names);
//     console.log("Prices:", prices);
//
//     for(let i = 0; i < names.length; i++){
//         var item = {
//             name: names[i]+ " 2",
//             description: "",
//             price: prices[i],
//             category: {
//                 id: parseid
//             },
//             picture: "./img/lagman.jpg"
//         }
//         console.log("item:", item);
//         $.ajax({
//             type: "POST",
//             contentType: 'application/json',
//             url: server_url + '/items/add_to_category',
//             data: JSON.stringify(item),
//             cache: false,
//             success: function (result) {
//                 console.log("added!")
//                 // location.reload();
//             },
//             error: function(xhr, textStatus, errorThrown) {
//                 console.error("AJAX Error:", textStatus, errorThrown);
//             }
//         });
//     }
// }