package com.bemeal.web.cmm;


import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.aspectj.lang.annotation.Aspect;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.servlet.handler.HandlerInterceptorAdapter;

@Aspect
public class LoginInterceptor extends HandlerInterceptorAdapter {
	private static final Logger logger = LoggerFactory.getLogger(LoginInterceptor.class);
	@Override
	public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler)
			throws Exception {
		boolean result = false;
		String context = request.getContextPath();
		Cookie[] list = request.getCookies();
		if(list!=null) {
			for(Cookie c : request.getCookies()) {
				logger.info("name:"+c.getName());
				logger.info("value:"+c.getValue());
				if(c.getName().equals("member")) {
					result = true;
				}
			}
		}
		return true;
	}
}
