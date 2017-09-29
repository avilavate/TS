-- CREATE TABLE Persons (
--     PersonID int,
--     LastName varchar(255),
--     FirstName varchar(255),
--     Address varchar(255),
--     City varchar(255) 
-- );
use sampledb;


insert into Persons (PersonID, LastName, FirstName,
Address, City) VALUES(1,'A','A','Bang','KA');

select * from Persons;