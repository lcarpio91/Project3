package com.skillstorm.models;

import java.util.Objects;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name = "Products")
public class Products{

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "Product_ID")
	private int productId;

	@Column(name = "Product_name")
	private String productName;

	@Column(name = "Product_Price")
	private double productPrice;

	@Column(name = "Quantity")
	private int quantity;

	@Column(name = "UPC")
	private String upc;
	
	@OneToOne
	@JoinColumn(name = "Warehouse_ID")
	private Warehouses warehouses;

	public Products() {}

	public Products(int productId, String productName, double productPrice, int quantity, String upc, Warehouses warehouses) {
		super();
		this.productId = productId;
		this.productName = productName;
		this.productPrice = productPrice;
		this.quantity = quantity;
		this.upc = upc;
		this.warehouses = warehouses;
	}

	public int getProductId() {
		return this.productId;
	}

	public void setProductId(int productId) {
		this.productId = productId;
	}

	public String getProductName() {
		return this.productName;
	}

	public void setProductName(String productName) {
		this.productName = productName;
	}

	public double getProductPrice() {
		return this.productPrice;
	}

	public void setProductPrice(double productPrice) {
		this.productPrice = productPrice;
	}

	public int getQuantity() {
		return this.quantity;
	}

	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}

	public String getUpc() {
		return this.upc;
	}

	public void setUpc(String upc) {
		this.upc = upc;
	}

	public Warehouses getWarehouses() {
		return this.warehouses;
	}

	public void setWarehouses(Warehouses warehouses) {
		this.warehouses = warehouses;
	}

	@Override
	public int hashCode() {
		return Objects.hash(productId, productName, productPrice, quantity, upc, warehouses);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Products other = (Products) obj;
		return productId == other.productId && Objects.equals(productName, other.productName)
				&& Double.doubleToLongBits(productPrice) == Double.doubleToLongBits(other.productPrice)
				&& quantity == other.quantity && Objects.equals(upc, other.upc)
				&& Objects.equals(warehouses, other.warehouses);
	}

	@Override
	public String toString() {
		return "Products [productId=" + productId + ", productName=" + productName + ", productPrice=" + productPrice
				+ ", quantity=" + quantity + ", upc=" + upc + ", warehouses=" + warehouses + "]";
	}
	
	
	
	
	
	




}


