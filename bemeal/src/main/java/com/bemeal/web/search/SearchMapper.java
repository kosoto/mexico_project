package com.bemeal.web.search;

import java.util.HashMap;
import java.util.List;

import org.springframework.stereotype.Repository;


@Repository
public interface SearchMapper {
	public List<HashMap<String,Object>> navSearchList(String word);
	public List<?> tagSearch(List<String> tagArr);
}
