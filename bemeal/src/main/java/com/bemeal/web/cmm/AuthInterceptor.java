package com.bemeal.web.cmm;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.method.HandlerMethod;
import org.springframework.web.servlet.handler.HandlerInterceptorAdapter;

public class AuthInterceptor extends HandlerInterceptorAdapter{
	private static final Logger logger = LoggerFactory.getLogger(AuthInterceptor.class);
	@Override
	public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler)
			throws Exception {
		if(handler instanceof HandlerMethod == false) return true;
		Auth auth = ((HandlerMethod) handler).getMethodAnnotation(Auth.class);
		if(auth==null) return true;
		
		Cookie[] list = request.getCookies();
		boolean flag = false;
		if(list!=null) {
			for(Cookie c : request.getCookies()) {
				logger.info("name:"+c.getName());
				logger.info("value:"+c.getValue());
				if(c.getName().equals("member")) {
					flag = true;
				}
			}
		}
		if(!flag) {
			response.sendError(HttpServletResponse.SC_UNAUTHORIZED);
			return flag;
		}  
		return true;
	}
}
