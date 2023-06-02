package com.skillstorm.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.skillstorm.models.Warehouse1;

@Repository
public interface Warehouse1Repository extends CrudRepository<Warehouse1, Integer>{

}
