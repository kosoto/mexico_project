package com.bemeal.web.page;

import java.util.HashMap;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import lombok.Data;

@Data @Lazy @Component
public class PageProxy implements Proxy{
	private Pagination pagination;
	
	@Override
	public void carryOut(HashMap<String,Object> p) {
		this.pagination = new Pagination();
		pagination.carryOut(p);
	}
}
