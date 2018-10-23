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
import com.bemeal.web.taste.Taste;
import com.bemeal.web.taste.TasteMapper;

@RestController
public class CommonCtrl {
	private static final Logger logger = LoggerFactory.getLogger(CommonCtrl.class);
	@Autowired Taste taste;
	@Autowired Item item;
	@Autowired Member mbr;
	@Autowired Pagination pagination;
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
		map.put("pageNum", pageNum);
		Function<String, Integer> cnt=x->{
			return cmmMapper.countUnRatingsById(x);
		};
		map.put("count", cnt.apply(id));
		map.put("pageSize", 20);
		map.put("blockSize", 1);
		pagination.excute(map);
		Function<HashMap<String,Object>, ArrayList<HashMap<String,Object>>> f=x->{
			return cmmMapper.evaluateList(x);
		};
		map.clear();
		map.put("id", id);
		map.put("pagination", pagination);
		map.put("list", f.apply(map));
		map.put("page", pageNum);
		return map;
	}
	/*/Taste - evaluate*/
	
	/*Taste - grade CRUD + exist*/
	@GetMapping("/grade/exist/{id}/{itemSeq}")
	public @ResponseBody String existGrade(
			@PathVariable String id,
			@PathVariable String itemSeq) {
		logger.info("==existGrade==");
		logger.info("넘어온 id {}",id);
		logger.info("넘어온 itemSeq {}",itemSeq);
		Function<HashMap<String,Object>, String> f = x->{
			return cmmMapper.existGrade(x);
		};
		map.clear();
		map.put("id",id);
		map.put("itemSeq",itemSeq);
		String temp = f.apply(map);
		logger.info("temp : "+temp);
		return (f.apply(map)==null)?"0":f.apply(map);
	} 
	@GetMapping("/grade/add/{id}/{itemSeq}/{grade}")
	public void addGrade(
			@PathVariable String id,
			@PathVariable String itemSeq,
			@PathVariable double grade) {
		logger.info("==addGrade==");
		logger.info("넘어온 id {}",id);
		logger.info("넘어온 itemSeq {}",itemSeq);
		logger.info("넘어온 currentRating {}",grade/2);
		Consumer<HashMap<String, Object>> c;
		if(Double.parseDouble(existGrade(id, itemSeq))==(grade/2)) {
			c = x->{//update
				logger.info(cmmMapper.modifyGrade(x)+"");
			};
		}else {
			c = x->{//insert
				logger.info(cmmMapper.insertGrade(x)+"");
			};
		}
		
		map.clear();
		map.put("id", id);
		map.put("itemSeq", itemSeq);
		map.put("grade", grade/2);
		c.accept(map);
	} 
	@GetMapping("/grade/delete/{id}/{itemSeq}")
	public void deleteGrade(
			@PathVariable String id,
			@PathVariable String itemSeq) {
		logger.info("==deleteGrade==");
		logger.info("넘어온 id {}",id);
		logger.info("넘어온 itemSeq {}",itemSeq);
		Consumer<HashMap<String, Object>> c = x->{
			logger.info(cmmMapper.removeGrade(x)+"");
		};
		map.clear();
		map.put("id", id);
		map.put("itemSeq", itemSeq);
		c.accept(map);
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
