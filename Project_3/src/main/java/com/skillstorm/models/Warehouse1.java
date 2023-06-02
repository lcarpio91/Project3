package com.skillstorm.models;

import java.util.Objects;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "warehouse1")
public class Warehouse1 {
	
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
	
	public Warehouse1() {}

	public Warehouse1(int productId, String productName, double productPrice, int quantity) {
		super();
		this.productId = productId;
		this.productName = productName;
		this.productPrice = productPrice;
		this.quantity = quantity;
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

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Warehouse1 other = (Warehouse1) obj;
		return productId == other.productId && Objects.equals(productName, other.productName)
				&& Double.doubleToLongBits(productPrice) == Double.doubleToLongBits(other.productPrice)
				&& quantity == other.quantity;
	}

	@Override
	public String toString() {
		return "Warehouse1 [productId=" + this.productId + ", productName=" + this.productName + ", productPrice=" + this.productPrice
				+ ", quantity=" + this.quantity + "]";
	}
	
	
	
	
	

}