package com.bemeal.web.cmm;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;
import java.util.function.Consumer;
import java.util.function.Function;
import java.util.function.Supplier;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
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
	@GetMapping("/grade/retrieve/{id}/{itemSeq}")
	public @ResponseBody String retrieveGrade(
			@PathVariable String id,
			@PathVariable String itemSeq) {
		logger.info("==retrieveGrade==");
		logger.info("넘어온 id {}",id);
		logger.info("넘어온 itemSeq {}",itemSeq);
		Function<HashMap<String,Object>, String> f = x->{
			return cmmMapper.selectOneGrade(x);
		};
		map.clear();
		map.put("id",id);
		map.put("itemSeq",itemSeq);
		String temp = f.apply(map);
		logger.info("temp : "+temp);
		return (temp==null)?"0":temp;
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
		Consumer<HashMap<String, Object>> c = x->{
			logger.info(cmmMapper.insertGrade(x)+"");
		};
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
	@GetMapping("/grade/update/{id}/{itemSeq}/{grade}")
	public void updateGrade(
			@PathVariable String id,
			@PathVariable String itemSeq,
			@PathVariable double grade) {
		logger.info("==updateGrade==");
		logger.info("넘어온 id {}",id);
		logger.info("넘어온 itemSeq {}",itemSeq);
		Consumer<HashMap<String, Object>> c = x->{
			logger.info(cmmMapper.modifyGrade(x)+"");
		};
		map.clear();
		map.put("id", id);
		map.put("itemSeq", itemSeq);
		map.put("grade", grade/2);
		c.accept(map);
	}
	@Transactional
	@GetMapping("/grade/count/{id}")
	public HashMap<String, Object> countGrade(@PathVariable String id){
		map.clear();
		logger.info("넘어온 id {}",id);
		Function<String, String> gradeCnt=x->cmmMapper.countGrade(x);
		Supplier<Integer> itemCnt=()->cmmMapper.countItem();
		String cnt = gradeCnt.apply(id);
		map.put("gradeCnt", (cnt==null)?"0":cnt);
		map.put("itemCnt", itemCnt.get());
		return map;
	}
	
	/* /Taste - grade*/
	
	@GetMapping("/item/list/{option}/{value}")
	public @ResponseBody Map<String,Object> list(
			@PathVariable String option,
			@PathVariable String value){
		Function<String,ArrayList<HashMap<String,Object>>> f = x->{
			ArrayList<HashMap<String,Object>> temp = new ArrayList<>();
			logger.info("넘어온 옵션:"+option);
			logger.info("넘어온 값:"+value);
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
			case "gender": 
				temp = cmmMapper.listByGender(value);
				break;
			case "age": 
				map.clear();
				map.put("start", value);
				map.put("end", Integer.parseInt(value)+9);
				temp = cmmMapper.listByAge(map);
				break;
			default : 
				if(x.substring(0,3).equals("tag"))temp = cmmMapper.tagSerchList(value);
				break;
			}
			logger.info(temp.toString());
			return temp;
		};
		map.clear();
		map.put("option", option);
		map.put("list", f.apply(option));
		return map;
	}
	
	/*tag*/
	@GetMapping("/tagList")
	public ArrayList<String> tagList(){
		Supplier<ArrayList<String>>c=()->cmmMapper.tagList();
		return c.get();
	}
}
