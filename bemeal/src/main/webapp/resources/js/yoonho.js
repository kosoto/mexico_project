"use strict"
var yoonho = yoonho || {};
		
yoonho.service=(x=>{
	var list =x=>{
 		$('header').remove();
		$('#content').empty();
		
		let brand_arr=["브랜드전체","CU","한솥","호토모토","GS","혜자","세븐일레븐","위드미","미니스톱",
			"오봉","본","토마토","비비고","풀무원","리본","잇슬림","밸런스박스","호밀",
			"미드미","바니스푼","명가","더큰","런치바스켓","바비박스","이마트"];
		let category_arr=["카테고리전체","한식","중식","일식","양식","동남아식","다이어트식","건강식","분식"];
		let sort_arr=["가격","칼로리","평점"];

		let $content = $('#content')//.attr({style:'font-family: \'Sunflower\', sans-serif;'})
		let $select = $('<div/>')
		.html('<h2 class="h1-responsive font-weight-bold text-center my-5">Be meal::Our menu</h2>'
				+'<p class="grey-text text-center w-responsive mx-auto mb-5">맛있는 식사를 위해 </p>')
		.addClass('container')
			.append($('<span/>').addClass('col-lg-2 mgt50 btn-group')
				.append($('<div/>').addClass('form-group')
					.append($('<select/>').addClass('form-control').attr({'id':'brand_menu','role':'menu'}))
				)
			)
			.append($('<span/>').addClass('col-lg-2 mgt50 btn-group')
				.append($('<div/>').addClass('form-group')
					.append($('<select/>').addClass('form-control').attr({'id':'category_menu','role':'menu'}))
				)
			)
			.append($('<span style="float:right"/>').addClass('col-lg-2 mgt50 btn-group')
				.append($('<div/>').addClass('form-group')
					.append($('<select/>').addClass('form-control').attr({'id':'sort_menu','role':'menu'}))
				)
			).appendTo($content)
			
		let $container = $('<div/>').addClass('container').appendTo($select).attr({id:'yh_container'})
		
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

		$.getJSON($.ctx()+'/item/list/'+$brand_menu+'/'+$category_menu+'/'+$sort_menu,d=>{
			////이게 가장 맨처음 보이는 화면
			yoonho.service.row(d.listsm).appendTo($('#yh_container'))

			$('#brand_menu').change(()=>{
				$brand_menu = brand_arr[$("#brand_menu").val()]
				alert('#brand_menu option:selected:'+$('#brand_menu').val())
				$.getJSON($.ctx()+'/item/list/'+$brand_menu+'/'+$category_menu+'/'+$sort_menu,d=>{
					yoonho.service.row(d.listsm).appendTo($('#yh_container'))	
				})
			})//메뉴카테고리
		
			$('#category_menu').change(()=>{
				$category_menu = category_arr[$("#category_menu").val()]
				alert('#category_menu option:selected:'+$('#category_menu').val())
				$.getJSON($.ctx()+'/item/list/'+$brand_menu+'/'+$category_menu+'/'+$sort_menu,d=>{
					yoonho.service.row(d.listsm).appendTo($('#yh_container'))
				})
			})
			//브랜드
			
			$('#sort_menu').change(()=>{
				$sort_menu = sort_arr[$("#sort_menu").val()]
				alert('#sort_menu option:selected:'+$('#sort_menu').val())
				$.getJSON($.ctx()+'/item/list/'+$brand_menu+'/'+$category_menu+'/'+$sort_menu,d=>{
					yoonho.service.row(d.listsm).appendTo($('#yh_container'))	
				})
				alert('#sort_menu option:selected:'+$('#sort_menu option:selected').val());
			})//정렬
			
		})
		return $content;
	};
	var row=x=>{
		$('#yh_container').empty();
		let $section;
		let $div_row
		let $div_col
		let $div_card
		let $div_view_zoom
		let $div_a_p
		
		let num = 4;
		let titles = [];
		let $window = $(window);
		let $document = $(document);
		let page = 1;
		
		let length = x.length
		$section = $('<section align="left"/>').addClass('text-center my-5').appendTo('#yh_container')//.attr({style:'font-family: \'Sunflower\', sans-serif;'})
		$div_row = $('<div/>').addClass('row').appendTo($section)
		$.getJSON($.ctx()+'/item/pagi/'+length*1+'/'+(page+""),d=>{//+'/'+(length/6)+'/6/1'
			console.log(d);
		})
		
		if(length>=6){
				alert('1. length>=6 ::'+(length>=6))
				//alert('6보다많다:'+x.length)
				console.log('(page)*6+6:'+((page)*6+6)+'  //x.length:'+(length>6))//첫화면 true 나와야 함!    <x.length:t?f?    <(x.length)
				$div_row = $('<div/>').addClass('row').appendTo($section)
				for(let i = 0 ;i < 6; i++){
					
					$div_col = $('<div/>').addClass('col-lg-2 col-md-2 mb-lg-0 mb-2').appendTo($div_row)
					$div_card = $('<div/>').addClass('card collection-card z-depth-1-half').appendTo($div_col)
					$div_view_zoom = $('<div/>').addClass('view zoom').appendTo($div_card)
										.append($('<img/>').addClass('img-fluid').attr({src:x[i].img})
											.click(e=>{
												alert('x:'+x[i].itemSeq);
												yoonho.service.retrieve(x[i].itemSeq);
											})
										)
					$div_a_p = $('<div/>').addClass('stripe dark').appendTo($div_card)
									.append($('<a/>').append($('<p/>').html(x[i].itemName).append($('<i/>').addClass('fa fa-angle-right').html(x[i].price+' 원'))))
				
				}
				$window.on('scroll.category',e=>{
					alert('2. length>=6 ::'+(length>=6))
					console.log('$window.scrollTop():'+$window.scrollTop()+' // $document.height() : '+$document.height()+' // $window.height() : '+$window.height())
					console.log('(page-1)*6+6<x.length:t?f?:'+(((page-1)*6+6)<(length)))//첫화면 true 나와야 함!
					if ( (((page)*6+7)<(length)) && $window.scrollTop() == $document.height() - $window.height()) {
			        	for(let i = (page)*6 ; i < (page)*7+6; i++){
							$div_col = $('<div/>').addClass('col-lg-2 col-md-2 mb-lg-0 mb-2').appendTo($div_row)
							$div_card = $('<div/>').addClass('card collection-card z-depth-1-half').appendTo($div_col)
							$div_view_zoom = $('<div/>').addClass('view zoom').appendTo($div_card)
												.append($('<img/>').addClass('img-fluid').attr({src:x[i].img})
													.click(e=>{
														alert('$window scroll x:'+x[i].itemSeq);
														yoonho.service.retrieve(x[i].itemSeq);
													})
												)
							$div_a_p = $('<div/>').addClass('stripe dark').appendTo($div_card)
											.append($('<a/>').append($('<p/>').html(x[i].itemName).append($('<i/>').addClass('fa fa-angle-right').html(x[i].price+' 원'))))
						
						}
						++page;
			        }
				})
		}else {
			alert('6보다적다:'+x.length)
			$div_row = $('<div/>').addClass('row').appendTo($section)
			for(let i = 0 ;i < x.length; i++){
				$div_col = $('<div/>').addClass('col-lg-2 col-md-2 mb-lg-0 mb-2').appendTo($div_row)
				$div_card = $('<div/>').addClass('card collection-card z-depth-1-half').appendTo($div_col)
				$div_view_zoom = $('<div/>').addClass('view zoom').appendTo($div_card)
									.append($('<img/>').addClass('img-fluid').attr({src:x[i].img})
										.click(e=>{
											alert('$div_col x:'+x[i].itemSeq);
											yoonho.service.retrieve(x[i].itemSeq);
										})
									)
				$div_a_p = $('<div/>').addClass('stripe dark').appendTo($div_card)
								.append($('<a/>').append($('<p/>').html(x[i].itemName).append($('<i/>').addClass('fa fa-angle-right').html(x[i].price+' 원'))))

			}
		}
		return $section;
	};

	var retrieve = x=>{
		$.getJSON($.ctx()+'/item/retrieve/'+x,d=>{
			console.log('d.retrieve[0]::'+d.retrieve[0]+'//d.rtag[0]::'+d.rtag[0].TAG_NAME)
			$.magnificPopup.open({
				closeBtnInside:true,
				closeOnContentClick:false,
				alignTop: false,
				fixedBgPos: true,
				fixedContentPos:false,
				items:{src:
						yoonho.service.popup(d)
				},
				midClick:true,
				overflowY:'auto',
				removalDelay:'0',
				type:'inline'
				}); 
			$('.btn').on('click',function(){
				alert('$(\'#code\').val()'+$('#code').val());
			});
		})
		return false;
	};
	var popup =x=>{//x:itemSeq
		let rtrv = x.retrieve[0]
		alert('몇번?:'+rtrv.itemSeq+'x.rtag[0]'+x.rtag[0].TAG_NAME)

		//component
		let detail_arr = ["당신이 좋아할 만한 도시락","20대가 많이 구매한 도시락","신제품 도시락","베스트셀러"];
		
		//modal main  
		let $div1 = $('<div/>').attr({id:'y_item_detailUI'}).addClass('container yh-mfp-wrap yh-white-popup')//.attr({style:'font-family: \'Sunflower\', sans-serif;'});
		let $div2 = $('<div/>').addClass('mfp-container detail-main')
					.append($('<span/>').addClass('col')
						.append($('<img src="'+rtrv.img+'"/>').addClass('rounded y_img_popup')))
		.appendTo($div1);// div2 end
		
	
		let $div3 = $('<div/>').addClass('text-left')
						.appendTo($div2);
		
		let $div4 = $('<div/>').addClass('mg0a').appendTo($div3);
		let $inputbox = $('<input type="number" value="1" aria-label="Search" class="form-control" style="width: 100px">').attr({id:'item_iptbx'}).appendTo($div4)
		let $div5 = $('<div/>').addClass('col-lg-8 text-center').attr({style:'margin-top: -300px;'})
		.append($('<button/>').html('장바구니').addClass('btn btn-warning mgt10-mgb10 mgr10-mgr10')
				.click(e=>{
					alert('장바구니 클릭!')
					alert('$(\'#item_iptbx\').val()::'+$('#item_iptbx').val())
					alert('item_seq::'+rtrv.itemSeq)
					alert('member_id::'+rtrv.memberId)
					//$.getScript($.script()+'kaeun.js',()=>{})주면 제이슨 던질것
					//$.magnificPopup.close();//팝업창 끄는 효과 //우리는 멀티팝업 띄워야 함.
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
		.append($('<a/>').attr({id:'detail_good_btn'}).html('위시리스트').addClass('btn btn-warning mgt10-mgb10 mgr10-mgr10')
			.click(e=>{
				alert('/맛있어서 자바갔다와야댐 $.ajax')
			})
		).appendTo($div4)
		
		
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

		//commentbox1,2write:create
		let $div5_1 = $('<div/>').addClass('single_comment_area').appendTo($div4_1);
		let $section6_1 = yoonho.contain.commentWrite({uid:'test2',itemSeq:rtrv.itemSeq}).appendTo($div5_1);
		
		//comment list:Read Update Delete
		$.getJSON($.ctx()+'/brd/read/'+rtrv.itemSeq,d=>{
			let $section6_2 = $('<section/>').addClass('my-5').appendTo($div5_1).attr({id:'section6_2'})
						.append($('<div/>').addClass('card-header border-0 font-weight-bold').html('comments'))
						
									$.each(d.read,(i,j)=>{
										console.log('j::'+j.memberId)
										yoonho.contain.commentList(j).appendTo($section6_2)
									})
		})
		//commentbox ed

		//comment write:create

		let $div2_4 = $('<div/>').addClass('col-sm-5 mg0-pd0 detail-right yh-mfp-navi').appendTo($div1);
		let $div3_4 = $('<div/>').addClass('container-fluid').appendTo($div2_4);
		let $div4_4 = $('<div/>').addClass('row').appendTo($div3_4);
		let $div5_4 = $('<div/>').addClass('col-lg-12 y_bg_popup_gr')
						.append($('<h2 style="font-size:28px;"/>').addClass('text-center font-weight-bold').html(rtrv.itemName))
						.append($('<p/>').addClass('text-center').html(rtrv.category))
						.appendTo($div4_4);
		let $star = $('<div/>').addClass('my-rating').attr({id:'my-rating'})
			.starRating({ //https://github.com/nashio/star-rating-svg
				initialRating: 0, //초기값  
				starSize: 20,  //width속성값
				minRating : 0.5,
				emptyColor : 'white',
				hoverColor : 'orange',
				activeColor : 'orange',
				ratedColor : 'orange',
				useGradient : false,
				strokeColor: 'orange',  //border color
				callback : (currentRating, $el)=>{
					alert(currentRating);
					let flag = false; //평점을 준적이 없으면 false 있으면 true
					/*getJSON($.ctx()+'/',()=>{//id와 item_seq를 넘겨줌
						
					})*/
					
				}
			}).appendTo($div5_4)
			let $p6_4_1 = $('<div/>').addClass('text-left').html(rtrv.starCount+'명이 별점평가 했어요!')
						.appendTo($div5_4)
			let $tag = $('<div/>').appendTo($p6_4_1)
			$.each(x.rtag, (i,j)=>{
				if(j.TAG_FLAG=='맛'){
					$('<div/>').attr({style:'margin:10px;font-size:12px'}).addClass('badge badge-secondary').html(j.TAG_FLAG+'#'+j.TAG_NAME).appendTo($tag);
				}else if(j.TAG_FLAG=='감성'){
					$('<div/>').attr({style:'margin:10px;font-size:12px'}).addClass('badge badge-success').html(j.TAG_FLAG+'#'+j.TAG_NAME).appendTo($tag);
				}else if(j.TAG_FLAG=='재료'){
					$('<div/>').attr({style:'margin:10px;font-size:12px'}).addClass('badge badge-info').html(j.TAG_FLAG+'#'+j.TAG_NAME).appendTo($tag);
				}
				
			})
			

			//rtrv.imgSeq,rtrv.itemName,rtrv.img,rtrv.price,rtrv.calorie,rtrv.category,rtrv.explains,rtrv.brand,rtrv.itemSeq
			let $div4_5 = $('<div/>').addClass('row').appendTo($div3_4)
			let $div5_5 = $('<div/>').addClass('col-lg-12').appendTo($div4_5)

			//md-accordion accordion-1
			let $aNav = $('<div/>').addClass('accordion').attr({'id':'accordionEx23','role':'tablist'}).appendTo($div3_4)
			let $aNav_crd = $('<div/>').addClass('card').appendTo($aNav)
			let $aNav_crd_hd = $('<div/>').addClass('card-header blue lighten-3 z-depth-1').attr({'id':'heading96','role':'tab'}).appendTo($aNav_crd)
			let $aNav_crd_hd_t = $('<h5/>').addClass('text-uppercase mb-0 py-1').appendTo($aNav_crd_hd)
			let $aNav_crd_hd_t_a = $('<a href="#collapse96"/>').html('Dosirak INFO').addClass('white-text font-weight-bold').attr({'data-toggle':'collapse', 'aria-expanded':'true', 'aria-controls':'collapse96'}).appendTo($aNav_crd_hd_t)
			
			let $aNav_crd_ctn = $('<div/>').addClass('collapse show').attr({'id':'collapse96','role':'tabpanel','aria-labelledby':'heading96','data-parent':'#accordionEx23'}).appendTo($aNav_crd)
			let $aNav_crd_ctn_bd = $('<div/>').addClass('card-body').appendTo($aNav_crd_ctn)
			let $aNav_crd_ctn_r = $('<div/>').addClass('row my-4').appendTo($aNav_crd_ctn_bd)
			
			let $aNav_crd_ctn_c = $('<div/>').addClass('col-md-12').appendTo($aNav_crd_ctn_r)

			
			let $tbl6_5 = $('<div/>').addClass('row').appendTo($aNav_crd_ctn_c)
			let $tbody7_5 = $('<div/>').html('업체').addClass('col-sm text-left mgt10-mgb10').appendTo($tbl6_5)
			let $tbody7_5_1 = $('<div/>').html(rtrv.brand).addClass('col-sm  mgt10-mgb10').appendTo($tbl6_5)

			
			let $tbl6_6 = $('<div/>').addClass('row').appendTo($aNav_crd_ctn_c)
			let $tbody7_6 = $('<div/>').html('칼로리').addClass('col-sm text-left mgt10-mgb10').appendTo($tbl6_6)
			let $tbody7_6_1 = $('<div/>').html(rtrv.calorie+' Kcal').addClass('col-sm  mgt10-mgb10').appendTo($tbl6_6)
			
			let $tbl6_7 = $('<div/>').addClass('row').appendTo($aNav_crd_ctn_c)
			let $tbody7_7 = $('<div/>').html('가격').addClass('col-sm text-left mgt10-mgb10').appendTo($tbl6_7)
			let $tbody7_7_1 = $('<div/>').html(rtrv.price+' 원').addClass('col-sm  mgt10-mgb10').appendTo($tbl6_7)
			
			
			let $tbl6_9 = $('<div/>').addClass('row')
							.appendTo($aNav_crd_ctn_c)
			let $tbody7_9 = $('<div/>').append($('<p/>').attr({style:'font-size:14px;'}).html(rtrv.explains)).addClass('col-sm text-left mgt10-mgb10').appendTo($tbl6_9)
			/*let $accordion = $.getScript($.script()+'/ui/y_item_detail.js',()=>{
				$('<div/>').html(y_item_detailUI()).appendTo($div5)
			})*/

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
		$.magnificPopup.open({
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
		return false;
	};
	var layout=()=>{
		
	};
	var commentWrite=x=>{
		return $('<div/>')
		.append(
				$('<section/>').addClass('my-5')
				.append(
					$('<div/>').addClass('form-group mt-4')
					.append(
						$('<label/>').attr({'for':'item_r_comment'}).html('Your comment')
					)
					.append(
						$('<textarea/>').addClass('form-control').attr({style:'resize: none','id':'item_r_comment','rows':'5','cols':'105'})
					)
					.append(
						$('<div/>').addClass('text-center my-4')
						.append(
							$('<button/>').addClass('btn btn-warning btn-sm').attr({id:'cmt_write','type':'submit'}).html('글쓰기')
							.click(e=>{
								alert('게시글content:'+$('#item_r_comment').val())
								alert('memberId:'+x.uid)
								alert('itemSeq:'+x.itemSeq)
								
								$.ajax({
									url:$.ctx()+'/brd/write',
									method:'POST',
									contentType:'application/json',
									data:JSON.stringify({
											content:$('#item_r_comment').val(),
											memberId:x.uid,
											itemSeq:x.itemSeq
									}),
									success:d=>{
										yoonho.contain.commentList(d.write[(d.write.length-1)]).appendTo($('#section6_2'))
									},
									error:(m1,m2,m3)=>{
										alert('실패 ㅠㅠ:'+m3)
									}
								})
							
							})
						)
					)
				)
			);
	};
	var commentList =x=>{
		alert('commentList x:'+x.memberId)
		console.log('x:'+x)

		let $list = $('<div/>').addClass('media d-block d-md-flex mt-4')
				.append(
					$('<img/>').addClass('card-img-64 d-flex mx-auto mb-3 rounded-circle').attr({'src':'/web/resources/img/yoonho/img_avatar1.png','alt':'Generic placeholder image'})
				)
				.append(
					$('<div/>').addClass('media-body text-center text-md-left ml-md-3 ml-0').attr({id:'modify_cmm_'+x.no})
					.append(
							$('<a/>').addClass('font-weight-bold mt-0').attr({style:'font-size:18px;color:#007bff;'}).html(x.memberId).click(e=>{alert('회원retrieve')})//정훈정훈한테 물어보고 memberRetrieve 없으면 h4태그로 바꿀것
					)
					.append(
						 	$('<h6/>').html(x.content+'/'+x.ARTICLE_TIME)
					)
					.append(
						$('<a role="button"/>').addClass('badge orange').attr({style:'margin:10px;font-size:18px','data-toggle':'modal','data-target':'#modalModifyForm'}).html('수정').click(e=>{
							alert('모달수정'+$.script()+'/ui/y_item_comment.js')
							$.getScript($.script()+'/ui/y_item_comment.js',()=>{
								yoonho.contain.commentUpdat().addClass('opacity .15s linear').attr({transition:'opacity .15s linear'}).appendTo($('#modify_cmm_'+x.no))
							})
						})
					)
					.append(
						$('<a role="button"/>').addClass('badge orange').attr({style:'margin:10px;font-size:18px','data-toggle':'modal','data-target':'#modalDeleteForm'}).html('삭제').click(e=>{
							alert('모달삭제')
							$.getScript($.script()+'/ui/y_item_comment.js',()=>{
								yoonho.contain.commentDel(y_item_cDelUI());//
							})
						})
					)
				)
		
		
		
		return $list;
		
	}
	var commentUpdat =()=>{
		return $('<div/>').attr({id:'updat_div'})
		.append(
				$('<section/>').addClass('my-5')
				.append(
					$('<div/>').addClass('form-group mt-4')
					.append(
						$('<label/>').attr({'for':'quickReplyFormComment'}).html('comment 수정')
					)
					.append(
						$('<textarea/>').addClass('form-control').attr({style:'resize: none','id':'item_r_comment','rows':'5','cols':'105'})
					)
					.append(
						$('<div/>').addClass('text-center my-4')
						.append(
							$('<button/>').addClass('btn btn-warning btn-sm').attr({'type':'submit'}).html('SUBMIT')
							.click(e=>{
								alert('게시글이 수정되었습니다^^')
								/*$.ajax({
									url:'',
									method:'',
									contentType:'application/json',
									data:JSON.stringify({
										
									}),
									success:d=>{
										alert('게시글이 등록되었습니다.'+d)
									},
									error:(m1,m2,m3)=>{
										
									}
								})*/
								$('#updat_div').remove()
							})
						)
					)
				)
			);
	}
	var commentDel =()=>{
		
	}
	return {layout:layout,
			carousel:carousel,
			modal:modal,
			commentWrite:commentWrite,
			commentList:commentList,
			commentUpdat:commentUpdat,
			commentDel:commentDel};
})();
