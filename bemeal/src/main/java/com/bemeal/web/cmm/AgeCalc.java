package com.bemeal.web.cmm;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.function.Function;

import com.bemeal.web.mbr.Member;

public class AgeCalc {
	public static Function<Member, Member> TheKingGodGeneral = (Member p)->{
		String ssn = p.getSsn();
		p.setAge( 2019 - Integer.parseInt(
		((Integer.parseInt(ssn.substring(0, 2)) 
		> Integer.parseInt(new SimpleDateFormat("yyyy")
		.format(new Date())
		.substring(2)))? "19" : "20")+ssn.substring(0, 2)));
		
		p.setGender((ssn.split("-")[1].equals("1"))?"남":"여");
		return p;
	};
}