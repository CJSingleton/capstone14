function printMessage() {
	var x = 10;

	for (var i = 1; i <= x; i++) {
		console.log(i);
	}
	alert("HELLO");
	console.log("Hello"); // prints a message to the console
}

function add() {
	//read data from text boxes
	var num1 = parseInt(document.getElementById("num1").value);
	var num2 = parseInt(document.getElementById("num2").value);
	//add the numbers
	var result = num1 + num2;
	//show result as pop-up
	//alert(result);
	//show result as paragraph
	document.getElementById("result").innerText = "result = " + result;

}

var menu = ["Water", "Milk", "Juice", "Chips", "Cookies", "Fruit"];
var prices = [1.50, 2.00, 2.50, 3.15, 2.75, 1.35];
var totalquant = [0, 0, 0, 0, 0, 0];

function addToList(itemID, cost)
{
	var itemName = itemID;
	var price = cost.toFixed(2);
	if (itemName == "Water") { totalquant[0] += 1; }
	if (itemName == "Milk") { totalquant[1] += 1; }
	if (itemName == "Juice") { totalquant[2] += 1; }
	if (itemName == "Chips") { totalquant[3] += 1; }
	if (itemName == "Cookies") { totalquant[4] += 1; }
	if (itemName == "Fruit") { totalquant[5] += 1; }

	//create
	var shoppingList = document.getElementById("shoppingList");
	var row = shoppingList.insertRow(1);
	var c1 = row.insertCell(0);
	var c2 = row.insertCell(1);
	c1.innerHTML = itemName;
	c2.innerHTML = "$"+price;
}

function checkOut()
{
	var shoppingList = document.getElementById("checkout");
	var row = checkout.insertRow(0);
	var c1 = row.insertCell(0);
	var c2 = row.insertCell(1);
	var c3 = row.insertCell(2);
	c1.innerHTML = "ITEM NAME";
	c2.innerHTML = "QUANTITY";
	c3.innerHTML = "TOTAL";

	var count = 0;

	for (var i = 0; i <= 5; i++)
	{
		if (totalquant[i] > 0)
		{
			count += 1;
			var r = checkout.insertRow(count += 0);
			var cell1 = r.insertCell(0);
			var cell2 = r.insertCell(1);
			var cell3 = r.insertCell(2);
			cell1.innerHTML = menu[i];
			cell2.innerHTML = totalquant[i];
			cell3.innerHTML = "$"+(prices[i]*totalquant[i]).toFixed(2);
		}
	}
}

