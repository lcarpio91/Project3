package com.skillstorm.repositories;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.skillstorm.models.Warehouse1;

@Repository
public interface Warehouse1Repository extends CrudRepository<Warehouse1, Integer>{
	
	@Query (value = "SELECT * FROM warehouse1 WHERE Product_Id = %?1%", nativeQuery = true)
	public Iterable<Warehouse1> findByProductId(String searchString);
	
	
	@Query (value = "SELECT * FROM warehouse1 WHERE Product_name LIKE %?1%", nativeQuery = true)
	public Iterable<Warehouse1> findByProductName(String searchString);
	
	// random comment
	
}