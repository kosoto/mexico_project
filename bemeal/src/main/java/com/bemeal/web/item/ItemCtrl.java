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
import org.springframework.web.bind.annotation.RequestMapping;
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
	
	@RequestMapping(value="/item/list/{brand}/{category}/{sort}")
	public @ResponseBody Map<String,Object> list(
			@PathVariable String brand,
			@PathVariable String category,
			@PathVariable String sort
			){
		map.clear();
		logger.info("brand {}",brand); // 평점,판매량,최신 등등의 옵션으로 해당 옵션의 아이템을 검색
		logger.info("category {}",category);
		logger.info("sort {}",sort);
		item.setBrand(brand);
		item.setCategory(category);
		
		logger.info("item.getBrand {}",item.getBrand());
		logger.info("item.getCategory {}",item.getCategory());
		
		map.put("brand", item.getBrand());
		map.put("category", item.getCategory());
		map.put("sort", sort);
		itemMapper.listSome(item);
		map.put("listsm", itemMapper.listSome(item));
		map.put("listall",itemMapper.listAll());
		//img.setItemSeq(item.getItemSeq());
		logger.info("itemMapper::"+map.get("list"));
		return map;
	}
	@RequestMapping(value="/item/retrieve/{itemSeq}")
	public @ResponseBody Map<String, Object> retrieve(@PathVariable String itemSeq ){
		map.clear();
		logger.info("itemseq int:{}",Integer.parseInt(itemSeq));
		item.setItemSeq(Integer.parseInt(itemSeq));
		logger.info("itemseq :{}",item);
		itemMapper.retrieve(item);
		logger.info("item retrieve:{}",itemMapper.retrieve(item));
		
		map.put("retrieve", itemMapper.retrieve(item));
		return map;
	}
}
