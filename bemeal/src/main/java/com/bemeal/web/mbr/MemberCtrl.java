package com.bemeal.web.mbr;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

import com.bemeal.web.cmm.Dummy;

@RestController
public class MemberCtrl {
	private static final Logger logger = LoggerFactory.getLogger(MemberCtrl.class);
	@Autowired Member member;
	@Autowired Dummy dummy;
	@Autowired MemberMapper mbrMapper;
	
	public void dummy() {
		String name,phone,ssn;
		String[] emailDomains = { //6개
				"naver.com","gmail.com","outlook.com","yahoo.com","daum.net","nate.com"
		};
		String[] addrArr = {
				"서울시 종로구","서울시 중구","서울시 용산구","서울시 도봉구","서울시 노원구","서울시 강북구","서울시 성북구","서울시 동대문구","서울시 은평구","서울시 마포구",
				"서울시 서대문구","서울시 관악구","서울시 동작구","서울시 서초구","서울시 강남구", "경기도 수원시","경기도 고양시","경기도 용인시","경기도 성남시","경기도 부천시",
				"경기도 안산시","경기도 안양시","경기도 의정부시","경기도 파주시","경기도 김포시","경기도 광주시","경기도 군포시","경기도 양주시","강원도 춘선시","강원도 원주시",
				"강원도 강릉시","강원도 태백시","강원도 삼척시","강원도 동해시","강원도 속초시","강원도 양야군","강원도 철원군","충청북도 청주시","충청북도 충주시","충청북도 단양군",
				"충청남도 천안시","충청남도 공주시","충청남도 태안군","경상남도 창원시","경상남도 김해시","경상남도 진주시","경상남도 통영시","경상남도 거창군","경상남도 하동군","경상북도 포항시",
				"경상북도 경주시","경상북도 영덕군","경상북도 울릉군","경상북도 구미시","경상북도 안동시","전라남도 목포시","전라남도 여수시","전라남도 순천시","전라남도 나주시","전라남도 광양시",
				"전라남도 해남군","전라북도 전주시","전라북도 익산시","전라북도 군산시","전라북도 남원시","전라북도 순창군"
		};//66개
		for(int i=1;i<=1000;i++) {//회원 1천명
			member = new Member();
			//아이디
			member.setMemberId(dummy.getRandomPassword((int)((Math.random()*3)+6)));
			//비번
			member.setPassword("1");
			//이름
			name = dummy.randomHangulName();
			member.setName(name);
			//주민 번호 & 나이 & 성별
			String year = "";
			String month = "";
			String day = "";
			String gen = "";
			int temp = (int)((Math.random()*46)+59);//69~104
			if(temp>=100) {
				year = String.valueOf(temp).substring(1);
				gen = String.valueOf((int)((Math.random()*2)+3));
			}else {
				year = String.valueOf(temp);
				gen = String.valueOf((int)((Math.random()*2)+1));
			}
			month = String.format("%02d", (int)(Math.random()*12+1));
			day = String.format("%02d", (int)(Math.random()*28+1));
			member.setAge(119-temp);
			ssn = year+month+day+"-"+gen;
			member.setSsn(ssn);
			member.setGender((gen.equals("1") || gen.equals("3"))?"남":"여");
			//e-mail
			member.setEMail(member.getMemberId()+"@"+emailDomains[(int)(Math.random()*6)]);
			//전화번호
			phone = String.format("010-%04d-%04d", (int)(Math.random()*10000),(int)(Math.random()*10000));
			member.setPhoneNum(phone);
			//주소
			member.setAddress(addrArr[(int)(Math.random()*66)]);
			logger.info(member.toString());
			mbrMapper.post(member);
		}
	}
}
