package com.bemeal.web.dummy;

import java.util.HashMap;
import java.util.List;

import org.springframework.stereotype.Repository;

import com.bemeal.web.mbr.Member;

@Repository
public interface DummyMapper {
	public void postTaste(HashMap<String,Object>p);
	public void postPur(HashMap<String,Object>p);
	public List<Member> memberList();
	public void postPresent (HashMap<String,Object>p);
	
}
