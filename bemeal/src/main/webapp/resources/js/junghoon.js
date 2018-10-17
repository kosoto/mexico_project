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