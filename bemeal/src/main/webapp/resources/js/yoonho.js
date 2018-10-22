"use strict"
var yoonho = yoonho || {};
		
yoonho.service=(x=>{
	var list =x=>{
 		$('header').remove();
		$('#content').empty();
		
		let brand_arr=["CU","한솥","호토모토","GS","혜자","세븐일레븐","위드미","미니스톱",
			"오봉","본","토마토","비비고","풀무원","리본","잇슬림","밸런스박스","호밀",
			"미드미","바니스푼","명가","더큰","런치바스켓","바비박스","이마트"];
		let category_arr=["한식","중식","일식","양식","동남아식","다이어트식","건강식","분식"];
		let sort_arr=["가격","칼로리","평점"];

		let $content = $('#content')
		let $select = $('<div/>')
		.html('<h2 class="h1-responsive font-weight-bold text-center my-5">Be meal::Our menu</h2>'
				+'<p class="grey-text text-center w-responsive mx-auto mb-5">맛있는 식사를 위해 항상 최선의 노력을 다하겠습니다.</p>')
		.addClass('container')//.attr({id:'cat_drbx'})
			.append($('<span/>').addClass('col-lg-2 mgt50 btn-group')
				.append($('<div/>').addClass('form-group').html('브랜드')
					.append($('<select/>').addClass('form-control').attr({'id':'brand_menu','role':'menu'}))
				)
			)
			.append($('<span/>').addClass('col-lg-2 mgt50 btn-group')
				.append($('<div/>').addClass('form-group').html('메뉴카테고리')
					.append($('<select/>').addClass('form-control').attr({'id':'category_menu','role':'menu'}))
				)
			)
			.append($('<span style="float:right"/>').addClass('col-lg-2 mgt50 btn-group')
				.append($('<div/>').addClass('form-group').html('정렬순')
					.append($('<select/>').addClass('form-control').attr({'id':'sort_menu','role':'menu'}))
				)
			).appendTo($content)
			
		let $container = $('<div/>').appendTo($select).attr({id:'yh_container'})
		
		for(let i=0;i<brand_arr.length;i++){
			$('<option value="'+i+'"/>').html(brand_arr[i]).attr({id:'brand_'+i+'_menu'}).appendTo($('#brand_menu'))
		}
		
		for(let j=0;j<category_arr.length;j++){
			$('<option value="'+j+'"/>').html(category_arr[j]).attr({id:'category_'+j+'_menu'}).appendTo($('#category_menu'))
		}
		
		for(let k=0;k<sort_arr.length;k++){
			$('<option value="'+k+'"/>').html(sort_arr[k]).attr({id:'sort_'+k+'_menu'}).appendTo($('#sort_menu'))
		}
		
		let $brand_menu = brand_arr[$("#brand_menu").val()]
		let $category_menu = category_arr[$('#category_menu').val()]
		let $sort_menu = sort_arr[$('#sort_menu').val()]
		
		$.getJSON($.ctx()+'/item/list/{'+$brand_menu+'}/{'+$category_menu+'}/{'+$sort_menu+'}',d=>{
			yoonho.service.row($('#brand_menu').val()).appendTo($('#yh_container'))
			$('#brand_menu').change(()=>{
				$brand_menu = brand_arr[$("#brand_menu").val()]
				alert('#brand_menu option:selected:'+$('#brand_menu').val())
				$.getJSON($.ctx()+'/item/list/{'+$brand_menu+'}/{'+$category_menu+'}/{'+$sort_menu+'}',d=>{
					alert('$brand_menu:'+$brand_menu+'/$category_menu:'+$category_menu+'/$sort_menu:'+$sort_menu)
				})
				$.getScript($.script()+'/ui/y_item_list.js').done(()=>{
					yoonho.service.row($('#brand_menu').val()).appendTo($('#yh_container'))
				})		
			})//메뉴카테고리
		
			$('#category_menu').change(()=>{
				$category_menu = category_arr[$("#category_menu").val()]
				alert('#category_menu option:selected:'+$('#category_menu').val())
				$.getJSON($.ctx()+'/item/list/{'+$brand_menu+'}/{'+$category_menu+'}/{'+$sort_menu+'}',d=>{
					alert('$brand_menu:'+$brand_menu+'/$category_menu:'+$category_menu+'/$sort_menu:'+$sort_menu)
				})
				$.getScript($.script()+'/ui/y_item_list.js').done(()=>{
					yoonho.service.row($('#category_menu').val()).appendTo($('#yh_container'))
				})	
			})
			//브랜드
			
			$('#sort_menu').change(()=>{
				$sort_menu = sort_arr[$("#sort_menu").val()]
				alert('#sort_menu option:selected:'+$('#sort_menu').val())
				$.getJSON($.ctx()+'/item/list/{'+$brand_menu+'}/{'+$category_menu+'}/{'+$sort_menu+'}',d=>{
					alert('$brand_menu:'+$brand_menu+'/$category_menu:'+$category_menu+'/$sort_menu:'+$sort_menu)
				})
				alert('#sort_menu option:selected:'+$('#sort_menu option:selected').val());
				$.getScript($.script()+'/ui/y_item_list.js').done(()=>{
					yoonho.service.row($('#sort_menu').val()).appendTo($('#yh_container'))
				})	
			})
			$('#category_menu').val()
		})

		return $content;
	};
	var row=x=>{
		$('#yh_container').empty();
		let $row;
		let num = 4;
		let titles = [];
		let $window = $(window);
		$.getScript($.script()+"/ui/y_item_list.js").done(()=>{
			
			$.getJSON($.ctx()+"/item/list",d=>{
				alert('/d에는또뭐?'+d.list.length)
				$row=$('<div/>').addClass('container').attr({id:'item_eval_'}).html(y_item_listUI(d)).appendTo($('#yh_container')).click(e=>{
					yoonho.service.retrieve();
				})
			})

			$.getJSON($.ctx()+"/item/list/second",d=>{
				alert('/d에는또뭐?'+d.list.length)
				$row=$('<div/>').addClass('container').attr({id:'item_eval_'}).html(y_item_listUI(d)).appendTo($('#yh_container')).click(e=>{
					yoonho.service.retrieve();
				})
			})
			$.getJSON($.ctx()+"/item/list/third",d=>{
				alert('/d에는또뭐?'+d.list.length)
				$row=$('<div/>').addClass('container').attr({id:'item_eval_'}).html(y_item_listUI(d)).appendTo($('#yh_container')).click(e=>{
					yoonho.service.retrieve();
				})
			})
			
			$.getJSON($.ctx()+"/item/list/first",d=>{
				$window.scroll(e=>{
					if(num<=20 && $window.scrollTop()+$window.height()+30>$(document).height()){
							$('<div/>').addClass('container').attr({id:'item_eval'+num}).html(y_item_listUI(d)).appendTo($('#yh_container')).click(e=>{
								yoonho.service.retrieve();
							})
							num++;
					}//무한스크롤링  20라인까지 
				});//scroll event end
			})
		})
		return $row;
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
		let detail_arr = ["당신이 좋아할 만한 도시락","20대가 많이 구매한 도시락","신제품 도시락","베스트셀러"];
		
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
		let $div5 = $('<div/>').addClass('col-lg-8 text-center')
								.append($('<a/>').html('장바구니').addClass('btn btn-warning mgt10-mgb10 mgr10-mgr10')
										.click(e=>{
											alert('장바구니 클릭!')
											$.magnificPopup.close();//팝업창 끄는 효과 //우리는 멀티팝업 띄워야 함.
										}))

								.append($('<a/>').attr({id:'detail_pay_btn'}).html('결제하기').addClass('btn btn-warning mgt10-mgb10 mgr10-mgr10')
									.click(e=>{
										alert('/결제했슈')
									})
								)
								.append($('<a/>').attr({id:'detail_gift_btn'}).html('선물하기').addClass('btn btn-warning mgt10-mgb10 mgr10-mgr10')
									.click(e=>{
										alert('/선물햇슈')
									})
								)
								.append($('<a/>').attr({id:'detail_good_btn'}).html('맛있어요').addClass('btn btn-warning mgt10-mgb10 mgr10-mgr10')
									.click(e=>{
										alert('/맛있어서 자바갔다와야댐 $.ajax')
									})
								)
							.appendTo($div4);
		
		
		let $div4_1 = $('<div/>').attr({id:'div4_1'}).addClass('col-lg-8 mgt50-mgb100').appendTo($div3)
						
		let $div_option = $('<div/>').addClass('col-lg-8 mgt50 btn-group').appendTo($div4_1)
		let $detail_d_recom = $('<div/>').addClass('form-group').attr({id:'detail_d_recom'}).appendTo($div_option)
		let $detail_s_recom = $('<select/>').addClass('form-control').attr({id:'detail_s_recom'}).appendTo($detail_d_recom)
		
		for(let i =0 ; i <detail_arr.length;i++){
			$('<option value='+i+'/>').html(detail_arr[i]).attr({id:'detail_'+i+'_menu'}).appendTo($detail_s_recom)
		}
		
		let $detail_car_recom = $('<div/>').attr({id:'carousel_'+$detail_s_recom.val()}).html(yoonho.contain.carousel()).appendTo($div4_1)
		$($detail_s_recom).change(()=>{
			alert('몇번클릭?'+$detail_s_recom.val())
			//$('<div/>').attr({id:'carousel_'+$detail_s_recom.val()}).html(yoonho.contain.carousel()).appendTo($detail_s_recom)
		})

		//commentbox1,2
		let $div5_1 = $('<div/>').addClass('single_comment_area').appendTo($div4_1);
		let $span6_1 = $('<div/>').addClass('col-lg-8 mgt50-mgb50').appendTo($div5_1)
						.append(
							$.getScript($.script()+"/ui/y_item_comment.js").done(()=>{
								$('<div/>')
								.html(y_item_cLstUI()).appendTo($div5_1)
								
							})
						)
		let $section6_1 = $('<section/>').addClass('my-5').appendTo($span6_1).append($('<div/>').addClass('my-5').html('4개의 댓글'))
		let $sec_div = $('<div/>').addClass('media d-block d-md-flex mt-4')
						.append(
							$('<img/>').addClass('card-img-64 d-flex mx-auto mb-3 rounded-circle').attr({'src':'/web/resources/img/yoonho/img_avatar1.png','alt':'Generic placeholder image'})
						)
						.append(
							$('<div/>').addClass('media-body text-center text-md-left ml-md-3 ml-0')
							.append(
								$('<h5/>').addClass('font-weight-bold mt-0').append($('<a/>').html('회원아이디').click(e=>{alert('회원retrieve')}))
							).html('내용 : 바쁜 저녁 마라톤회의때 먹었는데 든든합니다. 강추!!')
						).appendTo($section6_1)
						
						/*								.append(
									$('<a role="button"/>').addClass('badge orange').attr({style:'margin:10px;font-size:18px','data-toggle':'modal','data-target':'#modalContactForm'}).html('수정').click(e=>{
										alert('모달수정')
										yoonho.contain.modal(y_item_cMdfUI());
									})
								)
								.append(
									$('<a role="button"/>').addClass('badge orange').attr({style:'margin:10px;font-size:18px','data-toggle':'modal','data-target':'#modalContactForm'}).html('삭제').click(e=>{
										alert('모달삭제')
										yoonho.contain.modal(y_item_cDelUI());
									})
								)*/
						

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
		let $star = $('<div/>').addClass('my-rating').attr({id:'my-rating'}).starRating({
							initialRating: 4,
							strokeColor: '#894A00',
							strokeWidth: 10,
							starSize: 25
						}).appendTo($div5_4)
						.append($('<div/>').html('(743명)'))
			let $p6_4_1 = $('<p/>').addClass('text-left').html('1520명이 평가했어요')
						.append($('<div/>')
							.append($tag1)
							.append($tag2)
							.append($tag3))
						.appendTo($div5_4)
			

			
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
		row:row,
		retrieve:retrieve,
		popup:popup
	};
	
	
})();


yoonho.contain=(x=>{
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
	return {layout:layout,carousel:carousel,modal:modal};
})();
