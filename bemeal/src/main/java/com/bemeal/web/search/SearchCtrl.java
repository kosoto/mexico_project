package com.bemeal.web.search;

import java.time.temporal.ValueRange;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.function.Function;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import com.bemeal.web.cmm.Util;


@RestController

public class SearchCtrl {
	private static final Logger logger = LoggerFactory.getLogger(SearchCtrl.class);
	@Autowired HashMap<String,Object> map;
	@Autowired SearchMapper searchMapper;
	
	@GetMapping("/navSearch/{searchWord}")
	public List<HashMap<String,Object>> navSearch(@PathVariable String searchWord){
		Function<String, List<HashMap<String,Object>>>f=x->searchMapper.navSearchList(x);
		return f.apply("%"+searchWord+"%");
	}
	@SuppressWarnings("unchecked")
	@PostMapping("/tagSearch")
	public List<HashMap<String,Object>> tagSearch(
			@RequestBody HashMap<String,Object> tagArr){
		Util.log.accept("tag Search controller");
		map.clear();
		Util.log.accept("item seq 값 ::"+tagArr.get("JtagArr"));
		Util.log.accept("value Range 값 ::"+tagArr.get("valueRange"));
		logger.info("넘어온 배열 {}",tagArr.toString());
		List<HashMap<String,Object>> t = (List<HashMap<String, Object>>) tagArr.get("JtagArr"); 
		Util.log.accept(t.toString());
		map.put("tagArr", (List<HashMap<String,Object>>) tagArr.get("JtagArr"));
		Util.log.accept(map.toString());
		map.put("value", String.valueOf(tagArr.get("ValueRange")));
		map.put("count", ((List<HashMap<String,Object>>) tagArr.get("JtagArr")).size());
		Function<HashMap<String,Object>,List<HashMap<String,Object>>>f=x->{
			return searchMapper.tagSearch(x);
		};
		logger.info(map.toString());
		return f.apply(map);
		
		
	}
	
}
