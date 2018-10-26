package com.bemeal.web.cmm;

import static java.lang.annotation.ElementType.METHOD;
import static java.lang.annotation.RetentionPolicy.RUNTIME;

import java.lang.annotation.Retention;
import java.lang.annotation.Target;

@Retention(RUNTIME)
@Target(METHOD)
public @interface Auth {
	public enum Role {USER,ADMIN}
	public Role role() default Role.USER;
}
