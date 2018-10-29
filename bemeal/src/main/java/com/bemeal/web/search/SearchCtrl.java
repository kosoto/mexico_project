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
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import com.bemeal.web.cmm.Util;

import jdk.nashorn.internal.ir.RuntimeNode.Request;


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
	public List<?> tagSearch(
			@RequestParam(value = "JtagArr[]") List<String> tagArr){
		//String[] checkTag =  tagArr.getParameterValues("checks");
		Util.log.accept("tag Search controller");
		
		
		Util.log.accept(tagArr.toString());
		return searchMapper.tagSearch(tagArr);
		
	}
	
}
