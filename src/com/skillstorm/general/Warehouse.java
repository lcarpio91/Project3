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
	
	// maybe this ArrayList should be changed to a HashMap?
	private ArrayList<String> items = new ArrayList<>();
	private String item;
	
	
	public Warehouse(int maxCap, ArrayList<String> items) {
		this.maxCap = maxCap;
		this.items = items;		
	}
	
	///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	/////////////////////////////////////////////////////////////MAIN METHOD///////////////////////////////////////////////////////////////////////////////
	///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	public static void main(String[] args) {
		
		
		ArrayList<String> items = new ArrayList<>();

		Warehouse wh = new Warehouse(20, items);
		
		System.out.println(items.size());
		
		wh.addItem("item one");
		
		System.out.println(items.size());
		
		System.out.println(items);
		
		wh.updateItem("item one", "updated item one");
		
		System.out.println(items);

		
	}// main
	///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	
	public void displayItems(){
		// Displays all of the items currently being stored in the warehouse
	}
	
	public void addItem(String item) {
		// Feature for adding a new item to the warehouse
		// maybe use this method in a different class that includes prompts for the user?
		
		// this method takes in a String object and adds that object to
		// the ArrayList belonging to the referenced Warehouse.
		getItems().add(item);
		
	}
	
	public void deleteItems() {
		// Feature for deleting an existing item from the warehouse
		
	}
	
	public String updateItem(String origItem, String updatedItem) {
		// Feature for updating an existing item in the warehouse
		// this method takes in the item you want to update and replaces it with 
		// the item you specify
		ArrayList<String> items = getItems();
		
		if (items.contains(origItem)) {
			items.remove(origItem);
			items.add(updatedItem);
			return origItem + " updated to: " + updatedItem + ".";
		}else {
			return origItem + " not found, no changes made.";
		}
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
