package com.bemeal.web.mbr;

import java.util.HashMap;
import java.util.List;

import java.util.Map;

import org.springframework.stereotype.Repository;

@Repository
public interface MemberMapper {
	public int post(Member r);
	public List<?> list(Map<?,?>p);
	public Member get(Member p); // 로그인 !!
	public Integer count(Map<?,?>p);
	public int modify(Map<String, Object> r);
	public int delete(Member p);
	public Member getKakao(String id);
	public String idcheck(String mbr);
}