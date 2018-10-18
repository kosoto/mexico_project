"use strict"
var junghoon = junghoon || {};

junghoon.board = (()=>{
	var comment =x=>{
		// 코멘트 화면짜기
	};
	return{comment:comment};
})();
junghoon.member = {
		add : () => {
			$.getScript($.script()+'/ui/j_add.js', ()=>{
				$('header').remove();
				$('#content').empty().append(
					$('<div/>').addClass('add').html(addUI())
				);
				$('#join_submit_btn').click(e=>{
					alert('join_submit_btn');
				});
				$('#join_to_login').click(e=>{
					alert('안녕 안녕 안녕로봇');	
					junghoon.member.login();
				})
			})
		},
		login : () => {
			$.getScript($.script()+'/ui/j_login.js', ()=>{
				$('header').remove();
				$('#content').empty().append(
					$(loginUI())
				);
				$('#login_to_join').click(e=>{
						alert('잘가 잘가 잘가로봇');
						junghoon.member.add();
					});
					$('#login_submit_btn').click(e=>{
					alert('aa');
					$('#info').empty();
					$('<li/>').append($('<a/>').attr({id:"login_form", href:"#"}).html('마이페이지')).appendTo($('#info'))
					.click(e=>{
						junghoon.service.mypage();
					});
					$('<li/>').append($('<a/>').attr({href:"#"}).html('로그아웃')).appendTo($('#info'))
					.click(e=>{
						bemeal.main.init();
					});
					$('<li/>').append($('<a/>').attr({href:"#"}).html('댓글 테스트')).appendTo($('#info'))
					.click(e=>{
						junghoon.service.comment();
					});
					$('<li/>').append($('<a/>').attr({href:"#"}).html('검색 테스트')).appendTo($('#info'))
					.click(e=>{
						junghoon.service.search();
					});
				})
			});
		}
};
/*
junghoon.service2 = (()=>{
	
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
})*/
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
								/*+'				<button class="j_img" id="search2keyWord"><img src="/web/resources/img/junghoon/j_search.jpg" height="100%" width="100%"></button> '*/
								+'                    </div>'
								+'                    <div class="col-md-3">'
								/*+'					<img src="/web/resources/img/junghoon/j_tag.jpg" height="100%" width="100%" margin="5px auto"/>'*/
								+'					<img src="/web/resources/img/junghoon/j_search.jpg" id="tag2search" height="100%" width="100%" margin="5px auto"/>'
								+'                    </div>'
								+'            </div>'
								+'            <div class="search-list rounded">'
								                +''
								+'                <table class="table" id="myTable">'              
								+'                    <tr>'
								+'                      <br/><br/><div id="j_title_under">브랜드</div><br/>'
								+'<div class="j_btn-group" data-toggle="buttons" >'
								+'  <div  class="btn btn-danger btn-rounded j_btn">'
								+'    <input id="j_bbb" class="j_scbox" type="checkbox" autocomplete="off"> CU'
								+'  </div>&nbsp;'
								+'  <div class="btn btn-danger btn-rounded j_btn">'
								+'    <input id="j_bbb" class="j_scbox" type="checkbox" autocomplete="off"> GS25'
								+'  </div>&nbsp;'
								+'  <div class="btn btn-danger btn-rounded j_btn">'
								+'    <input id="j_bbb" class="j_scbox" type="checkbox" type="" autocomplete="off"> 한솥도시락'
								+'  </div>&nbsp;'
								+'  <div class="btn btn-danger btn-rounded  j_btn">'
								+'    <input id="j_bbb" class="j_scbox" type="checkbox" type="" autocomplete="off"> 본도시락'
								+'  </div>&nbsp;'
								+'  <div class="btn btn-danger btn-rounded j_btn">'
								+'    <input id="j_bbb" class="j_scbox" type="checkbox" type="" autocomplete="off"> 세븐일레븐'
								+'  </div>&nbsp;'
								+'</div>'
								+'                    </tr>'
								+'                    <tr>'
								+'                    <br/><br/><div id="j_title_under">재료&반찬</div><br/>'
								+'        <div class="j_btn-group" data-toggle="buttons" >'
								+'              <div  class="btn btn-danger btn-rounded j_btn">'
								+'                <input id="j_bbb" class="j_scbox" type="checkbox" autocomplete="off"> 닭'
								+'              </div>'
								+'              <div class="btn btn-danger btn-rounded j_btn">'
								+'                <input id="j_bbb" class="j_scbox" type="checkbox" autocomplete="off"> 오리'
								+'              </div>'
								+'              <div class="btn btn-danger btn-rounded j_btn">'
								+'                <input id="j_bbb" class="j_scbox" type="checkbox" type="" autocomplete="off"> 오징어'
								+'              </div>'
								+'              <div class="btn btn-danger btn-rounded  j_btn">'
								+'                <input id="j_bbb" class="j_scbox" type="checkbox" type="" autocomplete="off"> 소고기'
								+'              </div>'
								+'              <div class="btn btn-danger btn-rounded j_btn">'
								+'                <input id="j_bbb" class="j_scbox" type="checkbox" type="" autocomplete="off"> 버섯'
								+'              </div>'
								+'              <div class="btn btn-danger btn-rounded j_btn">'
								+'                <input id="j_bbb" class="j_scbox" type="checkbox" type="" autocomplete="off"> 김치'
								+'              </div>'
								+'              </div>'
								+'        <div class="j_btn-group" data-toggle="buttons" >'
								+'              <div class="btn btn-danger btn-rounded j_btn">'
								+'                <input id="j_bbb" class="j_scbox" type="checkbox" type="" autocomplete="off"> 계란'
								+'              </div></br>'
								+'              <div class="btn btn-danger btn-rounded j_btn">'
								+'                <input id="j_bbb" class="j_scbox" type="checkbox" type="" autocomplete="off"> 더덕'
								+'              </div>'
								+'              <div class="btn btn-danger btn-rounded j_btn">'
								+'                <input id="j_bbb" class="j_scbox" type="checkbox" type="" autocomplete="off"> 새우'
								+'              </div>'
								+'              <div class="btn btn-danger btn-rounded j_btn">'
								+'                <input id="j_bbb" class="j_scbox" type="checkbox" type="" autocomplete="off"> 고등어'
								+'              </div>'
								+'              <div class="btn btn-danger btn-rounded j_btn">'
								+'                <input id="j_bbb" class="j_scbox" type="checkbox" type="" autocomplete="off"> 갈치'
								+'              </div>'
								+'              <div class="btn btn-danger btn-rounded j_btn">'
								+'                <input id="j_bbb" class="j_scbox" type="checkbox" type="" autocomplete="off"> 문어'
								+'              </div>'
								+'              </div>'
								+'        <div class="j_btn-group" data-toggle="buttons" >'
								+'               <div class="btn btn-danger btn-rounded j_btn">'
								+'                <input id="j_bbb" class="j_scbox" type="checkbox" type="" autocomplete="off"> 장어'
								+'              </div>'
								+'               <div class="btn btn-danger btn-rounded j_btn">'
								+'                <input id="j_bbb" class="j_scbox" type="checkbox" type="" autocomplete="off"> 감자'
								+'              </div></br>'
								+'               <div class="btn btn-danger btn-rounded j_btn">'
								+'                <input id="j_bbb" class="j_scbox" type="checkbox" type="" autocomplete="off"> 고구마'
								+'              </div>'
								+'               <div class="btn btn-danger btn-rounded j_btn">'
								+'                <input id="j_bbb" class="j_scbox" type="checkbox" type="" autocomplete="off"> 어묵'
								+'              </div>'
								+'               <div class="btn btn-danger btn-rounded j_btn">'
								+'                <input id="j_bbb" class="j_scbox" type="checkbox" type="" autocomplete="off"> 소시지'
								+'              </div>'
								+'                <div class="btn btn-danger btn-rounded j_btn">'
								+'                <input id="j_bbb" class="j_scbox" type="checkbox" type="" autocomplete="off"> 돼지'
								+'              </div>'
								+'              </div>'
								+'        <div class="j_btn-group" data-toggle="buttons" >'
								+'              <div class="btn btn-danger btn-rounded j_btn">'
								+'                <input id="j_bbb" class="j_scbox" type="checkbox" type="" autocomplete="off"> 치즈'
								+'              </div>'
								+'              </div>'
								+'            </div><br/><br/>'
								+'                    </tr>'
								+'                    <tr>'
								+'                  <div id="j_title_under">취향</div><br/>'
								+'                  <div class="j_btn-group" data-toggle="buttons" >'
								+'              <div  class="btn btn-danger btn-rounded j_btn">'
								+'                <input id="j_bbb" class="j_scbox" type="checkbox" autocomplete="off"> 고소한맛'
								+'              </div>&nbsp;'
								+'              <div class="btn btn-danger btn-rounded j_btn">'
								+'                <input id="j_bbb" class="j_scbox" type="checkbox" autocomplete="off"> 단맛'
								+'              </div>&nbsp;'
								+'              <div class="btn btn-danger btn-rounded j_btn">'
								+'                <input id="j_bbb" class="j_scbox" type="checkbox" type="" autocomplete="off"> 짠맛'
								+'              </div>&nbsp;'
								+'              <div class="btn btn-danger btn-rounded  j_btn">'
								+'                <input id="j_bbb" class="j_scbox" type="checkbox" type="" autocomplete="off"> 달콤한맛'
								+'              </div>&nbsp;'
								+'              <div class="btn btn-danger btn-rounded j_btn">'
								+'                <input id="j_bbb" class="j_scbox" type="checkbox" type="" autocomplete="off"> 매운맛'
								+'              </div>&nbsp;'
								+'              <div class="btn btn-danger btn-rounded j_btn">'
								+'                <input id="j_bbb" class="j_scbox" type="checkbox" type="" autocomplete="off"> 신맛'
								+'              </div>&nbsp;'
								+'               </div>'


								+'                      <br/><br/>'
								+'                   </tr>'
								+'                  가격'
								+'                  <div class="slidecontainer1">'
								+'  <input type="range" min="1" max="100" value="50" class="slider" id="myRange">'
								+'<div class="row">'
								+'<button class="ss_btn">선택초기화</button>'
								+'<button class="ss_btn">검색</button>'
								+'    </div>'
								+'</div>'


								
								+'                </table>'       
								+''

								+'            </div>'
						),
						$('#tag2search').click(e=>{
							
							junghoon.service.search();
						})
					})
					
					},
				mypage : x => {
			alert('mp');
			$.getScript($.script()+'/ui/j_mbrupdate.js', ()=>{
					$('#content').empty().html(modifyUI())
				});
	},
		comment : x => {
			alert('cmt');
			$.getScript($.script()+'/ui/j_comment.js', ()=>{
				$('#content').html(commentUI());
				$('edit_comment').click(e=>{
					alert('edit_comment1');
				});
				$('report_comment').click(e=>{
					alert('report_comment1');
				});
				$('respect_comment').click(e=>{
					alert('respect_comment1');
				});
				$('submit_comment').click(e=>{
					alert('submit_comment1');
				});
			})
			$('edit_comment').click(e=>{
				alert('edit_comment');
			});
			$('report_comment').click(e=>{
				alert('report_comment');
			});
			$('respect_comment').click(e=>{
				alert('respect_comment');
			});
			$('submit_comment').click(e=>{
				alert('submit_comment');
			});
		}
		
}