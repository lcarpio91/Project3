package com.skillstorm.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skillstorm.repositories.Warehouse2Repository;

@RestController
@RequestMapping("/warehouse2")
@CrossOrigin("*")
public class Warehouse2Controller {
	
	@Autowired
	private Warehouse2Repository repo;

}
