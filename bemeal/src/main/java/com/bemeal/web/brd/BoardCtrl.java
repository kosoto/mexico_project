package com.bemeal.web.brd;

import java.util.HashMap;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.bemeal.web.img.Image;
import com.bemeal.web.item.Item;
import com.bemeal.web.item.ItemMapper;
import com.bemeal.web.tx.TxService;


@RestController
public class BoardCtrl {
	private static final Logger logger = LoggerFactory.getLogger(BoardCtrl.class);
	@Autowired ItemMapper itemMapper;
	@Autowired TxService txService;
	@Autowired Board brd;
	@Autowired Item item;
	@Autowired Image img;
	@Autowired HashMap<String, Object> map;
	
	//@RequestMapping(value="/brd/")
	
}
