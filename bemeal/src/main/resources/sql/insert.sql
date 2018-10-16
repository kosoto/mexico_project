<!-- MEMBER -->
INSERT INTO MEMBER 
(MEMBER_ID,PASSWORD,NAME,AGE,SSN,GENDER,ADDRESS,E_MAIL,PHONE_NUM)
VALUES
('KST','123','김승태',30,'891111-1233220','남','경기도 파주시','kstad@naver.com','010-5359-3559'),
('KYH','123','김윤호',31,'881111-1232220','남','서울시 신촌','yoonho@naver.com','010-1533-1235'),
('KJH','123','김정훈',23,'971111-1231120','남','인천시','junghoon@naver.com','010-4567-1856'),
('OGE','123','오가은',29,'901111-2203420','녀','서울시','gaeun@naver.com','010-2435-6756');

<!-- ingredient -->
INSERT INTO ingredient (ING_NAME) VALUES
('닭고기'),
('소고기'),
('돼지고기'),
('계란'),
('햄'),
('생선'),
('야채'),
('치즈');

<!-- ITEM -->
INSERT INTO ITEM 
(ITEM_NAME, PRICE)
VALUES 
('매화',4000),
('백종원 도시락',3000),
('치킨마요',3500),
('와사비마요',3000),
('제육볶음',4500);

<!-- item_ingredient -->
INSERT INTO item_ingredient 
(ING_SEQ,ITEM_SEQ)
VALUES
(1,1),
(4,1),
(2,2),
(6,2),
(3,5);

<!-- TAG -->
INSERT INTO TAG (TAG_NAME) VALUES
('고소'),
('단맛'),
('짠맛'),
('달콤'),
('매운맛');

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

INSERT INTO TASTE 
(GRADE,ITEM_SEQ,MEMBER_ID,FLAG)
VALUES
(3,1,'KST','GRADE'),
(2,2,'KST','GRADE'),
(3.5,3,'KST','GRADE'),
(4,4,'KST','GRADE'),
(5,1,'KYH','GRADE');
