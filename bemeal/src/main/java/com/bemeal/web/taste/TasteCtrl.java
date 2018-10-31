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
	@GetMapping("/taste/list/{id}/{flag}")//페이지no.star날짜 end날짜
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
    @GetMapping("/pay/list")//페이지no.star날짜 end날짜
    public ArrayList<Map<String, Object>>listPay(){
          tmap.clear();
          System.out.println("test1");
          ArrayList<Map<String, Object>> tlist = tstMapper.listPayHis(tmap); //listPay
          System.out.println(tlist);
          return tlist;
    }
    
    @Transactional
    @PostMapping("/pay/post") 
    public int postPay(@RequestBody Map<String, Object> p){
          tmap.clear();
          tstMapper.postPay(p);           
          tmap.put("purchaseSeq", p.get("purchaseSeq").toString());
               System.out.println("p :"+p);
          if(tmap.get("toId")!=null) {//선물하기
         	  logger.info("toID :  {}",tmap.get("toId"));
         	 tmap.put("flag", "gift");
           }else {//구매하기
        	   tmap.put("flag", "buy");
           };
          tmap.putAll(p);
               System.out.println("tmap : "+tmap);
          int result = tstMapper.postTastePay(tmap);
          //delList가 있으면 장바구니에서 삭제됨
          if(tmap.get("delList")!=null) {
        	  System.out.println("delList : "+tmap.get("delList"));
        	  int resultDel = tstMapper.deleteCart(tmap);
        	  System.out.println(resultDel);
          }
          return result; 
    } 
    
	@PostMapping("/payhis/search") //cart 삭제
	public Map<String, Object> searchList(@RequestBody HashMap<String, Object> p){
		/*{id : $.cookie('member')["memberId"],
			prevDay: x.prevDay,
			day: x.day,
			pageNo: x.pageNo,
			flag : 
			keyword : }*/
			System.out.println("payHis들어옴");
		tmap.clear();
		tmap.putAll(p);
		p.put("count", tstMapper.countTaste(p));
		p.put("pageNum", p.get("pageNo"));
		p.put("pageSize", 5);
		p.put("blockSize", 5);
		page.excute(p);
		page.setBeginRow(page.getBeginRow()-1);
		tmap.put("page",page);
			logger.info("page :  {}",tmap.get("page"));
			System.out.println("tmap : "+tmap);
		ArrayList<Map<String, Object>> tlist = tstMapper.listPayHis(tmap);
		tmap.put("tlist",tlist);
		System.out.println("맵: "+tmap);
		return tmap;
	}
    @PostMapping("/gift/post") //cart 등록
    public int postGift(@RequestBody Map<String, Object> p){
          //logger.info("id {} itemSeq {} quantity {}",p);
          tmap.clear();
          //paypost와 같어 {flag}로 나눈다. 당연히 등록되는 flag도 gift는 gift로
          //gift일때는 선물이 하나더 추가임
          //문제는 taste가 가져와야한다는거얌
          return 0;
    }

}
