package com.bemeal.web.item;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.junit.Test;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;

import com.bemeal.web.cmm.CommonMapper;
import com.bemeal.web.img.Image;
import com.bemeal.web.tx.TxService;

public class ItemCtrlTest {
	private static final Logger logger = LoggerFactory.getLogger(ItemCtrlTest.class);
	@Autowired Map<String, Object> map;
	@Autowired Item item;
	@Autowired Image img;
	@Autowired TxService tx;
	@Autowired ItemMapper itemMapper;
	@Autowired CommonMapper cmmMapper;
	@Test
	public void dummy() {
		map.clear();
		String[] nameArrPrefix = {
				"영양","더블","궁중","한정","황제","명품","일품","울릉도","속초","춘천",
				"의정부","광양","담양","부추","얼큰","칼칼","베스트","우리","치즈","명이",
				"매운","달콤한",""
		}; //23개
		String[] nameArrMain = {
				"제육","갈비","해물","닭","불고기","오리","오징어","소고기","버섯","김치",
				"계란","더덕","치킨","새우","고등어","갈치","문어","장어","감자","고구마",
				"돈가스","어묵","소시지"
		};//23개
		String[] nameArrPostfix = {
				"구이","찜","찌게","탕","볶음","튀김","샐러드","조림","스테이크","국",
				"덮밥","김밥","볶음밥","비빔밥","조림밥","그라탱","정식","세트","한상","도시락"
		}; //20개
		String[] brandArr = 
			{"CU","한솥","호토모토","GS","혜자","세븐일레븐","위드미","미니스톱",
			"오봉","본","토마토","비비고","풀무원","리본","잇슬림","밸런스박스","호밀",
			"미드미","바니스푼","명가","더큰","런치바스켓","바비박스","이마트"
			};//24개
		String[] categoryArr = {"한식","중식","일식","양식","동남아식","다이어트식","건강식","분식"};//8개
		String[] explainsArr = { //63개
				"입맛을 돋우는 삼채샐러드, 향긋한 곤드레밥에 궁중잡채와 갈비구이, 따뜻한 국과 아이스 홍시까지 풍성하게 즐기는 명품 메뉴",
				"오징어, 홍합, 곤이, 새우 등 다채로운 해산물을 매콤하게 볶아내 찜 요리를 푸짐하게 즐길 수 있는 메뉴",
				"부드러운 갈비구이에 연어와 5가지 한식 반찬, 따뜻한 국과 명이나물, 삼채 샐러드, 시원한 디저트 음료까지 제공되는 본도시락의 특선 메뉴",
				"풍성한 닭고기와 갖은 야채를 매콤짭짤하게 볶아 찜 요리를 푸짐하게 즐길 수 있는 메뉴",
				"담백하고 부드러운 오리구이를 감칠맛 나는 명이나물에 싸서 함께 즐기는 별식 도시락",
				"부드러운 소불고기에 오색전과 핫윙, 5가지 한식반찬이 제공되는 특선 도시락",
				"봄의 기운을 담은 3색 나물 영양밥과 고소한 우삼겹구이, 매콤한 오징어볶음을 한 상에!",
				"매콤한 오징어볶음과 광양식 바싹 불고기를 한 번에 즐길 수 있는 메뉴!",
				"매콤한 오징어볶음을 다양한 한식 반찬과 즐길 수 있는 메뉴",
				"매운 소스로 볶아낸 부드러운 닭다리살에 계란후라이가 곁들여진 도시락",
				"남녀노소 모두가 좋아하는 햄과 우삼겹에 매콤한 소스를 더해 풍미를 한껏 살린 본도시락만의 특별 메뉴",
				"부드럽고 두툼한 국내산 등심 돈까스와 4가지 한식 반찬을 함께 즐길 수 있는 도시락",
				"광양식 불고기 조리방법으로 돼지고기를 갈비소스에 맛있게 구워낸 본도시락이 추천하는 남도별식",
				"육즙이 가득한 떡갈비에 달콤짭짤한 소스를 더해 졸여낸 메뉴",
				"매콤달콤한 고추장 양념으로 맛을 낸 제육볶음에 신선한 쌈야채를 곁들인 도시락",
				"매콤달콤한 고추장 양념으로 맛을 낸 제육볶음에 부추를 곁들여 6가지 한식반찬과 함께 즐길 수 있는 도시락",
				"우렁과 두부가 듬뿍 든 강된장을 쌈야채와 함께 즐기는 도시락",
				"달콤짭짤한 된장소스로 볶아낸 소불고기를 도시락으로 즐기는 인기 메뉴",
				"달콤짭짤한 된장소스로 볶아낸 소불고기를 함께 즐기는 인기 메뉴",
				"매콤한 더덕구이와 고소한 삼겹구이를 신선한 쌈야채와 함께 즐기는 메뉴",
				"매콤한 더덕구이와 고소한 삼겹구이를 함께 즐기는 메뉴",
				"달콤짭짤한 버섯소불고기를 신선한 쌈야채와 함께 즐기는 메뉴",
				"향긋한 버섯과 달콤짭짤한 소불고기를 함께 볶아낸 인기 메뉴",
				"담백한 소고기에 구수한 시래기를 더해 얼큰하게 끓여낸 겨울철 별미 한 그릇",
				"제주 모자반과 쇠고기로 푹 끓여낸 미역국 도시락",
				"잘 익은 묵은지와 돼지고기로 끓인 얼큰한 김치찌개 도시락",
				"본도시락의 6가지 베스트 메뉴를 모두 담아 다채로운 메뉴 구성을 한 번에 즐길 수 있는 요리 메뉴 (된장삼겹구이, 광양식바싹불고기, 닭강정, 새우튀김, 핫윙, 고추튀김)",
				"풍성한 해물찜과 짭조름한 닭찜을 함께 담아 누구나 찜 하고 싶은 메뉴",
				"매콤달콤한 닭강정과 쫄깃하고 고소한 핫윙을 함께 즐길 수 있는 메뉴",
				"레드 퀴노아와 곤약미를 활용한 레드퀴노아밥에 향긋한 허브와 닭가슴살 소시지를 더한 다이어트 도시락",
				"레드 퀴노아와 곤약미를 활용한 레드퀴노아밥에 건강한 삼채와 우삽겹구이를 더한 다이어트 도시락",
				"고단백 닭가슴살과 야채, 고구마 큐브까지, 다이어트를 하는 분들에게 추천하는 저칼로리 도시락",
				"부드러운 닭가슴살과 건강한 삼채 드레싱을 곁들인 샐러드",
				"달콤한 고구마에 고소한 견과류가 더해진 샐러드",
				"부드러운 닭날개살의 기름을 쪽 빼고 매콤한 양념을 더한 인기 간식",
				"매콤 달콤한 소스로 버무려낸 닭강정 메뉴",
				"찹쌀로 만들어 쫀득한 식감을 자랑하는 본도시락 인기 메뉴",
				"고소한 치킨 가라아게에 간장소스와 마요네즈을 비벼먹는 인기만점 도시락",
				"고소한 치킨 가라아게에 간장소스와 마요네즈을 비벼먹는 인기만점 도시락",
				"고소한 삼겹살구이에 향긋한 삼채 겉절이를 곁들인 일품반찬",
				"버섯과 함께 볶은 불고기에 핫윙과 튀김반찬까지 즐길 수 있는 일품반찬",
				"매콤하게 볶은 제육볶음과 핫윙, 튀김반찬까지 함께 즐길 수 있는 일품반찬",
				"매콤하게 볶은 오징어와 바싹 불고기까지 함께 즐길 수 있는 일품반찬",
				"국내산 등심 돈까스를 향긋한 한라봉 소스와 함께 즐길 수 있는 일품반찬",
				"광양식 불고기 조리법으로 구워낸 불고기 일품 반찬",
				"담백한 소고기에 구수한 시래기를 더해 얼큰하게 끓여낸 국밥",
				"제주 모자반과 쇠고기가 들어있는 영양 만점 미역국",
				"잘 익은 묵은지와 돼지고기로 끓인 얼큰한 김치찌개",
				"따뜻한 미역국과 잡채, 품격있는 갈비구이, 달콤한 화이트 티라미수 컵케익을 함께 구성한 생일 도시락",
				"따뜻한 미역국과 잡채, 누구나 좋아하는 버섯소불고기, 달콤한 화이트 티라미수 컵케익을 함께 구성한 생일 도시락",
				"따뜻한 미역국과 잡채, 고소한 새우튀김, 달콤한 화이트 티라미수 컵케익을 함께 구성한 생일 도시락",
				"[베스트 & 스테디셀러 SINCE 2007] 12가지 다양한 반찬으로 구성된 프리미엄 도시락입니다. 푸짐한 반찬과 함께 촉촉하고 부드러운 연어구이와 치킨이 구성되어 있어 부족하지 않고 든든하게 드실 수 있는 도시락 입니다. 생수와 조미 김이 함께 제공 됩니다.",
				"[베스트 & 스테디셀러 SINCE 2007] 12가지 다양한 반찬으로 구성된 프리미엄 도시락입니다. 푸짐한 반찬과 함께 짭쪼름한 맛이 일품인 고등어 데리야끼 2조각이 구성되어 있어 부족하지 않고 든든하게 드실 수 있는 도시락 입니다. 생수와 조미 김이 함께 제공 됩니다.",
				"한솥 도시락 Top 5 메뉴 중 하나. 떡 햄버그, 돈까스, 새우튀김, 치킨 가라아게, 제육볶음이 모두 들어 있어 푸짐합니다. 생수와 조미 김이 함께 제공 됩니다.",
				"[베스트 & 스테디셀러 SINCE 2008] 고등어데리야끼, 소 불고기, 새우튀김, 치킨 등 누구나 좋아하는 메뉴로 구성된 도시락입니다.",
				"[베스트&스테디셀러 SINCE 2008] 생선, 소불고기, 새우튀김, 치킨 등 누구나 좋아하는 메뉴로 구성했습니다. 생수와 조미 김이 함께 제공되며 취향에 따라 고등어조림(1조각)이나 고등어데리야끼(2조각) 중 선택할 수 있습니다",
				"신선한 소고기 부챗살을 주문 즉시 구워, 육즙이 가득한 스테이크! 다양한 야채를 넣어 볶은 필라프! 두 식재료가 만나 조화로운 맛을 내는 한솥만의 특별한 메뉴입니다. ★9월 EVENT★ 9월 한 달간 더블큐브스테이크 필라프 9,500원 → 8,500원 할인!",
				"CNN에서 선정한 세계에서 가장 맛있는 음식 2위인 인도네시아 전통 볶음밥 나시고랭! 안남미를 사용한 전통 나시고랭이 아닌 한국인의 입 맛을 위한 나시고랭으로 다시 태어나다!",
				"뼈와 가시를 발라내 먹기 좋은 고등어를 한국인 입맛에 맞는 칼칼한 특제 양념 소스로 조렸습니다. 홍고추와 통마늘로 비린내까지 잡아 고등어 순살의 맛이 맛깔스럽습니다.",
				"육즙이 살아있고 부드러운 함박스테이크를 따끈하게 즐겨보세요. 국내산 돼지고기와 호주산 쇠고기, 생 빵가루 등 좋은 재료로만 만든 함박스테이크에 풍미 좋은 데미그라스까지 곁들였습니다. 칼 없이 젓가락으로도 잘라 드실 수 있을 만큼 부드럽습니다.",
				"깐깐하게 만들어 깐깐도시락입니다. 탱글탱글한 칠리새우와 매콤달콤한 깐풍기를 함께 즐겨보세요",
				"겉은 바삭하고 속은 촉촉하게 튀긴 닭고기에 매콤달콤한 깐풍기소스와 청양고추까지 더했습니다. 깐풍기도시락으로 한솥에서 중화요리의 진수를 느껴보세요.",
				"새우튀김, 치킨가라아게, 불고기, 제육볶음으로 구성한 새.치.고기.고기 도시락입니다. 새우튀김은 흰다리새우(중하)가 통으로 들어가 탱글탱글한 식감이 살아있으며 치킨가라아게는 부드러운 순 닭다리살을 간장으로 가미한 후 튀겨내 짭조름한 감칠맛이 좋습니다."
				
		};
		String category;
		int price,calorie;
		for(int i=1;i<=400;i++) {//400개의 더미데이터 생성하기
			item = new Item();
			//아이템 번호
			item.setItemSeq(i);
			//아이템이름 결정
			item.setItemName(nameArrPrefix[(int)(Math.random()*23)]+nameArrMain[(int)(Math.random()*23)]+nameArrPostfix[(int)(Math.random()*20)]);
			//브랜드 결정
			item.setBrand(brandArr[(int)(Math.random()*24)]);
			//카테고리 결정
			category = categoryArr[(int)(Math.random()*8)];
			item.setCategory(category);
			//랜덤 가격 결정 3000이상 10000미만 500원 단위
			price = ((int)((Math.random()*14)+6))*500;
			item.setPrice(price);
			//랜덤 칼로리 500~1100 정수값. 다이어트식은 300~400
			calorie = (category.equals("다이어트식"))?(int)(Math.random()*100)+300:(int)(Math.random()*600)+500;
			item.setCalorie(calorie);
			//제품 설명
			item.setExplains(explainsArr[(int)(Math.random()*63)]);
			// 이미지 빈 세팅
			img = new Image();
			// 1 ~ 216
			img.setImg("/web/resources/img/cmm/item/dosiroc ("+((int)(Math.random()*216+1))+").jpg");
			img.setItemSeq(i);
			map.clear();
			map.put("item", item);
			map.put("img", img);
			tx.insert(map);
			logger.info(item.toString());
			logger.info(img.toString());

			
		}
		
	}
	@Test @Transactional
	public void tagDummy() {
		map.clear();
		
		String[] favList = {//10개
				"고소","달달","짭짤","달콤","매콤","새콤","씁쓸","감칠맛","담백","느끼" 
		};
		String[] feelList = {//24개
				"빨간","얼큰한","얼얼한","봄","여름","가을","겨울","둘이서","엄마가해준","건강한","야식","아침","점심","저녁","말랑한","야들한",
	            "부드러운","말캉한","샤르르","찐한","힐링","알콜","맥주","푸짐한"
		};
		String[] ingList = {//19개
				"닭","오리","오징어","소고기","버섯","김치","계란","더덕","새우","고등어","갈치","문어","장어","감자","고구마","어묵","소시지","돼지","치즈"
		};
		String[] nameArrMain = {
				"제육","갈비","해물","닭","불고기","오리","오징어","소고기","버섯","김치",
				"계란","더덕","치킨","새우","고등어","갈치","문어","장어","감자","고구마",
				"돈가스","어묵","소시지"
		};//23개
		String[] pigCow = {"돼지","소고기"};
		//아이템 리스트 가져오기
		List<Item> itemList = itemMapper.listAll();
		ArrayList<String> tempList; 
		String tagName,itemName;
		for(int i=0;i<itemList.size();i++) {//400개
			map.clear();
			map.put("itemSeq", itemList.get(i).getItemSeq());
			tempList = new ArrayList<>();
			//맛 태그 부여하기
			for(int j=0,count=(int)(Math.random()*2+1);j<count;j++) { //맛 태그는 1~2개씩
				do {
					tagName = favList[(int)(Math.random()*10)];
				}while(tempList.contains(tagName));
				map.put("tagName", tagName);
				logger.info(map.toString());
				cmmMapper.postTag(map);
			}
			//감성 태그 부여하기
			for(int j=0,count=(int)(Math.random()*4+2);j<count;j++) { //감성 태그는 2~5
				do {
					tagName = feelList[(int)(Math.random()*24)];
				}while(tempList.contains(tagName));
				map.put("tagName", tagName);
				logger.info(map.toString());
				cmmMapper.postTag(map);
			}
			//재료 태그 부여하기 2~4개
			//아이템 이름에 있는 재료 넣는 방법은?
			//아이템 이름에 치즈가 들어있으면 재료에 치즈 넣기
			itemName = itemList.get(i).getItemName();
			if(itemName.contains("치즈")) {
				map.put("tagName", "치즈");
				logger.info(map.toString());
				cmmMapper.postTag(map);
			}
			//아이템 이름에 맞추어서 재료 넣기
			for(int k=0;k<nameArrMain.length;k++) {
				if(itemName.contains(nameArrMain[k])) {
					switch(k) {
					case 0 : map.put("tagName", "돼지"); break;
					case 1 : case 4 : map.put("tagName", pigCow[(int)(Math.random()*2)]); //돼지, 소고기
						break;
					case 2 : break;
					case 3 : case 12: map.put("tagName", "닭"); break; //닭
					case 5 : map.put("tagName", "오리"); break;  //오리
					case 6 : map.put("tagName", "오징어"); break; //오징어
					case 7 : map.put("tagName", "소고기"); break;  //소고기
					case 8 : map.put("tagName", "버섯"); break;  //버섯
					case 9 : map.put("tagName", "김치"); break;	//김치
					case 10 : map.put("tagName", "계란");  break;	//계란
					case 11 : map.put("tagName", "더덕"); break;	//더덕
					case 13 :map.put("tagName", "새우"); break;	//새우
					case 14 : map.put("tagName", "고등어"); break;	//고등어
					case 15 : map.put("tagName", "갈치");break;	//갈치
					case 16 :map.put("tagName", "문어"); break;	//문어
					case 17 :map.put("tagName", "장어"); break;	//장어
					case 18 :map.put("tagName", "감자"); break;	//감자
					case 19 :map.put("tagName", "감자"); break;	//고구마
					case 20 :map.put("tagName", "돼지"); break;	//돼지
					case 21 :map.put("tagName", "어묵"); break;	//어묵
					case 22 :map.put("tagName", "소시지"); break;	//소시지
					}
					logger.info(map.toString());
					cmmMapper.postTag(map);
				}
			}
			for(int j=0,count=(int)(Math.random()*3+1);j<count;j++) {
				do {
					tagName = ingList[(int)(Math.random()*19)];
				}while(tempList.contains(tagName));
				map.put("tagName", tagName);
				logger.info(map.toString());
				cmmMapper.postTag(map);
			}
		}
	}
	

}













