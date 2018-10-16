package com.bemeal.web.cmm;

import java.util.function.Consumer;
import java.util.function.Function;
import java.util.function.Predicate;
import javax.servlet.http.HttpServletRequest;

public class Util {
	public static Consumer<Integer> logi = System.out::println;
	public static Consumer<String> log = System.out::println;
	public static Function<String, Integer> convInt = Integer::parseInt;
	public static Function<Integer, String> convString = String::valueOf;
	public static Predicate<String> sNull = x -> x.equals("");
	public static Predicate<String> notSnull = sNull.negate();
	public static Predicate<Object> oNull = x -> x == null;
	public static Predicate<Object> notONull = oNull.negate();
	public static Function<HttpServletRequest,String> ctx = HttpServletRequest::getContextPath;
}
