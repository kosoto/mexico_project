package com.bemeal.web.cmm;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;

import org.springframework.stereotype.Repository;

@Repository
public interface CommonMapper {
	public void postTag(Map<?,?>p );
	public String existGrade(HashMap<String,Object> p);
	public ArrayList<HashMap<String, Object>> gradList();
	public ArrayList<HashMap<String, Object>> buyList();
	public ArrayList<HashMap<String, Object>> wishList();
	public int countRatingsById(String id);
	public int countUnRatingsById(String id);
	public ArrayList<HashMap<String, Object>> evaluateList(HashMap<String,Object> p);
	public int insertGrade(HashMap<String, Object> p);
	public int removeGrade(HashMap<String, Object> p);
	public int modifyGrade(HashMap<String, Object> p);
}
