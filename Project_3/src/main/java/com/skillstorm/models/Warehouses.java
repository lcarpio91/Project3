package com.skillstorm.models;

import java.util.Objects;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "Warehouses")
public class Warehouses {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "Warehouse_ID")
	private int productId;

	@Column(name = "Capacity")
	private int capacity;

	public Warehouses() {}

	public Warehouses(int productId, int capacity) {
		super();
		this.productId = productId;
		this.capacity = capacity;
	}

	public int getProductId() {
		return this.productId;
	}

	public void setProductId(int productId) {
		this.productId = productId;
	}

	public int getCapacity() {
		return this.capacity;
	}

	public void setCapacity(int capacity) {
		this.capacity = capacity;
	}

	@Override
	public int hashCode() {
		return Objects.hash(capacity, productId);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Warehouses other = (Warehouses) obj;
		return capacity == other.capacity && productId == other.productId;
	}

	@Override
	public String toString() {
		return "Warehouses [productId=" + productId + ", capacity=" + capacity + "]";
	}
	
	
	
	







}


