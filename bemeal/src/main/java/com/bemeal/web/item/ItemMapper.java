package com.bemeal.web.item;

import java.util.*;

import org.springframework.stereotype.Repository;

import com.bemeal.web.img.Image;

@Repository
public interface ItemMapper {
	public void post(Item p);
	public List<Item> listAll();
	public List<Item> listSomePrice(Item p);
	public List<Item> listSomeCalorie(Item p);
	public List<Item> listSomeScore(Item p);
	public List<Item> retrieve(Item p);
	public List<Item> tag(Item p);
}
