package com.skillstorm.repositories;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.skillstorm.models.Warehouse4;

@Repository
public interface Warehouse4Repository extends CrudRepository<Warehouse4, Integer>{

	@Query (value = "SELECT * FROM warehouse4 WHERE Product_Id = %?1%", nativeQuery = true)
	public Iterable<Warehouse4> findByProductId(String searchString);
	
	
	@Query (value = "SELECT * FROM warehouse4 WHERE Product_name LIKE %?1%", nativeQuery = true)
	public Iterable<Warehouse4> findByProductName(String searchString);
	
}
