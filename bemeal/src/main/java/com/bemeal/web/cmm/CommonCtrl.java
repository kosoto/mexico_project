package com.bemeal.web.cmm;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;
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
	@Autowired CommonMapper cmmMapper;
	@Autowired ItemMapper itemMapper;
	@Autowired TasteMapper tasteMapper;
	@Autowired MemberMapper mbrMapper;
	@Autowired HashMap<String, Object> map;
	
	// Taste
	@GetMapping("/grade/{id}")
	public @ResponseBody boolean existGrade(@PathVariable String id) {
		Function<String, Boolean> f = x->{
			return (tasteMapper.existGrade(id)==1);
		};
		return false;
	} 
	
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
	
	@GetMapping("/item/evaluate/{id}/{page}")
	public @ResponseBody Map<String,Object> evaluate(
			@PathVariable String id,@PathVariable String page){
		map.clear();
		logger.info("넘어온 id {}",id);
		logger.info("넘어온 page {}",page);
		/* DB에서 해당 id가 평가하지 않는 아이템 목록을 뽑아옴 
		 * page로 pagination하기
		 */
		Function<String,ArrayList<Item>> f = x->{
			ArrayList<Item> temp = new ArrayList<>();
			for(int i=0;i<20;i++) {
				item = new Item();
				int n = ((int) (Math.random()*10))+1;
				item.setImage("/web/resources/img/cmm/image"+n+".jpg");
				item.setItemName("도시락"+n);
				temp.add(item);
			}
			return temp;
		};
		/* 더미 데이터 끝*/
		map.put("page", page);
		map.put("list", f.apply(page));
		return map;
	}
	
}
