package com.bemeal.web.mbr;

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
	@Autowired Map<String, Object> map;
	
	@PostMapping("/add")
	public @ResponseBody Map<String, Object> add(@RequestBody Member p) {
		System.out.println("add() :: 넘어온 정보 :: "+p);
		System.out.println("add() :: 넘어온 정보 :: "+p.getMemberId().toString());
		Map<String, Object> r = new HashMap<>();
		/*AgeCalc.TheKingGodGeneral.apply(p);*/
		Util.log.accept(p.getAge()+"/"+p.getGender());
		
		return r;
	}
	
	@RequestMapping("/retrieve")
	public void retrieve() {
		
	}
	
	public void modify() {
		
	}
	
	public void remove() {
		
	}
	@PostMapping("/login")
	public @ResponseBody Member login(@RequestBody Member member) {
				Util.log.accept("넘어온 아이디"+member.getMemberId());
				Util.log.accept("넘어온 비번"+member.getPassword());
				HashMap<String,Object> rmap = new HashMap<>();
				Member m = null;
				if(Util.notONull.test(mbrMapper.get(member))) {
					Function<Member,Member> f = (t) -> {
						return mbrMapper.get(t);
					};
					m = f.apply(member);
				}else {
					
				}
				rmap.put("member", m);
				
				return m;
	}
	
	public void logout() {
		
	}
}
