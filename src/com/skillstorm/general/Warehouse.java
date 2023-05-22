package com.skillstorm.general;

import java.util.ArrayList;

/*
 * Warehouse Page
Displays information about the warehouse such as its total capacity
Displays all of the items currently being stored in that warehouse
Feature for adding a new item to the warehouse
Feature for deleting an existing item from the warehouse
Feature for updating an existing item in the warehouse
Contains a link to navigate back to the home page
 */
public class Warehouse {

	private int maxCap;
	private ArrayList<String> items = new ArrayList<>();
	private String item;
	
	
	public Warehouse(int maxCap, ArrayList<String> items, String item) {
		this.maxCap = maxCap;
		this.items = items;
		this.item = item;
		
	}
	
	public void displayItems(){
		// Displays all of the items currently being stored in the warehouse
	}
	
	public void addItem() {
		// Feature for adding a new item to the warehouse
		
	}
	
	public void deleteItems() {
		// Feature for deleting an existing item from the warehouse
	}
	
	public void updateItem() {
		// Feature for updating an existing item in the warehouse
	}
	
	public int getMaxCap() {
		return this.maxCap;
	}
	
	public void setMaxCap(int maxCap) {
		this.maxCap = maxCap;
	}
	
	public String getItem() {
		return this.item;
	}
	
	public void setItem(String item) {
		this.item = item;
	}
	
	public ArrayList<String> getItems(){
		return this.items;
	}
	
	public void setItems(ArrayList<String> items) {
		this.items = items;
	}
	
}
