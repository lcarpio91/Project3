package com.skillstorm.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skillstorm.repositories.Warehouse2Repository;

@Service
public class Warehouse2Service {
	
	@Autowired
	private Warehouse2Repository repo;

}
