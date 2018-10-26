package com.bemeal.web.dummy;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.transaction.annotation.Transactional;

import com.bemeal.web.mbr.Member;
import com.bemeal.web.mbr.MemberMapper;

@Controller
public class DummyCtrl {
	private static final Logger logger = LoggerFactory.getLogger(DummyCtrl.class);
	@Autowired DummyMapper mapper;
	@Autowired Member mbr;
	@Autowired HashMap<String, Object>map;
	@Transactional
	public void dummy() {
		/*int index = 1;
		ArrayList<Integer> itemSeqList;
		for(int j=1;j<=3;j++) {
			itemSeqList = new ArrayList<>();
			for(int i=1;i<=100;i++) {
				map.clear();
				//회원아이디
				map.put("memberId", "test"+j);
				//구매목록 플래그
				map.put("flag", "buy");
				//구매수량 1 고정
				map.put("quantity", 1);
				//아이템번호
				int temp;
				do {
					temp = (int)(Math.random()*400+1);
				} while(itemSeqList.contains(temp));
				itemSeqList.add(temp);
				map.put("itemSeq", temp);
				//주문번호
				map.put("purSeq", index++);
				logger.info(map.toString());
				mapper.postPur(map);
				mapper.postTaste(map);
			}	
		}*/
		//400명이 10개씩 구매 - 완료
	     /* List<Member> mbrList = mapper.memberList();
	      logger.info(mbrList.toString());
	      ArrayList<Integer> itemSeqList;
	      int temp,index=301;
	      for(int i=1;i<=400;i++) {
	         System.out.println("회전수 : "+i);
	         itemSeqList = new ArrayList<>();
	         map.clear();
	         map.put("memberId", mbrList.get(i).getMemberId());
	         map.put("flag", "buy");
	         map.put("quantity", 1);
	         for(int c=1;c<=10;c++) {
	            do {
	               temp = (int)(Math.random()*400+1);
	            } while(itemSeqList.contains(temp));
	            itemSeqList.add(temp);
	            map.put("itemSeq", temp);
	            //주문 번호
	            map.put("purSeq", index++);
	            logger.info(map.toString());
	            mapper.postPur(map);
	            mapper.postTaste(map);
	         }
	      }*/
		
	}
}
