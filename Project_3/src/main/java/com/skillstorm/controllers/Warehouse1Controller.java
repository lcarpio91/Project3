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

import com.skillstorm.models.Warehouse1;

import com.skillstorm.repositories.Warehouse1Repository;

@RestController
@RequestMapping("/warehouse1")
@CrossOrigin("*")
public class Warehouse1Controller {

	@Autowired
	private Warehouse1Repository repo;

	// displays all products
	@GetMapping
	public Iterable<Warehouse1> getAllProducts() {
		return repo.findAll();
	}

	// displays product by ID
	@GetMapping("/{id}")
	public Warehouse1 getProductById(@PathVariable int id) {
		Optional<Warehouse1> outcome = repo.findById(id);
		if (outcome.isPresent()) {
			return outcome.get();
		} else {
			return null;
		}
	}
	
	// displays product by UPC
	// okay Ernesto I figured it out it works let me know if you like it
	// Ernesto is pleasantly surprised
	@GetMapping("/upc/{upc}")
	public Warehouse1 getProductByUPC(@PathVariable String upc) {
		Iterable<Warehouse1> outcomes = repo.findByUPC(upc);
		for (Warehouse1 outcome : outcomes) {
			return outcome;
		}
			return null;
		}
	
	// adds a product
	@PostMapping
	public ResponseEntity<Warehouse1> addProduct(@RequestBody Warehouse1 warehouse1) {
		if (repo.existsById(warehouse1.getProductId())) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST)
					.body(warehouse1);
		} else {
			return ResponseEntity.status(HttpStatus.CREATED)
					.body(repo.save(warehouse1));
		}
	}

	// updates a product
	@PutMapping
	public Warehouse1 updateProduct1(@RequestBody Warehouse1 warehouse1) {
		return repo.save(warehouse1);
	}

	// updates a product by ID
	// goes through but doesn't actually update (or the update doesn't reflect in DB).
	@PutMapping("/id/{id}")
	public ResponseEntity<Warehouse1> updateProduct(@PathVariable int id,
			@RequestParam(name = "productName", required = false) String productName,
			@RequestParam(name = "productPrice", required = false) String productPrice,
			@RequestParam(name = "quantity", required = false) String quantity,
			@RequestParam(name = "upc", required = false) String upc) {

		if (repo.findById(id).isPresent()) {

			Warehouse1 temp = repo.findById(id).get();

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
	public ResponseEntity<Warehouse1> deleteProductByBody(@RequestBody Warehouse1 warehouse1) {
		if (repo.findById(warehouse1.getProductId()).isPresent()
				&& warehouse1.equals(repo.findById(warehouse1.getProductId()).get())) {
			repo.delete(warehouse1);
			return ResponseEntity.status(HttpStatus.ACCEPTED).body(warehouse1);
		} else {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(warehouse1);
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
