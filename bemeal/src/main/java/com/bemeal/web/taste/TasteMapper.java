package com.bemeal.web.taste;

import java.util.ArrayList;
import java.util.Map;

import org.springframework.stereotype.Repository;

@Repository
public interface TasteMapper {
	public int post(Map<String, Object> p);
	public int postTaste(Map<String, Object> p);
	public int existGrade(String id);
	public int deleteCart(Map<String, Object> p);
	public ArrayList<Map<String, Object>> listCart(Map<String, Object> p);
	public ArrayList<Map<String, Object>> listPayHis(Map<String, Object> p);
	public ArrayList<Map<String, Object>> listReceivedGift(Map<String, Object> p);
	public ArrayList<Map<String, Object>> listGift(Map<String, Object> p);
	public ArrayList<Map<String, Object>> chartArea(String id);
	public ArrayList<Map<String, Object>> chartIngre();
	public ArrayList<Map<String, Object>> chartBrand();
	public ArrayList<Map<String, Object>> chartTaste();
	public ArrayList<Map<String, Object>> chartEmotion(); 
	public ArrayList<Map<String, Object>> chartMenu();
	public ArrayList<Map<String, Object>> payList(Map<String, Object> p);
	public int postPay(Map<String, Object> p);
	public int postGift(Map<String, Object> p);
	public int postTastePay(Map<String, Object> p);
	public int countTaste(Map<String, Object> p);
}
