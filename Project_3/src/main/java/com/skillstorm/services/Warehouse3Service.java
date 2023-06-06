package com.skillstorm.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skillstorm.repositories.Warehouse3Repository;

@Service
public class Warehouse3Service {
	
	@Autowired
	private Warehouse3Repository repo;

}