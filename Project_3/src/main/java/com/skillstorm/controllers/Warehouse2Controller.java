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

import com.skillstorm.models.Warehouse2;

import com.skillstorm.repositories.Warehouse2Repository;

@RestController
@RequestMapping("/warehouse2")
@CrossOrigin("*")
public class Warehouse2Controller {

	@Autowired
	private Warehouse2Repository repo;

	// displays all products
	@GetMapping
	public Iterable<Warehouse2> getAllProducts() {
		return repo.findAll();
	}

	// displays product by ID
	@GetMapping("/{id}")
	public Warehouse2 getProductById(@PathVariable int id) {
		Optional<Warehouse2> outcome = repo.findById(id);
		if (outcome.isPresent()) {
			return outcome.get();
		} else {
			return null;
		}
	}
	
	// displays product by UPC
	// okay Ernesto I figured it out it works let me know if you like it
	// Ernesto is pleased
	@GetMapping("/upc/{upc}")
	public Warehouse2 getProductByUPC(@PathVariable String upc) {
		Iterable<Warehouse2> outcomes = repo.findByUPC(upc);
		for (Warehouse2 outcome : outcomes) {
			return outcome;
		}
			return null;
		}

	// adds a product by body
	@PostMapping
	public ResponseEntity<Warehouse2> addProduct(@RequestBody Warehouse2 warehouse2) {
		if (repo.existsById(warehouse2.getProductId())) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST)
					.body(warehouse2);
		} else {
			return ResponseEntity.status(HttpStatus.CREATED)
					.body(repo.save(warehouse2));
		}
	}

	// updates a product by body
	@PutMapping
	public Warehouse2 updateProduct1(@RequestBody Warehouse2 warehouse2) {
		return repo.save(warehouse2);
	}

	// updates a product by ID using parameters
	@PutMapping("/id/{id}")
	public ResponseEntity<Warehouse2> updateProduct(@PathVariable int id,
			@RequestParam(name = "productName", required = false) String productName,
			@RequestParam(name = "productPrice", required = false) String productPrice,
			@RequestParam(name = "quantity", required = false) String quantity,
			@RequestParam(name = "upc", required = false) String upc) {

		if (repo.findById(id).isPresent()) {

			Warehouse2 temp = repo.findById(id).get();

			if (productName != null) {
				temp.setProductName(productName);
			}

			if (productPrice != null) {
				temp.setProductPrice(Double.valueOf(productPrice));
			}

			if (quantity != null) {
				temp.setQuantity(Integer.valueOf(quantity));
			}
			
			if(upc != null) {
				temp.setUpc(upc);
			}

			return ResponseEntity.status(HttpStatus.OK)
					.body(repo.save(temp));
		} else {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null);
		}
	}

	// deletes the product by body
	@DeleteMapping
	public ResponseEntity<Warehouse2> deleteProductByBody(@RequestBody Warehouse2 warehouse2) {
		if (repo.findById(warehouse2.getProductId()).isPresent()
				&& warehouse2.equals(repo.findById(warehouse2.getProductId()).get())) {
			repo.delete(warehouse2);
			return ResponseEntity.status(HttpStatus.ACCEPTED).body(warehouse2);
		} else {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(warehouse2);
		}
	}

	// deletes a product by ID
	@DeleteMapping("/id/{id}")
	public ResponseEntity<String> deleteProductbyId(@PathVariable int id) {
		if (repo.existsById(id)) {
			repo.deleteById(id);
			return ResponseEntity.status(HttpStatus.ACCEPTED).body("Product with id " + id + " was deleted.");
		} else {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Product with id " + id + " does not exist.");
		}
	}

}
