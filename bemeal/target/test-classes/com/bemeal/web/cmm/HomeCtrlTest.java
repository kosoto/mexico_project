package com.bemeal.web.cmm;

import static org.junit.Assert.*;

import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;

import com.bemeal.web.item.ItemCtrlTest;

public class HomeCtrlTest {
	@Autowired ItemCtrlTest itemCT;
	@Test
	public void test() {
		itemCT.tagDummy();
	}

}
