package com.bemeal.web.brd;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.bemeal.web.cmm.Auth;
import com.bemeal.web.img.Image;
import com.bemeal.web.item.Item;
import com.bemeal.web.item.ItemMapper;
import com.bemeal.web.mbr.Member;
import com.bemeal.web.tx.TxService;


@RestController
public class BoardCtrl {
	private static final Logger logger = LoggerFactory.getLogger(BoardCtrl.class);
	@Autowired ItemMapper itemMapper;
	@Autowired BoardMapper brdMapper;
	//@Autowired TxService txService;
	@Autowired Member mbr;
	@Autowired Board brd;
	@Autowired Item item;
	@Autowired Image img;
	@Autowired HashMap<String, Object> map;
	
	@PostMapping(value="/brd/write")
	@ResponseBody Map<String,Object> brdWrite(@RequestBody Map<String,Object> param){
		map.clear();
		logger.info("board write param:{}",param);
		brdMapper.post(param);
		logger.info("brdwrite brdMapper.get(param):{}",brdMapper.get(param));
		map.put("write", brdMapper.get(param));
		return map;
	}
	
	@GetMapping(value="/brd/read/{itemSeq}")
	@ResponseBody Map<String,Object> brdRead(@PathVariable String itemSeq){
		map.clear();
		logger.info("board read param:{}"+itemSeq);
		map.put("itemSeq", itemSeq);
		map.put("read",brdMapper.get(map));
		
		logger.info("map.get(\"read\"):{}",map.get("read"));
		return map;
	}
	
	@PostMapping("/brd/modify")
	public void brdModify(@RequestBody Map<String,Object> param){
		
	}
	
	@PostMapping("/brd/delete")
	public void brdDelete(@RequestBody Map<String,Object> param){
		
	}
	
}
