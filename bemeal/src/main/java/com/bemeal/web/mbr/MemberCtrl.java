package com.bemeal.web.mbr;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.function.Consumer;
import java.util.function.Function;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import com.bemeal.web.cmm.Util;


@RestController 
@RequestMapping("/mbr")
public class MemberCtrl {
	private static final Logger logger = LoggerFactory.getLogger(MemberCtrl.class);
	@Autowired Member member;
	@Autowired MemberMapper mbrMapper;
	@Autowired HashMap<String, Object> map;
	
	@PostMapping("/idck")
	public String idcheck(@RequestBody String mbr){
		Util.log.accept("idck() :: 넘어온 정보 :: "+mbr);
		Function<String, String>f=x->{
			Util.log.accept("mbrMapper.idcheck(x) :: "+mbrMapper.idcheck(x));
			if(mbrMapper.idcheck(x)==null) {
				return "1";
			}else {
				return "0";
			}
			//			return mbrMapper.idcheck(mbr.toString());
		};
		
		return f.apply(mbr);	
	}
	@PostMapping("/add")
	public int add(@RequestBody Member mbr) {
		//mbr.setPassword(passwordEncoder.encode(mbr.getPassword()));
		mbr.getSsn();
		Util.log.accept("add() :: 넘어온 정보 :: "+mbr);
		String ssn = String.valueOf(mbr.getSsn());
		int age;
		int jSsn = Integer.parseInt(ssn.substring(0,2));
		if(jSsn<10) {
			age = 2019 - (jSsn + 2000);
		}else {
			age = 2019 - (jSsn + 1900);
		}
		mbr.setAge(age);
		String Gender = String.valueOf(ssn.charAt(7));
		mbr.setGender((Gender.equals("1")||Gender.equals("3"))?"남":"여");
		Function<Member, Integer>f=x->mbrMapper.post(x);
		return f.apply(mbr);
	}
	@PostMapping("/remove")
	public int delete(@RequestBody Member member) {
		Util.log.accept("delete 넘어온 아이디 값 :: "+member.getMemberId());
		member.setMemberId(member.getMemberId());
		Function<Member, Integer>f=x->
			{return mbrMapper.delete(member);
		};
		return f.apply(member);
	}
	@PostMapping("/login")
	public Member login(@RequestBody Member member) {
//		String pw = member.getPassword();
//		String encodedPw = "";
		Function<Member, Member>f=x->mbrMapper.get(x);
		return f.apply(member);
	}
	
	@PostMapping("/modify")
	public int modify(@RequestBody Member member) {
		HashMap<String, Object> r = new HashMap<>();
		
		r.put("memberId", member.getMemberId());
		r.put("password", member.getPassword());
		r.put("address", member.getAddress());
		r.put("eMail", member.getEMail());
		r.put("phoneNum", member.getPhoneNum());
		
		Util.log.accept("정보수정 자바 컨트롤러");
		Function<Member, Integer>f=x->{
			return mbrMapper.modify(r);
		};
		Util.log.accept("정보수정 자바 컨트롤러2");
		return f.apply(member);
	}
	
	@SuppressWarnings("unchecked")
	@PostMapping("/kakao/retrieve")
	public Member retrieveKakao(@RequestBody HashMap<String, Object>mbr) {
		Function<HashMap<String, Object>, Member>f=x->{
			Member kakao = mbrMapper.getKakao(((int)x.get("id"))+"");
			if(kakao==null) {
				member.setMemberId(((int)x.get("id"))+"");
				member.setPassword("kakao");
				member.setName(((HashMap<String, Object>)x.get("properties")).get("nickname")+"");
				HashMap<String, Object> account__ = (HashMap<String, Object>) x.get("kakao_account");
				if((boolean) account__.get("has_age_range")) member.setAge(Integer.parseInt((account__.get("age_range")+"").substring(0,2)));
				if((boolean) account__.get("has_email")) member.setEMail((account__).get("email")+"");
				if((boolean) account__.get("has_gender")) member.setGender(((account__.get("gender")+"").equals("male"))?"남":"여");
				kakao = member;
				mbrMapper.post(member);
			}
			return kakao;
		};
		return f.apply(mbr);
	}
}














