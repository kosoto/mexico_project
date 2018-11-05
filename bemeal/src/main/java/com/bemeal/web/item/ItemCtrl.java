package com.bemeal.web.item;

import java.util.HashMap;
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

import com.bemeal.web.cmm.CommonMapper;
import com.bemeal.web.cmm.Pagination;
import com.bemeal.web.img.Image;


@RestController
public class ItemCtrl {
	private static final Logger logger = LoggerFactory.getLogger(ItemCtrl.class);
	@Autowired Item item;
	@Autowired Image img;
	@Autowired ItemMapper itemMapper;
	@Autowired CommonMapper cmmMapper;
	@Autowired Pagination pagi;
	@Autowired HashMap<String,Object> map;
	
	@GetMapping("/item/list/{brand}/{category}/{sort}/{pageNum}")//   /{}
	public @ResponseBody HashMap<String,Object> list(
			@PathVariable String brand,
			@PathVariable String category,
			@PathVariable String sort,
			@PathVariable String pageNum){
		map.clear();
		if(brand.equals("브랜드전체") && category.equals("카테고리전체")) {
			map.put("brand", null);
			map.put("category", null);
		}else if(brand.equals("브랜드전체")) {
			map.put("brand", null);
			map.put("category", category);
		}else if(category.equals("카테고리전체")) {
			map.put("category", null);
			map.put("brand", brand);
		}else {
			map.put("brand", brand);
			map.put("category", category);
		}
		map.put("sort", sort);
		map.put("pageNum",pageNum);
		Function<HashMap<String,Object>, HashMap<String,Object>>f=x->{
			x.put("count", itemMapper.menuCount(x));
			x.put("pageSize", 12);
			x.put("blockSize", 1);
			pagi.excute(map);
			x.put("pagi", pagi);
			if((x.get("sort")+"").equals("가격")) {
				x.put("listsm", itemMapper.menuListPrice(x));
			}else if((x.get("sort")+"").equals("칼로리")){
				x.put("listsm", itemMapper.menuListCal(x));
			}
			return x;
		};
		return f.apply(map);
	}
	
	@GetMapping("/item/retrieve/{itemSeq}")
	public @ResponseBody HashMap<String, Object> retrieve(@PathVariable String itemSeq ){
		Function<String, HashMap<String, Object>>f=x->{
			map.clear();
			item.setItemSeq(Integer.parseInt(x));
			itemMapper.retrieve(item);
			itemMapper.tag(item);
			map.put("retrieve", itemMapper.retrieve(item));
			map.put("rtag", itemMapper.tag(item));
			return map;
		};
		return f.apply(itemSeq);
	}
	@GetMapping("/item/recommend/{memberId}/{itemSeq}")
	public @ResponseBody HashMap<String, Object> recommend(
			@PathVariable String memberId,
			@PathVariable String itemSeq
			){
		return map;
	}
	
	@PostMapping("/item/grade")
	public String retrieveGrade(@RequestBody HashMap<String,Object>p) {
		Function<HashMap<String,Object>, String>f=x->{
			if(x.get("memberId").equals("")) {
				return "0.0";
			}
			String temp = itemMapper.retrieveGrade(x);
			return (temp==null)?"0.0":temp;
		};
		return f.apply(p);
	}
}
