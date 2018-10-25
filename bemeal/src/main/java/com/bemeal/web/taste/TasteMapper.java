package com.bemeal.web.taste;

import java.util.ArrayList;
import java.util.Map;

import org.springframework.stereotype.Repository;

@Repository
public interface TasteMapper {
	public void post(Taste p);
	public int existGrade(String id);
	public void postCart(Map<String, Object> p);
	public int deleteCart(Map<String, Object> p);
	public ArrayList<Map<String, Object>> listCart(Map<String, Object> p);
	public ArrayList<Map<String, Object>> chartArea(String id);
	public ArrayList<Map<String, Object>> chartIngre();
	public ArrayList<Map<String, Object>> chartBrand();
	public ArrayList<Map<String, Object>> chartTaste();
	public ArrayList<Map<String, Object>> chartEmotion(); 
	public ArrayList<Map<String, Object>> chartMenu();
}
