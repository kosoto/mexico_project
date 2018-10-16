"use strict"
var yoonho = yoonho || {};
		
yoonho.service=(()=>{
	var list =x=>{
		alert('여기에 list넣자!')
		$.getScript("/web/resources/js/ui/y_item_detail_modal.js",()=>{
			$.magnificPopup.open({
				closeBtnInside:true,
				closeOnContentClick:false,
				alignTop: false,
				fixedBgPos: true,
				fixedContentPos:false,
				items:{src:
					y_item_detail_modalUI()
				},
				midClick:true,
				overflowY:'auto',
				removalDelay:'0',
				type:'inline'
				}); 
			$('.btn').on('click',function(){
				alert($('#code').val());
			});
		
				
		})
		return false;
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
		let $carousel = $('<div/>').attr({id:'yhkTest','data-ride':'carousel'}).addClass('carousel slide y text-center')
						.append(
							$('<ol/>').addClass('carousel-indicators')
							.append($('<li/>').addClass('active').attr({'data-target':'#carouselExampleIndicators','data-slide-to':'0'}))
							.append($('<li/>').attr({'data-target':'#carouselExampleIndicators','data-slide-to':'1'}))
							.append($('<li/>').attr({'data-target':'#carouselExampleIndicators','data-slide-to':'2'}))
						)
						.append(
							$('<div/>').addClass('carousel-inner')
							.append($('<div/>').addClass('carousel-item active').append($('<img/>').attr({src:'/web/resources/img/yoonho/cubestake_piliph.jpg','alt':'First slide'}).addClass('carousel-img y')))
							.append($('<div/>').addClass('carousel-item').append($('<img/>').attr({src:'/web/resources/img/yoonho/donchi.jpg','alt':'Second slide'}).addClass('carousel-img y')))
							.append($('<div/>').addClass('carousel-item').append($('<img/>').attr({src:'/web/resources/img/yoonho/maehwa_chicken.jpg','alt':'Third slide'}).addClass('carousel-img y')))
						)
						.append(
							$('<a/>').addClass('carousel-control-prev').attr({href:'#yhkTest','role':'button','data-slide':'prev'})
							.append($('<span/>').addClass('carousel-control-prev-icon').attr({'aria-hidden':'true'}))
							.append($('<span/>').addClass('sr-only').html('prev'))
						)
						.append(
							$('<a/>').addClass('carousel-control-next').attr({href:'#yhkTest','role':'button','data-slide':'next'})
							.append($('<span/>').addClass('carousel-control-next-icon').attr({'aria-hidden':'true'}))
							.append($('<span/>').addClass('sr-only').html('next'))
						)
		
		let $div1 = $('<div/>').attr({id:'y_item_detailUI'}).addClass('yh-mfp-wrap yh-white-popup');// white-popup .attr({id:'y_item_detailUI'})
		let $div2 = $('<div/>').addClass('yh-mfp-container detail-main')
					.append($('<span/>').addClass('col-lg-5 text-center mgt70')
						.append($('<img src="/web/resources/img/yoonho/maehwa_chicken.jpg"/>').addClass('rounded y_img_popup')
								
						))
						.append($('<span/>').addClass('col-lg-6 mgt50')
										.append($('<div/>').addClass('col-lg-6 mgt50-mgb100')
											.append($('<h2/>').html('dropdown & carosel'))
												.append($('<div aria-haspopup="true" aria-expanded="false"/>').addClass('btn-group yh').attr({type:'button'}) 
													.append($('<button data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"/>').attr({type:'button'}).addClass('btn btn-warning dropdown-toggle').html('도시락 카테고리'))
													.append($('<div/>').addClass('dropdown-menu')
															.append($('<a/>').addClass('dropdown-item').attr({href:'#'}).html('같은 종류의 도시락'))
															.append($('<a/>').addClass('dropdown-item').attr({href:'#'}).html('20대가 많이 산 도시락'))
															.append($('<a/>').addClass('dropdown-item').attr({href:'#'}).html('이달의 도시락'))
														)
													
												)
											))//span end
											.append($('<div/>')
												.html($carousel))
						.append($('<button/>').html('장바구니').addClass('btn btn-warning mgt10-mgb10 mgr10-mgr10'))
						.append($('<button/>').html('맛있어요').addClass('btn btn-warning mgt10-mgb10 mgr10-mgr10'))
					
		.appendTo($div1);// detail-main col-lg-12
		let $div3 = $('<div/>').addClass('mgt50-mgba text-left')//<p style="font-size:20px">
						
						.appendTo($div2);
		let $div4 = $('<div/>').addClass('mg0a').appendTo($div3);
		let $div5 = $('<div/>').addClass('col-lg-6')
					
							.appendTo($div4)
		let $div4_1 = $('<div/>').addClass('col-lg-8 mgt50-mgb100').html('<h4>2개의 댓글이 작성되었습니다.</h4>').appendTo($div3);
		let $div5_1 = $('<div/>').addClass('single_comment_area').appendTo($div4_1);
		let $span6_1 = $('<div/>').addClass('col-lg-8 mgt50-mgb50')// y_img_popup_div
						.append( 
							$('<img src="/web/resources/img/yoonho/img_avatar1.png"/>')
							.addClass('rounded-circle y_img_popup_pr')
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

		let $span6_2 = $('<div/>').addClass('col-lg-8 mgt50-mgb50')// y_img_popup_div
						.append( 
							$('<img src="/web/resources/img/yoonho/img_avatar3.png"/>')
							.addClass('rounded-circle y_img_popup_pr')
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
						
			let $div4_3 = $('<div/>').appendTo($div3);
			let $div5_3 = $('<div/>').addClass('col-lg-8 mgt50-mgb100').append('<h3>Comment</h3>').appendTo($div4_3);
			let $form6_3 = $('<form action="#" method="post"/>').appendTo($div5_3);
			let $div7_3 = $('<div/>')
			.append('<textarea textarea class="comment-testbox" name="message" id="message" cols="30" rows="10" placeholder="댓글을 입력하세요">')
			.append($('<a/>').addClass('btn btn-warning').html('submit'))
			.addClass('comment-testbox').appendTo($form6_3);
			
			let $div2_4 = $('<div/>').addClass('col-sm-5 mg0-pd0 detail-right yh-mfp-navi').appendTo($div1);
			let $div3_4 = $('<div/>').addClass('container-fluid').appendTo($div2_4);
			let $div4_4 = $('<div/>').addClass('row').appendTo($div3_4);
			let $div5_4 = $('<div/>').addClass('col-lg-12 y_bg_popup_gr')
							.append($('<h2/>').addClass('text-center').html('매화 (치킨, 연어구이)'))
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
			
			let $tbl6_5 = $('<div/>').addClass('row').appendTo($div5_5)
			let $tbody7_5 = $('<div/>').html('업체').addClass('col-sm text-left mgt10-mgb10').appendTo($tbl6_5)
			let $tbody7_5_1 = $('<div/>').html('오봉도시락').addClass('col-sm  mgt10-mgb10').appendTo($tbl6_5)
			
			let $tbl6_6 = $('<div/>').addClass('row').appendTo($div5_5)
			let $tbody7_6 = $('<div/>').html('칼로리').addClass('col-sm text-left mgt10-mgb10').appendTo($tbl6_6)
			let $tbody7_6_1 = $('<div/>').html('405.5Kcal').addClass('col-sm  mgt10-mgb10').appendTo($tbl6_6)
			
			let $tbl6_7 = $('<div/>').addClass('row').appendTo($div5_5)
			let $tbody7_7 = $('<div/>').html('가격').addClass('col-sm text-left mgt10-mgb10').appendTo($tbl6_7)
			let $tbody7_7_1 = $('<div/>').html('10,000원').addClass('col-sm  mgt10-mgb10').appendTo($tbl6_7)
			
			let $tbl6_8 = $('<div/>').addClass('col text-left').append($('<div/>').html('알러지정보').addClass('row mgt10-mgb10')).appendTo($div5_5)
			let $tbody7_8 = $('<div/>').addClass('row').appendTo($tbl6_8)
			let $tbody7_8_1 = $('<div/>').append($('<img src="/web/resources/img/yoonho/allergy1.png">').addClass('rounded y_img_popup_alg')).appendTo($tbody7_8 )
			let $tbody7_8_2 = $('<div/>').append($('<img src="/web/resources/img/yoonho/allergy2.png">').addClass('rounded y_img_popup_alg')).appendTo($tbody7_8 )
			let $tbody7_8_3 = $('<div/>').append($('<img src="/web/resources/img/yoonho/allergy3.png">').addClass('rounded y_img_popup_alg')).appendTo($tbody7_8 )
			
			let $tbl6_9 = $('<div/>').addClass('row').appendTo($div5_5)
			let $tbody7_9 = $('<div/>').html('[베스트 & 스테디셀러 SINCE 2007] 12가지 다양한 반찬으로 구성된 프리미엄 도시락입니다. 푸짐한 반찬과 함께 촉촉하고 부드러운 연어구이와 치킨이 구성되어 있어 부족하지 않고 든든하게 드실 수 있는 도시락 입니다. 생수와 조미 김이 함께 제공 됩니다.').addClass('col-sm text-left mgt10-mgb10').appendTo($tbl6_9)
			/* */				
			
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