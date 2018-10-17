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

junghoon.service = {
		
	/*	practice : x => {
			alert('안녕');
			$('content').empty();
			$.getScript($.script()+'/compo.js' , ()=>{
				$(<'div/'>).attr({id:"login_form"});	
			});
		
			},*/
		
		search : x => {
			alert('st');
			$.getScript($.script()+'/ui/search.js', ()=>{
				$('header').remove();
				$('#content').empty().html(searchUI())
					$('#tag2search').click(e=>{
						alert('hello');
						junghoon.service.search2();
					})
			})

		},
		search2 : x => {
			alert('st2');
			$.getScript($.script()+'/ui/search2.js', ()=>{
				$('#content').empty().html(search2UI())
					$('#search2tag').click(e=>{
						alert('hello');
						junghoon.service.search();
					})
					$('#clickTheSearchBox').focus(e=>{
						
					})
					$('#clickTheSearchBox').blur(e=>{
						
					})
					$('#popular_searches').click(e=>{
						alert('인기검색어 클릭');
						$('#popular_search_time').html(
								+'                <ul id="popular_search_time">'
								+'                    <li>1위 GS도시락</li>'
								+'                    <li>2위 치킨도시락</li>'
								+'                    <li>3위 한솥도시락</li>'
								+'                    <li>4위 라면</li>'
								+'                    <li>5위 양념치킨</li>'
								+'                </ul>'
								+''
								+'    </div>'
								);
					})
					$('#myage_popular').click(e=>{
						alert('내 연령대 정보 클릭');
						$('#popular_search_time').html(
								+'                <ul id="popular_search_age">'
								+'                    <li>1위 로그인 한</li>'
								+'                    <li>2위 내 정보의</li>'
								+'                    <li>3위 연령대가</li>'
								+'                    <li>4위 관심있는</li>'
								+'                    <li>5위 검색어</li>'
								+'                </ul>'
								+''
								+'    </div>'
						);
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