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

import com.bemeal.web.cmm.AgeCalc;
import com.bemeal.web.cmm.Util;


@RestController
@RequestMapping("/mbr")
public class MemberCtrl {
	private static final Logger logger = LoggerFactory.getLogger(MemberCtrl.class);
	@Autowired Member member;
	@Autowired MemberMapper mbrMapper;
	@Autowired Map<String, Object> map;
	
	@PostMapping("/add")
	public @ResponseBody void add(@RequestBody Member mbr) {
		System.out.println("add() :: 넘어온 정보 :: "+mbr);
		System.out.println("add() :: 넘어온 정보 :: "+mbr.getMemberId().toString());
		Map<String, Object> r = new HashMap<>();
		
		String ssn = mbr.getSsn();
		
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
		
		System.out.println("r :: "+ r.toString());
		
		//member.post
	}
	
	@RequestMapping("/retrieve")
	public void retrieve() {
		
	}
	
	public void modify() {
		
	}
	
	public void remove() {
		
	}
	@PostMapping("/login")
	public @ResponseBody Map<String, Object> login(@RequestBody Member member) {
				HashMap<String,Object> rmap = new HashMap<>();		
				Util.log.accept("넘어온 아이디"+member.getMemberId());
				Util.log.accept("넘어온 비번"+member.getPassword());
				
				rmap.put("memberId", member.getMemberId());
				rmap.put("password", member.getPassword());
				
				System.out.println(rmap.toString());
				
				return rmap;
	}
	
	public void logout() {
		
	}
}
