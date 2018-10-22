package com.bemeal.web.taste;

import java.util.HashMap;

import org.springframework.stereotype.Repository;

@Repository
public interface TasteMapper {
	public void post(Taste p);
	public int existGrade(String id);
}
