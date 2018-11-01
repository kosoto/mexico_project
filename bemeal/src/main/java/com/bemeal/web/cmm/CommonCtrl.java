package com.bemeal.web.cmm;

import java.util.ArrayList;
import java.util.HashMap;
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
		map.put("pageNum", pageNum);
		Function<String, Integer> cnt=x-> cmmMapper.countUnRatingsById(x);
		map.put("count", cnt.apply(id));
		map.put("pageSize", 20);
		map.put("blockSize", 1);
		pagination.excute(map);
		Function<HashMap<String,Object>, ArrayList<HashMap<String,Object>>> f=x-> cmmMapper.evaluateList(x);
		map.clear();
		map.put("pagination", pagination);
		map.put("id", id);		
		map.put("list", f.apply(map));
		map.put("page", pageNum);
		return map;
	}
	@Transactional
	@PostMapping("/grade/evaluate")
	public String evaluateGrade(@RequestBody HashMap<String,Object>p) {
		double currentRating = ((int) p.get("currentRating"))/2.0;
		Function<HashMap<String,Object>,String>pr=x->cmmMapper.selectOneGrade(x);
		map.clear();
		map.put("id",p.get("memberId"));
		map.put("itemSeq",p.get("seq"));
		String temp = pr.apply(map);
		double prevRating = (temp==null)?0.0:Double.parseDouble(temp);
		Function<HashMap<String,Object>, String>ev=x->{
			String result = "";
			if((double)x.get("prevRating")==0.0) result = (cmmMapper.insertGrade(x)!=0)?"add":"fail";
			else if((double)x.get("prevRating")==(double)x.get("currentRating")) result = (cmmMapper.removeGrade(x)!=0)?"remove":"fail";
			else result = (cmmMapper.modifyGrade(x)!=0)?"update":"fail";
			return result;
		};
		map.put("prevRating", prevRating);
		map.put("currentRating", currentRating);
		map.put("grade", currentRating);
		return ev.apply(map);
	}
	@Transactional
	@GetMapping("/grade/count/{id}")
	public HashMap<String, Object> countGrade(@PathVariable String id){
		map.clear();
		Function<String, String> gradeCnt=x->cmmMapper.countGrade(x);
		Supplier<Integer> itemCnt=()->cmmMapper.countItem();
		String cnt = gradeCnt.apply(id);
		map.put("gradeCnt", (cnt==null)?"0":cnt);
		map.put("itemCnt", itemCnt.get());
		return map;
	}
	
	/* /Taste - grade*/
	
	@GetMapping("/item/list/{option}/{value}")
	public @ResponseBody HashMap<String,Object> list(
			@PathVariable String option,
			@PathVariable String value){
		Function<HashMap<String,Object>,ArrayList<HashMap<String,Object>>> f = x->{
			ArrayList<HashMap<String,Object>> temp = new ArrayList<>();
			String opt = (String)x.get("option");
			String val = (String)x.get("value");
			switch(opt) {
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
				temp = cmmMapper.listByGender(val);
				break;
			case "age": 
				x.put("start", val);
				x.put("end", Integer.parseInt(val)+9);
				temp = cmmMapper.listByAge(x);
				break;
			default : 
				temp = cmmMapper.tagSerchList(value);
				break;
			}
			return temp;
		};
		map.clear();
		map.put("option", option);
		map.put("value", value);
		map.put("list", f.apply(map));
		return map;
	}
	
	/*tag*/
	@GetMapping("/tagList")
	public ArrayList<String> tagList(){
		Supplier<ArrayList<String>>c=()->cmmMapper.tagList();
		return c.get();
	}
}
