"use strict"
var junghoon = junghoon || {};

junghoon.board = (()=>{
	var comment =x=>{
		// 코멘트 화면짜기
	};
	return{comment:comment};
})();


junghoon.member = (()=>{
	var add =()=>{
		$.getScript($.script()+'/comp.js',()=>{
			$.getScript($.script()+'/ui/j_add.js',()=>{
				$('header').remove();
				$('#content').empty().append(
						$('<div/>').addClass('add').html(addUI())
						);
				
				$('#join_to_login').click(e=>{
					alert('안녕 안녕 안녕로봇');	
					junghoon.member.login();
				})
				
				$('#join_submit_btn').click(e=>{
					console.log('email :: '+$('#eMail').val());
					$.ajax({
						url:$.ctx()+'/mbr/add',
						method:'post',
						contentType:'application/json',
						data:JSON.stringify({
							
							memberId:$('#memberId').val(),
							password:$('#password').val(),
							name:$('#name').val(),
							ssn:$('#ssn').val(),
							address:$('#address').val(),
							eMail:$('#eMail').val(),
							phoneNum:$('#phoneNum').val()
							
						}),
						
						success:d=>{
							
								alert(d.toString());
							},
						error:(x,y,z)=>{console.log('error :: '+z)}
						
					});
				});
			})
		})
		
		
	};
	var login =x=>{
		$.getScript($.script()+'/comp.js',()=>{
			$.getScript($.script()+'/ui/j_login.js',()=>{

				$('header').remove();
				$('#content').empty().append($(loginUI()));
				
				$('#login_to_join').click(e=>{
					alert('잘가 잘가 잘가로봇');
					junghoon.member.add();
				});
				
				$('#login_submit_btn').click(e=>{
					let memberId = $('#memberId').val();
					let password = $('#password').val();
					if(memberId===''){
						alert('아이디를 입력하세요')
					}else if(password===''){
						alert('비밀번호를 입력하세요')
					}else{
						$.ajax({
							url : $.ctx()+'/mbr/login',
							method : 'post',
							contentType : 'application/json',
							data : JSON.stringify({ memberId : memberId,
													password : password}),
							success : d => {
								console.log(d);
								if(d!=''){//로그인 성공
									$.cookie("member", d);
									//nav 버튼 바꾸기
									/*$('#taste').show();
									$('#join').hide();
									$('#evaluate').show();
									$('#info').empty();
									$('<li/>').append($('<a/>').attr({id:"login_form", href:"#"}).html('마이페이지')).appendTo($('#info'))
									.click(e=>{
										junghoon.service.mypage();
									});
									
									$('<li/>').append($('<a/>').attr({href:"#"}).html('로그아웃')).appendTo($('#info'))
									.click(e=>{
										//nav 버튼 바꾸기
										$('#taste').hide();
										$('#join').show();
										$('#evaluate').hide();
										$.removeCookie('member');
										bemeal.main.init();
									});
									$('<li/>').append($('<a/>').attr({href:"#"}).html('댓글 테스트')).appendTo($('#info'))
									.click(e=>{
										junghoon.service.comment();
									});
									$('<li/>').append($('<a/>').attr({href:"#"}).html('검색 테스트')).appendTo($('#info'))
									.click(e=>{
										junghoon.service.search();
									});*/
									//메인화면 보여주기
									bemeal.router.main();
								}else{//로그인 실패
									alert('로그인에 실패했습니다.');
								}
								},//success end
							error : (x,y,z)=>{console.log('error :: '+z)}
					});
					}
					 //ajax end
			}); //login_submit_btn end
		}); //getScript end
	});
	};
	var remove =x=>{
		alert('delete');
	}
	return {login:login,
		   add:add};
})();

		
junghoon.service2 = (()=>{
	
	var login1 = x => {
	let $j_login = $('<div/>').attr({id:"login_form"});
	let $j_login1 = $('<div/>').addClass('j_container').appendTo($j_login);
	let $j_login2 = $('<label/>').attr({id:"j_login_Id"}).html('<b>아이디<b/>').appendTo($j_login1);
	let $j_login3 = $('<input/>').attr({type:"text", placeholder:"Enter UserName", required}).appendTo($j_login1);
	let $j_login4 = $('<label/>').attr({id:"j_login_Pw"}).html('<b>비밀번호<b/>').appendTo($j_login1);
	let $j_login5 = $('<label/>').attr({type:"password", placeholder:"Enter PassWord", required}).appendTo($j_login1);
	let $j_login6 = $('<p/>').html('계정이 없으신가요?<a id ="login_to_join" href="#"  style="color:dodgerblue"> 여기서 </a>회원가입하세요.').appendTo($j_login1);
	let $j_login7 = $('<button/>').addClass('j_button').attr({type:"submit",id:"login_submit_btn"}).html('Login').appendTo($j_login1);
	
		
		
	};
	
	var join1 =x=> {
		let $j_join = $('<div/>').addClass('add').attr({id:"add_form"});
		let $j_join1 = $('<form/>').attr({id:"join_form"})
	};
	
	
// let $j_div1 =
// $('<div/>').attr({id:'search_the_SachalGod'}).addClass("container
// search-table");
	
	
	var search = x => {
		$.magnificPopup.open({
			closeBtnInside:true,
			closeOnContentClick:false,
			alignTop: false,
			fixedBgPos: true,
			fixedContentPos:false,
			item:{src: 
				junghoon.searchPOP.popupSearch()
				},
				midClick:true,
				overflowY:'auto',
				removalDelay:'0',
				type:'inline'
		});
		$('.btn').on('click',function(){
			alert($('#code').val());
		});
		return false;
	};
	var popupSearch =x=>{
		let $j_div1 = $('<div/>').attr({id:'search_the_SachalGod'}).addClass("container search-table");
		let $j_div2 = $('<div/>').addClass("search-box rounded").appendTo($j_div1);
		let $j_div3 = $('<div/>').addClass('row').appendTo($j_div2);
		let $j_div3_1 = $('<div/>').addClass('col-md-3').append($('<img src="/web/resources/img/junghoon/j_search.jpg" height="100%" width="100%" margin="5px auto"/>')
				).prependTo($j_div3);
		let $j_div3_2 = $('<div/>').addClass('col-md-3').append($('<img src="/web/resources/img/junghoon/j_tag.jpg" id="search2tag" height="100%" width="100%" margin="5px auto"/>')
				).appendTo($j_div3);
		let $j_searchBox = $('<form/>').addClass('form-inline md-form mr-auto mb-4').append($('input/').addClass('j_form-control mr-sm-2').attr({type:"text", placeholder:"Search", "aria-label":"Search"}));
		($('<button/>').addClass('btn btn-outline-warning btn-rounded btn-sm my-0').attr({type:"submit"}).html('search')).appendTo($j_div1);
		let $j_divSer = $('<div/>').addClass('search-keyword').appendTo($j_div1);
		let $j_divSer_under1 = $('<div/>').append($('<img src="/web/resources/img/junghoon/실검.png"/>')).attr({id:"popular_searches", height:"30%",width:"30%"}).prependTo($j_divSer);
		let $j_divSer_under2 = $('<div/>').append($('<img src="/web/resources/img/junghoon/내연인검.png" margin="5px auto"/>')).attr({id:"myage_popular",height:"30%",width:"30%"}).appendTo($j_divSer);
		let $j_theRecode = ($('<ul>').attr({id:"popular_search_time"})
					.append($('<li/>').html('1위 GS도시락'))
					.append($('<li/>').html('2위 치킨도시락'))
					.append($('<li/>').html('3위 한솥도시락'))
					.append($('<li/>').html('4위 라면'))
					.append($('<li/>').html('5위 양념치킨'))
					)
					.appendTo($j_div1);
		
	var popupTag =x=> {
		let $jj_div1 = $('<div/>').attr({id:'search_the_SachalGod'}).addClass("container search-table");
		let $jj_div2 = $('<div/>').addClass("search-box rounded").appendTo($j_div1);
		let $jj_div3 = $('<div>').addClass('row').appendTo($j_div2);
		let $jj_div3_1 = $('<div/>').addClass('col-md-3').append($('<img src="/web/resources/img/junghoon/j_tag.jpg" height="100%" width="100%" margin="5px auto"/>')
		).prependTo($jj_div3);
		let $jj_div3_2 = $('<div/>').addClass('col-md-3').append($('<img src="/web/resources/img/junghoon/j_search.jpg" id="tag2search" height="100%" width="100%" margin="5px auto"/>')
		).appendTo($jj_div3);
	
	}	
		
	} 
})
// 

junghoon.service = {
			search : x =>{
					$.magnificPopup.open({
								closeBtnInside:true,
								closeOnContentClick:false,
								alignTop: true,
								fixedBgPos:true,
								fixedContentPos:false,
								items:{src:
									'<div class="container search-table" id="search_the_SachalGod">'
									+ '            <div class="search-box rounded">'
									+ '                <div class="row">'
									+ '                    <div class="col-md-3">'
									+ '					<img src="/web/resources/img/junghoon/j_search.jpg" height="100%" width="100%" margin="5px auto"/>'
									+ '                    </div>'
									+ '                    <div class="col-md-3">'
									+ '					<img src="/web/resources/img/junghoon/j_tag.jpg" id="search2tag" height="100%" width="100%" margin="5px auto"/>'
									+ '                    </div>'
									+ '            </div>'
									+ '            <div class="search-keyword">'
									+ '           <br/><br/> '
									+ '<form class="form-inline md-form mr-auto mb-4">'
									+ '  <input class="j_form-control mr-sm-2"  type="text" placeholder="Search" aria-label="Search">'
									+ '  <button class="btn btn-outline-warning btn-rounded btn-sm my-0" type="submit">Search</button>'
									+ '</form>'
									+ '            <div>'
									+ '            <div>'
									+ '					<img src="/web/resources/img/junghoon/실검.png" id="popular_searches" height="30%" width="30%" />'
									+ '					<img src="/web/resources/img/junghoon/내연인검.png" id="myage_popular" height="30%" width="30%" margin="5px auto"/>'
									+ '            </div>'
									+ '                <ul id="popular_search_time">'
									+ '                    <li>1위 GS도시락</li>'
									+ '                    <li>2위 치킨도시락</li>'
									+ '                    <li>3위 한솥도시락</li>'
									+ '                    <li>4위 라면tep</li>'
									+ '                    <li>5위 양념치킨</li>' + '                </ul>' + ''
									+ '    </div>'

									+ '            </div>' + '        </div>'
									},
								midClick:true,
								overflowY:'auto',
								removalDelay:'0',
								type:'inline'}); 
				
					$('#popular_searches').click(e=>{
						$('#popular_search_time').html(
								'                    <li>1위 GS도시락</li>'
								+ '                    <li>2위 치킨도시락</li>'
								+ '                    <li>3위 한솥도시락</li>'
								+ '                    <li>4위 라면tep</li>'
								+ '                    <li>5위 양념치킨</li>'
								
								+''
								+'</div>'
						);
					}),
					$('#myage_popular').click(e=>{
						$('#popular_search_time').html(
								 '                    <li>1위 로그인 한</li>'
								+'                    <li>2위 내 정보의</li>'
								+'                    <li>3위 연령대가</li>'
								+'                    <li>4위 관심있는</li>'
								+'                    <li>5위 검색어</li>'
							
								+''
								+'</div>'
						);
					}),
					$('#search2tag').click(e=>{
						$('#search_the_SachalGod').html(
								'            <div class="search-box rounded">'
								+'                <div class="row">'
								+'                    <div class="col-md-3">'
								+'					<img src="/web/resources/img/junghoon/j_tag.jpg" height="100%" width="100%" margin="5px auto"/>'
								/*
								 * +' <button class="j_img" id="search2keyWord"><img
								 * src="/web/resources/img/junghoon/j_search.jpg"
								 * height="100%" width="100%"></button> '
								 */
								+'                    </div>'
								+'                    <div class="col-md-3">'
								/*
								 * +' <img
								 * src="/web/resources/img/junghoon/j_tag.jpg"
								 * height="100%" width="100%" margin="5px
								 * auto"/>'
								 */
								+'					<img src="/web/resources/img/junghoon/j_search.jpg" id="tag2search" height="100%" width="100%" margin="5px auto"/>'
								+'                    </div>'
								+'            </div>'
								+'            <div class="search-list rounded">'
								                +''
								+'                <table class="table" id="myTable">'              
								+'                    <tr>'
								+'                      <br/><br/><div id="j_title_under">재료</div><br/>'
								+'<div class="j_btn-group" data-toggle="buttons" >'
								+'  <div  class="btn btn-danger btn-rounded j_btn">'
								+'    <input id="j_foodstuffs" class="j_scbox" type="checkbox" name="1" autocomplete="off"> 닭'
								+'  </div>&nbsp;'
								+'  <div class="btn btn-danger btn-rounded j_btn">'
								+'    <input id="j_foodstuffs" class="j_scbox" type="checkbox" name="2" autocomplete="off"> 오리'
								+'  </div>&nbsp;'
								+'  <div class="btn btn-danger btn-rounded j_btn">'
								+'    <input id="j_foodstuffs" class="j_scbox" type="checkbox" name="3" autocomplete="off"> 오징어'
								+'  </div>&nbsp;'
								+'  <div class="btn btn-danger btn-rounded  j_btn">'
								+'    <input id="j_foodstuffs" class="j_scbox" type="checkbox"name="4" autocomplete="off"> 소고기'
								+'  </div>&nbsp;'
								+'  <div class="btn btn-danger btn-rounded j_btn">'
								+'    <input id="j_foodstuffs" class="j_scbox" type="checkbox" name="5" autocomplete="off"> 버섯'
								+'  </div>&nbsp;'
								+'  <div class="btn btn-danger btn-rounded j_btn">'
								+'    <input id="j_foodstuffs" class="j_scbox" type="checkbox"name="6" autocomplete="off"> 김치'
								+'  </div>&nbsp;'
								+'  <div class="btn btn-danger btn-rounded j_btn">'
								+'    <input id="j_foodstuffs" class="j_scbox" type="checkbox" name="7"  autocomplete="off"> 계란'
								+'  </div>&nbsp;'
								+'  <div class="btn btn-danger btn-rounded j_btn">'
								+'    <input id="j_foodstuffs" class="j_scbox" type="checkbox" name="8"  autocomplete="off"> 더덕'
								+'  </div>&nbsp;'
								+'  <div class="btn btn-danger btn-rounded j_btn">'
								+'    <input id="j_foodstuffs" class="j_scbox" type="checkbox" type="" name="9" autocomplete="off"> 새우'
								+'  </div>&nbsp;'
								+'  <div class="btn btn-danger btn-rounded j_btn">'
								+'    <input id="j_foodstuffs" class="j_scbox" type="checkbox" type="" name="10" autocomplete="off"> 고등어'
								+'  </div>&nbsp;'
								+'  <div class="btn btn-danger btn-rounded j_btn">'
								+'    <input id="j_foodstuffs" class="j_scbox" type="checkbox" name="11" autocomplete="off"> 갈치'
								+'  </div>&nbsp;'
								+'  <div class="btn btn-danger btn-rounded j_btn">'
								+'    <input id="j_foodstuffs" class="j_scbox" type="checkbox" name="12" autocomplete="off"> 문어'
								+'  </div>&nbsp;'
								+'  <div class="btn btn-danger btn-rounded j_btn">'
								+'    <input id="j_foodstuffs" class="j_scbox" type="checkbox" name="13"  autocomplete="off"> 장어'
								+'  </div>&nbsp;'
								+'  <div class="btn btn-danger btn-rounded j_btn">'
								+'    <input id="j_foodstuffs" class="j_scbox" type="checkbox" name="14"  autocomplete="off"> 감자'
								+'  </div>&nbsp;'
								+'  <div class="btn btn-danger btn-rounded j_btn">'
								+'    <input id="j_foodstuffs" class="j_scbox" type="checkbox" name="15"  autocomplete="off"> 고구마'
								+'  </div>&nbsp;'
								+'  <div class="btn btn-danger btn-rounded j_btn">'
								+'    <input id="j_foodstuffs" class="j_scbox" type="checkbox" name="16" autocomplete="off"> 어묵'
								+'  </div>&nbsp;'
								+'  <div class="btn btn-danger btn-rounded j_btn">'
								+'    <input id="j_foodstuffs" class="j_scbox" type="checkbox" name="17"  autocomplete="off"> 소시지'
								+'  </div>&nbsp;'
								+'  <div class="btn btn-danger btn-rounded j_btn">'
								+'    <input id="j_foodstuffs" class="j_scbox" type="checkbox" name="18"  autocomplete="off"> 돼지'
								+'  </div>&nbsp;'
								+'  <div class="btn btn-danger btn-rounded j_btn">'
								+'    <input id="j_foodstuffs" class="j_scbox" type="checkbox" name="19"  autocomplete="off"> 치즈'
								+'  </div>&nbsp;'								
								+'</div>'
								+'                    </tr>'
								+'                    <tr>'
								+'                    <br/><br/><div id="j_title_under">맛</div><br/>'
								+'        <div class="j_btn-group" data-toggle="buttons" >'
								+'              <div  class="btn btn-danger btn-rounded j_btn">'
								+'                <input id="j_taste" class="j_scbox" type="checkbox" name="20" autocomplete="off"> 고소'
								+'              </div>'
								+'              <div class="btn btn-danger btn-rounded j_btn">'
								+'                <input id="j_taste" class="j_scbox" type="checkbox"name="21"  autocomplete="off"> 달달'
								+'              </div>'
								+'              <div class="btn btn-danger btn-rounded j_btn">'
								+'                <input id="j_taste" class="j_scbox" type="checkbox" name="22" type="" autocomplete="off"> 잡짤'
								+'              </div>'
								+'              <div class="btn btn-danger btn-rounded  j_btn">'
								+'                <input id="j_taste" class="j_scbox" type="checkbox" name="23" type="" autocomplete="off"> 달콤'
								+'              </div>'
								+'              <div class="btn btn-danger btn-rounded j_btn">'
								+'                <input id="j_taste" class="j_scbox" type="checkbox" name="24"  type="" autocomplete="off"> 매콤'
								+'              </div>'
								+'              <div class="btn btn-danger btn-rounded j_btn">'
								+'                <input id="j_taste" class="j_scbox" type="checkbox" name="25" type="" autocomplete="off"> 새콤'
								+'              </div>'
								+'              <div class="btn btn-danger btn-rounded j_btn">'
								+'                <input id="j_taste" class="j_scbox" type="checkbox" name="26" type="" autocomplete="off"> 씁쓸'
								+'              </div>'
								+'              <div class="btn btn-danger btn-rounded j_btn">'
								+'                <input id="j_taste" class="j_scbox" type="checkbox" name="27" type="" autocomplete="off"> 감칠맛'
								+'              </div>'
								+'              <div class="btn btn-danger btn-rounded j_btn">'
								+'                <input id="j_taste" class="j_scbox" type="checkbox" name="28" type="" autocomplete="off"> 담백'
								+'              </div>'
								+'              <div class="btn btn-danger btn-rounded j_btn">'
								+'                <input id="j_taste" class="j_scbox" type="checkbox" name="29" type="" autocomplete="off"> 느끼'
								+'              </div>'

								+'              </div>'
								+'                      <br/><br/><div id="j_title_under">감성</div><br/>'
								+'        <div class="j_btn-group" data-toggle="buttons" >'
								+'              <div class="btn btn-danger btn-rounded j_btn">'
								+'                <input id="j_sensitivity" class="j_scbox" type="checkbox" name="33" type="" autocomplete="off"> 봄'
								+'              </div>'
								+'              <div class="btn btn-danger btn-rounded j_btn">'
								+'                <input id="j_sensitivity" class="j_scbox" type="checkbox" name="34" type="" autocomplete="off"> 여름'
								+'              </div>'
								+'              <div class="btn btn-danger btn-rounded j_btn">'
								+'                <input id="j_sensitivity" class="j_scbox" type="checkbox" name="35" type="" autocomplete="off"> 가을'
								+'              </div>'
								+'              <div class="btn btn-danger btn-rounded j_btn">'
								+'                <input id="j_sensitivity" class="j_scbox" type="checkbox" name="36" type="" autocomplete="off"> 겨울'
								+'              </div>'
								+'               <div class="btn btn-danger btn-rounded j_btn">'
								+'                <input id="j_sensitivity" class="j_scbox" type="checkbox" name="30" type="" autocomplete="off"> 빨간'
								+'              </div>'
								+'              <div class="btn btn-danger btn-rounded j_btn">'
								+'                <input id="j_sensitivity" class="j_scbox" type="checkbox" name="31" type="" autocomplete="off"> 얼큰한'
								+'				</div>'
								+'               <div class="btn btn-danger btn-rounded j_btn">'
								+'                <input id="j_sensitivity" class="j_scbox" type="checkbox" name="32" type="" autocomplete="off"> 얼얼한'
								+'              </div>'
								+'               <div class="btn btn-danger btn-rounded j_btn">'
								+'                <input id="j_sensitivity" class="j_scbox" type="checkbox" name="37" type="" autocomplete="off"> 둘이서'
								+'              </div>'
								+'               <div class="btn btn-danger btn-rounded j_btn">'
								+'                <input id="j_sensitivity" class="j_scbox" type="checkbox" name="38" type="" autocomplete="off"> 엄마가 해준'
								+'              </div>'
								+'               <div class="btn btn-danger btn-rounded j_btn">'
								+'                <input id="j_sensitivity" class="j_scbox" type="checkbox" name="39" type="" autocomplete="off"> 건강한'
								+'              </div>'
								+'                <div class="btn btn-danger btn-rounded j_btn">'
								+'                <input id="j_sensitivity" class="j_scbox" type="checkbox" name="40" type="" autocomplete="off"> 야식'
								+'              </div>'
								+'              <div class="btn btn-danger btn-rounded j_btn">'
								+'                <input id="j_sensitivity" class="j_scbox" type="checkbox" name="41" type="" autocomplete="off"> 아침'
								+'              </div>'
								+'              <div class="btn btn-danger btn-rounded j_btn">'
								+'                <input id="j_sensitivity" class="j_scbox" type="checkbox" name="42" type="" autocomplete="off"> 점심'
								+'              </div>'
								+'              <div class="btn btn-danger btn-rounded j_btn">'
								+'                <input id="j_sensitivity" class="j_scbox" type="checkbox" name="43" type="" autocomplete="off"> 저녁'
								+'              </div>'
								+'              <div class="btn btn-danger btn-rounded j_btn">'
								+'                <input id="j_sensitivity" class="j_scbox" type="checkbox" name="44" type="" autocomplete="off"> 말랑한'
								+'              </div>'
								+'              <div class="btn btn-danger btn-rounded j_btn">'
								+'                <input id="j_sensitivity" class="j_scbox" type="checkbox" name="45" type="" autocomplete="off"> 야들한'
								+'              </div>'
								+'              <div class="btn btn-danger btn-rounded j_btn">'
								+'                <input id="j_sensitivity" class="j_scbox" type="checkbox" name="46" type="" autocomplete="off"> 부드러운'
								+'              </div>'
								+'              <div class="btn btn-danger btn-rounded j_btn">'
								+'                <input id="j_sensitivity" class="j_scbox" type="checkbox" name="47" type="" autocomplete="off"> 말캉한'
								+'              </div>'
								+'              <div class="btn btn-danger btn-rounded j_btn">'
								+'                <input id="j_sensitivity" class="j_scbox" type="checkbox" name="48" type="" autocomplete="off"> 샤르르'
								+'              </div>'
								+'              <div class="btn btn-danger btn-rounded j_btn">'
								+'                <input id="j_sensitivity" class="j_scbox" type="checkbox" name="49" type="" autocomplete="off"> 찐한'
								+'              </div>'
								+'              <div class="btn btn-danger btn-rounded j_btn">'
								+'                <input id="j_sensitivity" class="j_scbox" type="checkbox" name="50" type="" autocomplete="off"> 힐링'
								+'              </div>'
								+'              <div class="btn btn-danger btn-rounded j_btn">'
								+'                <input id="j_sensitivity" class="j_scbox" type="checkbox" name="51" type="" autocomplete="off"> 알콜'
								+'              </div>'
								+'              <div class="btn btn-danger btn-rounded j_btn">'
								+'                <input id="j_sensitivity" class="j_scbox" type="checkbox" name="52" type="" autocomplete="off"> 맥주'
								+'              </div>'
								+'              <div class="btn btn-danger btn-rounded j_btn">'
								+'                <input id="j_sensitivity" class="j_scbox" type="checkbox" name="53" type="" autocomplete="off"> 푸짐한'

								+'              </div>'
								+'            </div><br/><br/>'
								+'                    </tr>'
								+'                    <tr>'
								
								+'                      <br/><br/>'
								+'                   </tr>'
								+'                  가격'
								+'                  <div class="slidecontainer1">'
								+'  <input type="range" min="1" max="100" value="50" class="slider" id="myRange">'
								+'<div class="row">'
								+'<button class="ss_btn">선택초기화</button>'
								+'<button id="search_submit" class="ss_btn">검색</button>'
								
								+'    </div>'
								+'		</div>'


								
								+'                </table>'       
								+''
 
								+'            </div>'
						),
						$('#tag2search').click(e=>{
							
							junghoon.service.search();
						})
						$('#search_submit').click(e=>{
							var foodstuffs = document.forms[0];
							var taste = document.forms[0];
							var sensitivity = document.forms[0];
							var txt1 = "";
							var txt2 = "";
							var txt3 = "";
							var i;
							var j;
							var k;
							for(i = 0; i<j_foodstuffs.length; i++){
								if(j_foodstuffs[i].checked){
									txt1 = txt1 + j_foodstuffs[i].name+"/";
								}
							}
							for(j = 0; j<j_taste.length; j++){
								if(j_taste[j].checked){
									txt2 = txt2 + j_taste[j].name+"/";
								}
							}
							for(k = 0; k<j_sensitivity.length; k++){
								if(j_sensitivity[k].checked){
									txt3 = txt3 + j_sensitivity[k].name+"/";
								}
							}
							alert('선택한 재료 '+txt1+' 선택한 맛  '+txt2+' 선택한 감성 '+txt3);
							
							$.ajax({
								url : $.ctx()+'/search/tagSearch',
								method:'post',
								contentType:'application/json',
								data:JSON.stringify({"tagFoodstuffs":txt1,
													 "tagTaste":txt2,
													 "tagSensitivity":txt3}),
								success:d=>{                                      
								alert('success');
								},
								error:(x,y,z)=>{
									console.log('error :: '+z)
									}
													 
							})
							
							
							
							
							
						})
						
					})
					
					},
				mypage : x => {
			alert('mp');
			$.getScript($.script()+'/ui/j_mbrupdate.js', ()=>{
					$('#content').empty().html(modifyUI())
				});
	}
}
