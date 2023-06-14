package com.skillstorm.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skillstorm.repositories.WarehousesRepository;

@Service
public class WarehousesService {
	
	@Autowired
	private WarehousesRepository repo;

}

