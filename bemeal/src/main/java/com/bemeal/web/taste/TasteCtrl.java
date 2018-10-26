package com.bemeal.web.taste;

import java.util.*;
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
import com.bemeal.web.mbr.MemberMapper;


@RestController
public class TasteCtrl {
	private static final Logger logger = LoggerFactory.getLogger(TasteCtrl.class);
	@Autowired Taste tst;
	@Autowired TasteMapper tstMapper;
	@Autowired MemberMapper mbrMapper;
	@Autowired HashMap<String,Object> tmap;

	@Transactional
	@GetMapping("/chart/{id}")
	public Map<String,Object> chart(@PathVariable String id){
		tmap.clear();
		logger.info("id {}",id);
		tmap.put("id", id);
		tmap.put("area", tstMapper.chartArea(id));
		tmap.put("ingre", tstMapper.chartIngre());
		tmap.put("brand", tstMapper.chartBrand());
		tmap.put("menu", tstMapper.chartMenu());
	/*	tmap.put("taste", tstMapper.chartTaste());
		tmap.put("emotion", tstMapper.chartEmotion());
		*/
		//	System.out.println(tmap.get("menu"));
		return tmap;
	}
	
	@PostMapping("/cart/post") //cart 등록
	public int postCart(@RequestBody Map<String, Object> p){
		logger.info("id {} itemSeq {} quantity {}",p);
		tmap.clear();
		tmap.putAll(p);
		int result = tstMapper.postTaste(tmap);
		return result;
	}
	@GetMapping("/taste/list/{id}/{flag}")
	public ArrayList<Map<String, Object>>listCart(@PathVariable String id,
												@PathVariable String flag){
		tmap.clear();
		tmap.put("id", id);
		tmap.put("flag", flag);
		ArrayList<Map<String, Object>> tlist = null;
		switch (flag) {
		case "cart":
			tlist = tstMapper.listCart(tmap);
			break;
		case "buy":
			tlist = tstMapper.listPayHis(tmap);
			break;
		case "gift": //보낸선물함
			break;
		default: 	
			break;
		}
		System.out.println(tlist);
		return tlist;
	}
	@PostMapping("/cart/delete") //cart 삭제
	public int deleteCart(@RequestBody Map<String, Object> p){
			tmap.put("delList", p.get("delList"));
			int result = tstMapper.deleteCart(tmap);
			logger.info("들어온여러개의값 {}, 리턴값 {}",p.get("delList"),result);
		return result;
	}

}
