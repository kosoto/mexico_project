"use strict"
var yoonho = yoonho || {};
		
yoonho.service=(()=>{
	var list =x=>{
 		$('header').remove();
		$('#content').empty();
		let $res;
		let $list=$('<div/>');
		let titleList=['가장 평점이 높은','20대 구매율이 높은','신제품','베스트셀러','당신이 좋아할 만한 제품(login시?)/ 추천제품']
		$.getJSON($.ctx()+'/item/list/first',d=>{
			$.getScript($.script()+"/bemeal.js").done(()=>{
				for(let i = 0;i<5;i++){
					$list.append(
						bemeal.compo.carousel({
							id:'carouselyh'+i,
							title:titleList[i],
							arr:d.list,
							row_size:5
						})
					)
				}
			})
		})
		let $content = $('#content');
		$content.addClass('container')
			.append($('<span/>').addClass('col-lg-6 mgt50 btn-group')
				.append($('<div/>').addClass('dropdown')
					.append($('<a/>').addClass('btn btn-warning dropdown-toggle').attr({'type':"button",id:"dropdownMenu",'data-toggle':"dropdown",'aria-haspopup':"true",'aria-expanded':"false"}).html('메뉴'))
					.append($('<div/>').addClass('dropdown-menu dropdown-warning')
						.append($('<div/>').addClass('dropdown-item').attr({id:'dd_btn1','role':'button'}).html('도시락'))
						.append($('<div/>').addClass('dropdown-item').attr({id:'dd_btn2','role':'button'}).html('샐러드'))
						.append($('<div/>').addClass('dropdown-item').attr({id:'dd_btn3','role':'button'}).html('보울 도시락'))
						.append($('<div/>').addClass('dropdown-item').attr({id:'dd_btn4','role':'button'}).html('반찬'))
					)
				)
			)
		$list = $('<div/>').html(
					$.getScript($.script()+'/ui/y_item_comment.js').done(()=>{
						 y_item_commentUI()
					})
				)
		
		let $carousels = $list.appendTo($content);

		let num = 4;
		let titles = [];
		let $window = $(window);
				$window.scroll(e=>{
					if(num<=10 && $window.scrollTop()+$window.height()+30>$(document).height()){
						$.getJSON($.ctx()+"/item/list/scrollTest",d=>{
							$carousels.append(
									bemeal.compo.carousel({
										id:'carousel'+num,
										title:'scrollTest'+(num-3),
										arr:d.list,
										row_size:5
									})
							);
							num++;
						}); 
					}
				});//scroll event end
		
	};
	var retrieve = x=>{
		//yoonho.contain.modal()
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
		
		//component
		
		let $tag1 = $('<div/>').attr({style:'margin:10px;font-size:18px'}).addClass('badge orange').html('#고소')
		let $tag2 = $('<div/>').attr({style:'margin:10px;font-size:18px'}).addClass('badge orange').html('#달콤')
		let $tag3 = $('<div/>').attr({style:'margin:10px;font-size:18px'}).addClass('badge orange').html('#짭짤')

		
		

		//modal main  
		let $div1 = $('<div/>').attr({id:'y_item_detailUI'}).addClass('container yh-mfp-wrap yh-white-popup');
		let $div2 = $('<div/>').addClass('mfp-container detail-main')
					.append($('<span/>').addClass('col')
						.append($('<img src="/web/resources/img/yoonho/maehwa_chicken.jpg"/>').addClass('rounded y_img_popup')))
		.appendTo($div1);// div2 end
		
	
		let $div3 = $('<div/>').addClass('text-left')
						.appendTo($div2);
		
		let $div4 = $('<div/>').addClass('mg0a').appendTo($div3);
		let $div5 = $('<div/>').addClass('col-lg-10')
								.append($('<a/>').html('장바구니').addClass('btn btn-warning mgt10-mgb10 mgr10-mgr10')
										.click(e=>{
											alert('장바구니 클릭!')
											$.magnificPopup.close();//팝업창 끄는 효과 //우리는 멀티팝업 띄워야 함.
										}))
								.append($('<span/>').addClass('col-lg-6 mgt50 btn-group')
									.append($('<div/>').addClass('dropdown')
										.append($('<a/>').addClass('btn btn-warning dropdown-toggle').attr({'type':"button",id:"dropdownMenu",'data-toggle':"dropdown",'aria-haspopup':"true",'aria-expanded':"false"}).html('추천메뉴목록'))
										.append($('<div/>').addClass('dropdown-menu dropdown-warning')
											.append($('<div/>').addClass('dropdown-item').attr({id:'dropdown_btn1','role':'button'}).html('당신이 좋아할 만한 도시락'))
											.append($('<div/>').addClass('dropdown-item').attr({id:'dropdown_btn2','role':'button'}).html('20대가 많이 구매한 도시락'))
											.append($('<div/>').addClass('dropdown-item').attr({id:'dropdown_btn3','role':'button'}).html('신제품 도시락'))
											.append($('<div/>').addClass('dropdown-item').attr({id:'dropdown_btn4','role':'button'}).html('베스트셀러'))
										)
									)
								)
								.append($('<a/>').attr({id:'detail_good_btn'}).html('맛있어요').addClass('btn btn-warning mgt10-mgb10 mgr10-mgr10')
									.click(e=>{
										alert('/맛있어서 자바갔다와야댐 $.ajax')
									})
								)
							.appendTo($div4);
		
		let $div4_1 = $('<div/>').addClass('col-lg-8 mgt50-mgb100')
						.appendTo($div3)
							.append($('<div/>').html(yoonho.contain.carousel()))
		
		
		//commentbox1,2

					
		let $div5_1 = $('<div/>').addClass('single_comment_area').appendTo($div4_1);
		let $span6_1 = $('<div/>').addClass('col-lg-8 mgt50-mgb50').appendTo($div5_1)
						.append(
								$.getScript($.script()+"/ui/y_item_comment.js").done(()=>{
									$('<div/>')
									.html(y_item_cLstUI()).appendTo($div5_1)
									.append(
										$('<a role="button"/>').addClass('badge orange').attr({style:'margin:10px;font-size:18px','data-toggle':'modal','data-target':'#modalContactForm'}).html('수정').click(e=>{
											alert('모달!!')
											yoonho.contain.modal(y_item_cMdfUI());
											
										})
									)
									.append(
										$('<a role="button"/>').addClass('badge orange').attr({style:'margin:10px;font-size:18px','data-toggle':'modal','data-target':'#modalContactForm'}).html('삭제').click(e=>{
											alert('모달삭제!!')
											yoonho.contain.modal(y_item_cDelUI());
											
										})
									)
								})
						)
						

		let $span6_2 = $('<div/>').addClass('col-lg-8 mgt50-mgb50')// y_img_popup_div
						.append(
								$.getScript($.script()+"/ui/y_item_comment.js").done(()=>{
									$('<div/>').html(y_item_cWrtUI()).appendTo($div5_1)
								})
						).appendTo($div5_1);

						
							
		//commentbox ed
		let $div2_4 = $('<div/>').addClass('col-sm-5 mg0-pd0 detail-right yh-mfp-navi').appendTo($div1);
		let $div3_4 = $('<div/>').addClass('container-fluid').appendTo($div2_4);
		let $div4_4 = $('<div/>').addClass('row').appendTo($div3_4);
		let $div5_4 = $('<div/>').addClass('col-lg-12 y_bg_popup_gr')
						.append($('<h2 style="font-size:28px;"/>').addClass('text-center font-weight-bold').html('매화 (치킨, 연어구이)'))
						.append($('<p/>').addClass('text-center').html('사각 도시락'))
						.appendTo($div4_4);
		let $span6_4 = $('<div/>').html('<input id="input-1-rtl-star-xs" name="input-1-rtl-star-xs" class="kv-rtl-theme-svg-star rating-loading" value="1" dir="rtl" data-size="xs">'
				+'<br/>'
				+'<div class="clearfix"></div>').appendTo($div5_4)
		
			let $p6_4_1 = $('<p/>').addClass('text-left').html('1520명이 평가했어요')
						.append($('<div/>')
							.append($tag1)
							.append($tag2)
							.append($tag3))
						.appendTo($div5_4)
			let $p6_4_2 = $('<div/>').html('(743명)').appendTo($div5_4)
							.append($('<div/>').html(
								$.getScript($.script()+'/ui/y_item_comment.js').done(()=>{
									//안뜸
									y_item_cStarUI()
								})
							))
			
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
			
			let $tbl6_9 = $('<div/>').addClass('row')
							.appendTo($div5_5)
			let $tbody7_9 = $('<div/>').html('[베스트 & 스테디셀러 SINCE 2007] 12가지 다양한 반찬으로 구성된 프리미엄 도시락입니다. 푸짐한 반찬과 함께 촉촉하고 부드러운 연어구이와 치킨이 구성되어 있어 부족하지 않고 든든하게 드실 수 있는 도시락 입니다. 생수와 조미 김이 함께 제공 됩니다.').addClass('col-sm text-left mgt10-mgb10').appendTo($tbl6_9)
		
		return $div1;
	};

	return {
		list:list,
		retrieve:retrieve,
		popup:popup
	};
	
	
})();


yoonho.contain=(x=>{
	var drop=x=>{
		return '<span class="btn-group">'
		+'  <!--Dropdown primary-->'
		+'  <div class="dropdown">'
		+''
		+'    <!--Trigger-->'
		+'    <a class="btn btn-warning dropdown-toggle" type="button" id="dropdownMenu" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">추천메뉴목록</a>'
		+''
		+'    <!--Menu-->'
		+'    <div class="dropdown-menu dropdown-warning">'
		+'      <a class="dropdown-item" href="#">당신이 좋아할 만한 도시락</a>'
		+'      <a class="dropdown-item" href="#">20대가 많이 구매한 도시락</a>'
		+'      <a class="dropdown-item" href="#">신제품 도시락</a>'
		+'      <a class="dropdown-item" href="#">베스트셀러</a>'
		+'    </div>'
		+'  </div>'
		+'  <!--/Dropdown primary-->'
		+'</span>'
	}
	var carousel=x=>{
		return '  <!--Carousel Wrapper-->'
		+'<div id="carousel-with-lb" class="carousel slide carousel-multi-item" data-ride="carousel">'
		+''
		+'  <!--Controls-->'
		+'  <div class="text-center controls-top">'
		+'    <a class="btn-floating btn-secondary" href="#carousel-with-lb" data-slide="prev"><i class="fa fa-chevron-left"></i></a>'
		+'    <a class="btn-floating btn-secondary" href="#carousel-with-lb" data-slide="next"><i class="fa fa-chevron-right"></i></a>'
		+'  </div>'
		+'  <!--/.Controls-->'
		+''
		+'  <!--Indicators-->'
		+'  <ol class="carousel-indicators">'
		+'    <li data-target="#carousel-with-lb" data-slide-to="0" class="active secondary-color"></li>'
		+'    <li data-target="#carousel-with-lb" data-slide-to="1" class="secondary-color"></li>'
		+'    <li data-target="#carousel-with-lb" data-slide-to="2" class="secondary-color"></li>'
		+'  </ol>'
		+'  <!--/.Indicators-->'
		+''
		+'  <!--Slides and lightbox-->'
		+''
		+'  <div class="carousel-inner mdb-lightbox" role="listbox">'
		+'    <div id="mdb-lightbox-ui"></div>'
		+'    <!--First slide-->'
		+'    <div class=" carousel-item active text-center">'
		+''
		+'      <figure class="col-md-2 d-md-inline-block">'
		+'        <a href="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(2).jpg" data-size="1600x1067">'
		+'          <img src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(2).jpg" class="img-fluid">'
		+'        </a>'
		+'      </figure>'
		+''
		+'      <figure class="col-md-2 d-md-inline-block">'
		+'        <a href="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(4).jpg" data-size="1600x1067">'
		+'          <img src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(4).jpg" class="img-fluid">'
		+'        </a>'
		+'      </figure>'
		+''
		+'      <figure class="col-md-2 d-md-inline-block">'
		+'        <a href="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(6).jpg" data-size="1600x1067">'
		+'          <img src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(6).jpg" class="img-fluid">'
		+'        </a>'
		+'      </figure>'
		+''
		+'    </div>'
		+'    <!--/.First slide-->'
		+''
		+'    <!--Second slide-->'
		+'    <div class="carousel-item text-center">'
		+''
		+'      <figure class="col-md-2 d-md-inline-block">'
		+'        <a href="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(22).jpg" data-size="1600x1067">'
		+'          <img src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(22).jpg" class="img-fluid">'
		+'        </a>'
		+'      </figure>'
		+''
		+'      <figure class="col-md-2 d-md-inline-block">'
		+'        <a href="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(25).jpg" data-size="1600x1067">'
		+'          <img src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(25).jpg" class="img-fluid">'
		+'        </a>'
		+'      </figure>'
		+''
		+'      <figure class="col-md-2 d-md-inline-block">'
		+'        <a href="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(29).jpg" data-size="1600x1067">'
		+'          <img src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(29).jpg" class="img-fluid">'
		+'        </a>'
		+'      </figure>'
		+''
		+'    </div>'
		+'    <!--/.Second slide-->'
		+''
		+'    <!--Third slide-->'
		+'    <div class="carousel-item text-center">'
		+''
		+'      <figure class="col-md-2 d-md-inline-block">'
		+'        <a href="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(44).jpg" data-size="1600x1067">'
		+'          <img src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(44).jpg" class="img-fluid">'
		+'        </a>'
		+'      </figure>'
		+''
		+'      <figure class="col-md-2 d-md-inline-block">'
		+'        <a href="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(45).jpg" data-size="1600x1067">'
		+'          <img src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(45).jpg" class="img-fluid">'
		+'        </a>'
		+'      </figure>'
		+''
		+'      <figure class="col-md-2 d-md-inline-block">'
		+'        <a href="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(66).jpg" data-size="1600x1067">'
		+'          <img src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(66).jpg" class="img-fluid">'
		+'        </a>'
		+'      </figure>'
		+'    </div>'
		+'    <!--/.Third slide-->'
		+''
		+'  </div>'
		+'  <!--/.Slides-->'
		+''
		+'</div>'
		+'<!--/.Carousel Wrapper-->'
	}
	var modal=x=>{
		return $.magnificPopup.open({
			closeBtnInside:true,
			closeOnContentClick:false,
			alignTop: true,
			fixedBgPos:true,
			fixedContentPos:false,
			items:{src:
				x
			},
			midClick:true,
			overflowY:'auto',
			removalDelay:'0',
			type:'inline'}); 
		$('.btn').on('click',function(){
			
			alert($('#code').val());
		});
	};
	var layout=()=>{
		
	};
	return {layout:layout,drop:drop,carousel:carousel,modal:modal};
})();


/*//When the user clicks on the button, Star is rated
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
starRating();*/