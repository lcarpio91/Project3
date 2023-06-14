package com.skillstorm.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.skillstorm.models.Warehouses;

@Repository
public interface WarehousesRepository extends CrudRepository<Warehouses, Integer>{
	
	// empty for now until a use case is found for querying Warehouses table.
}
