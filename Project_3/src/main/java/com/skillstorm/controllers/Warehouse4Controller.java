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

import com.skillstorm.models.Warehouse4;

import com.skillstorm.repositories.Warehouse4Repository;

@RestController
@RequestMapping("/warehouse4")
@CrossOrigin("*")
public class Warehouse4Controller {

	@Autowired
	private Warehouse4Repository repo;

	// displays all products
	@GetMapping
	public Iterable<Warehouse4> getAllProducts() {
		return repo.findAll();
	}

	// displays product by ID
	@GetMapping("/{id}")
	public Warehouse4 getProductById(@PathVariable int id) {
		Optional<Warehouse4> outcome = repo.findById(id);
		if (outcome.isPresent()) {
			return outcome.get();
		} else {
			return null;
		}
	}
	
	// displays product by UPC
	// okay Ernesto I figured it out it works let me know if you like it
	// Ernesto likes this
	@GetMapping("/upc/{upc}")
	public Warehouse4 getProductByUPC(@PathVariable String upc) {
		Iterable<Warehouse4> outcomes = repo.findByUPC(upc);
		for (Warehouse4 outcome : outcomes) {
			return outcome;
		}
			return null;
		}
	
	// adds a product by body
	@PostMapping
	public ResponseEntity<Warehouse4> addProduct(@RequestBody Warehouse4 warehouse4) {
		if (repo.existsById(warehouse4.getProductId())) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST)
					.body(warehouse4);
		} else {
			return ResponseEntity.status(HttpStatus.CREATED)
					.body(repo.save(warehouse4));
		}
	}

	// updates a product by body
	@PutMapping
	public Warehouse4 updateProduct1(@RequestBody Warehouse4 warehouse4) {
		return repo.save(warehouse4);
	}

	// updates a product by ID using parameters
	@PutMapping("/id/{id}")
	public ResponseEntity<Warehouse4> updateProduct(@PathVariable int id,
			@RequestParam(name = "productName", required = false) String productName,
			@RequestParam(name = "productPrice", required = false) String productPrice,
			@RequestParam(name = "quantity", required = false) String quantity,
			@RequestParam(name = "upc", required = false) String upc) {

		if (repo.findById(id).isPresent()) {

			Warehouse4 temp = repo.findById(id).get();

			if (productName != null) {
				temp.setProductName(productName);
			}

			if (productPrice != null) {
				temp.setProductPrice(Double.valueOf(productPrice));
			}

			if (quantity != null) {
				temp.setQuantity(Integer.valueOf(quantity));
			}

			if (upc != null) {
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
	public ResponseEntity<Warehouse4> deleteProductByBody(@RequestBody Warehouse4 warehouse4) {
		if (repo.findById(warehouse4.getProductId()).isPresent()
				&& warehouse4.equals(repo.findById(warehouse4.getProductId()).get())) {
			repo.delete(warehouse4);
			return ResponseEntity.status(HttpStatus.ACCEPTED).body(warehouse4);
		} else {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(warehouse4);
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

