package com.bemeal.web.cmm;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;

import org.springframework.stereotype.Repository;

@Repository
public interface CommonMapper {
	public void postTag(Map<?,?>p );
	public int existGrade(String id,String itemSeq);
	public ArrayList<HashMap<String, Object>> gradList();
	public ArrayList<HashMap<String, Object>> buyList();
	public ArrayList<HashMap<String, Object>> wishList();
	public int countRatingsById(String id);
}
