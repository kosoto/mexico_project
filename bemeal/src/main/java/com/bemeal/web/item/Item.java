package com.bemeal.web.item;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import lombok.Data;

@Component @Data @Lazy
public class Item {
	private int itemSeq;
	private String itemName;
	private String brand;
	private int price;
	private double salePercent;
	private boolean event;
	private boolean newItem;
	private String image;
	private String explains;
	private int colorie;
	
	
	
	
}
