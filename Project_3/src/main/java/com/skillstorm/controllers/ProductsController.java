package com.skillstorm.controllers;

import java.util.ArrayList;
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

import com.skillstorm.models.Products;
import com.skillstorm.repositories.ProductsRepository;

@RestController
@RequestMapping("/products")
@CrossOrigin("*")
public class ProductsController {

	@Autowired
	private ProductsRepository repo;

	// displays all products
	@GetMapping
	public Iterable<Products> getAllProducts() {
		return repo.findAll();
	}
	
	@GetMapping("/w1/{w1}")
	public ArrayList<Products> getWarehouse1(@PathVariable int w1) {
		ArrayList<Products> outcomes = (ArrayList<Products>) repo.findByW1ID(w1);
		if(!outcomes.isEmpty()) {
			return outcomes;
		} else {
			return null;
		}
	}

	// displays product by ID
	@GetMapping("/{id}")
	public Products getProductById(@PathVariable int id) {
		Optional<Products> outcome = repo.findById(id);
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
	public Products getProductByUPC(@PathVariable String upc) {
		Iterable<Products> outcomes = repo.findByUPC(upc);
		for (Products outcome : outcomes) {
			return outcome;
		}
			return null;
		}
	
	// adds a product by body
	@PostMapping
	public ResponseEntity<Products> addProduct(@RequestBody Products products) {
		if(repo.countProducts(products.getWarehouses().getWarehouseId()) < 2500 && !repo.existsById(products.getProductId())) {
			return ResponseEntity.status(HttpStatus.CREATED).body(repo.save(products));
		} else {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(products);
		}

	}

	// updates a product by body
	@PutMapping
	public Products updateProduct(@RequestBody Products products) {
		return repo.save(products);
	}

	// updates a product by ID using parameters
	@PutMapping("/id/{id}")
	public ResponseEntity<Products> updateProduct1(@PathVariable int id,
			@RequestParam(name = "productName", required = false) String productName,
			@RequestParam(name = "productPrice", required = false) String productPrice,
			@RequestParam(name = "quantity", required = false) String quantity,
			@RequestParam(name = "upc", required = false) String upc) {

		if (repo.findById(id).isPresent()) {

			Products temp = repo.findById(id).get();

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
	public ResponseEntity<String> deleteProductByBody(@RequestBody Products products) {
		if (repo.findById(products.getProductId()).isPresent()
				&& products.equals(repo.findById(products.getProductId()).get())) {
			repo.delete(products);
			return ResponseEntity.status(HttpStatus.ACCEPTED).body("Product " + products.getProductId() + " succesfully deleted.");
		} else {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Unable to delete product - product may not exist.");
		}
	}

	// deletes a product by ID
	@DeleteMapping("/id/{id}")
	public void deleteProductbyId(@PathVariable int id) {
		if (repo.existsById(id)) {
			repo.deleteById(id);
		}
	}

}
