// Insert Data into the Product Table:
INSERT INTO Product (productId, product_name, price, Category) VALUES ('P01', 'Glaxy S20', 3299, 'Smartphone');
INSERT INTO Product (productId, product_name, price, Category) VALUES ('P02', 'Asus', 4599, 'PC');


// Insert Data into the Customer Table:
INSERT INTO Customer (customer_id, customer_name, customer_tel) VALUES ('C01', 'ALI', 7333993);
INSERT INTO Customer (customer_id, customer_name, customer_tel) VALUES ('C02', 'Asma', 77736353553);


// Insert Data into the Orders Table:
INSERT INTO Orders (ordersID, ProductID, Quantity, total_amount, OrderDate) VALUES ('C01', 'P02', NULL, 9198, SYSDATE);

