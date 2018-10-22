package com.bemeal.web.taste;

import java.util.HashMap;
import java.util.ArrayList;
import java.util.Map;

import org.springframework.stereotype.Repository;

@Repository
public interface TasteMapper {
	public void post(Taste p);
	public int existGrade(String id);
	public ArrayList<Map<String, Object>> chart(String id);
}
