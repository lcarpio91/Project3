package com.skillstorm.models;

import java.util.Objects;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "warehouses")
public class Warehouses {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "Warehouse_ID")
	private int warehouseId;

	@Column(name = "Capacity")
	private int capacity;

	public Warehouses() {}

	public Warehouses(int warehouseId, int capacity) {
		super();
		this.warehouseId = warehouseId;
		this.capacity = capacity;
	}

	public int getWarehouseId() {
		return this.warehouseId;
	}

	public void setWarehouseId(int productId) {
		this.warehouseId = productId;
	}

	public int getCapacity() {
		return this.capacity;
	}

	public void setCapacity(int capacity) {
		this.capacity = capacity;
	}

	@Override
	public int hashCode() {
		return Objects.hash(capacity, warehouseId);
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
		return capacity == other.capacity && warehouseId == other.warehouseId;
	}

	@Override
	public String toString() {
		return "Warehouses [warehouseId=" + warehouseId + ", capacity=" + capacity + "]";
	}
	


}


