package com.bemeal.web.search;

import java.util.HashMap;
import java.util.List;
import java.util.function.Function;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;


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
	@PostMapping("/tagSearch")
	public List<HashMap<String,Object>> tagSearch(@RequestBody HashMap<String,Object> tagArr){
		Function<HashMap<String,Object>,List<HashMap<String,Object>>>f=x->{
			map.clear();
			@SuppressWarnings("unchecked")
			List<HashMap<String,Object>> arr = (List<HashMap<String, Object>>) x.get("JtagArr");
			map.put("tagArr",arr);
			map.put("count", arr.size());
			return searchMapper.tagSearch(map);
		};
		return f.apply(tagArr);
	}
}
