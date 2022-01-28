use FarmingAssistant;

EXEC sp_tables

--Create Stored Procedure for getting all farmers
create procedure sp_GetFarmers
as
begin
--Sql Elements
select * from farmer
end
Go

--Execute Stored Procedure
exec sp_GetFarmers

--Create Stored Procedure for getting all suppliers
create procedure sp_GetSuppliers
as
begin
--Sql Elements
select * from supplier
end
Go

--Execute Stored Procedure
exec sp_GetSuppliers

--Create Stored Procedure for getting all complaints
create procedure sp_GetComplaints
as
begin
--Sql Elements
select * from complaints
end
Go

--Execute Stored Procedure
exec sp_GetComplaints

--Create Stored Procedure for getting all crops
create procedure sp_GetCrops
as
begin
--Sql Elements
select * from crop
end
Go

--Execute Stored Procedure
exec sp_GetCrops

--Create Stored Procedure for getting all advertisements
create procedure sp_GetAdvertisements
as
begin
--Sql Elements
select * from advertisement
end
Go

--Execute Stored Procedure
exec sp_GetAdvertisements

--Create Stored Procedure for getting all farmingTips
create procedure sp_GetFarmingTips
as
begin
--Sql Elements
select * from farmingTips
end
Go

--Execute Stored Procedure
exec sp_GetFarmingTips