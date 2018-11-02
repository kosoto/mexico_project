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
					junghoon.member.login();
				})
				$('#idck').click(e=>{
					alert('중복클릭');
					let id = $('#memberId').val();
					alert("$('#memberId').val() :: "+$('#memberId').val());
					if(id!='' && id!=null){
						$.getJSON($.ctx()+'/mbr/idck/'+id,d=>{
							alert("aaaaaaaaaaaaaaa");
							console.log("d :: "+d);
							alert((d=="0")?"중복된 아이디입니다":'사용할 수 있는 아이디입니다')
						});
					}else alert('아이디를 입력해주세요');
					
				})
				$('#join_submit_btn').click(e=>{
					//validation
					
					let id = $('#memberId').val();
					let pw = $('#password').val();
					let name = $('#name').val();
					let ssn = $('#ssn').val();
					let addr = $('#address').val();
					let email = $('#eMail').val();
					let phone = $('#phoneNum').val();
					
					if(id===''){
						alert('아이디를 입력하세요'); return;
					}
					if(pw===''){
						alert('비밀번호를 입력하세요');return;
					}
					if(name===''){
						alert('이름을 입력하세요');return;
					}
					if(ssn===''){
						alert('주민번호를 입력하세요');return;
					}
					if(addr===''){
						alert('주소를 입력하세요');return;
					}
					if(email===''){
						alert('이메일을 입력하세요');return;
					}
					if(phone===''){
						alert('전화번호를 입력하세요');return;
					}
					
					$.ajax({
						url:$.ctx()+'/mbr/add',
						method:'post',
						contentType:'application/json',
						data:JSON.stringify({
							memberId:id,
							password:pw,
							name:name,
							ssn:ssn,
							address:addr,
							email:email,
							phoneNum:phone
							
						}),
						success:d=>{
							
							if(d!=0){
								junghoon.member.login();	
							}else{
								alert('회원가입에 실패했습니다.');
							}
						},
						error:(x,y,z)=>{console.log('error :: '+z)}
						
					});//ajax end
				});
			})
		})
		
		
	};
	var login =x=>{
			$('header').remove();
			$('#content').empty().append(
				$('<form/>').attr({id:'login_form'}).addClass('login_form text-center').append(
					$('<p/>').addClass('h4 mb-4').append(
						$('<img/>').attr({src:$.img()+"/cmm/logo.png"})
					),
					$('<input/>').addClass('form-control mb-4').attr({id:'memberId',type:'text',placeholder:'아이디',style:'width:100%;'}),
					$('<input/>').addClass('form-control mb-4').attr({id:'password',type:'password',placeholder:'비밀번호',style:'width:100%;'}),
					$('<div/>').addClass('d-flex justify-content-around'),
					$('<button/>').addClass('btn btn-warning btn-block my-4').attr({id:'login_submit_btn',type:'button'}).text('로그인'),
					$('<p/>').text('계정이 없으신가요?').append(
						$('<a/>').attr({id:'login_to_join',href:'#'}).text('회원가입')
					),
					$('<a/>').attr({id:'kakao_login_btn'})
				   )
			);
			 
			 Kakao.Auth.createLoginButton({
			      container: '#kakao_login_btn',
			      success: function(authObj) {
			    	  Kakao.API.request({
			    		  url:'/v2/user/me',
			    		  success:res=>{
			    			  $.ajax({
			    				  url:$.ctx()+'/mbr/kakao/retrieve',
			    				  method:'post',
			    				  contentType:'application/json',
			    				  data:JSON.stringify(res),
			    				  success:d=>{
			    					 
			    					  console.log(d);
			    					  $.cookie('member',d);
			    					  console.log($.cookie('member'));
			    					  bemeal.router.main();
			    				  },
			    				  error:(e1,e2,e3)=>{
			    					  
			    				  }
			    			  });
			    		  }
			    	  });
			      },
			      fail: function(err) {
			    	  console.log(err);
			    	  console.log(JSON.stringify(err));
			      }
			    });
			
			$('#login_to_join').click(e=>{
	
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
							if(d!=''){//로그인 성공
								$.cookie("member", d);
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
	};
	var remove =x=>{
		
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
			item:{src: '<div class="search-box rounded">'
				+'									'
				+'									</div>'
				+'								<div class="mfp-container search-list rounded">'
				+'									<table class="table" id="myTable">'            
				+'										<tr>'
				+'											<br/><br/>'
				+'											<div id="j_title_under">재료</div>'
				+'											<br/>'
				+'											<div class="row j_btn-group" data-toggle="buttons" >'
				+'												<div style="margin:10px;font-size:12px" class="btn btn-danger btn-rounded j_btn">'
				+'													<input id="j_tag" class="j_scbox" type="checkbox" name="1" autocomplete="off"> 닭'
				+'												</div>&nbsp;'
				+'												<div class="btn btn-danger btn-rounded j_btn">'
				+'													<input id="j_tag" class="j_scbox" type="checkbox" name="2" autocomplete="off"> 오리'
				+'												</div>&nbsp;'
				+'												<div class="btn btn-danger btn-rounded j_btn">'
				+'													<input id="j_tag" class="j_scbox" type="checkbox" name="3" autocomplete="off"> 오징어'
				+'												</div>&nbsp;'
				+'												<div class="btn btn-danger btn-rounded  j_btn">'
				+'													<input id="j_tag" class="j_scbox" type="checkbox"name="4" autocomplete="off"> 소고기'
				+'												</div>&nbsp;'
				+'												<div class="btn btn-danger btn-rounded j_btn">'
				+'													<input id="j_tag" class="j_scbox" type="checkbox" name="5" autocomplete="off"> 버섯'
				+'												</div>&nbsp;'
				+'												<div class="btn btn-danger btn-rounded j_btn">'
				+'													<input id="j_tag" class="j_scbox" type="checkbox"name="6" autocomplete="off"> 김치'
				+'												</div>&nbsp;'
				+'												<div class="btn btn-danger btn-rounded j_btn">'
				+'													<input id="j_tag" class="j_scbox" type="checkbox" name="7"  autocomplete="off"> 계란'
				+'												</div>&nbsp;'
				+'												<div class="btn btn-danger btn-rounded j_btn">'
				+'													<input id="j_tag" class="j_scbox" type="checkbox" name="8"  autocomplete="off"> 더덕'
				+'												</div>&nbsp;'
				+'												<div class="btn btn-danger btn-rounded j_btn">'
				+'													<input id="j_tag" class="j_scbox" type="checkbox" name="9" autocomplete="off"> 새우'
				+'												</div>&nbsp;'
				+'												<div class="btn btn-danger btn-rounded j_btn">'
				+'													<input id="j_tag" class="j_scbox" type="checkbox" name="10" autocomplete="off"> 고등어'
				+'												</div>&nbsp;'
				+'												<div class="btn btn-danger btn-rounded j_btn">'
				+'													<input id="j_tag" class="j_scbox" type="checkbox" name="11" autocomplete="off"> 갈치'
				+'												</div>&nbsp;'
				+'												<div class="btn btn-danger btn-rounded j_btn">'
				+'													<input id="j_tag" class="j_scbox" type="checkbox" name="12" autocomplete="off"> 문어'
				+'												</div>&nbsp;'
				+'												<div class="btn btn-danger btn-rounded j_btn">'
				+'													<input id="j_tag" class="j_scbox" type="checkbox" name="13"  autocomplete="off"> 장어'
				+'												</div>&nbsp;'
				+'												<div class="btn btn-danger btn-rounded j_btn">'
				+'													<input id="j_tag" class="j_scbox" type="checkbox" name="14"  autocomplete="off"> 감자'
				+'												</div>&nbsp;'
				+'												<div class="btn btn-danger btn-rounded j_btn">'
				+'													<input id="j_tag" class="j_scbox" type="checkbox" name="15"  autocomplete="off"> 고구마'
				+'												</div>&nbsp;'
				+'												<div class="btn btn-danger btn-rounded j_btn">'
				+'													<input id="j_tag" class="j_scbox" type="checkbox" name="16" autocomplete="off"> 어묵'
				+'												</div>&nbsp;'
				+'												<div class="btn btn-danger btn-rounded j_btn">'
				+'													<input id="j_tag" class="j_scbox" type="checkbox" name="17"  autocomplete="off"> 소시지'
				+'												</div>&nbsp;'
				+'												<div class="btn btn-danger btn-rounded j_btn">'
				+'													<input id="j_tag" class="j_scbox" type="checkbox" name="18"  autocomplete="off"> 돼지'
				+'												</div>&nbsp;'
				+'												<div class="btn btn-danger btn-rounded j_btn">'
				+'													<input id="j_tag" class="j_scbox" type="checkbox" name="19"  autocomplete="off"> 치즈'
				+'												</div>&nbsp;'						
				+'											</div>'
				+'										</tr>'
				+'										<tr>'
				+'											<br/><br/>'
				+'											<div id="j_title_under">맛</div>'
				+'											<br/>'
				+'											<div class="row j_btn-group" data-toggle="buttons" >'
				+'												<div  class="btn btn-danger btn-rounded j_btn">'
				+'													<input id="j_tag" class="j_scbox" type="checkbox" name="20" autocomplete="off"> 고소'
				+'												</div>'
				+'												<div class="btn btn-danger btn-rounded j_btn">'
				+'													<input id="j_tag" class="j_scbox" type="checkbox"name="21"  autocomplete="off"> 달달'
				+'												</div>'
				+'												<div class="btn btn-danger btn-rounded j_btn">'
				+'													<input id="j_tag" class="j_scbox" type="checkbox" name="22" type="" autocomplete="off"> 잡짤'
				+'												</div>'
				+'												<div class="btn btn-danger btn-rounded  j_btn">'
				+'													<input id="j_tag" class="j_scbox" type="checkbox" name="23" type="" autocomplete="off"> 달콤'
				+'												</div>'
				+'												<div class="btn btn-danger btn-rounded j_btn">'
				+'													<input id="j_tag" class="j_scbox" type="checkbox" name="24"  type="" autocomplete="off"> 매콤'
				+'												</div>'
				+'												<div class="btn btn-danger btn-rounded j_btn">'
				+'													<input id="j_tag" class="j_scbox" type="checkbox" name="25" type="" autocomplete="off"> 새콤'
				+'												</div>'
				+'												<div class="btn btn-danger btn-rounded j_btn">'
				+'													<input id="j_tag" class="j_scbox" type="checkbox" name="26" type="" autocomplete="off"> 씁쓸'
				+'												</div>'
				+'												<div class="btn btn-danger btn-rounded j_btn">'
				+'													<input id="j_tag" class="j_scbox" type="checkbox" name="27" type="" autocomplete="off"> 감칠맛'
				+'												</div>'
				+'												<div class="btn btn-danger btn-rounded j_btn">'
				+'													<input id="j_tag" class="j_scbox" type="checkbox" name="28" type="" autocomplete="off"> 담백'
				+'												</div>'
				+'												<div class="btn btn-danger btn-rounded j_btn">'
				+'													<input id="j_tag" class="j_scbox" type="checkbox" name="29" type="" autocomplete="off"> 느끼'
				+'												</div>'
				+'											</div>'
				+'											<br/><br/>'
				+'											<div id="j_title_under">감성</div>'
				+'											<br/>'
				+'											<div class="row j_btn-group" data-toggle="buttons" >'
				+'												<div class="btn btn-danger btn-rounded j_btn">'
				+'													<input id="j_tag" class="j_scbox" type="checkbox" name="33" type="" autocomplete="off"> 봄'
				+'												</div>'
				+'												<div class="btn btn-danger btn-rounded j_btn">'
				+'													<input id="j_tag" class="j_scbox" type="checkbox" name="34" type="" autocomplete="off"> 여름'
				+'												</div>'
				+'												<div class="btn btn-danger btn-rounded j_btn">'
				+'													<input id="j_tag" class="j_scbox" type="checkbox" name="35" type="" autocomplete="off"> 가을'
				+'												</div>'
				+'												<div class="btn btn-danger btn-rounded j_btn">'
				+'													<input id="j_tag" class="j_scbox" type="checkbox" name="36" type="" autocomplete="off"> 겨울'
				+'												</div>'
				+'												<div class="btn btn-danger btn-rounded j_btn">'
				+'													<input id="j_tag" class="j_scbox" type="checkbox" name="30" type="" autocomplete="off"> 빨간'
				+'												</div>'
				+'												<div class="btn btn-danger btn-rounded j_btn">'
				+'													<input id="j_tag" class="j_scbox" type="checkbox" name="31" type="" autocomplete="off"> 얼큰한'
				+'												</div>'
				+'												<div class="btn btn-danger btn-rounded j_btn">'
				+'													<input id="j_tag" class="j_scbox" type="checkbox" name="32" type="" autocomplete="off"> 얼얼한'
				+'												</div>'
				+'												<div class="btn btn-danger btn-rounded j_btn">'
				+'													<input id="j_tag" class="j_scbox" type="checkbox" name="37" type="" autocomplete="off"> 둘이서'
				+'												</div>'
				+'												<div class="btn btn-danger btn-rounded j_btn">'
				+'													<input id="j_tag" class="j_scbox" type="checkbox" name="38" type="" autocomplete="off"> 엄마가 해준'
				+'												</div>'
				+'												<div class="btn btn-danger btn-rounded j_btn">'
				+'													<input id="j_tag" class="j_scbox" type="checkbox" name="39" type="" autocomplete="off"> 건강한'
				+'												</div>'
				+'												<div class="btn btn-danger btn-rounded j_btn">'
				+'													<input id="j_tag" class="j_scbox" type="checkbox" name="40" type="" autocomplete="off"> 야식'
				+'												</div>'
				+'												<div class="btn btn-danger btn-rounded j_btn">'
				+'													<input id="j_tag" class="j_scbox" type="checkbox" name="41" type="" autocomplete="off"> 아침'
				+'												</div>'
				+'												<div class="btn btn-danger btn-rounded j_btn">'
				+'													<input id="j_tag" class="j_scbox" type="checkbox" name="42" type="" autocomplete="off"> 점심'
				+'												</div>'
				+'												<div class="btn btn-danger btn-rounded j_btn">'
				+'													<input id="j_tag" class="j_scbox" type="checkbox" name="43" type="" autocomplete="off"> 저녁'
				+'												</div>'
				+'												<div class="btn btn-danger btn-rounded j_btn">'
				+'													<input id="j_tag" class="j_scbox" type="checkbox" name="44" type="" autocomplete="off"> 말랑한'
				+'												</div>'
				+'												<div class="btn btn-danger btn-rounded j_btn">'
				+'													<input id="j_tag" class="j_scbox" type="checkbox" name="45" type="" autocomplete="off"> 야들한'
				+'												</div>'
				+'												<div class="btn btn-danger btn-rounded j_btn">'
				+'													<input id="j_tag" class="j_scbox" type="checkbox" name="46" type="" autocomplete="off"> 부드러운'
				+'												</div>'
				+'												<div class="btn btn-danger btn-rounded j_btn">'
				+'													<input id="j_tag" class="j_scbox" type="checkbox" name="47" type="" autocomplete="off"> 말캉한'
				+'												</div>'
				+'												<div class="btn btn-danger btn-rounded j_btn">'
				+'													<input id="j_tag" class="j_scbox" type="checkbox" name="48" type="" autocomplete="off"> 샤르르'
				+'												</div>'
				+'												<div class="btn btn-danger btn-rounded j_btn">'
				+'													<input id="j_tag" class="j_scbox" type="checkbox" name="49" type="" autocomplete="off"> 찐한'
				+'												</div>'
				+'												<div class="btn btn-danger btn-rounded j_btn">'
				+'													<input id="j_tag" class="j_scbox" type="checkbox" name="50" type="" autocomplete="off"> 힐링'
				+'												</div>'
				+'												<div class="btn btn-danger btn-rounded j_btn">'
				+'													<input id="j_tag" class="j_scbox" type="checkbox" name="51" type="" autocomplete="off"> 알콜'
				+'												</div>'
				+'												<div class="btn btn-danger btn-rounded j_btn">'
				+'													<input id="j_tag" class="j_scbox" type="checkbox" name="52" type="" autocomplete="off"> 맥주'
				+'												</div>'
				+'												<div class="btn btn-danger btn-rounded j_btn">'
				+'													<input id="j_tag" class="j_scbox" type="checkbox" name="53" type="" autocomplete="off"> 푸짐한'
				+'												</div>'
				+'											</div>'
				+'											<br/><br/>'
				+'										</tr>'
				+'										<tr>'
				+'											<br/><br/>'
				+'										</tr>'
				+'											'
				+'									  <div class="row">'
				+'									  <button class="ss_btn">선택초기화</button>'
				+'									  <button id="search_submit" class="ss_btn">검색</button>'
				+'						'
				+'									    </div>'
				+'											</div>'
				+'								                    </table>'

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
								items:{src:junghoon.service.tagSearchPopup()
									},
								midClick:true,
								overflowY:'auto',
								removalDelay:'0',
								type:'inline'}); 
					var slider = document.getElementById("myRange");
					var output = document.getElementById("sliderValue");
					output.innerHTML =slider.value;
					
					slider.oninput = function(){
						output.innerHTML = this.value;
					}
					
					$('#search_submit').click(e=>{
						var tagArr = [];
						$.each($('.j_scbox:checked'),(i,j)=>{
							tagArr.push(j.name);
							
						});
						if(tagArr==''){
							alert('태그를 선택해주세요');
						}else{
							$.ajax({
								url : $.ctx()+'/tagSearch',
								method:'post',
								contentType:'application/json',
								data:JSON.stringify({"JtagArr":tagArr,"valueRange":output.innerHTML}), // 리스트
								success:d=>{
									console.log('태그 검색 결과');
									console.log(d);
								},
								error:(x,y,z)=>{
									console.log('error :: '+z)
									}
							})
						}
					}) //click end
					
					},
				tagSearchPopup : x=>{
					'<div style="margin:10px;font-size:12px" class="badge badge-info">감성#푸짐한</div>'
					
					
					return '<div class="search-box rounded">'
					+'<div class="row">'
					+'<div class="col-md-3">'
						+'<img src="/web/resources/img/junghoon/j_tag.jpg" height="100%" width="100%" margin="5px auto"/>'
					+'</div>'
					
			
				+'</div>'
			+'<div class="mfp-container search-list rounded">'
				+'<table class="table" id="myTable">'             
					+'<tr>'
						+'<br/><br/>'
						+'<div id="j_title_under">재료</div>'
						+'<br/>'
						+'<div class="row j_btn-group" data-toggle="buttons" >'
							+'<div style="margin:10px;font-size:12px" class="btn btn-danger btn-rounded j_btn">'
								+'<input id="j_tag" class="j_scbox" type="checkbox" name="1" autocomplete="off"> 닭'
							+'</div>&nbsp;'
							+'<div class="btn btn-danger btn-rounded j_btn">'
								+'<input id="j_tag" class="j_scbox" type="checkbox" name="2" autocomplete="off"> 오리'
							+'</div>&nbsp;'
							+'<div class="btn btn-danger btn-rounded j_btn">'
								+'<input id="j_tag" class="j_scbox" type="checkbox" name="3" autocomplete="off"> 오징어'
							+'</div>&nbsp;'
							+'<div class="btn btn-danger btn-rounded  j_btn">'
								+'<input id="j_tag" class="j_scbox" type="checkbox"name="4" autocomplete="off"> 소고기'
							+'</div>&nbsp;'
							+'<div class="btn btn-danger btn-rounded j_btn">'
								+'<input id="j_tag" class="j_scbox" type="checkbox" name="5" autocomplete="off"> 버섯'
							+'</div>&nbsp;'
							+'<div class="btn btn-danger btn-rounded j_btn">'
								+'<input id="j_tag" class="j_scbox" type="checkbox"name="6" autocomplete="off"> 김치'
							+'</div>&nbsp;'
							+'<div class="btn btn-danger btn-rounded j_btn">'
								+'<input id="j_tag" class="j_scbox" type="checkbox" name="7"  autocomplete="off"> 계란'
							+'</div>&nbsp;'
							+'<div class="btn btn-danger btn-rounded j_btn">'
								+'<input id="j_tag" class="j_scbox" type="checkbox" name="8"  autocomplete="off"> 더덕'
							+'</div>&nbsp;'
							+'<div class="btn btn-danger btn-rounded j_btn">'
								+'<input id="j_tag" class="j_scbox" type="checkbox" name="9" autocomplete="off"> 새우'
							+'</div>&nbsp;'
							+'<div class="btn btn-danger btn-rounded j_btn">'
								+'<input id="j_tag" class="j_scbox" type="checkbox" name="10" autocomplete="off"> 고등어'
							+'</div>&nbsp;'
							+'<div class="btn btn-danger btn-rounded j_btn">'
								+'<input id="j_tag" class="j_scbox" type="checkbox" name="11" autocomplete="off"> 갈치'
							+'</div>&nbsp;'
							+'<div class="btn btn-danger btn-rounded j_btn">'
								+'<input id="j_tag" class="j_scbox" type="checkbox" name="12" autocomplete="off"> 문어'
							+'</div>&nbsp;'
							+'<div class="btn btn-danger btn-rounded j_btn">'
								+'<input id="j_tag" class="j_scbox" type="checkbox" name="13"  autocomplete="off"> 장어'
							+'</div>&nbsp;'
							+'<div class="btn btn-danger btn-rounded j_btn">'
								+'<input id="j_tag" class="j_scbox" type="checkbox" name="14"  autocomplete="off"> 감자'
							+'</div>&nbsp;'
							+'<div class="btn btn-danger btn-rounded j_btn">'
								+'<input id="j_tag" class="j_scbox" type="checkbox" name="15"  autocomplete="off"> 고구마'
							+'</div>&nbsp;'
							+'<div class="btn btn-danger btn-rounded j_btn">'
								+'<input id="j_tag" class="j_scbox" type="checkbox" name="16" autocomplete="off"> 어묵'
							+'</div>&nbsp;'
							+'<div class="btn btn-danger btn-rounded j_btn">'
								+'<input id="j_tag" class="j_scbox" type="checkbox" name="17"  autocomplete="off"> 소시지'
							+'</div>&nbsp;'
							+'<div class="btn btn-danger btn-rounded j_btn">'
								+'<input id="j_tag" class="j_scbox" type="checkbox" name="18"  autocomplete="off"> 돼지'
							+'</div>&nbsp;'
							+'<div class="btn btn-danger btn-rounded j_btn">'
								+'<input id="j_tag" class="j_scbox" type="checkbox" name="19"  autocomplete="off"> 치즈'
							+'</div>&nbsp;'							
						+'</div>'
					+'</tr>'
					+'<tr>'
						+'<br/><br/>'
						+'<div id="j_title_under">맛</div>'
						+'<br/>'
						+'<div class="row j_btn-group" data-toggle="buttons" >'
							+'<div  class="btn btn-danger btn-rounded j_btn">'
								+'<input id="j_tag" class="j_scbox" type="checkbox" name="20" autocomplete="off"> 고소'
							+'</div>'
							+'<div class="btn btn-danger btn-rounded j_btn">'
								+'<input id="j_tag" class="j_scbox" type="checkbox"name="21"  autocomplete="off"> 달달'
							+'</div>'
							+'<div class="btn btn-danger btn-rounded j_btn">'
								+'<input id="j_tag" class="j_scbox" type="checkbox" name="22" type="" autocomplete="off"> 잡짤'
							+'</div>'
							+'<div class="btn btn-danger btn-rounded  j_btn">'
								+'<input id="j_tag" class="j_scbox" type="checkbox" name="23" type="" autocomplete="off"> 달콤'
							+'</div>'
							+'<div class="btn btn-danger btn-rounded j_btn">'
								+'<input id="j_tag" class="j_scbox" type="checkbox" name="24"  type="" autocomplete="off"> 매콤'
							+'</div>'
							+'<div class="btn btn-danger btn-rounded j_btn">'
								+'<input id="j_tag" class="j_scbox" type="checkbox" name="25" type="" autocomplete="off"> 새콤'
							+'</div>'
							+'<div class="btn btn-danger btn-rounded j_btn">'
								+'<input id="j_tag" class="j_scbox" type="checkbox" name="26" type="" autocomplete="off"> 씁쓸'
							+'</div>'
							+'<div class="btn btn-danger btn-rounded j_btn">'
								+'<input id="j_tag" class="j_scbox" type="checkbox" name="27" type="" autocomplete="off"> 감칠맛'
							+'</div>'
							+'<div class="btn btn-danger btn-rounded j_btn">'
								+'<input id="j_tag" class="j_scbox" type="checkbox" name="28" type="" autocomplete="off"> 담백'
							+'</div>'
							+'<div class="btn btn-danger btn-rounded j_btn">'
								+'<input id="j_tag" class="j_scbox" type="checkbox" name="29" type="" autocomplete="off"> 느끼'
							+'</div>'
						+'</div>'
						+'<br/><br/>'
						+'<div id="j_title_under">감성</div>'
						+'<br/>'
						+'<div class="row j_btn-group" data-toggle="buttons" >'
							+'<div class="btn btn-danger btn-rounded j_btn">'
								+'<input id="j_tag" class="j_scbox" type="checkbox" name="33" type="" autocomplete="off"> 봄'
							+'</div>'
							+'<div class="btn btn-danger btn-rounded j_btn">'
								+'<input id="j_tag" class="j_scbox" type="checkbox" name="34" type="" autocomplete="off"> 여름'
							+'</div>'
							+'<div class="btn btn-danger btn-rounded j_btn">'
								+'<input id="j_tag" class="j_scbox" type="checkbox" name="35" type="" autocomplete="off"> 가을'
							+'</div>'
							+'<div class="btn btn-danger btn-rounded j_btn">'
								+'<input id="j_tag" class="j_scbox" type="checkbox" name="36" type="" autocomplete="off"> 겨울'
							+'</div>'
							+'<div class="btn btn-danger btn-rounded j_btn">'
								+'<input id="j_tag" class="j_scbox" type="checkbox" name="30" type="" autocomplete="off"> 빨간'
							+'</div>'
							+'<div class="btn btn-danger btn-rounded j_btn">'
								+'<input id="j_tag" class="j_scbox" type="checkbox" name="31" type="" autocomplete="off"> 얼큰한'
							+'</div>'
							+'<div class="btn btn-danger btn-rounded j_btn">'
								+'<input id="j_tag" class="j_scbox" type="checkbox" name="32" type="" autocomplete="off"> 얼얼한'
							+'</div>'
							+'<div class="btn btn-danger btn-rounded j_btn">'
								+'<input id="j_tag" class="j_scbox" type="checkbox" name="37" type="" autocomplete="off"> 둘이서'
							+'</div>'
							+'<div class="btn btn-danger btn-rounded j_btn">'
								+'<input id="j_tag" class="j_scbox" type="checkbox" name="38" type="" autocomplete="off"> 엄마가 해준'
							+'</div>'
							+'<div class="btn btn-danger btn-rounded j_btn">'
								+'<input id="j_tag" class="j_scbox" type="checkbox" name="39" type="" autocomplete="off"> 건강한'
							+'</div>'
							+'<div class="btn btn-danger btn-rounded j_btn">'
								+'<input id="j_tag" class="j_scbox" type="checkbox" name="40" type="" autocomplete="off"> 야식'
							+'</div>'
							+'<div class="btn btn-danger btn-rounded j_btn">'
								+'<input id="j_tag" class="j_scbox" type="checkbox" name="41" type="" autocomplete="off"> 아침'
							+'</div>'
							+'<div class="btn btn-danger btn-rounded j_btn">'
								+'<input id="j_tag" class="j_scbox" type="checkbox" name="42" type="" autocomplete="off"> 점심'
							+'</div>'
							+'<div class="btn btn-danger btn-rounded j_btn">'
								+'<input id="j_tag" class="j_scbox" type="checkbox" name="43" type="" autocomplete="off"> 저녁'
							+'</div>'
							+'<div class="btn btn-danger btn-rounded j_btn">'
								+'<input id="j_tag" class="j_scbox" type="checkbox" name="44" type="" autocomplete="off"> 말랑한'
							+'</div>'
							+'<div class="btn btn-danger btn-rounded j_btn">'
								+'<input id="j_tag" class="j_scbox" type="checkbox" name="45" type="" autocomplete="off"> 야들한'
							+'</div>'
							+'<div class="btn btn-danger btn-rounded j_btn">'
								+'<input id="j_tag" class="j_scbox" type="checkbox" name="46" type="" autocomplete="off"> 부드러운'
							+'</div>'
							+'<div class="btn btn-danger btn-rounded j_btn">'
								+'<input id="j_tag" class="j_scbox" type="checkbox" name="47" type="" autocomplete="off"> 말캉한'
							+'</div>'
							+'<div class="btn btn-danger btn-rounded j_btn">'
								+'<input id="j_tag" class="j_scbox" type="checkbox" name="48" type="" autocomplete="off"> 샤르르'
							+'</div>'
							+'<div class="btn btn-danger btn-rounded j_btn">'
								+'<input id="j_tag" class="j_scbox" type="checkbox" name="49" type="" autocomplete="off"> 찐한'
							+'</div>'
							+'<div class="btn btn-danger btn-rounded j_btn">'
								+'<input id="j_tag" class="j_scbox" type="checkbox" name="50" type="" autocomplete="off"> 힐링'
							+'</div>'
							+'<div class="btn btn-danger btn-rounded j_btn">'
								+'<input id="j_tag" class="j_scbox" type="checkbox" name="51" type="" autocomplete="off"> 알콜'
							+'</div>'
							+'<div class="btn btn-danger btn-rounded j_btn">'
								+'<input id="j_tag" class="j_scbox" type="checkbox" name="52" type="" autocomplete="off"> 맥주'
							+'</div>'
							+'<div class="btn btn-danger btn-rounded j_btn">'
								+'<input id="j_tag" class="j_scbox" type="checkbox" name="53" type="" autocomplete="off"> 푸짐한'
							+'</div>'
						+'</div>'
						+'<br/><br/>'
					+'</tr>'
					+'<tr>'
						+'<br/><br/>'
					+'</tr>'
				+'                  <div class="slidecontainer">'
				+'		<p>가격 : <span id="sliderValue"></span></p>'
				+'  <input type="range" max="10000" min="0" value:"5000" min="1"  class="slider" id="myRange">'
				+'  <div class="row">'
				+'  <button class="ss_btn">선택초기화</button>'
				+'  <button id="search_submit" class="ss_btn">검색</button>'
				
				+'    </div>'
				+'		</div>'
			    +'                </table>'       
				+''	
				
				+'            </div>'
				;
				},
				mypage : x => {
					$('header').remove();
			alert('mp');
			$.getScript($.script()+'/ui/j_mbrupdate.js', ()=>{
				
				let t = $.cookie('member');
				$.getJSON($.ctx()+'/mbr/detail/'+t.memberId, d=>{
						$('#content').empty().html(modifyUI(d))
						
						$('#delete_submit_btn').click(e=>{
						alert('삭제클릭');
						
						alert('삭제쿼리에 보내기 위한 아이디값 :: '+$('#memberId').val());
						$.ajax({
							url : $.ctx()+'/mbr/remove',
							method :'post',
							contentType:'application/json',
							data:JSON.stringify({
								 memberId :$('#memberId').val()
							}),
							success:d=>{
								alert('success');
								$.removeCookie('member');
								bemeal.router.main();
							},
							error:(x,y,z)=>{
								console.log('error:: '+z)
							}
						})
					}),
					
					$('#modify_submit_btn').click(e=>{
						alert('수정클릭');
						
						alert(" 넘어온 아이디  :: "+$('#memberId').val()+'\n'+
							  "넘어온 비밀번호 :: "+$('#password').val()+'\n'+
							  "넘어온 주소       :: "+$('#address').val()+'\n'+
							  "넘어온 메일주소 :: "+$('#email').val()+'\n'+
							  "넘어온 전화번호 :: "+$('#phoneNum').val());
						
						$.ajax({
							url : $.ctx()+'/mbr/modify',
							method :'post',
							contentType:'application/json',
							data:JSON.stringify({
								password:$('#password').val(),
								address:$('#address').val(),
								email:$('#email').val(),
								phoneNum:$('#phoneNum').val(),
								memberId:$('#memberId').val()
							}),
								
								success:d=>{                                      
								alert('success  숫자는  '+ d );
								
								$.getJSON($.ctx()+'/mbr/detail/'+$('#memberId').val(),d=>{
									
									alert('겟제이슨 success  버뀐 이메일은   '+ d.email );
									alert("바뀐 비밀번호는 :: "+d.password);
									alert("바뀐 주소는 :: "+d.addrrss);
									alert("바뀐 전화번호는:: "+d.phoneNum);
								
									$('#content').empty().html(modifyUI(d))
									//
								});
								
								},
								error:(x,y,z)=>{
									console.log('error :: '+z)
									}
								})
						
						})
						});
				
					
					

				});
	}
}