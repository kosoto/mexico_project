package com.bemeal.web.interceptor;

import org.aspectj.lang.annotation.Aspect;
import org.springframework.web.bind.annotation.SessionAttributes;

@Aspect
@SessionAttributes("loginUser")
public class LoginInterceptor {

}