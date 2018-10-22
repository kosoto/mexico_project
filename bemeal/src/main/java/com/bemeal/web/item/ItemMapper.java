package com.bemeal.web.item;

import java.util.ArrayList;
import java.util.HashMap;

import org.springframework.stereotype.Repository;

@Repository
public interface ItemMapper {
	public void post(Item p);
}
