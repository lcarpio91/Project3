package com.skillstorm.repositories;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.skillstorm.models.Products;
import com.skillstorm.models.Warehouses;

@Repository
public interface ProductsRepository extends CrudRepository<Products, Integer>{

//	@Query (value = "SELECT * FROM Products WHERE Product_Id = %?1%", nativeQuery = true)
//	public Iterable<Products> findByProductId(String searchString);
//	
//	@Query (value = "SELECT * FROM Products WHERE Product_name LIKE %?1%", nativeQuery = true)
//	public Iterable<Products> findByProductName(String searchString);
//	
//	@Query (value = "SELECT * FROM Products WHERE UPC LIKE %?1%", nativeQuery = true)
//	public Iterable<Products> findByUPC(String searchString);
//	
//	@Query (value = "SELECT count(Product_ID) FROM Products WHERE Warehouse_ID = %?1%", nativeQuery = true)
//	public Iterable<Products> countProducts(String searchString);
	
}
