"use strict"
var yoonho = yoonho || {};
		
yoonho.service=(()=>{
	var list =x=>{
			$.magnificPopup.open({
				closeBtnInside:true,
				closeOnContentClick:false,
				alignTop: false,
				fixedBgPos: true,
				fixedContentPos:false,
				items:{src:
					yoonho.service.popup()
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
	var retrieve = x=>{
		$.getScript($.script()+'/ui/y_item_detail_modal.js',()=>{
			$.magnificPopup.open({
				closeBtnInside:true,
				closeOnContentClick:false,
				alignTop: false,
				fixedBgPos: true,
				fixedContentPos:false,
				items:{src:
					y_item_detail_modalUI()
					/*yoonho.service.popup()*/
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

		});
	};
	var popup =x=>{
		let $div = $('<div/>')
		let $span = $('<span/>')
		let $p = $('<p/>')
		
		let $div1 = $('<div/>').attr({id:'y_item_detailUI'}).addClass('yh-mfp-wrap yh-white-popup');// white-popup .attr({id:'y_item_detailUI'})
		let $div2 = $('<div/>').addClass('col-sm-12 yh-mfp-container detail-main text-center').appendTo($div1);//
		let $div3 = $('<div/>').addClass('col-sm-8 mgt50-mgba yh-mfp-content text-left').appendTo($div2);//
		let $div4 = $('<div/>').addClass('mg0a').appendTo($div3);
		let $div5 = $('<div/>').addClass('col-lg-12')
					.append($('<span/>').addClass('col-lg-5 text-center mgt70')
							.append($('<img src="/web/resources/img/yoonho/maehwa_chicken.jpg"/>').addClass('img-rounded y_img_popup')))//.appendTo($div4)
					.append($('<span/>').addClass('col-lg-6 mgt50')
							.append($('<div/>').addClass('col-lg-8 mgt50-mgb100')
									.append($('<h2/>').html('dropdown & carosel'))
											.append($('<div/>').addClass('dropdown')		
													.append($('<button onclick="myFunction()"/>').addClass('dropbtn').html('같은 종류의 도시락'))
													.append($('<div/>').attr({id:'myDropdown'}).addClass('dropdown-content')
															.append($('<a href="#home"/>').html('같은 종류의 도시락'))
															.append($('<a href="#about"/>').html('20대가 많이 산 도시락'))
															.append($('<a href="#about"/>').html('이달의 도시락'))
									))
							))
							.appendTo($div4)
		let $div4_1 = $('<div/>').addClass('col-lg-8 mgt50-mgb100').html('<h4>2개의 댓글이 작성되었습니다.</h4>').appendTo($div3);
		let $div5_1 = $('<div/>').addClass('single_comment_area').appendTo($div4_1);
		let $span6_1 = $('<span/>').addClass('col-lg-8')//y_img_popup_div
						.append( 
								$('<img src="/web/resources/img/yoonho/img_avatar1.png"/>')
								.addClass('img-circle y_img_popup_pr')
								)
								.appendTo($div5_1);
		return $div1;
	};
	return {
		list:list,
		retrieve:retrieve,
		popup:popup
	};
})();



