package com.bemeal.web.mbr;

import java.util.List;

import org.springframework.stereotype.Repository;

@Repository
public interface MemberMapper {
	public void post(Member p);
	public List<Member> listAll();
}