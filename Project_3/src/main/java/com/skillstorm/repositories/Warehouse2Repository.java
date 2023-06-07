package com.skillstorm.repositories;


import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.skillstorm.models.Warehouse2;

@Repository
public interface Warehouse2Repository extends CrudRepository<Warehouse2, Integer>{

	@Query (value = "SELECT * FROM warehouse2 WHERE Product_Id = %?1%", nativeQuery = true)
	public Iterable<Warehouse2> findByProductId(String searchString);
	
	
	@Query (value = "SELECT * FROM warehouse2 WHERE Product_name LIKE %?1%", nativeQuery = true)
	public Iterable<Warehouse2> findByProductName(String searchString);
}


