package com.bemeal.web.taste;

import java.util.*;
import java.util.function.Function;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.bemeal.web.cmm.Pagination;
import com.bemeal.web.mbr.MemberMapper;


@RestController
public class TasteCtrl {
	private static final Logger logger = LoggerFactory.getLogger(TasteCtrl.class);
	@Autowired Taste tst;
	@Autowired TasteMapper tstMapper;
	@Autowired MemberMapper mbrMapper;
	@Autowired HashMap<String,Object> tmap;
	@Autowired Pagination page;
	
	@Transactional
	@GetMapping("/chart/{id}") //chart
	public Map<String,Object> chart(@PathVariable String id){
		Function<String, Map<String,Object>> f=x->{
			tmap.clear();
			tmap.put("area", tstMapper.chartArea(x));
			tmap.put("ingre", tstMapper.chartIngre(x));
			tmap.put("brand", tstMapper.chartBrand(x));
			tmap.put("menu", tstMapper.chartMenu(x));
			return tmap;
		};
		return f.apply(id);
	}
	
	@PostMapping("/cart/post") //cart 등록
	public int postCart(@RequestBody Map<String, Object> p){
		Function<Map<String, Object>, Integer>f=x->{
			tmap.clear();
			tmap.putAll(x);
			return tstMapper.postTaste(tmap);
		};
		return f.apply(p);
	}
	@GetMapping("/taste/list/{id}/{flag}") //장바구니 등록
	public ArrayList<Map<String, Object>>listCart(@PathVariable String id,
												@PathVariable String flag){
		tmap.clear();
		tmap.put("id", id);
		tmap.put("flag", flag);
		Function<Map<String, Object>, ArrayList<Map<String, Object>>>f=x-> tstMapper.listCart(x);
		return f.apply(tmap);
	}
	
	@PostMapping("/cart/delete") //장바구니 삭제
	public int deleteCart(@RequestBody Map<String, Object> p){
			Function<Map<String, Object> , Integer>f=x->{
				tmap.clear();
				tmap.put("delList", x.get("delList"));
				return tstMapper.deleteCart(tmap);
			};
		return f.apply(p);
	}
 
    @Transactional
    @PostMapping("/pay/post")  //선물하기, 구매하기
    public int postPay(@RequestBody Map<String, Object> p){
          tmap.clear();           
          if(p.get("toId")!=null) {//선물하기
         	 tmap.put("flag", "gift");
         	 tstMapper.postGift(p);
           }else {//구매하기
        	   tstMapper.postPay(p);     
        	   tmap.put("flag", "buy");
           };
           tmap.put("purchaseSeq", p.get("purchaseSeq").toString());
          tmap.putAll(p);
          int result = tstMapper.postTastePay(tmap);
          //delList가 있으면 장바구니에서 삭제됨
          if(tmap.get("delList")!=null) {
        	  int resultDel = tstMapper.deleteCart(tmap);
          }
          return result; 
    } 
    
    @Transactional
	@PostMapping("/purchase/payhis") //구매함 리스트, 검색
	public Map<String, Object> searchList(@RequestBody HashMap<String, Object> p){
		tmap.clear();
		tmap.putAll(p);
		p.put("count", tstMapper.countTaste(p));
		p.put("pageNum", p.get("pageNo"));
		p.put("pageSize", 5);
		p.put("blockSize", 5);
		page.excute(p);
		page.setBeginRow(page.getBeginRow()-1);
		tmap.put("page",page);
		ArrayList<Map<String, Object>> tlist = tstMapper.listPayHis(tmap);
		tmap.put("tlist",tlist);
		return tmap;
	}
    @Transactional
   	@GetMapping("/purchase/gift/{id}/{state}/{pageNo}") //선물함 리스트
   	public Map<String, Object> giftList(@PathVariable String id,
   										@PathVariable String state,
   										@PathVariable String pageNo){
   		tmap.clear();
   		tmap.put("id", id);
		tmap.put("flag", "gift");
		tmap.put("state", state);
		tmap.put("count", tstMapper.countGift(tmap));
		tmap.put("pageNum", pageNo);
   		tmap.put("pageSize", 12);
   		tmap.put("blockSize", 5);
   		page.excute(tmap);
   		page.setBeginRow(page.getBeginRow()-1);
   		tmap.put("page",page);
		ArrayList<Map<String, Object>> tlist = tstMapper.listGift(tmap);
   		tmap.put("tlist",tlist);
   		return tmap;
   	}

}
