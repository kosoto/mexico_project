package com.bemeal.web.mbr;

import java.util.HashMap;
import java.util.function.Function;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController 
@RequestMapping("/mbr")
public class MemberCtrl {
	private static final Logger logger = LoggerFactory.getLogger(MemberCtrl.class);
	@Autowired Member member;
	@Autowired MemberMapper mbrMapper;
	@Autowired HashMap<String, Object> map;
	
	@GetMapping("/idck/{mbr}")
	public String idcheck(@PathVariable String mbr){
		Function<String, String>f=x-> (mbrMapper.idcheck(x)==null)?"1":"0";
		return f.apply(mbr);	
	}
	@PostMapping("/add")
	public int add(@RequestBody Member mbr) {
		Function<Member, Integer> f=x->{
			String ssn = String.valueOf(x.getSsn());
			int jSsn = Integer.parseInt(ssn.substring(0,2));
			x.setAge((jSsn<10)?2019 - (jSsn + 2000):2019 - (jSsn + 1900));
			String gender = String.valueOf(ssn.charAt(7));
			x.setGender((gender.equals("1")||gender.equals("3"))?"남":"여");
			return mbrMapper.post(x);
		};
		return f.apply(mbr);
	}
	@PostMapping("/remove")
	public int delete(@RequestBody Member mbr) {
		Function<Member, Integer>f=x->mbrMapper.delete(x);
		return f.apply(mbr);
	}
	@PostMapping("/login")
	public Member login(@RequestBody Member member) {
		Function<Member, Member>f=x->mbrMapper.get(x);
		return f.apply(member);
	}
	
	@PostMapping("/modify")
	public int modify(@RequestBody Member member) {
		Function<Member, Integer>f=x->{
			map.clear();
			map.put("memberId", x.getMemberId());
			map.put("password", x.getPassword());
			map.put("address", x.getAddress());
			map.put("email", x.getEmail());
			map.put("phoneNum", x.getPhoneNum());
			return mbrMapper.modify(map);
		};
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
				if((boolean) account__.get("has_email")) member.setEmail((account__).get("email")+"");
				if((boolean) account__.get("has_gender")) member.setGender(((account__.get("gender")+"").equals("male"))?"남":"여");
				kakao = member;
				mbrMapper.post(member);
			}
			return kakao;
		};
		return f.apply(mbr);
	}
	@GetMapping("/detail/{id}")	
	public Member getMbr(@PathVariable String id) {
		Function<String, Member>f=x->{
			member.setMemberId(x);
			member = mbrMapper.get(member);
			return member;
		};
		return f.apply(id);
	}
}














