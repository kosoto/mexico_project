function loginUI(){
	
	return $('<form/>').attr({id:'login_form'}).addClass('login_form text-center').append(
				$('<p/>').addClass('h4 mb-4').append(
					$('<img/>').attr({src:$.img()+"/cmm/logo.png"})
				),
				$('<input/>').addClass('form-control mb-4').attr({id:'memberId',type:'text',placeholder:'아이디',style:'width:100%;'}),
				$('<input/>').addClass('form-control mb-4').attr({id:'password',type:'password',placeholder:'비밀번호',style:'width:100%;'}),
				$('<div/>').addClass('d-flex justify-content-around').append(
					$('<div/>').append(
						$('<div/>').addClass('custom-control custom-checkbox').append(
							$('<input/>').addClass('custom-control-input').attr({id:'loginRemember',type:'checkbox'}),
							$('<label/>').addClass('custom-control-label').attr({'for':'defaultLoginFormRemember'}).text('아이디 저장')
						)
					),
					$('<a/>').attr({href:'#'}).text('비밀번호 찾기')
				),
				$('<button/>').addClass('btn btn-warning btn-block my-4').attr({id:'login_submit_btn',type:'button'}).text('로그인'),
				$('<p/>').text('계정이 없으신가요?').append(
					$('<a/>').attr({id:'login_to_join',href:'#'}).text('회원가입')
				),
				$('<p/>').text('다른 방법으로 로그인하기'),
				$('<a/>').addClass('light-blue-text mx-2').attr({type:'button'}).append(
					$('<i/>').addClass('fa fa-facebook')
				)
		   );
}
