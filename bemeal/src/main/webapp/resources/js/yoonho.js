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
				+'<p class="grey-text text-center w-responsive mx-auto mb-5">다양한 메뉴를 즐겨보세요 </p>')
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
			//이게 가장 맨처음 보이는 화면
			row(d.listsm)//.appendTo($('#yh_container'))
			$('#brand_menu').change(()=>{
				$('#yh_container').empty();
				$brand_menu = brand_arr[$("#brand_menu").val()]
				$.getJSON($.ctx()+'/item/list/'+$brand_menu+'/'+$category_menu+'/'+$sort_menu,d=>{
					var page = 1;
						row(d.listsm)
						page++;
					//row().appendTo($('#yh_container'))	
				})
			})//메뉴카테고리
			$('#category_menu').change(()=>{
				$('#yh_container').empty();
				$category_menu = category_arr[$("#category_menu").val()]
				$.getJSON($.ctx()+'/item/list/'+$brand_menu+'/'+$category_menu+'/'+$sort_menu,d=>{
						row(d.listsm)
				})
			})//브랜드
			$('#sort_menu').change(()=>{
				$('#yh_container').empty();
				$sort_menu = sort_arr[$("#sort_menu").val()]
				alert('#sort_menu option:selected:'+$('#sort_menu').val())
				$.getJSON($.ctx()+'/item/list/'+$brand_menu+'/'+$category_menu+'/'+$sort_menu,d=>{
						row(d.listsm)
				})
				alert('#sort_menu option:selected:'+$('#sort_menu option:selected').val());
			})//정렬
		})
		//같은 getJSON이지만 묶어서 놓게 되면 오류발생 수정할 수 있게되면 할 것.
			
		return $content;
	};
	var row=x=>{
		$('#yh_container').empty();
		let titles = [];
		let length = x.length
		//console.log('x::length:'+x.length)

		let $window = $(window);
		let $document = $(document);
		let page=1;
		if(page<2){
			for(var i = 0; i<2;i++){
				loadedPage({
					length:length,
					page:i,
					arr:x
				})
			}
			//console.log('loadedPage::page:'+page)
			page++
		}
			let flag = true;
			$window.on('scroll.category',()=>{
				if(flag&&$window.scrollTop()+$window.height()+30>$document.height()){
					flag=false;
					setTimeout(() => {
						loadedPage({
							length:length,
							page:page++,//++
							arr:x
						});
						flag = true;
					}, 600);
				}
			})
	};
	var loadedPage=x=>{
		//console.log('x.length / x.page : '+x.length+'/'+x.page);
		let $section;
		let $div_row;
		let $div_col;
		let $div_card;
		let $div_view_zoom;
		let $div_a_p;
		let index=x.page*6;
		$.getJSON($.ctx()+'/item/pagi/'+x.length*1+'/'+(x.page+""),d=>{
			$section = $('<section align="left"/>').addClass('text-center my-5').appendTo($('#yh_container'))//.attr({style:'font-family: \'Sunflower\', sans-serif;'})
			if(d.pagi.existNext){
				//console.log('d.pagi::'+Object.keys(d.pagi)+'/'+d.pagi.beginRow+'/'+d.pagi.endRow)
				$div_row = $('<div/>').addClass('row').appendTo($section).attr({id:'div_row',style:'justify-content:left;'})
				for(var j = d.pagi.beginRow;j<=d.pagi.endRow;j++,index++){
					if(index<d.pagi.count){
						$div_col = $('<div/>').addClass('col-lg-2 col-md-2 mb-lg-0 mb-2').appendTo($div_row).attr({style:'max-width:100%;max-height:100%;text-align:center'})
						$div_card = $('<div/>').addClass('card collection-card z-depth-1-half').appendTo($div_col)
						//console.log('x.valueOf():'+Object.keys(x.length))
						$div_view_zoom = $('<div/>').addClass('view zoom').appendTo($div_card)
												.append(
													$('<img/>').addClass('img-fluid').attr({href:'#','data-seq':x.arr[index].itemSeq,src:x.arr[index].img}).click(e=>{
														e.preventDefault();
														//console.log('e.currentTarget'+e.currentTarget.dataset.seq)
														yoonho.service.retrieve(e.currentTarget.dataset.seq)
													})
												)
						$div_a_p = $('<div/>').addClass('stripe dark').appendTo($div_card)
										.append($('<a/>').append($('<p/>').html(x.arr[index].itemName).append($('<i/>').addClass('fa fa-angle-right').html(x.arr[index].price+' 원'))))
						//console.log('밑 index값')
						//console.log(index)
						//console.log(d.pagi.count)
					}else if(index>=d.pagi.count){
						//나머지 한 페이지(6으로 나눈 뒤 나머지 값들)
						//$div_col.attr({style:'visibility:hidden;'})
						$(window).off('scroll.category');
						break;
					}
				}
			}
			//console.log(d.pagi);
		})
		//return $div_col;
	};

	var retrieve = x=>{
		$.getJSON($.ctx()+'/item/retrieve/'+x,d=>{
			//console.log('d.retrieve[0]::'+d.retrieve[0].itemSeq+'//d.rtag[0]::'+d.rtag[0].TAG_NAME)
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
				//alert('$(\'#code\').val()'+$('#code').val());
			});
		})
		return false;
	};
	var popup =x=>{//x:itemSeq
		let rtrv = x.retrieve[0]
		
		//modal main  
		let $div1 = $('<div/>').attr({id:'y_item_detailUI'}).addClass('container yh-mfp-wrap yh-white-popup')//             .attr({style:'font-family: \'Sunflower\', sans-serif;'});
		let $div2 = $('<div/>').addClass('mfp-container detail-main')//
					.append($('<span/>').addClass('col')
						.append($('<img/>').attr({src:rtrv.img}).addClass('rounded y_img_popup')))
		.appendTo($div1);// div2 end
		
	
		let $div3 = $('<div/>').addClass('text-left')
						.appendTo($div2);
		$(()=>{$('[data-toggle="tooltip"]').tooltip()})
		let $div4 = $('<div/>').addClass('mg0a').appendTo($div3);//  결제하기/선물하기/위시리스트
		let $div5 = $('<div/>').addClass('col-lg-8 text-center').attr({style:'margin-top: -300px;'})
		.append($('<button/>').html('장바구니').addClass('btn btn-warning').attr({style:'font-size:16px;', 'data-toggle':'collapse' , 'href':'#det_cart_btn' , 'role':'button' , 'aria-expanded':'false','aria-controls':'det_cart_btn'}))
		.append($('<button/>').html('결제하기').addClass('btn btn-warning').attr({style:'font-size:16px;', 'data-toggle':'collapse' , 'href':'#det_pay_btn' , 'role':'button' , 'aria-expanded':'false','aria-controls':'det_pay_btn'}))
		.append($('<button/>').html('선물하기').addClass('btn btn-warning').attr({style:'font-size:16px;', 'data-toggle':'collapse' , 'href':'#det_gift_btn' , 'role':'button' , 'aria-expanded':'false','aria-controls':'det_gift_btn'}))
		.append($('<button/>').html('추천 도시락').addClass('btn btn-warning').attr({style:'font-size:16px;', 'data-toggle':'collapse' , 'href':'#det_recom_btn' , 'role':'button' , 'aria-expanded':'false','aria-controls':'det_recom_btn'}))
		.appendTo($div4)
		
		
		var $col_cart = $('<div/>').addClass('row')
						.append(
							$('<div/>').addClass('col')
							.append(
								$('<div/>').addClass('collapse').attr({id:'det_cart_btn'})
								.append(
									$('<div/>').addClass('card card-body')
									.append(
										yoonho.contain.cart({rtrv:rtrv})//.appendTo($('#cart_card_body'))
									)
								)
								.append(
									$('<button/>').html('장바구니 추가').addClass('btn btn-outline-warning').attr({style:'font-size:16px;',type:'submit'})
									.click(e=>{
										var $item_cart_iptbx = $('#item_cart_iptbx').val()
										if($.cookie('member')==null){
											alert('로그인하세요.')
										}else if($.cookie('member')!=null){
											//rtrv.imgSeq,rtrv.itemName,rtrv.img,rtrv.price,rtrv.calorie,rtrv.category,rtrv.explains,rtrv.brand,rtrv.itemSeq
											rtrv['quantityC']=$item_cart_iptbx
											$.magnificPopup.close();
											$.getScript($.script()+'/kaeun.js',()=>{
												kaeun.main.init();
								                console.log('rtrv.quantityC밑에 뜸')
								                console.log(rtrv.quantityC)
												kaeun.payment.putTaste({
																		itemSeq:rtrv.itemSeq,
																		quantity:rtrv.quantityC,
																		flag:'cart'
																		});
												kaeun.ui.cart();
											})
										}
									})
								)
							)
						).appendTo($div5)
						
		var $col_pay = $('<div/>').addClass('row')
						.append(
							$('<div/>').addClass('col')
							.append(
								$('<div/>').addClass('collapse').attr({id:'det_pay_btn'})
								.append(
									$('<div/>').addClass('card card-body')
									.append(
										yoonho.contain.pay({rtrv:rtrv})//.appendTo($('#cart_card_body'))
									)
								)
								.append(
									$('<button/>').html('결제하기').addClass('btn btn-outline-warning').attr({style:'font-size:16px;',type:'submit'})
									.click(e=>{
										var $item_pay_iptbx = $('#item_pay_iptbx').val()
										if($.cookie('member')==null){
											alert('로그인하세요.')
										}else if($.cookie('member')!=null){
											//rtrv.imgSeq,rtrv.itemName,rtrv.img,rtrv.price,rtrv.calorie,rtrv.category,rtrv.explains,rtrv.brand,rtrv.itemSeq
											rtrv['quantityP']=$item_pay_iptbx
											$.magnificPopup.close();//팝업창 끄는 효과 //우리는 멀티팝업 띄워야 함.
											$.getScript($.script()+'/kaeun.js',()=>{
												if(confirm('해당상품을 구매하시겠습니까?')){
										               let payList =  [{itemSeq:rtrv.itemSeq,
										                       quantity:rtrv.quantityP,
										                       itemName:rtrv.itemName,
										                       price:rtrv.price,
										                       explains:rtrv.explains,
										                       img:rtrv.img}];
										               console.log('pay의 paylist 밑에 뜸')
										               console.log(payList)
										               let delList = null;
										               kaeun.main.init();
										               kaeun.payment.purchase({payList:payList,delList:delList});
										               kaeun.payments.payHis();
												}else{}
											})
										}
									})
								)
							)
						).appendTo($div5)
						
		var $col_gift = $('<div/>').addClass('row')
						.append(
							$('<div/>').addClass('col')
							.append(
								$('<div/>').addClass('collapse').attr({id:'det_gift_btn'})
								.append(
									$('<div/>').addClass('card card-body')
									.append(
										yoonho.contain.gift({rtrv:rtrv})
									)
								)
								.append(
									$('<button/>').html('선물하기').addClass('btn btn-outline-warning').attr({style:'font-size:16px;',type:'submit'})
									.click(e=>{
										var $item_gift_iptbx = $('#item_gift_iptbx').val()
										if($.cookie('member')==null){
											alert('로그인하세요.')
										}else if($.cookie('member')!=null){
											//rtrv.imgSeq,rtrv.itemName,rtrv.img,rtrv.price,rtrv.calorie,rtrv.category,rtrv.explains,rtrv.brand,rtrv.itemSeq
											rtrv['quantityG']=$item_gift_iptbx
											$.magnificPopup.close();//팝업창 끄는 효과 //우리는 멀티팝업 띄워야 함.
											$.getScript($.script()+'/kaeun.js',()=>{
												if(confirm('해당상품을 선물하시겠습니까?')){
										               let payList =  [{itemSeq:rtrv.itemSeq,
										                       quantity:rtrv.quantityG,
										                       itemName:rtrv.itemName,
										                       price:rtrv.price,
										                       explains:rtrv.explains,
										                       img:rtrv.img}];
										               console.log('gift의 paylist 밑에 뜸')
										               console.log(payList)
										               let delList = null;
										               kaeun.main.init();
										               kaeun.payment.giftPopup({payList:payList,delList:delList});
										               kaeun.ui.gift();
										              }else{}
											})
										}
									})
								)
							)
						).appendTo($div5)
						
						
		let detail_arr = ["당신이 좋아할 만한 도시락","20대가 많이 구매한 도시락","신제품 도시락","베스트셀러"];
		let $col_recommend = $('<div/>').addClass('row')
				.append(
					$('<div/>').addClass('col')
					.append(
						$('<div/>').addClass('collapse').attr({id:'det_recom_btn'})
						.append(
							$('<div/>').addClass('card card-body').attr({id:'det_recom_btn_te'})
							/*.append(
								yoonho.contain.recommend()
							)*/
						)
					)
				).appendTo($div5)
				
				
				$.getScript($.script()+'/ui/y_item_carousel.js',x=>{
					if($.cookie('member')!=null){
						var memid= $.cookie('member').memberId
					}else if($.cookie('member')==null){
						var memid= 'test2'
					}
					$.getJSON($.ctx()+'/item/recommend/'+memid+'/'+rtrv.itemSeq,()=>{
						$('<div/>').html(y_item_carouselUI(rtrv)).appendTo($('#det_recom_btn_te'))
					})
				})
		
		let $div4_1 = $('<div/>').attr({id:'div4_1'}).addClass('col-lg-8 mgt50-mgb100').appendTo($div3)

		//commentbox1,2write:create
		let $div5_1 = $('<div/>').addClass('single_comment_area').appendTo($div4_1);
		let $section6_1 = yoonho.contain.commentWrite({itemSeq:rtrv.itemSeq}).appendTo($div5_1);
		
		//comment list:Read Update Delete
		$.getJSON($.ctx()+'/brd/read/'+rtrv.itemSeq,d=>{
			let $section6_2 = $('<section/>').addClass('my-5').appendTo($div5_1).attr({id:'section6_2'})
						.append($('<div/>').addClass('card-header border-0 font-weight-bold').html('comments'))
						
									$.each(d.read,(i,j)=>{
										//console.log('j::'+j.memberId)
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
				emptyColor : 'grey',
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
					$('<div/>').attr({style:'margin:10px;font-size:12px'}).addClass('badge badge-danger').html(j.TAG_FLAG+'#'+j.TAG_NAME).appendTo($tag);
				}else if(j.TAG_FLAG=='감성'){
					$('<div/>').attr({style:'margin:10px;font-size:12px'}).addClass('badge badge-info').html(j.TAG_FLAG+'#'+j.TAG_NAME).appendTo($tag);
				}else if(j.TAG_FLAG=='재료'){
					$('<div/>').attr({style:'margin:10px;font-size:12px'}).addClass('badge badge-success').html(j.TAG_FLAG+'#'+j.TAG_NAME).appendTo($tag);
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
			let $aNav_crd_hd_t_a = $('<a href="#collapse96"/>').html('도시락 정보').addClass('white-text font-weight-bold').attr({'data-toggle':'collapse', 'aria-expanded':'true', 'aria-controls':'collapse96'}).appendTo($aNav_crd_hd_t)
			
			let $aNav_crd_ctn = $('<div/>').addClass('collapse show').attr({'id':'collapse96','role':'tabpanel','aria-labelledby':'heading96','data-parent':'#accordionEx23'}).appendTo($aNav_crd)
			let $aNav_crd_ctn_bd = $('<div/>').addClass('card-body').appendTo($aNav_crd_ctn)
			let $aNav_crd_ctn_r = $('<div/>').addClass('row my-4').appendTo($aNav_crd_ctn_bd)
			
			let $aNav_crd_ctn_c = $('<div/>').addClass('col-md-12').appendTo($aNav_crd_ctn_r)
			//md-accordion accordion-1 end
			
			let $tbl6_5 = $('<div/>').addClass('row').appendTo($aNav_crd_ctn_c)
			let $tbody7_5 = $('<div/>').html('업체').addClass('col-sm text-left mgt10-mgb10').attr({style:'font-weight: bold;'}).appendTo($tbl6_5)
			let $tbody7_5_1 = $('<div/>').html(rtrv.brand).addClass('col-sm  mgt10-mgb10').appendTo($tbl6_5)

			
			let $tbl6_6 = $('<div/>').addClass('row').appendTo($aNav_crd_ctn_c)
			let $tbody7_6 = $('<div/>').html('칼로리').addClass('col-sm text-left mgt10-mgb10').attr({style:'font-weight: bold;'}).appendTo($tbl6_6)
			let $tbody7_6_1 = $('<div/>').html(rtrv.calorie+' Kcal').addClass('col-sm  mgt10-mgb10').appendTo($tbl6_6)
			
			let $tbl6_7 = $('<div/>').addClass('row').appendTo($aNav_crd_ctn_c)
			let $tbody7_7 = $('<div/>').html('가격').addClass('col-sm text-left mgt10-mgb10').attr({style:'font-weight: bold;'}).appendTo($tbl6_7)
			let $tbody7_7_1 = $('<div/>').html(rtrv.price+' 원').addClass('col-sm mgt10-mgb10').attr({style:'font-weight: bold;'}).appendTo($tbl6_7)
			
			
			let $tbl6_9 = $('<div/>').addClass('row')
							.appendTo($aNav_crd_ctn_c)
			let $tbody7_9 = $('<div/>').append($('<p/>').attr({style:'font-size:14px;'}).html(rtrv.explains)).addClass('col-sm text-left mgt10-mgb10').appendTo($tbl6_9)

		return $div1;
	};

	return {
		list:list,
		row:row,
		loadedPage:loadedPage,
		retrieve:retrieve,
		popup:popup
	};
})();


yoonho.contain=(x=>{
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
		return false;
	};
	var cart=x=>{
		let $cart;
		$cart=$('<table/>').addClass('table')
				.append(
					$('<thead/>').attr({id:'cart_thead'})
					.append(
						$('<tr/>')
						.append($('<th/>').append($('<i/>').addClass('fa fa-edit mr-2 ').attr({'aria-hidden':'true',style:'font-weight: bold;'}).html('제품 이름') ))//deep-purple-text
						.append($('<th/>').append($('<i/>').addClass('fa fa-table mr-2  ').attr({'aria-hidden':'true',style:'font-weight: bold;'}).html('금액') ))//blue-text
						.append($('<th/>').append($('<i/>').addClass('fa fa-diamond mr-2').attr({'aria-hidden':'true',style:'font-weight: bold;'}).html('도시락 종류') ))//teal-text
						.append($('<th/>').append($('<i/>').addClass('fa fa-house mr-2').attr({'aria-hidden':'true',style:'font-weight: bold;'}).html('도시락 업체') ))// green-text
						.append($('<th/>').append($('<i/>').addClass('fa fa-download mr-2').attr({'aria-hidden':'true',style:'font-weight: bold;'}).html('제품 수량') ))// indigo-text
					)
				)
				.append(
					$('<tbody/>')
					.append(
						$('<tr/>')
						.append($('<th/>').append($('<i/>').addClass('fa grey-text').attr({'aria-hidden':'true'}).html(x.rtrv.itemName) ))
						.append($('<th/>').append($('<i/>').addClass('fa grey-text').attr({'aria-hidden':'true'}).html(x.rtrv.price) ))
						.append($('<th/>').append($('<i/>').addClass('fa grey-text').attr({'aria-hidden':'true'}).html(x.rtrv.category) ))
						.append($('<th/>').append($('<i/>').addClass('fa grey-text').attr({'aria-hidden':'true'}).html(x.rtrv.brand) ))
						.append($('<th/>').append($('<input type="number" value="1" aria-label="Search" class="form-control" style="width: 70px">').attr({id:'item_cart_iptbx'})
								.on('change', ()=> {
							    	$('#input_res_bx').html( ($('#item_cart_iptbx').val()*1) * (x.rtrv.price*1) +' 원')
							    })))
					)
					.append(
						$('<tr/>')
						.append($('<th/>').append($('<i/>').addClass('fa grey-text').attr({'aria-hidden':'true'}) ))
						.append($('<th/>').append($('<i/>').addClass('fa grey-text').attr({'aria-hidden':'true'}) ))
						.append($('<th/>').append($('<i/>').addClass('fa grey-text').attr({'aria-hidden':'true'}) ))
						.append($('<th/>').append($('<i/>').addClass('fa grey-text').attr({'aria-hidden':'true',style:'font-weight: bold;font-size:24px;'}).html('총 금액') ))
						.append($('<th/>').append($('<i/>').addClass('fa ').attr({'aria-hidden':'true',id:'input_res_bx',style:'font-weight: bold;font-size:20px;'}) ))
					)
				)
		return $cart;
	};
	var gift=x=>{
		let $gift;
		$gift=$('<table/>').addClass('table')
				.append(
					$('<thead/>').attr({id:'gift_thead'})
					.append(
						$('<tr/>')
						.append($('<th/>').append($('<i/>').addClass('fa fa-edit mr-2 ').attr({'aria-hidden':'true',style:'font-weight: bold;'}).html('제에품이름') ))//deep-purple-text
						.append($('<th/>').append($('<i/>').addClass('fa fa-table mr-2  ').attr({'aria-hidden':'true',style:'font-weight: bold;'}).html('금액') ))//blue-text
						.append($('<th/>').append($('<i/>').addClass('fa fa-diamond mr-2').attr({'aria-hidden':'true',style:'font-weight: bold;'}).html('도시락 종류') ))//teal-text
						.append($('<th/>').append($('<i/>').addClass('fa fa-house mr-2').attr({'aria-hidden':'true',style:'font-weight: bold;'}).html('도시락 업체') ))// green-text
						.append($('<th/>').append($('<i/>').addClass('fa fa-download mr-2').attr({'aria-hidden':'true',style:'font-weight: bold;'}).html('제품 수량') ))// indigo-text
					)
				)
				.append(
					$('<tbody/>')
					.append(
						$('<tr/>')
						.append($('<th/>').append($('<i/>').addClass('fa grey-text').attr({'aria-hidden':'true'}).html(x.rtrv.itemName) ))
						.append($('<th/>').append($('<i/>').addClass('fa grey-text').attr({'aria-hidden':'true'}).html(x.rtrv.price) ))
						.append($('<th/>').append($('<i/>').addClass('fa grey-text').attr({'aria-hidden':'true'}).html(x.rtrv.category) ))
						.append($('<th/>').append($('<i/>').addClass('fa grey-text').attr({'aria-hidden':'true'}).html(x.rtrv.brand) ))
						.append($('<th/>').append($('<input type="number" value="1" aria-label="Search" class="form-control" style="width: 70px">').attr({id:'item_gift_iptbx'})
								.on('change', ()=> {
							    	$('#input_gift_res_bx').html( ($('#item_gift_iptbx').val()*1) * (x.rtrv.price*1) +' 원')
							    })))
					)
					.append(
						$('<tr/>')
						.append($('<th/>').append($('<i/>').addClass('fa grey-text').attr({'aria-hidden':'true'}) ))
						.append($('<th/>').append($('<i/>').addClass('fa grey-text').attr({'aria-hidden':'true'}) ))
						.append($('<th/>').append($('<i/>').addClass('fa grey-text').attr({'aria-hidden':'true'}) ))
						.append($('<th/>').append($('<i/>').addClass('fa grey-text').attr({'aria-hidden':'true',style:'font-weight: bold;font-size:24px;'}).html('총 금액') ))
						.append($('<th/>').append($('<i/>').addClass('fa ').attr({'aria-hidden':'true',id:'input_gift_res_bx',style:'font-weight: bold;font-size:20px;'}) ))
					)
				)
		return $gift;
	};
	var pay=x=>{
		let $pay;
		$pay=$('<table/>').addClass('table')
				.append(
					$('<thead/>').attr({id:'pay_thead'})
					.append(
						$('<tr/>')
						.append($('<th/>').append($('<i/>').addClass('fa fa-edit mr-2 ').attr({'aria-hidden':'true',style:'font-weight: bold;'}).html('제품 이름') ))//deep-purple-text
						.append($('<th/>').append($('<i/>').addClass('fa fa-table mr-2  ').attr({'aria-hidden':'true',style:'font-weight: bold;'}).html('금액') ))//blue-text
						.append($('<th/>').append($('<i/>').addClass('fa fa-diamond mr-2').attr({'aria-hidden':'true',style:'font-weight: bold;'}).html('도시락 종류') ))//teal-text
						.append($('<th/>').append($('<i/>').addClass('fa fa-house mr-2').attr({'aria-hidden':'true',style:'font-weight: bold;'}).html('도시락 업체') ))// green-text
						.append($('<th/>').append($('<i/>').addClass('fa fa-download mr-2').attr({'aria-hidden':'true',style:'font-weight: bold;'}).html('제품 수량') ))// indigo-text
					)
				)
				.append(
					$('<tbody/>')
					.append(
						$('<tr/>')
						.append($('<th/>').append($('<i/>').addClass('fa grey-text').attr({'aria-hidden':'true'}).html(x.rtrv.itemName) ))
						.append($('<th/>').append($('<i/>').addClass('fa grey-text').attr({'aria-hidden':'true'}).html(x.rtrv.price) ))
						.append($('<th/>').append($('<i/>').addClass('fa grey-text').attr({'aria-hidden':'true'}).html(x.rtrv.category) ))
						.append($('<th/>').append($('<i/>').addClass('fa grey-text').attr({'aria-hidden':'true'}).html(x.rtrv.brand) ))
						.append($('<th/>').append($('<input type="number" value="1" aria-label="Search" class="form-control" style="width: 70px">').attr({id:'item_pay_iptbx'})
								.on('change', ()=> {
							    	$('#input_pay_res_bx').html( ($('#item_pay_iptbx').val()*1) * (x.rtrv.price*1) +' 원')
							    })))
					)
					.append(
						$('<tr/>')
						.append($('<th/>').append($('<i/>').addClass('fa grey-text').attr({'aria-hidden':'true'}) ))
						.append($('<th/>').append($('<i/>').addClass('fa grey-text').attr({'aria-hidden':'true'}) ))
						.append($('<th/>').append($('<i/>').addClass('fa grey-text').attr({'aria-hidden':'true'}) ))
						.append($('<th/>').append($('<i/>').addClass('fa grey-text').attr({'aria-hidden':'true',style:'font-weight: bold;font-size:24px;'}).html('총 금액') ))
						.append($('<th/>').append($('<i/>').addClass('fa ').attr({'aria-hidden':'true',id:'input_pay_res_bx',style:'font-weight: bold;font-size:20px;'}) ))
					)
				)
		return $pay;
	};
	var recommend =x=>{
		return $('<div data-ride="carousel"/>').addClass('carousel slide carousel-fade').attr({id:'carousel-example-2'})//,'data-ride':'carousel'
						.append(
							$('<ol/>').addClass('carousel-indicators')
							.append($('<li/>').addClass('active').attr({'data-target':'#carousel-example-2', 'data-slide-to':'0'}))
							.append($('<li/>').attr({'data-target':'#carousel-example-2', 'data-slide-to':'1'}))
							.append($('<li/>').attr({'data-target':'#carousel-example-2', 'data-slide-to':'2'}))
						)
						.append(
							$('<div/>').addClass('carousel-inner').attr({'role':'listbox'})
							.append(
								$('<div/>').addClass('carousel-item active')
								.append(
									$('<div/>').addClass('view')
									.append(
										$('<img/>').addClass('d-block w-100').attr({'src':'https://mdbootstrap.com/img/Photos/Slides/img%20(68).jpg', 'alt':'First slide'})
									)
									.append(
										$('<div/>').addClass('mask rgba-black-light')
									)
								)
								.append(
									$('<div/>').addClass('carousel-caption')
									.append(
										$('<h3/>').addClass('h3-responsive').html('Light Mask')
									)
									.append(
										$('<p/>').html('First text')
									)
								)
							)
							.append(
								$('<div/>').addClass('carousel-item')
								.append(
									$('<div/>').addClass('view')
									.append(
										$('<img/>').addClass('d-block w-100').attr({'src':'https://mdbootstrap.com/img/Photos/Slides/img%20(6).jpg','alt':'Second slide'})	
									)
									.append(
										$('<div/>').addClass('mask rgba-black-strong')
									)
								)
								.append(
									$('<div/>').addClass('carousel-caption')
									.append(
										$('<h3/>').addClass('h3-responsive').html('Strong mask')
									)
									.append(
										$('<p/>').addClass('h3-responsive').html('Secondary text')
									)
								)
							)
							.append(
								$('<div/>').addClass('carousel-item')
								.append(
									$('<div/>').addClass('view')
									.append(
										$('<img/>').addClass('d-block w-100').attr({'src':'https://mdbootstrap.com/img/Photos/Slides/img%20(9).jpg','alt':'Third slide'})	
									)
									.append(
										$('<div/>').addClass('mask rgba-black-slight')
									)
								)
								.append(
									$('<div/>').addClass('carousel-caption')
									.append(
										$('<h3/>').addClass('h3-responsive').html('Slight mask')
									)
									.append(
										$('<p/>').addClass('h3-responsive').html('Third text')
									)
								)
							)
						)
						.append(
							$('<a/>').addClass('carousel-control-prev').href('#carousel-example-2').role('button').attr({'data-slide':'prev'})
							.append(
								$('<span/>').addClass('carousel-control-prev-icon').attr({'aria-hidden':'true'})
							)
							.append(
								$('<span/>').addClass('sr-only').html('Previous')
							)
						)
						.append(
							$('<a/>').addClass('carousel-control-prev').href('#carousel-example-2').role('button').attr({'data-slide':'next'})
							.append(
								$('<span/>').addClass('carousel-control-prev-icon').attr({'aria-hidden':'true'})
							)
							.append(
								$('<span/>').addClass('sr-only').html('Next')
							)
						)
	};
	var commentWrite=x=>{
		return $('<div/>')
		.append(
				$('<section/>').addClass('my-5')
				.append(
					$('<div/>').addClass('md-form mt-4')
					.append(
						$('<textarea/>').addClass('md-textarea form-control').attr({style:'resize: none','id':'item_r_comment','rows':'5','cols':'105'})
					)
					.append(
						$('<label/>').attr({'for':'item_r_comment'}).html('Your comment')
					)
					.append(
						$('<div/>').addClass('text-center my-4')
						.append(
							$('<button/>').addClass('btn btn-outline-warning btn-sm').attr({id:'cmt_write','type':'submit',style:'font-size:16px;'}).html('글쓰기')
							.click(e=>{
								if($.cookie("member")!=null){
									$.ajax({
										url:$.ctx()+'/brd/write',
										method:'POST',
										contentType:'application/json',
										data:JSON.stringify({
												content:$('#item_r_comment').val(),
												memberId:$.cookie("member").memberId,
												itemSeq:x.itemSeq
										}),
										success:d=>{
											yoonho.contain.commentList(d.write[d.write.length-1]).attr({id:'modify_btn_'+d.write[d.write.length-1].articleSeq}).appendTo($('#section6_2'))
											$('#item_r_comment').val('')
										},
										error:(m1,m2,m3)=>{
											alert('게시글등록 실패'+m3)
										}
									})
								}else if($.cookie("member")==null){
									alert('로그인하세요')
								}
								
							})
						)
					)
				)
			);
	};
	var commentList =x=>{
		//console.log('commentList x:'+x.memberId)
		let $list;
			if($.cookie("member")==null){
				$list = $('<div/>').addClass('media d-block d-md-flex mt-4').attr({id:'cmm_'+x.articleSeq})
				.append(
					$('<img/>').addClass('card-img-64 d-flex mx-auto mb-3 rounded-circle').attr({'src':x.img,'alt':'Generic placeholder image'})
				)
				.append(
					$('<div/>').addClass('media-body text-center text-md-left ml-md-3 ml-0').attr({id:'m_u_btn_'+x.articleSeq})
					.append(
							$('<a/>').addClass('font-weight-bold mt-0').attr({style:'font-size:18px;color:#007bff;'}).html(x.memberId).click(e=>{alert('회원retrieve')})//정훈정훈한테 물어보고 memberRetrieve 없으면 h4태그로 바꿀것
					)
					.append(
						 	$('<h6/>').html(x.content+'/작성시간:'+x.ARTICLE_TIME)
					)
				)
			}else if($.cookie("member")!=null){
				$list = $('<div/>').addClass('media d-block d-md-flex mt-4').attr({id:'cmm_'+x.articleSeq})
				.append(
					$('<img/>').addClass('card-img-64 d-flex mx-auto mb-3 rounded-circle').attr({'src':x.img,'alt':'Generic placeholder image'})
				)
				
				let $in_list = $('<div/>').addClass('media-body text-center text-md-left ml-md-3 ml-0').attr({id:'m_u_btn'})
								.append(
										$('<a/>').addClass('font-weight-bold mt-0').attr({style:'font-size:18px;color:#007bff;'}).html(x.memberId).click(e=>{alert('회원retrieve')})//정훈정훈한테 물어보고 memberRetrieve 없으면 h4태그로 바꿀것
								)
								.append(
									 	$('<h6/>').html(x.content+'/작성시간:'+x.ARTICLE_TIME)
								).appendTo($list)
				if($.cookie("member").memberId==x.memberId){
					let $a_update=$('<a role="button"/>').addClass('btn btn-outline-warning btn-sm').attr({id:'update_btn_'+x.articleSeq,style:'margin:10px;font-size:14px','data-toggle':'modal','data-target':'#modalModifyForm'}).html('수정').click(e=>{
							if($('#remove_div')==null || $('#updat_div')==null){
								yoonho.contain.commentUpdat(x).addClass('opacity .15s linear').attr({transition:'opacity .15s linear'}).appendTo($in_list)//$('#modify_btn_'+x.articleSeq)	
							}else if($('#remove_div')!=null || $('#updat_div')!=null){
								$('#remove_div').remove();
								$('#updat_div').remove();
								yoonho.contain.commentUpdat(x).addClass('opacity .15s linear').attr({transition:'opacity .15s linear'}).appendTo($in_list)//$('#modify_btn_'+x.articleSeq)	
							}
							
					}).appendTo($in_list)
					let $a_delete=$('<a role="button"/>').addClass('btn btn-outline-warning btn-sm').attr({id:'delete_btn_'+x.articleSeq,style:'margin:10px;font-size:14px','data-toggle':'modal','data-target':'#modalDeleteForm'}).html('삭제').click(e=>{
							if($('#remove_div')==null || $('#updat_div')==null){
								yoonho.contain.commentDel(x).appendTo($in_list);
							}else if($('#remove_div')!=null || $('#updat_div')!=null){
								$('#remove_div').remove();
								$('#updat_div').remove();
								yoonho.contain.commentDel(x).appendTo($in_list);
							}
					}).appendTo($in_list)
				}
			}
		return $list;
	}

	var commentUpdat =x=>{

		return $('<div/>').attr({id:'updat_div'})
		.append(
				$('<section/>').addClass('my-5')
				.append(
					$('<div/>').addClass('md-form mt-4')
					.append(
						$('<textarea/>').addClass('md-textarea form-control').attr({style:'resize: none','id':'item_u_comment','rows':'5','cols':'105'})
					)
					.append(
						$('<label/>').attr({'for':'item_u_comment'}).html('Update Comment')
					)
					.append(
						$('<div/>').addClass('text-center my-4')
						.append(
							$('<button/>').addClass('btn btn-outline-warning btn-sm').attr({'type':'submit',style:'font-size:16px;'}).html('수정')
							.click(e=>{
								if($.cookie("member")!=null){
									$.ajax({
										url:$.ctx()+'/brd/modify',
										method:'POST',
										contentType:'application/json',
										data:JSON.stringify({
											content:$('#item_u_comment').val(),
											memberId:$.cookie("member").memberId,
											itemSeq:x.itemSeq,
											articleSeq:x.articleSeq
										}),
										success:d=>{
											alert('게시글이 수정되었습니다.')
											$('#cmm_'+x.articleSeq).empty();
											$('#cmm_'+x.articleSeq).html(yoonho.contain.commentList(d.modify[0]))
										},
										error:(m1,m2,m3)=>{
											alert('본인의 게시물이 아닙니다.'+m3)
										}
									})
								}else if($.cookie("member")==null){
									alert('본인의 게시물이 아닙니다.')
								}
								$('#updat_div').remove()
							})
						)
					)
				)
			);
	}
	var commentDel =x=>{//date,img,ARTICLE_TIME,title,articleSeq,itemSeq,content,url,memberId
		return 	$('<div/>').attr({id:'remove_div'})
					.append(
						$('<div/>').addClass('mb-1')
						.append(
							$('<p/>').attr({style:'font-size:18px;'}).addClass('mt-1 mb-2').html(x.memberId+'님의 게시물을 삭제합니다.')
						)
						.append(
							$('<div/>').addClass('md-form ml-0 mr-0')
							.append(
								$('<input/>').attr({'type':'password',id:'item_d_pw'}).addClass('form-control form-control-sm validate ml-0')
							)
							.append(
								$('<label/>').attr({'for':'item_d_pw'}).html('비밀번호를 입력하세요').addClass('ml-0')
							)
							.append(
								$('<div/>').addClass('text-center my-4')
								.append(
									$('<button/>').addClass('btn btn-outline-warning btn-sm').attr({'type':'submit',style:'font-size:16px;'}).html('삭제')
									.click(e=>{
										if($.cookie("member")!=null){
											$.ajax({
												url:$.ctx()+'/brd/delete',
												method:'POST',
												contentType:'application/json',
												data:JSON.stringify({
													memberId:$.cookie("member").memberId,
													password:$('#item_d_pw').val(),
													itemSeq:x.itemSeq,
													articleSeq:x.articleSeq
												}),
												success:d=>{
													alert('게시글이 삭제되었습니다..')
													//alert('d.articleSeq::'+d.modify[0].articleSeq)
													$('#cmm_'+x.articleSeq).remove();
													//$('#cmm_'+x.articleSeq).html(yoonho.contain.commentList(d.modify[0]))
												},
												error:(m1,m2,m3)=>{
													alert('비밀번호를 정확히 입력해주세요.'+m3)
												}
											})
										}else if($.cookie("member")==null){
											alert('본인의 게시물이 아닙니다.')
										}
										$('#updat_div').remove()
									})
								)
							)
						)
					);
				
	}
	return {modal:modal,
			cart:cart,
			pay:pay,
			gift:gift,
			recommend:recommend,
			commentWrite:commentWrite,
			commentList:commentList,
			commentUpdat:commentUpdat,
			commentDel:commentDel};
})();
