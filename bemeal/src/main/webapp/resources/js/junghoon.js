"use strict"
var junghoon = junghoon || {};

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
					let id = $('#memberId').val();
					if(id!='' && id!=null){
						$.getJSON($.ctx()+'/mbr/idck/'+id,d=>{
							alert((d=="0")?"중복된 아이디입니다":'사용할 수 있는 아이디입니다')
						});
					}else alert('아이디를 입력해주세요');
					
				});
				$('#join_submit_btn').click(e=>{
					//validation
					let id = $('#memberId').val();
					let pw = $('#password').val();
					let name = $('#name').val();
					let ssn = $('#ssn').val();
					let addr = $('#address').val();
					let email = $('#eMail').val();
					let phone = $('#phoneNum').val();
					
					if(id===''){alert('아이디를 입력하세요'); return;}
					if(pw===''){alert('비밀번호를 입력하세요');return;}
					if(name===''){alert('이름을 입력하세요');return;}
					if(ssn===''){alert('주민번호를 입력하세요');return;}
					if(addr===''){alert('주소를 입력하세요');return;}
					if(email===''){alert('이메일을 입력하세요');return;}
					if(phone===''){alert('전화번호를 입력하세요');return;}

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
							if(d!=0) junghoon.member.login();	
							else alert('회원가입에 실패했습니다.');
						},
						error:(x,y)=>{}
					});//ajax end
				}); //join_submit_btn end
			})// getscript end
		}) // getscript end
	}; // add end
	var login =x=>{
		$('header').remove();
		$('#content').empty().append(
			$('<form/>').attr({id:'login_form'}).addClass('login_form text-center').append(
				$('<p/>').addClass('h4 mb-4').append(
					$('<img/>').attr({src:$.img()+"/cmm/logo.png"})
				),
				$('<input/>').addClass('form-control mb-4').attr({id:'memberId',type:'text',placeholder:'test1',value:'test1',style:'width:100%;'}),
				$('<input/>').addClass('form-control mb-4').attr({id:'password',type:'password',placeholder:'1',value:'1',style:'width:100%;'}),
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
								$.cookie('member',d);
								bemeal.router.main();
							},
							error:(e1,e2,e3)=>{
								
							}
						});
					}
				});
			},
			fail: function(err) {

			}
		});
		
		$('#login_to_join').click(e=>{
			junghoon.member.add();
		});
		
		$('#login_submit_btn').click(e=>{
			let memberId = $('#memberId').val();
			let password = $('#password').val();
			if(memberId==='') alert('아이디를 입력하세요');
			else if(password==='') alert('비밀번호를 입력하세요');
			else{
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
				}); //ajax end
			}
		}); //login_submit_btn end
	};
	return {login:login,
		   add:add};
})();

junghoon.service = {
	mypage : () => {
		$('header').remove();
		$.getScript($.script()+'/ui/j_mbrupdate.js', ()=>{
			let t = $.cookie('member');
			$.getJSON($.ctx()+'/mbr/detail/'+t.memberId, d=>{
				$('#content').html(modifyUI(d))
				$('#delete_submit_btn').click(e=>{
					$.ajax({
						url : $.ctx()+'/mbr/remove',
						method :'post',
						contentType:'application/json',
						data:JSON.stringify({
							memberId :$('#memberId').val()
						}),
						success:d=>{
							$.removeCookie('member');
							bemeal.router.main();
						},
						error:(x,y,z)=>{
							console.log('error:: '+z)
						}
					}); //ajax end
				}); //delete_submit_btn end

				$('#modify_submit_btn').click(e=>{												
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
							$.getJSON($.ctx()+'/mbr/detail/'+$('#memberId').val(),data=>{
								junghoon.service.mypage();
							});
						},
						error:(x,y,z)=>{
							console.log('error :: '+z)
						}
					});
				});												
			}); //JSON end
		}); //getscript end
	} //mypage end
};