<!-- MEMBER -->
INSERT INTO MEMBER 
(MEMBER_ID,PASSWORD,NAME,AGE,SSN,GENDER,ADDRESS,E_MAIL,PHONE_NUM)
VALUES
('test1','1','김승태',30,'891111-1','남','경기도 파주시','kstad@naver.com','010-5359-3559'),
('test2','1','김윤호',31,'881111-1','남','서울시 신촌','yoonho@naver.com','010-1533-1235'),
('test3','1','김정훈',23,'971111-1','남','인천시','junghoon@naver.com','010-4567-1856');

<!-- TAG 재료:19개 -->
INSERT INTO TAG (TAG_FLAG,TAG_NAME) VALUES
('재료','닭'),
('재료','오리'),
('재료','오징어'),
('재료','소고기'),
('재료','버섯'),
('재료','김치'),
('재료','계란'),
('재료','더덕'),
('재료','새우'),
('재료','고등어'),
('재료','갈치'),
('재료','문어'),
('재료','장어'),
('재료','감자'),
('재료','고구마'),
('재료','어묵'),
('재료','소시지'),
('재료','돼지'),
('재료','치즈')
;
<!-- TAG 맛:개 -->
INSERT INTO TAG (TAG_FLAG,TAG_NAME) VALUES
('맛','고소한맛'),
('맛','단맛'),
('맛','짠맛'),
('맛','달콤한맛'),
('맛','매운맛'),
('맛','신맛');
;

<!-- keyword -->
INSERT INTO keyword (KEYWORD) VALUES
('백종원'),
('제육'),
('치즈'),
('계란');

<!-- search -->
INSERT INTO search (KEYWORD_SEQ,MEMBER_ID)
VALUES
('1','KST'),
('2','KST'),
('3','KST'),
('1','KYH'),
('3','KYH'),
('4','KST');

<!-- board -->
INSERT INTO board (BOARD_NAME)
VALUES
('코멘트');

<!-- ARTICLE -->
INSERT INTO ARTICLE 
(TITLE,CONTENT,BOARD_SEQ,MEMBER_ID,ITEM_SEQ)
VALUES
('테스트1','테스트1',1,'KST',1),
('테스트2','테스트2',1,'KST',2),
('테스트3','테스트3',1,'KST',3),
('테스트4','테스트4',1,'KST',4),
('테스트5','테스트5',1,'KYH',1);


