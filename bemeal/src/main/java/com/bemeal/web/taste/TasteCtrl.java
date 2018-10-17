package com.bemeal.web.taste;

import java.util.ArrayList;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

import com.bemeal.web.cmm.Dummy;
import com.bemeal.web.mbr.Member;
import com.bemeal.web.mbr.MemberMapper;

@RestController
public class TasteCtrl {
	private static final Logger logger = LoggerFactory.getLogger(TasteCtrl.class);
	@Autowired Taste taste;
	@Autowired TasteMapper tasteMapper;
	@Autowired MemberMapper mbrMapper;
	@Autowired Dummy dummy;
	
	public void dummy() {
		//평점주기
		//특정 3인이 400개에 평점주기 - 완료
		/*for(int j=1;j<=3;j++) {
			for(int i=1;i<=400;i++) {
				taste = new Taste();
				//회원아이디
				taste.setMemberId("test"+j);
				//평점 플래그
				taste.setFlag("star");
				//평점 0.5 ~ 5.0, 0.5단위
				taste.setGrade(((int)(Math.random()*10+1))/2.0);
				//아이템번호
				taste.setItemSeq(i);
				logger.info(taste.toString());
				tasteMapper.post(taste);
			}	
		}*/
		//400명이 특정 1개 아이템9개 평점매기기
		List<Member> mbrList = mbrMapper.listAll();
		ArrayList<Integer> itemSeqList;
		int temp;
		for(int i=1;i<=400;i++) {
			itemSeqList = new ArrayList<>();
			taste = new Taste();
			taste.setMemberId(mbrList.get(i).getMemberId());
			taste.setFlag("star");
			taste.setGrade(((int)(Math.random()*10+1))/2.0);
			taste.setItemSeq(1); //1번 아이템은 400명이 모두 평점 매기기
			tasteMapper.post(taste);
			for(int c=1;c<=9;c++) {
				taste.setGrade(((int)(Math.random()*10+1))/2.0);
				//2~400번중 랜덤 9개
				do {
					temp = (int)(Math.random()*399+2);
				} while(itemSeqList.contains(temp));
				itemSeqList.add(temp);
				taste.setItemSeq(temp);
				tasteMapper.post(taste);
			}
		}
		
		//구매목록
		//특정 3인이 100개 구매 - 완료
		/*ArrayList<Integer> itemSeqList;
		for(int j=1;j<=3;j++) {
			itemSeqList = new ArrayList<>();
			for(int i=1;i<=100;i++) {
				taste = new Taste();
				//회원아이디
				taste.setMemberId("test"+j);
				//구매목록 플래그
				taste.setFlag("buy");
				//구매수량 1 고정
				taste.setQuantity(1);
				//아이템번호
				int temp;
				do {
					temp = (int)(Math.random()*400+1);
				} while(itemSeqList.contains(temp));
				itemSeqList.add(temp);
				taste.setItemSeq(temp);
				logger.info(taste.toString());
				tasteMapper.post(taste);
			}	
		}*/
	}
}
