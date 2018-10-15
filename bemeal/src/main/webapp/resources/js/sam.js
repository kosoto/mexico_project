var sam = sam || {}
sam.util = {
		popup : e=>{
			let ctn = $('#content');
			ctn.empty();
			$('<button id="test">모달 테스트 버튼</button>')
			.appendTo(ctn)
			.click(e=>{
					$.magnificPopup.open({
						closeBtnInside:true,
						closeOnContentClick:false,
						alignTop: true,
						fixedBgPos:true,
						fixedContentPos:false,
						items:{src:
							'<form class="white-popup">'
							+	'<div class="form-group">'
							+       '<label for="text">Access Code:</label>'
					    	+		'<input type="text" class="form-control" id="code">'
				    		+	'</div>'
						    +   '<div class="form-group">'
							+		'<label for="pwd">Password:</label>'
							+		'<input type="password" class="form-control" id="pass">'
						    +   '</div>'
						    +	'<button type="submit" class="btn btn-default">Submit</button>'
							+'</form>'
						},
						midClick:true,
						overflowY:'auto',
						removalDelay:'0',
						type:'inline'}); 
					$('.btn').on('click',function(){
						alert($('#code').val());
					});
					return false;
			});
		}
};
