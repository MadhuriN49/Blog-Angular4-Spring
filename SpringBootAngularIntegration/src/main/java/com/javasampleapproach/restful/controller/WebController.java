package com.javasampleapproach.restful.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;



@RestController
@RequestMapping(value="/api")
public class WebController {

	private Map<Integer, Customer> customers = new HashMap<Integer, Customer>(){

		{
	        put(1, new Customer(1, "Mary", "Taylor", 24));
	        put(2, new Customer(2, "Peter", "Smith", 18));
	        put(3, new Customer(3, "Lauren", "Taylor", 31));
	    }
	};
	
	private Map<Integer, Dashboard> authors = new HashMap<Integer, Dashboard>(){

		{
	        put(1, new Dashboard(1,  "History", "Dummy Content", "Carl", "12/10/17", "assets/images/carl.jpeg" ));
	        put(2, new Dashboard(2, "Fiction", "Dummy Content", "Andria", "12/10/17", "assets/images/andria.jpeg"));
	        put(3, new Dashboard(3, "Horror", "Dummy Content", "Max", "12/10/17", "assets/images/max.jpeg"));
	    }
	};
	
	
	@GetMapping(value="/customer")
	public List<Customer> getAll(){
		List<Customer> results = customers.entrySet().stream()
									.map(entry ->entry.getValue())
									.collect(Collectors.toList());
		return results;
	}
	
	@GetMapping(value="/dashboard")
	public List<Dashboard> getAllDashboard(){
		List<Dashboard> results = authors.entrySet().stream()
									.map(entry ->entry.getValue())
									.collect(Collectors.toList());
		return results;
	}
	
	@GetMapping(value="/customer/{id}")
	public Customer getCustomer(@PathVariable int id){
		return customers.get(id);
	}
	
	@PostMapping(value="/customer")
	public Customer postCustomer(@RequestBody Customer customer){
		int id = customers.size() + 1;
		customer.setId(id);
		customers.put(id, customer);
		return customer;
	}
	
	@PostMapping(value="/dashboard")
	public Dashboard postAuthor(@RequestBody Dashboard dashboard){
		int id = authors.size() + 1;
		dashboard.setId(id);
		authors.put(id, dashboard);
		return dashboard;
	}
	
	@PutMapping(value="/customer/{id}")
	public void putCustomer(@RequestBody Customer customer, @PathVariable int id){
		customers.replace(id, customer);
	}

	@DeleteMapping(value="/dashboard/{id}")
	public void deleteAuthor(@PathVariable int id){
		authors.remove(id);
	}
	
	@DeleteMapping(value="/customer/{id}")
	public void deleteCustomer(@PathVariable int id){
		customers.remove(id);
	}
}