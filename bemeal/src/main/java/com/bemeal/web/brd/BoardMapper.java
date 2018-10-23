package com.bemeal.web.brd;

import org.springframework.stereotype.Repository;

@Repository
public interface BoardMapper {
	public void post(Board p);
}
