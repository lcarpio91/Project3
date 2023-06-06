package com.skillstorm.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skillstorm.repositories.Warehouse4Repository;

@RestController
@RequestMapping("/warehouse4")
@CrossOrigin("*")
public class Warehouse4Controller {
	
	@Autowired
	private Warehouse4Repository repo;

}