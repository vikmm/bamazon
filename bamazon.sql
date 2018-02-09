CREATE DATABASE Bamazon;

USE bamazon;

CREATE TABLE Products (
ItemID int NOT NULL,
ProductName varchar(50) NOT NULL,
DepartmentName varchar(50) NOT NULL,
Price DECIMAL(4,2) NOT NULL,
StockQuantity int NOT NULL);


INSERT INTO Products (ItemID, ProductName, DepartmentName, Price, StockQuantity) VALUES (
1111,
'Nerf Gun',
'Home',
35.99,
20);

INSERT INTO Products (ItemID, ProductName, DepartmentName, Price, StockQuantity) VALUES (
2222,
'Water Hose',
'Home and Garden',
23.99,
25);

INSERT INTO Products (ItemID, ProductName, DepartmentName, Price, StockQuantity) VALUES (
3333,
'Nintendo',
'Entertainment',
100.99,
15);

INSERT INTO Products (ItemID, ProductName, DepartmentName, Price, StockQuantity) VALUES (
4444,
'Dog Kennel',
'Pets',
75.29,
9);

INSERT INTO Products (ItemID, ProductName, DepartmentName, Price, StockQuantity) VALUES (
5555,
'Tire Shine',
'Automotive',
10.99,
38);

INSERT INTO Products (ItemID, ProductName, DepartmentName, Price, StockQuantity) VALUES (
6666,
'Laundry Basket',
'Home',
4.99,
5);

INSERT INTO Products (ItemID, ProductName, DepartmentName, Price, StockQuantity) VALUES (
7777,
'Frozen DVD',
'Entertainment',
13.99,
10);

INSERT INTO Products (ItemID, ProductName, DepartmentName, Price, StockQuantity) VALUES (
8888,
'Vans Skate Shoes',
'Shoes',
45.99,
17);

INSERT INTO Products (ItemID, ProductName, DepartmentName, Price, StockQuantity) VALUES (
9999,
'Floor Lamp',
'Home',
92.22,
10);

INSERT INTO Products (ItemID, ProductName, DepartmentName, Price, StockQuantity) VALUES (
1212,
'Sofa Pillows',
'Home',
9.99,
50);