package com.bemeal.web.dummy;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.transaction.annotation.Transactional;

import com.bemeal.web.mbr.Member;
import com.bemeal.web.mbr.MemberMapper;

@Controller
public class DummyCtrl {
	private static final Logger logger = LoggerFactory.getLogger(DummyCtrl.class);
	@Autowired DummyMapper mapper;
	@Autowired Member mbr;
	@Autowired HashMap<String, Object>map;
	@Transactional
	public void dummy() {
		/*int index = 1;
		ArrayList<Integer> itemSeqList;
		for(int j=1;j<=3;j++) {
			itemSeqList = new ArrayList<>();
			for(int i=1;i<=100;i++) {
				map.clear();
				//회원아이디
				map.put("memberId", "test"+j);
				//구매목록 플래그
				map.put("flag", "buy");
				//구매수량 1 고정
				map.put("quantity", 1);
				//아이템번호
				int temp;
				do {
					temp = (int)(Math.random()*400+1);
				} while(itemSeqList.contains(temp));
				itemSeqList.add(temp);
				map.put("itemSeq", temp);
				//주문번호
				map.put("purSeq", index++);
				logger.info(map.toString());
				mapper.postPur(map);
				mapper.postTaste(map);
			}	
		}*/
		//400명이 10개씩 구매 - 완료
	     /* List<Member> mbrList = mapper.memberList();
	      logger.info(mbrList.toString());
	      ArrayList<Integer> itemSeqList;
	      int temp,index=301;
	      for(int i=1;i<=400;i++) {
	         System.out.println("회전수 : "+i);
	         itemSeqList = new ArrayList<>();
	         map.clear();
	         map.put("memberId", mbrList.get(i).getMemberId());
	         map.put("flag", "buy");
	         map.put("quantity", 1);
	         for(int c=1;c<=10;c++) {
	            do {
	               temp = (int)(Math.random()*400+1);
	            } while(itemSeqList.contains(temp));
	            itemSeqList.add(temp);
	            map.put("itemSeq", temp);
	            //주문 번호
	            map.put("purSeq", index++);
	            logger.info(map.toString());
	            mapper.postPur(map);
	            mapper.postTaste(map);
	         }
	      }*/
		//member list
		List<Member> mbrList = mapper.memberList();
		String[] massages = {
				"대통령은 제3항과 제4항의 사유를 지체없이 공포하여야 한다.",

				"국무회의는 정부의 권한에 속하는 중요한 정책을 심의한다. 헌법재판소는 법관의 자격을 가진 9인의 재판관으로 구성하며, 재판관은 대통령이 임명한다.",

				"대법원장과 대법관이 아닌 법관의 임기는 10년으로 하며, 법률이 정하는 바에 의하여 연임할 수 있다.",

				"이 헌법공포 당시의 국회의원의 임기는 제1항에 의한 국회의 최초의 집회일 전일까지로 한다.",

				"국가는 농지에 관하여 경자유전의 원칙이 달성될 수 있도록 노력하여야 하며, 농지의 소작제도는 금지된다.",

				"농업생산성의 제고와 농지의 합리적인 이용을 위하거나 불가피한 사정으로 발생하는 농지의 임대차와 위탁경영은 법률이 정하는 바에 의하여 인정된다.",

				"군인 또는 군무원이 아닌 국민은 대한민국의 영역안에서는 중대한 군사상 기밀·초병·초소·유독음식물공급·포로·군용물에 관한 죄중 법률이 정한 경우와 비상계엄이 선포된 경우를 제외하고는 군사법원의 재판을 받지 아니한다.",

				"국무위원은 국무총리의 제청으로 대통령이 임명한다. 국회는 정부의 동의없이 정부가 제출한 지출예산 각항의 금액을 증가하거나 새 비목을 설치할 수 없다.",

				"감사원의 조직·직무범위·감사위원의 자격·감사대상공무원의 범위 기타 필요한 사항은 법률로 정한다.",

				"군인은 현역을 면한 후가 아니면 국무총리로 임명될 수 없다.",
				
				"법률안에 이의가 있을 때에는 대통령은 제1항의 기간내에 이의서를 붙여 국회로 환부하고, 그 재의를 요구할 수 있다. 국회의 폐회중에도 또한 같다.",

				"국무총리는 대통령을 보좌하며, 행정에 관하여 대통령의 명을 받아 행정각부를 통할한다.",

				"국회는 헌법개정안이 공고된 날로부터 60일 이내에 의결하여야 하며, 국회의 의결은 재적의원 3분의 2 이상의 찬성을 얻어야 한다.",

				"대법관의 임기는 6년으로 하며, 법률이 정하는 바에 의하여 연임할 수 있다.",

				"모든 국민은 인간으로서의 존엄과 가치를 가지며, 행복을 추구할 권리를 가진다. 국가는 개인이 가지는 불가침의 기본적 인권을 확인하고 이를 보장할 의무를 진다.",

				"각급 선거관리위원회는 선거인명부의 작성등 선거사무와 국민투표사무에 관하여 관계 행정기관에 필요한 지시를 할 수 있다.",

				"군인 또는 군무원이 아닌 국민은 대한민국의 영역안에서는 중대한 군사상 기밀·초병·초소·유독음식물공급·포로·군용물에 관한 죄중 법률이 정한 경우와 비상계엄이 선포된 경우를 제외하고는 군사법원의 재판을 받지 아니한다.",

				"대한민국은 통일을 지향하며, 자유민주적 기본질서에 입각한 평화적 통일 정책을 수립하고 이를 추진한다.",

				"체포·구속·압수 또는 수색을 할 때에는 적법한 절차에 따라 검사의 신청에 의하여 법관이 발부한 영장을 제시하여야 한다. 다만, 현행범인인 경우와 장기 3년 이상의 형에 해당하는 죄를 범하고 도피 또는 증거인멸의 염려가 있을 때에는 사후에 영장을 청구할 수 있다.",

				"모든 국민은 헌법과 법률이 정한 법관에 의하여 법률에 의한 재판을 받을 권리를 가진다."
		};
		int purSeq = 4311;
		int tasteSeq = 15222;
		for(int i=0;i<20;i++) {
			int random = (int)(Math.random()*mbrList.size());
			map.clear();
			map.put("purSeq", purSeq++);
			map.put("memberId", mbrList.get(random).getMemberId());
			// 주문 발생
			mapper.postPur(map);
			
			map.put("quantity", 1);
			map.put("flag", "gift");
			map.put("itemSeq", (int)(Math.random()*400+1));
			// taste insert
			map.put("tasteSeq", tasteSeq++);
			mapper.postTaste(map);
			
			map.put("toId","test1");
			mbrList.remove(random);
			map.put("massage", massages[i]);
			// present insert
			mapper.postPresent(map);
			logger.info(map.toString());
		}
		
	}
}





















