package com.bemeal.web.img;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import lombok.Data;

@Component @Data @Lazy
public class Image {
	private int imgSeq;
	private String img;
	private int itemSeq;
	private String memberId;
	private int articleSeq;
}
