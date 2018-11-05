package com.bemeal.web.cmm;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.function.Consumer;
import java.util.function.Function;
import java.util.function.Supplier;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
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
	public HashMap<String,Object> evaluate(
			@PathVariable String id,
			@PathVariable String pageNum){
		map.clear();
		map.put("id", id);
		map.put("pageNum", pageNum);
		Function<HashMap<String,Object>, HashMap<String,Object>>f=x->{
			x.put("count", cmmMapper.countUnRatingsById((String) x.get("id")));
			x.put("pageSize", 20);
			x.put("blockSize", 1);
			pagination.excute(x);
			x.put("pagination", pagination);
			x.put("list", cmmMapper.evaluateList(x));
			return x;
		};
		return f.apply(map);
	}
	@Transactional
	@PostMapping("/grade/evaluate")
	public String evaluateGrade(@RequestBody HashMap<String,Object>p) {
		Function<HashMap<String,Object>, String>f=x->{
			x.put("currentRating", ((int) x.get("currentRating"))/2.0);
			String prevRating = cmmMapper.selectOneGrade(x);
			if(prevRating==null) 
				return (cmmMapper.insertGrade(x)!=0)?"add":"fail";
			else if(prevRating.equals(x.get("currentRating")+"")) 
				return (cmmMapper.removeGrade(x)!=0)?"remove":"fail";
			else 
				return (cmmMapper.modifyGrade(x)!=0)?"update":"fail";
		};
		return f.apply(p);
	}
	
	@Transactional
	@GetMapping("/grade/count/{id}")
	public HashMap<String, Object> countGrade(@PathVariable String id){
		Function<String, HashMap<String, Object>> f=x->{
			String count = cmmMapper.countGrade(x);
			map.clear();
			map.put("gradeCnt", (count==null)?"0":count);
			map.put("itemCnt", cmmMapper.countItem());
			return map;
		};
		return f.apply(id);
	}
	
	/* /Taste - grade*/
	
	@GetMapping("/item/list/{option}/{value}")
	public @ResponseBody HashMap<String,Object> list(
			@PathVariable String option,
			@PathVariable String value){
		Function<HashMap<String,Object>,HashMap<String,Object>> f = x->{
			ArrayList<HashMap<String,Object>> list;
			String val = (String)x.get("value");
			switch((String)x.get("option")) {
			case "grade": 
				list = cmmMapper.gradList();	
				break;
			case "buy": 
				list = cmmMapper.buyList();
				break;
			case "wish": 
				list = cmmMapper.wishList();
				break;
			case "gender": 
				list = cmmMapper.listByGender(val);
				break;
			case "age": 
				x.put("start", val);
				x.put("end", Integer.parseInt(val)+9);
				list = cmmMapper.listByAge(x);
				break;
			default : 
				list = cmmMapper.tagSerchList(value);
				break;
			}
			x.put("list", list);
			return x;
		};
		map.clear();
		map.put("option", option);
		map.put("value", value);
		return f.apply(map);
	}
	
	/*tag*/
	@GetMapping("/tagList")
	public ArrayList<String> tagList(){
		Supplier<ArrayList<String>>c=()->cmmMapper.tagList();
		return c.get();
	}
}
