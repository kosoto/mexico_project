package com.bemeal.web.cmm;

import javax.servlet.http.HttpServletRequest;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;



@Controller
public class HomeCtrl {
	private static final Logger logger = LoggerFactory.getLogger(HomeCtrl.class);
	@GetMapping("/")
	public String home(Model model, HttpServletRequest request) {
		model.addAttribute("context", request.getContextPath());
		return "main";
	}
}