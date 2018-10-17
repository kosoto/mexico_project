package com.bemeal.web.item;

import org.springframework.stereotype.Repository;

@Repository
public interface ItemMapper {
	public void post(Item p);
}
