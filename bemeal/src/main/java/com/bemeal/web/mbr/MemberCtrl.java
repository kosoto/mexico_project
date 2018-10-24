package com.bemeal.web.mbr;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.function.Function;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;


import com.bemeal.web.cmm.Util;


@RestController
@RequestMapping("/mbr")
public class MemberCtrl {
	private static final Logger logger = LoggerFactory.getLogger(MemberCtrl.class);
	@Autowired Member member;
	@Autowired MemberMapper mbrMapper;
	@Autowired HashMap<String, Object> map;
	
	@PostMapping("/add")
	public @ResponseBody void add(
			//@RequestBody Member mbr
			@RequestBody Member mbr 
			) {
		mbr.getSsn();
		Util.log.accept("add() :: 넘어온 정보 :: "+mbr);
		HashMap<String, Object> r = new HashMap<>();
		String ssn = String.valueOf(mbr.getSsn());
		Util.log.accept(ssn);
		mbr.setAge( 2019 - Integer.parseInt(
		((Integer.parseInt(ssn.substring(0, 2)) 
		> Integer.parseInt(new SimpleDateFormat("yyyy")
		.format(new Date())
		.substring(2)))? "19" : "20")+ssn.substring(0, 2)));
		
		mbr.setGender((ssn.split("-")[1].equals("1"))?"남":"여");
		
		r.put("memberId", mbr.getMemberId());
		r.put("password", mbr.getPassword());
		r.put("name", mbr.getName());
		r.put("age", mbr.getAge());
		r.put("ssn", mbr.getSsn());
		r.put("gender", mbr.getGender());
		r.put("address", mbr.getAddress());
		r.put("eMail", mbr.getEMail());
		r.put("phoneNum", mbr.getPhoneNum());
		
		mbrMapper.post(mbr);
		//member.post
	}
	
	@RequestMapping("/retrieve")
	public void retrieve() {
		
	}
	@RequestMapping("/modify")
	public void modify() {
		
	}
	
	public void remove() {
		
	}
	@PostMapping("/login")
	public @ResponseBody Member login(@RequestBody Member mbr) {
		Function<Member, Member>f=x->mbrMapper.get(x);
		return f.apply(mbr);
	}
	
	public void logout() {
		
	}
}
