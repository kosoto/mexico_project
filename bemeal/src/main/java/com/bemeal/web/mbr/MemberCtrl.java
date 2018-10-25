package com.bemeal.web.mbr;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.function.Function;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;


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
		
		mbrMapper.post(r);
	}
	@RequestMapping(value="/remove", method=RequestMethod.POST)
	public void delete(@ModelAttribute Member member, @ModelAttribute("user") Member user) {
		Util.log.accept("delete 넘어온 아이디 값 :: "+user.getMemberId());
		member.setMemberId(user.getMemberId());
		mbrMapper.delete(user);
	}
	@RequestMapping(value="/modify", method=RequestMethod.POST)
	public void modify(@ModelAttribute("member") Member member, @ModelAttribute("user") Member user) {
		logger.info("modify()");
		Util.log.accept("update 넘어온 아이디 값 :: "+user.getMemberId());
		member.setMemberId(user.getMemberId());
		mbrMapper.put(member);
	}
	@PostMapping("/login")
	public @ResponseBody Map<String, Object> login(@RequestBody Member member){
		Map<String, Object> r = new HashMap<>();
		Util.log.accept("login 넘어온 로그인 정보 :: "+member.toString());
		r.put("memberId", member.getMemberId());
		r.put("password", member.getPassword());
		return r;
	}
	
	
	public void logout() {
		
	}
}
