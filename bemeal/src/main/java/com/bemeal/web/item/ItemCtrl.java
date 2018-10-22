package com.bemeal.web.item;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.function.Function;

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

import com.bemeal.web.img.Image;
import com.bemeal.web.tx.TxService;


@RestController
public class ItemCtrl {
	private static final Logger logger = LoggerFactory.getLogger(ItemCtrl.class);
	@Autowired Item item;
	@Autowired Image img;
	@Autowired ItemMapper itemMapper;
	@Autowired TxService tx;
	@Autowired HashMap<String,Object> map;
	
	@GetMapping("/item/list/{option}")
	public @ResponseBody Map<String,Object> list(@PathVariable String option){
		map.clear();
		//logger.info("넘어온 옵션 {}",option);
	
		Function<String,ArrayList<Item>> f = x->{
			// DB가서 데이터 가져오기, 아래는 더미데이터용. 삭제될 코딩
			ArrayList<Item> temp = new ArrayList<>();
			for(int i=0;i<20;i++) {
				item = new Item();
				int n = ((int) (Math.random()*10))+1;
				item.setImage("/web/resources/img/cmm/item/dosiroc ("+n+").jpg");
				item.setItemName("도시락"+n);
				temp.add(item);
			}
			// DB가서 데이터 가져오기 끝
			return temp;
		};
		map.put("option", option);
		map.put("list", f.apply(option));
		//logger.info("list {}",map.get("list"));
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
	
	@GetMapping(value="/item/ylist/{brand}/{category}/{sort}")
	public @ResponseBody Map<String,Object> ylist(
			@PathVariable String brand,
			@PathVariable String category,
			@PathVariable String sort
			){
		map.clear();
		logger.info("brand {}",brand); // 평점,판매량,최신 등등의 옵션으로 해당 옵션의 아이템을 검색
		logger.info("category {}",category);
		logger.info("sort {}",sort);
		
		map.put("brand", brand);
		map.put("category", category);
		map.put("sort", sort);
		itemMapper.listSome(map);
		//map.put("listres", value)
		//logger.info("itm {}",map.get("itm"));
		return map;
	}
}
