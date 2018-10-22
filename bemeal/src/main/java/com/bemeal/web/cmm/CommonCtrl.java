package com.bemeal.web.cmm;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;
import java.util.function.Consumer;
import java.util.function.Function;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.bemeal.web.item.Item;
import com.bemeal.web.item.ItemMapper;
import com.bemeal.web.mbr.Member;
import com.bemeal.web.mbr.MemberMapper;
import com.bemeal.web.page.PageProxy;
import com.bemeal.web.page.Pagination;
import com.bemeal.web.taste.Taste;
import com.bemeal.web.taste.TasteMapper;

@RestController
public class CommonCtrl {
	private static final Logger logger = LoggerFactory.getLogger(CommonCtrl.class);
	@Autowired Taste taste;
	@Autowired Item item;
	@Autowired Member mbr;
	@Autowired CommonMapper cmmMapper;
	@Autowired ItemMapper itemMapper;
	@Autowired TasteMapper tasteMapper;
	@Autowired MemberMapper mbrMapper;
	@Autowired HashMap<String, Object> map;
	/*Taste - evaluate*/
	@GetMapping("/evaluate/{id}/{pageNum}")
	public @ResponseBody HashMap<String,Object> evaluate(
			@PathVariable String id,
			@PathVariable String pageNum){
		map.clear();
		logger.info("넘어온 id {}",id);
		logger.info("넘어온 page {}",pageNum);
		PageProxy pxy = new PageProxy();
		map.put("pageNum", pageNum);
		map.put("count", 0);
		map.put("pageSize", 5);
		map.put("blockSize", 4);
		pxy.carryOut(map);
		Pagination page = pxy.getPagination();
		Function<String, ArrayList<HashMap<String,Object>>> f=x->{
			
			return null;
		};
		f.apply(id+"/"+page);
		map.put("page", 1);
		return map;
	}
	/*/Taste - evaluate*/
	
	/*Taste - grade CRUD + exist*/
	@GetMapping("/grade/exist/{id}/{itemSeq}")
	public @ResponseBody boolean existGrade(
			@PathVariable String id,
			@PathVariable String itemSeq) {
		logger.info("넘어온 id {}",id);
		logger.info("넘어온 itemSeq {}",itemSeq);
		Function<String, Boolean> f = x->{
			x.split("/");
			int flag = cmmMapper.existGrade(id,itemSeq);
			logger.info("평점 정보가 있나? {}",flag);
			return (flag==1);
		};
		return f.apply(id+"/"+itemSeq);
	} 
	@GetMapping("/grade/add/{id}/{itemSeq}")
	public void addGrade(
			@PathVariable String id,
			@PathVariable String itemSeq) {
		logger.info("넘어온 id {}",id);
		logger.info("넘어온 itemSeq {}",itemSeq);
		Consumer<String> c = x->{
			
		};
	} 
	
	/* /Taste - grade*/
	
	//  Item
	@GetMapping("/item/list/{option}")
	public @ResponseBody Map<String,Object> list(@PathVariable String option){
		map.clear();
		logger.info("넘어온 옵션 {}",option); // 평점,판매량,최신 등등의 옵션으로 해당 옵션의 아이템을 검색
		Function<String,ArrayList<HashMap<String,Object>>> f = x->{
			ArrayList<HashMap<String,Object>> temp = new ArrayList<>();
			switch(x) {
			case "grade": 
				temp = cmmMapper.gradList();	
				break;
			case "buy": 
				temp = cmmMapper.buyList();
				break;
			case "wish": 
				temp = cmmMapper.wishList();
				break;
			}
			logger.info(temp.toString());
			return temp;
		};
		map.put("option", option);
		map.put("list", f.apply(option));
		return map;
	}
}
