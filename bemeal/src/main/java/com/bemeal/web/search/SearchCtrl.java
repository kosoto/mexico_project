package com.bemeal.web.search;

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
		logger.info("넘어온 searchWord {}",searchWord);
		Function<String, List<HashMap<String,Object>>>f=x->searchMapper.navSearchList(x);
		return f.apply("%"+searchWord+"%");
	}
	@PostMapping("/tagSearch")
	public Map<String,String> tagSearch(
			@RequestBody HashMap<String, String> t
			){
		HashMap<String, String> r = new HashMap<>();
		
		String[] arr1 = t.get("tagFoodstuffs").split("/");
		String[] arr2 = t.get("tagTaste").split("/");
		String[] arr3 = t.get("tagSensitivity").split("/");
		
		Util.log.accept("가져온 값 :: "+ arr1.toString() + arr2.toString() + arr3.toString());
		r.put("tagFoodStuff", t.get("tagFoodstuffs"));
		r.put("tagTaste",t.get("tagTaste"));
		r.put("tagSensitivity",t.get("tagSensitivity"));
		return r;
		
	}
	
}
