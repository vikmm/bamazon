const mysql = require('mysql');
const prompt = require('prompt');
const colors = require('colors/safe');
const Table = require('cli-table');
const connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'surfer03',
	database: 'Bamazon', 
});

var productPurchased = [];

connection.connect();

//Connection to mysql
connection.query('SELECT ItemID, ProductName, Price FROM Products', function(err, result){
	if(err) console.log(err);

	
	var table = new Table({
		head: ['Item Id#', 'Product Name', 'Price'],
		style: {
			head: ['green'],
			compact: false,
			colAligns: ['center'],
		}
	});

	//for loop to go through each item on the table 
	for(var i = 0; i < result.length; i++){
		table.push(
			[result[i].ItemID, result[i].ProductName, result[i].Price]
		);
	}
	console.log(table.toString());

	purchase();
});


var purchase = function(){

	//Questions promted in terminal 
	var productInfo = {
		properties: {
			itemID:{description: colors.green('ID # of the item you would like to buy')},
			Quantity:{description: colors.red('How many of that item would you like to buy?')}
		},
	};

	prompt.start();

	
	prompt.get(productInfo, function(err, res){

		
		var customerPurchase = {
			itemID: res.itemID,
			Quantity: res.Quantity
		};
		
		
		productPurchased.push(customerPurchase);

		//Showing the info in terminal from mysql
		connection.query('SELECT * FROM Products WHERE ItemID=?', productPurchased[0].itemID, function(err, res){
				if(err) console.log(err, 'That item ID doesn\'t exist');
				
				//out of stock
				if(res[0].StockQuantity < productPurchased[0].Quantity){
					console.log('That product is out of stock!');
					connection.end();

				//displaying amount if item is available for purchase
				} else if(res[0].StockQuantity >= productPurchased[0].Quantity){

					console.log('');

					console.log(productPurchased[0].Quantity + ' items purchased');

					console.log(res[0].ProductName + ' ' + res[0].Price);

					//Price of the product
					var saleTotal = res[0].Price * productPurchased[0].Quantity;

					console.log('Total: ' + saleTotal);

					
					newQuantity = res[0].StockQuantity - productPurchased[0].Quantity;
			
					
					connection.query("UPDATE Products SET StockQuantity = " + newQuantity +" WHERE ItemID = " + productPurchased[0].itemID, function(err, res){
						
						console.log('');
						console.log(colors.yellow('Your order has been processed.  Thank you for shopping with us!'));
						console.log('');

						connection.end();
					})

				};

		})
	})

};