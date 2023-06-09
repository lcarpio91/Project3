package com.skillstorm.repositories;

import org.springframework.data.jpa.repository.Query;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.skillstorm.models.Warehouse3;

@Repository
public interface Warehouse3Repository extends CrudRepository<Warehouse3, Integer>{
	
	@Query (value = "SELECT * FROM warehouse3 WHERE Product_Id = %?1%", nativeQuery = true)
	public Iterable<Warehouse3> findByProductId(String searchString);
	
	
	@Query (value = "SELECT * FROM warehouse3 WHERE Product_name LIKE %?1%", nativeQuery = true)
	public Iterable<Warehouse3> findByProductName(String searchString);
	
	@Query (value = "SELECT * FROM warehouse3 WHERE UPC LIKE %?1%", nativeQuery = true)
	public Iterable<Warehouse3> findByUPC(String searchString);

}

