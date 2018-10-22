package com.bemeal.web.item;

import java.util.*;

import org.springframework.stereotype.Repository;

@Repository
public interface ItemMapper {
	public void post(Item p);
	public List<Item> listAll();
	public List<Item> listSome(Map<String,Object> p);
}
