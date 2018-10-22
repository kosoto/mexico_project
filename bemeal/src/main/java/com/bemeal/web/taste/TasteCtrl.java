package com.bemeal.web.taste;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.bemeal.web.mbr.Member;
import com.bemeal.web.mbr.MemberMapper;

@RestController
public class TasteCtrl {
	private static final Logger logger = LoggerFactory.getLogger(TasteCtrl.class);
	@Autowired Taste tst;
	@Autowired TasteMapper tstMapper;
	@Autowired MemberMapper mbrMapper;
	@Autowired HashMap<String,Object> tmap;
	
	@GetMapping("/chart/{id}")
	public @ResponseBody ArrayList<Map<String,Object>> chart(@PathVariable String id){
		tmap.clear();
		logger.info("id {}",id);
		tmap.put("id", id);
		ArrayList<Map<String,Object>> smap = tstMapper.chart(id);
		return smap;
	}
	
	
}
