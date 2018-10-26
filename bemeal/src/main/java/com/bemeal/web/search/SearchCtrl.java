package com.bemeal.web.search;

import java.util.HashMap;

import java.util.List;
import java.util.Map;import javax.swing.text.StyledEditorKit.ForegroundAction;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.bemeal.web.cmm.Util;
import com.bemeal.web.item.Item;


@RestController
@RequestMapping("/search")
public class SearchCtrl {
	private static final Logger logger = LoggerFactory.getLogger(SearchCtrl.class);
	@Autowired HashMap<String,Object> map;
	@Autowired SearchMapper searchMapper;
	
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
