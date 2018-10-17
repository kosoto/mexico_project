package com.bemeal.web.cmm;

import javax.servlet.http.HttpServletRequest;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.bemeal.web.item.ItemCtrl;
import com.bemeal.web.mbr.MemberCtrl;
import com.bemeal.web.taste.TasteCtrl;

@Controller
public class HomeCtrl {
	@Autowired ItemCtrl itemctrl;
	@Autowired MemberCtrl mbrCtrl;
	@Autowired TasteCtrl tCtrl;
	@Autowired Dummy dummy;
	private static final Logger logger = LoggerFactory.getLogger(HomeCtrl.class);
	
	@RequestMapping(value = "/", method = RequestMethod.GET)
	public String home(Model model, HttpServletRequest request) {
		System.out.println("-------------------------------");
		model.addAttribute("context", request.getContextPath());
		//itemctrl.dummy(); //item dummy data
		//mbrCtrl.dummy(); //member dummy data
		//tCtrl.dummy(); //taste dummy data
		return "main";
	}
}