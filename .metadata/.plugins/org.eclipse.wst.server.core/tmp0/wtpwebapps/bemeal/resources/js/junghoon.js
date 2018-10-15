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
					})
				$('#login_submit_btn').click(e=>{
					alert('aa');
					$('#info').html(
							'<li><a href="#" id="logout">로그아웃</a></li>'
							+'<li><a href="#" id="mypage">마이페이지</a></li>'
							+'<li><a href="#" id="comment">코멘트 테스트 페이지</a></li>'
					); 
					$('#logout').click(e=>{
					bemeal.main.init();
					});
					$('#mypage').click(e=>{
					alert('마이페이지 클릭');
						junghoon.service.mypage();
					});
					$('#comment').click(e=>{
						alert('코멘트 테스트 페이지');
							junghoon.service.comment();
						});
				})
			});
		}
};

junghoon.service = {
		
		mypage : x => {
			alert('mp');
			$.getScript($.script()+'/ui/j_mbrupdate.js', ()=>{
					$('#content').empty().html(modifyUI())
				})
	
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