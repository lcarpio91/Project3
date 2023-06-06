package com.skillstorm.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skillstorm.repositories.Warehouse1Repository;

@RestController
@RequestMapping("/warehouse1")
@CrossOrigin("*")
public class Warehouse1Controller {
	
	@Autowired
	private Warehouse1Repository repo;

}