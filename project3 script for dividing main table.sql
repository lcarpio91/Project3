CREATE TABLE warehouseone AS SELECT * FROM Candy_All WHERE Product_ID >=0 AND Product_ID <=2500;
CREATE TABLE warehousetwo AS SELECT * FROM Candy_All WHERE Product_ID >=2501 AND Product_ID <=5000;
CREATE TABLE warehousethree AS SELECT * FROM Candy_All WHERE Product_ID >=5001 AND Product_ID <= 7500;
CREATE TABLE warehousefour AS SELECT * FROM Candy_All WHERE Product_ID >=7501 AND Product_ID <=10000;

