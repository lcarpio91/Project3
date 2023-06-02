package com.skillstorm.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skillstorm.repositories.Warehouse3Repository;

@RestController
@RequestMapping("/warehouse3")
@CrossOrigin("*")
public class Warehouse3Controller {
	
	@Autowired
	private Warehouse3Repository repo;

}
