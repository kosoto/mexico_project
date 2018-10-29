package com.bemeal.web.cmm;

import java.util.HashMap;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import lombok.Data;

@Component @Data @Lazy
public class Pagination  {
	int pageNum,count,pageSize,blockSize,beginPage,endPage,beginRow,endRow,prevBlock,nextBlock;
	boolean existPrev,existNext; 
	
	public void excute(HashMap<String,Object> p) {
		/* 필요한 파라미터 : 
		 * pageNum, count, pageSize, blockSize */
		pageNum = Integer.parseInt((String) p.get("pageNum"));
		count =  (int) p.get("count"); 
		pageSize = (int) p.get("pageSize"); 
		blockSize = (int) p.get("blockSize"); 
		beginPage = Math.floorDiv(pageNum-1, blockSize)*blockSize+1;
		endPage = (count>(beginPage+(blockSize-1))*pageSize)?
				beginPage+(blockSize-1):(int)(Math.ceil(count/(double)pageSize));
		beginRow = (pageNum-1)*pageSize+1;
		endRow = (count>pageNum*pageSize)?pageNum*pageSize:count;
		prevBlock = beginPage -1;
		nextBlock = endPage +1;
		existPrev = (beginPage>1);
		existNext = (count>endPage*pageSize);
		
	}
}
