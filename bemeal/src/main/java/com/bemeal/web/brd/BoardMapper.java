package com.bemeal.web.brd;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Repository;

@Repository
public interface BoardMapper {
	public void post(Map<?,?> p);
	public List<Board> retrieve(Map<?,?> p);
	public List<Board> get(Map<?,?> p);
	public void put(Map<?, ?>p);
	public int delete(Map<?, ?> p);
}
