package com.bemeal.web.item;

import java.util.*;

import org.springframework.stereotype.Repository;

@Repository
public interface ItemMapper {
	public void post(Item p);
	public List<Item> listAll();
	public List<Item> listSomePrice(Item p);
	public List<Item> listSomeCalorie(Item p);
	public List<Item> listSomeScore(Item p);
	//public int listCount(Map<?, ?> p);
	public List<Item> retrieve(Item p);
	public List<Item> tag(Item p);
	public List<HashMap<String, Object>> menuListPrice(HashMap<String, Object>p);
	public List<HashMap<String, Object>> menuListCal(HashMap<String, Object>p);
	public int menuCount(HashMap<String, Object>p);
	public String retrieveGrade(HashMap<String,Object>p);
	
}
