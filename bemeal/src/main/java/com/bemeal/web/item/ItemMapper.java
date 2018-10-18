package com.bemeal.web.item;

import java.util.List;

import org.springframework.stereotype.Repository;

@Repository
public interface ItemMapper {
	public void post(Item p);
	public List<Item> listAll();
}
