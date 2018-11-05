package com.bemeal.web.brd;

import java.util.HashMap;
import java.util.Map;
import java.util.function.Function;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.bemeal.web.img.Image;
import com.bemeal.web.item.Item;
import com.bemeal.web.item.ItemMapper;
import com.bemeal.web.mbr.Member;


@RestController
public class BoardCtrl {
	private static final Logger logger = LoggerFactory.getLogger(BoardCtrl.class);
	@Autowired ItemMapper itemMapper;
	@Autowired BoardMapper brdMapper;
	@Autowired Member mbr;
	@Autowired Board brd;
	@Autowired Item item;
	@Autowired Image img;
	@Autowired HashMap<String, Object> map;
	
	@PostMapping("/brd/write")
	@ResponseBody Map<String,Object> brdWrite(@RequestBody Map<String,Object> param){
		Function<Map<String,Object>, Map<String,Object>>f=x->{
			map.clear();
			brdMapper.post(x);
			map.put("write", brdMapper.get(x));
			return map;
		};
		return f.apply(param);
	}
	
	@GetMapping("/brd/read/{itemSeq}")
	@ResponseBody Map<String,Object> brdRead(@PathVariable String itemSeq){
		Function<String, Map<String,Object>>f=x->{
			map.clear();
			map.put("itemSeq", x);
			map.put("read",brdMapper.get(map));
			return map;
		};
		return f.apply(itemSeq);
	}
	
	@PostMapping("/brd/modify")
	@ResponseBody Map<String,Object> brdModify(@RequestBody Map<String,Object> param){
		Function<Map<String,Object>, Map<String,Object>>f=x->{
			map.clear();
			brdMapper.put(x);
			map.put("modify",brdMapper.retrieve(x));
			return map;
		};
		return f.apply(param);
	}
	
	@PostMapping("/brd/delete")
	public Integer brdDelete(@RequestBody Map<String,Object> param){
		Function<Map<String,Object>, Integer>f=x->{
			map.clear();
			return brdMapper.delete(x);
		};
		return f.apply(param);
	}
	
}
