package com.bemeal.web.tx;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.bemeal.web.img.Image;
import com.bemeal.web.img.ImageMapper;
import com.bemeal.web.item.Item;
import com.bemeal.web.item.ItemMapper;
import com.bemeal.web.mbr.MemberMapper;

@Service
public class TxService {
	@Autowired ItemMapper itemMapper;
	@Autowired MemberMapper memberMapper;
	@Autowired ImageMapper imageMapper;
	
	@Transactional
	public void insert(Map<?,?>p) {
		Item item = (Item) p.get("item");
		Image img = (Image) p.get("img");
		itemMapper.post(item);
		imageMapper.post(img);
	}
	
}
