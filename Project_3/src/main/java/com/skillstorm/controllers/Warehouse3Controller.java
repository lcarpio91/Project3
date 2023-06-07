package com.skillstorm.controllers;




import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.skillstorm.models.Warehouse3;

import com.skillstorm.repositories.Warehouse3Repository;

@RestController
@RequestMapping("/warehouse3")
@CrossOrigin("*")
public class Warehouse3Controller {
	
	@Autowired
	private Warehouse3Repository repo;




	
	// displays all products
	@GetMapping
	public Iterable<Warehouse3> getAllProducts(){
		return repo.findAll();
	}
	
	// displays product by ID
	@GetMapping("/{id}")
	public Warehouse3 getProductById(@PathVariable int id) {
		Optional<Warehouse3> outcome = repo.findById(id);
		if(outcome.isPresent()) {
			return outcome.get();
		} else {
			return null;
		}
	}
	
	// adds a product
	@PostMapping
	public ResponseEntity<String> addProduct(@RequestBody Warehouse3 warehouse3){
		if(repo.existsById(warehouse3.getProductId())) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Product with id " + warehouse3.getProductId() + " already exist.");
		} else {
			return ResponseEntity.status(HttpStatus.CREATED).body("Product with id " + repo.save(warehouse3).getProductId() + " has been inserted.");
		}
	}
	
	// updates a product by ID
	@PutMapping("/{id}")
	public ResponseEntity<String> updateProduct(@PathVariable int id,
												@RequestParam(name = "productName", required = false) String productName,
												@RequestParam(name = "productPrice", required = false) String productPrice,
												@RequestParam(name = "quantity", required = false) String quantity){
		
		if(repo.findById(id).isPresent()) {
			
			Warehouse3 temp = repo.findById(id).get();
			
			if(productName != null) {
				temp.setProductName(productName);
			}
			
			if(productPrice != null) {
				temp.setProductPrice(Double.valueOf(productPrice));
			}
			
			if(quantity != null) {
				temp.setQuantity(Integer.valueOf(quantity));
			}
			
			return ResponseEntity.status(HttpStatus.OK).body("Product with id " + repo.save(temp).getProductId() + " has been updated.");
		} else {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Product with id " + id + " does not exist.");
		}
	}
	
	// deletes the product by body
	@DeleteMapping
	public ResponseEntity<String> deleteProductByBody(@RequestBody Warehouse3 warehouse3){
		if(repo.findById(warehouse3.getProductId()).isPresent() && 
				warehouse3.equals(repo.findById(warehouse3.getProductId()).get())) {
			repo.delete(warehouse3);
			return ResponseEntity.status(HttpStatus.ACCEPTED).body("Product was successfully deleted.");
		} else {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Product does not exist.");
		}
	}
	
	// deletes a product by ID
	@DeleteMapping("{/id}")
	public ResponseEntity<String> deleteProductbyId(@PathVariable int id){
		if(repo.existsById(id)) {
			repo.deleteById(id);
			return ResponseEntity.status(HttpStatus.ACCEPTED).body("Product with id " + id + " was deleted.");
		} else {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Product with id " + id + " does not exist.");
		}
	}

}

