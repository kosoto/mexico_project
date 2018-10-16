"use strict"
var yoonho = yoonho || {};
		
yoonho.service=(()=>{
	var list =x=>{
		
	};
	var retrieve = x=>{
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
	var popup =x=>{
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
									.append($('<button/>').addClass('dropbtn').html('같은 종류의 도시락').click(e=>{
										$('#myDropdown').classList.toggle("show");
										// Close the dropdown if the user clicks outside of it
										$('#myDropdown').click(e=>{
											if (!e.target.matches(".dropbtn")) {
												var dropdowns = document.getElementsByClassName("dropdown-content");
												var i;
												for (i = 0; i < dropdowns.length; i++) {
													var openDropdown = dropdowns[i];
													if (openDropdown.classList.contains("show")) {
														openDropdown.classList.remove("show");
													}
												}
											}	
										})
									})
									.append($('<div/>').attr({id:'myDropdown'}).addClass('dropdown-content')
											.append($('<a href="#home"/>').html('같은 종류의 도시락'))
											.append($('<a href="#about"/>').html('20대가 많이 산 도시락'))
											.append($('<a href="#about"/>').html('이달의 도시락'))
										))
									)
							))
							.appendTo($div4)
		let $div4_1 = $('<div/>').addClass('col-lg-8 mgt50-mgb100').html('<h4>2개의 댓글이 작성되었습니다.</h4>').appendTo($div3);
		let $div5_1 = $('<div/>').addClass('single_comment_area').appendTo($div4_1);
		let $span6_1 = $('<span/>').addClass('col-lg-8 mgt50-mgb50')// y_img_popup_div
						.append( 
							$('<img src="/web/resources/img/yoonho/img_avatar1.png"/>')
							.addClass('img-circle y_img_popup_pr')
							)
							.appendTo($div5_1);
		let $div6_1_1 = $('<div/>')
						.append($('<span/>').addClass('text-muted').html('27 Aug 2018'))
						.append($('<h5/>').html('바빠바빠너무바빠'))
						.append(
							$('<div/>')
							.append(
								$('<span/>').addClass('star-input')
								.append(
									$('<span/>').addClass('input')
									.append($('<input type="radio" name="star-input" id="p1" value="1"/>').append($('<label for="p1"/>').html('1')))
									.append($('<input type="radio" name="star-input" id="p2" value="2"/>').append($('<label for="p2"/>').html('2')))
									.append($('<input type="radio" name="star-input" id="p3" value="3"/>').append($('<label for="p3"/>').html('3')))
									.append($('<input type="radio" name="star-input" id="p4" value="4"/>').append($('<label for="p4"/>').html('4')))
									.append($('<input type="radio" name="star-input" id="p5" value="5"/>').append($('<label for="p5"/>').html('5')))
									.append($('<input type="radio" name="star-input" id="p6" value="6"/>').append($('<label for="p6"/>').html('6')))
									.append($('<input type="radio" name="star-input" id="p7" value="7"/>').append($('<label for="p7"/>').html('7')))
									.append($('<input type="radio" name="star-input" id="p8" value="8"/>').append($('<label for="p8"/>').html('8')))
									.append($('<input type="radio" name="star-input" id="p9" value="9"/>').append($('<label for="p9"/>').html('9')))
									.append($('<input type="radio" name="star-input" id="p10" value="10"/>').append($('<label for="p10"/>').html('10')))
									)
								.append(
									$('<output for="star-input"/>').html('<b>0</b>점')
									)
								)
							.append($('<p/>').html('바쁜 저녁 마라톤회의때 먹었는데 든든합니다. 강추!!'))
							.append($('<i role="button"/>').addClass('fa fa-thumbs-o-up'))
							.append($('<a/>').addClass('btn btn-warning').html('수정'))
							).appendTo($span6_1)

		let $span6_2 = $('<span/>').addClass('col-lg-8 mgt50-mgb50')// y_img_popup_div
						.append( 
							$('<img src="/web/resources/img/yoonho/img_avatar3.png"/>')
							.addClass('img-circle y_img_popup_pr')
							)
							.appendTo($div5_1);
		
		let $div6_2_1 = $('<div/>')
						.append($('<span/>').addClass('text-muted').html('27 Aug 2018'))
						.append($('<h5/>').html('맛짱'))
						.append(
							$('<div/>')
							.append(
								$('<span/>').addClass('star-input')
								.append(
									$('<span/>').addClass('input')
									.append($('<input type="radio" name="star-input" id="p1" value="1"/>').append($('<label for="p1"/>').html('1')))
									.append($('<input type="radio" name="star-input" id="p2" value="2"/>').append($('<label for="p2"/>').html('2')))
									.append($('<input type="radio" name="star-input" id="p3" value="3"/>').append($('<label for="p3"/>').html('3')))
									.append($('<input type="radio" name="star-input" id="p4" value="4"/>').append($('<label for="p4"/>').html('4')))
									.append($('<input type="radio" name="star-input" id="p5" value="5"/>').append($('<label for="p5"/>').html('5')))
									.append($('<input type="radio" name="star-input" id="p6" value="6"/>').append($('<label for="p6"/>').html('6')))
									.append($('<input type="radio" name="star-input" id="p7" value="7"/>').append($('<label for="p7"/>').html('7')))
									.append($('<input type="radio" name="star-input" id="p8" value="8"/>').append($('<label for="p8"/>').html('8')))
									.append($('<input type="radio" name="star-input" id="p9" value="9"/>').append($('<label for="p9"/>').html('9')))
									.append($('<input type="radio" name="star-input" id="p10" value="10"/>').append($('<label for="p10"/>').html('10')))
									)
								.append(
									$('<output for="star-input"/>').html('<b>0</b>점')
									)
								)
							.append($('<p/>').html('매화도시락 너무 비싸요 음식점에서 사먹는가격보다 비쌈..'))
							.append($('<i role="button"/>').addClass('fa fa-thumbs-o-up'))
							.append($('<a/>').addClass('btn btn-warning').html('신고'))
							).appendTo($span6_2)
						
			let $div4_3 = $('<div/>').addClass('col-lg-8 mgt50-mgb100').appendTo($div3);
			let $div5_3 = $('<div/>').append('<h3>Comment</h3>').appendTo($div4_3);
			let $form6_3 = $('<form action="#" method="post"/>').appendTo($div5_3);
			let $div7_3 = $('<div/>').append('<textarea textarea class="comment-testbox" name="message" id="message" cols="30" rows="10" placeholder="댓글을 입력하세요">').addClass('comment-testbox').appendTo($form6_3);
			
			let $div2_4 = $('<div/>').addClass('col-sm-5 mg0-pd0 detail-right mfp-navi').appendTo($div1);
			let $div3_4 = $('<div/>').addClass('container-fluid').appendTo($div2_4);
			let $div4_4 = $('<div/>').addClass('row').appendTo($div3_4);
			let $div5_4 = $('<div/>').addClass('col-lg-12 y_bg_popup_gr')
							.append($('<h1/>').addClass('text-center').html('매화 (치킨, 연어구이)'))
							.append($('<p/>').addClass('text-center').html('사각 도시락'))
							.appendTo($div4_4);
			let $span6_4 = $('<span/>').addClass('star-input')
			.append(
					$('<span/>').addClass('input')
					.append($('<input type="radio" name="star-input" id="p1" value="1"/>').append($('<label for="p1"/>').html('1')))
					.append($('<input type="radio" name="star-input" id="p2" value="2"/>').append($('<label for="p2"/>').html('2')))
					.append($('<input type="radio" name="star-input" id="p3" value="3"/>').append($('<label for="p3"/>').html('3')))
					.append($('<input type="radio" name="star-input" id="p4" value="4"/>').append($('<label for="p4"/>').html('4')))
					.append($('<input type="radio" name="star-input" id="p5" value="5"/>').append($('<label for="p5"/>').html('5')))
					.append($('<input type="radio" name="star-input" id="p6" value="6"/>').append($('<label for="p6"/>').html('6')))
					.append($('<input type="radio" name="star-input" id="p7" value="7"/>').append($('<label for="p7"/>').html('7')))
					.append($('<input type="radio" name="star-input" id="p8" value="8"/>').append($('<label for="p8"/>').html('8')))
					.append($('<input type="radio" name="star-input" id="p9" value="9"/>').append($('<label for="p9"/>').html('9')))
					.append($('<input type="radio" name="star-input" id="p10" value="10"/>').append($('<label for="p10"/>').html('10')))
					)
				.append(
					$('<output for="star-input"/>').html('<b>0</b>점')
					).appendTo($div5_4)
			let $p6_4_1 = $('<p/>').addClass('text-left').html('1520명이 평가했어요').appendTo($div5_4)
			let $p6_4_2 = $('<p role="button"/>').addClass('glyphicon glyphicon-thumbs-up').html('(743명)').appendTo($div5_4)
			
			let $div4_5 = $('<div/>').addClass('row').appendTo($div3_4)
			let $div5_5 = $('<div/>').addClass('col-lg-12 y_bg_popup_bg').appendTo($div4_5)
			let $tbl6_5 = $('<table/>').addClass('table').appendTo($div5_5)
			let $tbody7_5 = $('<tbody/>')
							.append(
								$('<tr/>')
									.append(
										$('<td/>').addClass('text-left')
										.append($('<h5/>').html('업체'))
									)
									.append(
										$('<td/>').addClass('text-right')
										.append($('<h5/>').html('오봉도시락'))
									)
								)
							.append(
								$('<tr/>')
									.append(
										$('<td/>').addClass('text-left')
										.append($('<h5/>').html('칼로리'))
									)
									.append(
										$('<td/>').addClass('text-right')
										.append($('<h5/>').html('405.5Kcal'))
									)
								)
							.append(
								$('<tr/>')
									.append(
										$('<td/>').addClass('text-left')
										.append($('<h5/>').html('가  격'))
									)
									.append(
										$('<td/>').addClass('text-right')
										.append($('<h5/>').html('10,000 원'))
									)
								)
							.append(
								$('<tr/>')
									.append(
										$('<td/>').addClass('text-left')
										.append($('<h5/>').html('알러지정보'))
									)
								)
							.append(
								$('<tr/>')
									.append(
										$('<td/>').addClass('text-left')
										.append($('<img src="/web/resources/img/yoonho/maehwa_chicken.jpg"/>').addClass('img-rounded y_img_popup_alg'))
									)
									.append(
										$('<td/>').addClass('text-left')
										.append($('<p role="button"/>').addClass('text-right').html('#고소'))
										.append($('<p role="button"/>').addClass('text-right').html('#달콤'))
									)
								)
							.append(
								$('<p/>').addClass('text-left').html('베스트 & 스테디셀러 SINCE 2007] 12가지 다양한 반찬으로 구성된 프리미엄 도시락입니다. 푸짐한 반찬과 함께 촉촉하고 부드러운 연어구이와 치킨이 구성되어 있어 부족하지 않고 든든하게 드실 수 있는 도시락 입니다. 생수와 조미 김이 함께 제공 됩니다.')	
								)
							.appendTo($tbl6_5)
							
			
		return $div1;
	};
	



	//When the user clicks on the button, Star is rated
	var starRating =()=>{
		var $star = $(".star-input"),
			$result = $star.find("output>b");
		$(document)
		.on("focusin", ".star-input>.input", ()=>{
			$(this).addClass("focus");
		})
		.on("focusout", ".star-input>.input", ()=>{
			var $this = $(this);
			setTimeout(()=>{
				if($this.find(":focus").length === 0){
					$this.removeClass("focus");
				}
			}, 100);
		})
		.on("change", ".star-input :radio", ()=>{
			$result.text($(this).next().text());
		})
		.on("mouseover", ".star-input label", ()=>{
			$result.text($(this).text());
		})
		.on("mouseleave", ".star-input>.input", ()=>{
			var $checked = $star.find(":checked");
			if($checked.length === 0){
				$result.text("0");
			} else {
				$result.text($checked.next().text());
			}
		});
	};
	starRating();
	
	return {
		list:list,
		retrieve:retrieve,
		popup:popup
	};
	
	
})();






