"use strict"
var kaeun = kaeun || {};
kaeun.main=(()=>{
	 var user;
     var init =()=>{  //session값 가져올꺼임
           onCreate(); 
     };
     var onCreate =()=>{  
           setContentView();
            
     };
     var setContentView =()=>{ 
    	 kaeun.ui.setLayout();
    	 kaeun.ui.main();
     };
     return {init:init};
})();


kaeun.ui = { 
		  main : ()=>{
    		//home화면
			  $('<div/>').attr({id:'main_menu'}).addClass("accordian").appendTo($('#k_content'));
			  let $ul = $('<ul/>').appendTo($('#main_menu'));
			  let $page1 = $('<li/>').attr({id:'page_1'}).appendTo($ul); 
			  let $title1 = $('<div/>').addClass("image_title").appendTo($('#page_1')); 
			 $('<a href="#"/>').append('장바구니').appendTo($title1)
			 				   .click(e=>{
			 					 
			 					});
			 $('<a href="#"/>').append(
					 $('<img/>').attr("src", "/web/resources/img/kaeun/k_main2.jpg")
					 .addClass("k_home_img")
					 ).appendTo($page1)
					 .click(e=>{
						 kaeun.ui.cart();
					 });
			 let $page2 = $('<li/>').appendTo($ul); 
			 let $title2 = $('<div/>').addClass("image_title").appendTo($page2); 
			 $('<a href="#"/>').append('구매함').appendTo($title2)
			 				   .click(e=>{
			 					 
			 					});
			 $('<a href="#"/>').append(
					 $('<img/>').attr("src", "/web/resources/img/kaeun/k_main5.jpeg")
					 .addClass("k_home_img")
					 ).appendTo($page2)
					 .click(e=>{
						 kaeun.ui.payHis();
					 });
			 let $page3 = $('<li/>').appendTo($ul); 
			  let $title3 = $('<div/>').addClass("image_title").appendTo($page3); 
			 $('<a href="#"/>').append('선물함').appendTo($title3)
			 				   .click(e=>{
			 					
			 					});
			 $('<a href="#"/>').append(
					 $('<img/>').attr("src", "/web/resources/img/kaeun/k_main4.jpeg")
					 .addClass("k_home_img")
					 ).appendTo($page3)
					 .click(e=>{
						  kaeun.ui.gift();
					 });
			 let $page4 = $('<li/>').appendTo($ul); 
			  let $title4 = $('<div/>').addClass("image_title").appendTo($page4); 
			 $('<a href="#"/>').append('취향분석').appendTo($title4)
			 				   .click(e=>{
			 					 
			 					});
			 $('<a href="#"/>').append(
					 $('<img/>').attr("src", "/web/resources/img/kaeun/k_main1.jpg")
					 .addClass("k_home_img")
					 ).appendTo($page4)
					 .click(e=>{
						 kaeun.tastes.chart_draw();
					 });
			 let $page5 = $('<li/>').appendTo($ul); 
			  let $title5 = $('<div/>').addClass("image_title").appendTo($page5); 
			 $('<a href="#"/>').append('콜렉션').appendTo($title5)
			 				   .click(e=>{
			 					  
			 					});
			 $('<a href="#"/>').append(
					 $('<img/>').attr("src", "/web/resources/img/kaeun/k_main3.jpeg")
					 .addClass("k_home_img")
					 ).appendTo($page5)
					 .click(e=>{
						 kaeun.tastes.collect();
					 });
			 
		  },
		  setLayout : ()=>{
			  $('header').remove();	
	       	   $('footer').remove();
	       	   $('#content').html(
	       			 ui.div({id:"k_biglot",clazz:"k_biglot"}).html(
	       			 ui.div({id:"k_leftlot",clazz:"k_leftlot"})
	       			  )
	       	   );
	       	   $('#k_biglot').append(
	   				ui.div({id:"k_contentlot",clazz:"k_contentlot"}),
	   				ui.div({id:"k_rightlot",clazz:"k_rightlot"})
	   		   );
	       	   $('#k_leftlot').append(
	       			  ui.div({id:"k_navi",clazz:"k_navi"}).html(
	       					  $('<div>').addClass("list-group").attr({id:'k_navi_menu'}).html(
	       							 ui.div({id:'k_home_btn',clazz:'navi_home'}).html('　<i class="fas fa-home"> HOME　</i>')	
	       					  )
	       			  )
	       	   )
	       	   $('#k_navi_menu').append(
	       			ui.div({id:"cart_btn",clazz:"button_base b01_simple_rollover"}).html('<i class="fas fa-shopping-cart"> 장바구니</i>'),
	       			ui.div({id:"payHis_btn",clazz:"button_base b01_simple_rollover"}).html('<i class="fas fa-credit-card">　구매함 </i>'),
	       			ui.div({id:"gift_btn",clazz:"button_base b01_simple_rollover"}).html('<i class="fas fa-gift">　선물함 </i>'),
	       			ui.div({id:"analysis_btn",clazz:"button_base b01_simple_rollover"}).html('<i class="fas fa-heart"> 취향분석</i>'),
	       			ui.div({id:"collect_btn",clazz:"button_base b01_simple_rollover"}).html('<i class="fas fa-thumbs-up">　콜렉션 </i>')/*,
	       			ui.div({id:"test_btn",clazz:"button_base b01_simple_rollover"}).html("테스트")*/
	       	   )
	       	   $('#k_contentlot').append(
	       			$('<div>').addClass("container").append(
	       					ui.div({id:"k_header",clazz:"k_header"}),
	       					ui.div({id:"k_content",clazz:"k_content"}),
	       					ui.div({id:"k_footer",clazz:"k_footer"})
	       			)
	       	   )
	      		$('#cart_btn').one('click',e=>{
	     			kaeun.ui.cart();
	     		});
	     		$('#payHis_btn').one('click',e=>{	
	     			kaeun.ui.payHis();
	     		});
	     		//$('a').one('click', function () {
	     		$('#gift_btn').one('click',e=>{	
	     			kaeun.ui.gift();
	     		});
	     		$('#analysis_btn').click(e=>{	
	     			kaeun.tastes.chart_draw();
	     		});
	     		$('#collect_btn').one('click',e=>{		
	     			kaeun.tastes.collect();
	     		});
	     		$('#k_home_btn').click(e=>{	
	     			 kaeun.main.init();
	     		});
	     		$('#test_btn').click(e=>{	
	     			kaeun.tastes.test();
	    		});

		  }, //setLayout의 끝
		  cart : ()=>{ //cart화면 
			  		kaeun.ui.setLayout();
					ui.newpage();
					$('#k_header').addClass('cart_title').append('<p>::장바구니::<p>');
					$('<br/>').appendTo($('#k_content'));
					ui.checkbox({id:'cart_all_chk',txt:'선택'}).append(ui.btn({id:'cart_delteall_btn',size:'mini',color:'white',txt:'선택삭제'})).appendTo($('#k_content'));
					//ui.btn({id:'cart_delteall_btn',size:'mini',color:'white',txt:'선택삭제'}).appendTo($select);
					kaeun.payment.cartList();
				},
		 gift : ()=>{
				 	ui.newpage();
					$('#k_header').addClass("title_yellow").append('<p>::선물함::</p>');
					$('#k_header').append('');    
					// .append('<div class="col"><div id="gift_slid" class="card-group"/></div>'); //card-deck쓰면 떨어짐
					let $select = $('<select/>').addClass("custom-select").attr({id:"select"}).appendTo($('#k_content'));
					$('<option value="gift"/>').html("받은선물함").attr({id:'gift_option'}).appendTo($select);
					$('<option value="giftto"/>').html("보낸선물함").attr({id:'giftto_option'}).appendTo($select);
					let state = $('#select').val(); //또는 'giftto';
					kaeun.tastes.giftList({state:state});
					$('#select').change(()=>{
							$('#gift_content').empty();
							state = $('#select').val();
							kaeun.tastes.giftList({state:state});
								})
		 		},
		 payHis : ()=>{
			 ui.newpage();
				var day = new Date();
		        var prevDate = new Date(new Date().setMonth(new Date().getMonth()-1));
		        let pageNo = "1";
		        let flag = ["buy","gift"];
		        let keyword = null;
				$('#k_header').addClass("cart_title").append('<p>::구매함::</p>');
				/*$('#k_content') 
				$('<div/>').html("구매내역").addClass("grid_main").attr({id:"content_g"}).appendTo($('#k_content'));*/
				//contentG2 : 구매내역에 대한코딩
				$('#k_content').append('<br/><div id="pay_Search"></div>');
				ui.n_div({clazz:'panel panel-default',html:$('<div id="pay_panel"/>').addClass("panel-body"),to:$('#pay_Search')}); //search
				$('#pay_panel').html('<div class="card bg-transparent">'
						+'<div class="card-body">'
						+'<div class ="row">'
						+' <div class = "col-8" id="pay_search">'
						+' <form>'
							+'<div class="form-row">'
							+'  <div class="col-md-auto">'
								+'Date :　'
								+'  </div>'
							+'  <div class="col-md-auto">'
								+'    <input id="startDate" type="date" value="'
			                    +$.datepicker.formatDate('yy-mm-dd', prevDate)
			                    +'" class="form-control-sm" placeholder="First name">'
								+'  </div>'
								+'  <p>~</p>' 
								+'  <div class="col">'
								+'    <input id="endDate" type="date" value="'
								+$.datepicker.formatDate('yy-mm-dd', day)
								+'" class="form-control-sm" placeholder="Last name">'
								+'  </div>'
								+'</div>    '
								/*+'<div class="col-md-auto">'*/
							+'<div class="row">' //상품선택+search input
								+'  <div class="col-md-auto">'
									+'상세 : '
									+'  </div>'
								+'<div class="col-md-auto">'
									+'<select class="form-control-sm" id="pay_status" >' //상태선택
								    +'<option>구매내역　　　</option>'
								    +'<option>구매완료</option>'
								    +'<option>선물</option>'
								    +'</select>'
								    +'</div>' //col끝
							    +'<div class="col-md">'
							    +'<div class="md-form active-pink-2 mb-3 mt-0">' //search input
									+'<input id="keyword" class="pay_search_input" type="text" placeholder="상품명" aria-label="Search">'
								+'</div>'
								+'</div>' //col끝
							+'</div>' //row끝
							+'</form>  '
						+'  </div>'
						+'  <div class = "col">'
							+'    <button id="pay_search_btn" class="btn-two redp big">Search버튼</button>'
						+'  </div>'
						+'</div>'
						+'</div>' 
						+'</div>');
				kaeun.tastes.payHisList({prevDate:prevDate,day:day,pageNo:pageNo,flag:flag,keyword:keyword}); 
				$('#pay_search_btn').click(e=>{
					prevDate = $('#startDate').val();
					day = $('#endDate').val();
					flag = ($('#pay_status option:selected').val()==='선물')? ["gift"] :
									($('#pay_status option:selected').val()==='구매완료')? ["buy"] : ["buy","gift"];
					keyword = ($('#keyword').val()!=='')? '%'+$('#keyword').val()+'%' : null;
					kaeun.tastes.payHisList({prevDate:prevDate,day:day,pageNo:pageNo,flag:flag,keyword:keyword});
				})
				//flag:default가 buy+gift임 */
		 },
		 analysis : ()=>{
			 		ui.newpage();
			 		$('#k_header').addClass("title_yellow").append('<p>::취향분석::</p>'); 
			 		$('#k_content').append();
		 			}
}; //kaeun.ui의 끝

kaeun.payment=(()=>{
	var id = $.cookie('member')["memberId"];
    var giftPopup = x=>{
    	let chkId = false;
		$.magnificPopup.open({
			closeBtnInside:true,
			closeOnContentClick:false,
			alignTop: true,
			fixedBgPos:true,
			fixedContentPos:false,
			items:{src:
				$('<form/>').addClass("white-popup")
							.html('선물하기')
							.append(
								$('<div/>').addClass("form-group")
									.append(
											$('<label/>').html("To.Id")
											,$('<input/>').attr({type:"text",id:"gift_toId"}).addClass("form-control")
											,$('<label/>').attr({id:'chk_result'})
													)
							   ,$('<div/>').addClass("form-group")
							   		.append(
							   				$('<label/>').html("Message")
											,$('<textarea/>').attr({type:"text",id:"gift_msg",maxlength:"99"}).addClass("form-control")
							   				,$('<span/>').attr({id:"counter"})
							   		)
					   		   ,ui.btn({id:'gift_submit',size:'big',color:'black',txt:'보내기'})
									)
			},
			midClick:true,
			overflowY:'auto',
			removalDelay:'0',
			type:'inline'}); 
		$('#gift_toId').keydown(e=>{if(e.keyCode === 13)e.preventDefault();})
		.keyup(e=>{
			  let toId = e.currentTarget.value;
			  if(toId!==''){
				  $.getJSON($.ctx()+'/mbr/idck/'+toId,d=>{
					  if(d=="0"){ 
							  chkId = true;
							  let msg = '선물 가능한 ID입니다';
							  if(toId===id) msg = '나에게 선물합니다'
							  $('#chk_result').html($('<p/>').addClass("val_o").text(msg));	  
					  }else{
						  $('#chk_result').html($('<p/>').addClass("val_x").text("없는 ID입니다"));
					  }
				  })
			  }
			});
		$('#gift_msg').keyup(function (e){
	          var content = $(this).val();
	          $(this).height(((content.split('\n').length + 1) * 1.5) + 'em');
	          $('#counter').html(content.length + '/100');
	      });
		$('#gift_msg').keyup();
		$('#gift_submit').click(e=>{
			//chkId가 true일때만!
			//★ 보내려는 사람 아이디랑,메세지도 함께 넣어야하는데... 잘못하면 payList쿼리가 깨진다?
			kaeun.payment.purchase(
					{payList:x.payList,
						delList:x.delList,
						toId:$('#gift_toId').val(),
						msg:$('#gift_msg').val()}
					);
			$('.mfp-close').click();
		});
		return false;
    };
    var putTaste = x=>{ //☆장바구니 등록
    	//kaeun.payment.putTaste({itemSeq:itemSeq,quantity:quantity,flag:'cart'});
    	$.ajax({
			url: $.ctx()+'/cart/post',
			type: 'POST',
			contentType : 'application/json',
            data : JSON.stringify({id : id,
			                	itemSeq: x.itemSeq,
			                	quantity: x.quantity,
			                	flag: x.flag}),
            success : d=>{
            	if(d>0){
            		if(confirm('장바구니로 이동하시겠습니까?')){
            			kaeun.ui.cart();
            		}else{}
            	}else{
            		alert('삽입실패');
            	}
            },
            error : (x,y,z)=>{}
		})
    };
    var deleteCart = x=>{ //☆장바구니 삭제
    	$.ajax({
			url: $.ctx()+'/cart/delete',
			type: 'POST',
			contentType : 'application/json',
            data : JSON.stringify({delList : x.delList}),
            success : d=>{
            	if(d>0){
            		cartList();
            	}else{
            		alert('삭제실패');
            	}
            },
            error : (x,y,z)=>{}
		})
    };
    var purchase = x=>{ //☆구매중
    	// kaeun.payment.purchase();
    	kaeun.ui.setLayout();
    	ui.newpage();
		$('#k_header').addClass('cart_title').append('<p>::결제중::</p>');
        $('#k_content').append('<div id="cart_grid" class=list-grid-container>'
                   +'<div class="item_header">No</div>'
                   +'<div class="item_headerinfo_pay">상품정보</div>'
                   +'<div class="item_header">　수량　</div>'
                   +'<div class="item_header">　상품금액　</div>'
                   +'<div class="item_header">　총액　</div>'
                   +'<id="cart_header_end" class="item_header">　내역　</div></div>');    
        //x {payList:x.payList,delList:x.delList,toId:$('#gift_toId').val(),msg:$('#gift_msg').val()};
        let payList = [];
        let delList = (x.delList!==null)? x.delList : null;
        let toId = (x.toId!==null)? x.toId : null;
        let msg = (x.msg!==null)? x.msg : null;
        let total = 0;
        let sum_price = 0;
        $.each(x.payList,(i,j)=>{
        	total += j.quantity;
        	sum_price += j.price;
             payList.push({itemSeq:j.itemSeq,quantity:j.quantity});
             ui.grid_list({
                   to: $('#cart_grid'),
                   c1:'No.'+(i+1),
                   c2:'<img class="cart_img" src="'+j.img+'">',
                   c3:j.itemName+'<br/>'+j.explains,
                   c4:j.quantity,
                   c5:j.price,
                   c6:j.quantity*j.price,
                   c7: "결제중"
             });  
        }); //each문 끝
        ui.grid_list({ 
			to: $('#cart_grid'),
			c1:"",
			c2:"",
			c3:"",
			c4:$('<p/>').attr({id:'cart_total'}).text("총　"+total+"개"),
			c5:"",
			c6:$('<p/>').text("결제예정금액:　　"),
			c7:$('<p/>').attr({id:'cart_sum'}).text(sum_price+"원")
		})	
             $('#cart_grid').append('<div class="item_result"><div id="cart_pay"></div></div>'); //주문결제  
             ui.btn({id:'cart_gift_submit',size:'big',color:'red',txt:'결제하기'}).appendTo($('#cart_pay'))
             .one('click',e=>{	
                   $.ajax({
                        url: $.ctx()+'/pay/post',
                        type: 'POST',
                        contentType : 'application/json',
                   data : JSON.stringify({id : id,
                                             payList:payList,
                                             delList:delList,
                                             toId:toId,
                                             msg:msg
                                             }),
                   success : d=>{
                        if(d>0){
                        	  $('#k_header').addClass('cart_title').html('<p>::결제완료::</p>');
                              $('#k_content').html(
                            		  $('<div/>').attr({id:'pay_end'}).addClass('pay_end')
                            		  			 .append('<br/><p>결제가 완료되었습니다<p/><br/>')
                            		  			);
                              ui.btn({id:'return_cart',size:'big',color:'red2',txt:'장바구니<br/>돌아가기'})
                              .appendTo($('#pay_end'))
                              .click(e=>{
                            	  kaeun.ui.cart();
                              });
                              ui.btn({id:'return_cart',size:'big',color:'black',txt:'구매함<br/>돌아가기'})
                              .appendTo($('#pay_end'))
                              .click(e=>{
                            	  kaeun.ui.payHis();
                              });
                        }else{
                              alert('삽입실패');
                        }
                   },
                   error : (x,y,z)=>{}
                   }); //ajax 끝                   
        }) //click끝
    };
    var cartList = ()=>{ //☆장바구니 리스트
    	$('#cart_grid').remove();
		$('#k_content').append('<div id="cart_grid" class=list-grid-container>' 
				+'<div class="item_headerinfo">상품정보</div>'
				+'<div class="item_header">　수량　</div>' 
				+'<div class="item_header">　상품금액　</div>'
				+'<div class="item_header">　총액　</div>'
				+'<div id="cart_header_end" class="item_header">　주문　</div></div>');
		$.getJSON($.ctx()+'/taste/list/'+id+'/cart',d=>{	
			let total = 0;
			let sum_price = 0;
			$.each(d,(i,j)=>{ 
				//total += d[i].quantity;
				//sum_price += d[i].price;
				ui.grid_list({
					to: $('#cart_grid'),
					c1:ui.checkbox({id:'cart_chk'+i,txt:''}),
					c2:'<img class="cart_img" src="'+d[i].img+'">',
					c3:d[i].itemName+'<br/>'+d[i].explains,
					c4:d[i].quantity,
					c5:d[i].price,
					c6:d[i].quantity*d[i].price,
					c7: $('<div/>').attr({id:'cart_btns'+i})	
				}); 
			ui.btn({id:'cart_order_btn'+i,size:'mini',color:'black',txt:'구매하기'}).appendTo($('#cart_btns'+i))
			.click(e=>{
				if(confirm('해당상품을 구매하시겠습니까?')){
					let payList =  [{itemSeq:d[i].itemSeq,
	                    quantity:d[i].quantity,
	                    itemName:d[i].itemName,
	                    price:d[i].price,
	                    explains:d[i].explains,
	                    img:d[i].img}];
					let delList = [d[i].tasteSeq];
					kaeun.payment.purchase({payList:payList,delList:delList});
		         }else{}	
			});
			
			$('<br/>').appendTo($('#cart_btns'+i));
			ui.btn({id:'cart_gift_btn'+i,size:'mini',color:'red2',txt:'선물하기'}).appendTo($('#cart_btns'+i))
			.click(e=>{
				if(confirm('해당상품을 선물하시겠습니까?')){
					let payList =  [{itemSeq:d[i].itemSeq,
	                    quantity:d[i].quantity,
	                    itemName:d[i].itemName,
	                    price:d[i].price,
	                    explains:d[i].explains,
	                    img:d[i].img}];
					let delList = [d[i].tasteSeq];
					kaeun.payment.giftPopup({payList:payList,delList:delList});
	           }else{}
			});
			$('<br/>').appendTo($('#cart_btns'+i));
			ui.btn({id:'cart_delete_btn'+i,size:'mini',color:'white',txt:'삭제하기'}).appendTo($('#cart_btns'+i))
			.click(e=>{
				alert(d[i].tasteSeq+" 삭제하시겠습니까?");
				let delList = [d[i].tasteSeq];
				kaeun.payment.deleteCart({delList:delList});
				
			});		
			}); //each문끝
			ui.grid_list({ 
				to: $('#cart_grid'),
				c1:"",
				c2:"",
				c3:"",
				c4:$('<p/>').attr({id:'cart_total'}).text("총　"+total+"개"),
				c5:"",
				c6:$('<p/>').text("결제예정금액:　　"),
				c7:$('<p/>').attr({id:'cart_sum'}).text(sum_price+"원")
			})
			$('#cart_grid').append('<div class="item_result"><div id="cart_pay"></div></div>'); //주문결제	
			ui.btn({id:'cart_gift_submit',size:'big',color:'red2',txt:'선물하기'}).appendTo($('#cart_pay'));
			ui.btn({id:'cart_order_submit',size:'big',color:'black',txt:'구매하기'}).appendTo($('#cart_pay'));
			$('#cart_gift_submit').click(e=>{
				alert("선택상품들을 선물하시겠습니까?");
				let payList = []; 
				let delList = [];
				for(let i=0;i<$('input:checkbox[name="cartchk"]').length-1;i++){
					if($('input:checkbox[id="cart_chk'+i+'"]').is(":checked")){
						payList.push({itemSeq:d[i].itemSeq,
                            quantity:d[i].quantity,
                            itemName:d[i].itemName,
                             price:d[i].price,
                            explains:d[i].explains,
                             img:d[i].img});
						delList.push(d[i].tasteSeq);
					}
				}
				kaeun.payment.giftPopup({payList:payList,delList:delList});
			})
			/*이벤트들 모음*/
			$('.form-check-input').change(e=>{
				total = 0;
				sum_price = 0;
				for(let i=0;i<$('input:checkbox[name="cartchk"]').length-1;i++){
					if($('input:checkbox[id="cart_chk'+i+'"]').is(":checked")){
						total += d[i].quantity;
						sum_price += d[i].price;
					}
				}
				$('#cart_total').text("총　"+total+"개");
				$('#cart_sum').text(sum_price+"원");	
			});
			//전체체크
			$('#cart_all_chk').change(function () {
				total = 0;
				sum_price = 0;
				$('.form-check-input').prop('checked',this.checked);
				for(let i=0;i<$('input:checkbox[name="cartchk"]').length-1;i++){
					if($('input:checkbox[id="cart_chk'+i+'"]').is(":checked")){
						total += d[i].quantity;
						sum_price += d[i].price;
					}
				}
				$('#cart_total').text("총　"+total+"개");
				$('#cart_sum').text(sum_price+"원");	
			});
			//선택삭제
			$('#cart_delteall_btn').click(e=>{
				let delList = [];
				for(let i=0;i<$('input:checkbox[name="cartchk"]').length-1;i++){
					if($('input:checkbox[id="cart_chk'+i+'"]').is(":checked")){
						delList.push(d[i].tasteSeq);
					}
				}
				kaeun.payment.deleteCart({delList:delList});
			
			})
			$('#cart_order_submit').click(e=>{
				//선택상품 구매
				alert("선택상품들을 구매하시겠습니까?");
				let payList = []; 
				let delList = [];
				for(let i=0;i<$('input:checkbox[name="cartchk"]').length-1;i++){
					if($('input:checkbox[id="cart_chk'+i+'"]').is(":checked")){
						payList.push({itemSeq:d[i].itemSeq,
                            quantity:d[i].quantity,
                            itemName:d[i].itemName,
                             price:d[i].price,
                            explains:d[i].explains,
                             img:d[i].img});
						delList.push(d[i].tasteSeq);
					}
				}
				kaeun.payment.purchase({payList:payList,delList:delList});
			})//cart_order_submit 끝
	}) //getjson끝
    };
    return {
    		giftPopup:giftPopup,
    		putTaste:putTaste,
    		deleteCart:deleteCart,
    		purchase:purchase,
    		cartList:cartList
    		};
})();

kaeun.tastes = { 
		giftList : x=>{
			$('#gift_content').remove();
			$('#pageNation').remove();
			let id = $.cookie('member')["memberId"];
			let pageNo = (x.pageNo!=null)? x.pageNo:1;
			$('#k_content').append('<div id="gift_content" class="container"/>');
			$.getJSON($.ctx()+'/purchase/gift/'+id+'/'+x.state+'/'+pageNo,d=>{ //getjosn시작
				let cnt = 0;
				let row = (d.count>12)? 3 : Math.ceil(d.count/4); 
				let gifts = d.tlist;
				let option = (x.state!=='gift')?  'To. ' : 'From. ';
				let giftId;
				for(let i=0;i<row;i++){ 
					$('#gift_content').append(
							$('<div>').addClass('col').append(
									$('<div/>').addClass('card_row').append(
											$('<div/>').attr({id:'gift_slid'+i}).addClass('card-group')
									)
							));
					for(let j=0;j<4;j++){ 
						if(cnt!=gifts.length){
							$('<div/>').addClass("card gift_c").attr({id:'gift'+cnt})
							   .append(
									   $('<div/>').addClass("gift_img").html('<img src="'+gifts[cnt].img+'">')
									   ).appendTo($('#gift_slid'+i));
							let $detail =  $('<div/>').addClass("gift_details").appendTo($('#gift'+cnt));
							let $item = $('<h2/>').html(
											gifts[cnt].itemName+'<br>'
												).appendTo($detail);
							giftId = (x.state!=='gift')?  gifts[cnt].toId : gifts[cnt].memberId;
							$('<span/>').html(option+giftId).appendTo($item);
							$('<p/>').html(gifts[cnt].msg).appendTo($detail);
							let $link = $('<div/>').addClass("gift_link")
													.html(
															$('<h4/>').html('공유하기')
															).appendTo($detail);
							let $ul = $('<ul/>').addClass("gift_link ul").appendTo($link)
							$('<li/>').html('<img src="https://lh3.ggpht.com/yVfPv-yLjIuBjpKj41NLkLXmuVv8XzH0m2hf-_sz9lQDv9WB9SX0McB8Jn4bQe4w5Q=s180">')
									  .addClass("gift_link ul li")
									  .appendTo($ul)
									  .click(e=>{
										  alert("링크1 구현되지 않았습니다");
										  });
							$('<li/>').html('<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7RW2RsbPREvGOUDjo8tGC8maxYImJJ7n5v1HKnz6wmlTLlLhI">')
									  .addClass("gift_link ul li")
									  .appendTo($ul)
									  .click(e=>{
										  alert("링크2 구현되지 않았습니다");
										  });	  
							cnt++;
						}else{
							$('<div/>').addClass("card gift_c").attr({id:'gift_nocard'})
							   .append(
									   $('<div/>').addClass("gift_img").html('<img src="https://cdn.crowdpic.net/detail-thumb/thumb_d_E73BDCC8D588BCCE4D75AB9C0CD3FE30.jpg">')
									   ).appendTo($('#gift_slid'+i));
							let $detail =  $('<div/>').addClass("gift_details").appendTo($('#gift_nocard'));
							let $item = $('<h2/>').html(
												''
												).appendTo($detail);
						}		
					}
				}//for룹끝
				//페이지네이션
				$('<div/>').html('<ul id="pageNation" class="pagination pagination-sm"/>').appendTo($('#k_content'));
        		let p = d.page;
        		let prev = (p.existPrev)? '':'disabled';
        		let next = (p.existNext)? '':'disabled';
        		let begin = p.beginPage -1;
        		let end = p.endPage+1;
        		for(let i=begin;i<=end;i++){
        			let y = (i==pageNo)? 'active' : 
									(i == begin) ? prev : 
										(i == end) ? next : '';
        			$('<li/>')
					.addClass('page-item '+y)
					.append(
							$('<a/>')
							.attr({style:'cursor:pointer'})
							.addClass('page-link red')
							.html(
									(i == begin)
										? 'Prev' : (i == end)
														? 'Next' : i
								)
					).appendTo($('#pageNation'))
					.click(function(e){
						e.preventDefault();
						if(i != begin && i != end){
							$('li').removeClass('active');
							$(this).addClass('active');
						}
					kaeun.tastes.giftList({state:x.state,pageNo:i+''});
					});
					$('.disabled').off("click");
        		};//페이지네이션 포룹끝
			}) //getjson의 끝		
				},
		payHisList : x=>{
			//kaeun.tastes.payHisList({prevDate:prevDate,day:day,pageNo:pageNo,flag:flag,keyword:keyword});
			$('#pay_list').remove();
			$('#pageNation').remove();
			$('#k_content').append('<div id="pay_list" class="list-grid-container">' 
					+'<div class="item_header">구매날짜</div>' 
					+'<div class="item_headerinfo_pay">상품정보</div>'
					+'<div class="item_header">　수량　</div>' 
					+'<div class="item_header">　상품금액　</div>'
					+'<div class="item_header">　총액　</div>'
					+'<id="cart_header_end" class="item_header">　내역　</div></div>');
			$.ajax({
				url: $.ctx()+'/purchase/payhis',
				type: 'POST',
				contentType : 'application/json',
                data : JSON.stringify({id : $.cookie('member')["memberId"],
                					prevDate: x.prevDate,
                					day: x.day,
                					pageNo: x.pageNo,
                					keyword: x.keyword,
                					flag:x.flag}),
                success : d=>{
                		
                		let pay=null;
        				let gift;
        				let paySeq;
                		$.each(d.tlist,(i,j)=>{
        					gift = (d.tlist[i].flag==='gift')? '선물' : '구매완료';
        					paySeq = (pay===d.tlist[i].paySeq)? '' : d.tlist[i].tasteDate2+'<br/>Order No.'+d.tlist[i].paySeq;
        					ui.grid_list({
        						to: $('#pay_list'),
        						c1:	paySeq,
        						c2:'<img class="cart_img" src="'+d.tlist[i].img+'">',
        						c3:d.tlist[i].itemName+'<br/>'+d.tlist[i].explains,
        						c4:d.tlist[i].quantity,
        						c5:d.tlist[i].price,
        						c6:d.tlist[i].quantity*d.tlist[i].price,
        						c7: gift
        					});
        					pay = d.tlist[i].paySeq;
        				}); //each완료
                		//페이지네이션
                		$('<div/>').html('<ul id="pageNation" class="pagination pagination-sm"/>').appendTo($('#k_content'));
                		let p = d.page;
                		let prev = (p.existPrev)? '':'disabled';
                		let next = (p.existNext)? '':'disabled';
                		let begin = p.beginPage -1;
                		let end = p.endPage+1;
                		for(let i=begin;i<=end;i++){
                			let y = (i==x.pageNo)? 'active' : 
											(i == begin) ? prev : 
												(i == end) ? next : '';
                			$('<li/>')
    						.addClass('page-item '+y)
    						.append(
    								$('<a/>')
    								.attr({style:'cursor:pointer'})
    								.addClass('page-link')
    								.html(
    										(i == begin)
    											? 'Prev' : (i == end)
    															? 'Next' : i
    									)
    						).appendTo($('#pageNation'))
    						.click(function(e){
    							e.preventDefault();
    							if(i != begin && i != end){
    								$('li').removeClass('active');
    								$(this).addClass('active');
    							}
    							kaeun.tastes.payHisList(
    											{id : $.cookie('member')["memberId"],
			                					prevDate: x.prevDate,
			                					day: x.day,
			                					pageNo: i+'',
			                					keyword: x.keyword,
			                					flag:x.flag});
    						});
    						$('.disabled').off("click");
                		}
                },
                error : (x,y,z)=>{}
			}); //ajax끝
		},
		chart_draw : ()=>{ //취향분석
			ui.newpage();
			$('#k_header').addClass("title_yellow").append('<p>::취향분석::</p>');
			$('#k_content').append('<div id="content_t" class=col><div class="taste-background">'
					+'<div class="row">'
					+'<div class="col-md-auto">'
					+'<div class="mytaste_text">'
					+'</div>'
					+'</div>'
					+'<div id="content_anlz" class="col-sm">'
					+'두번째롤'
					+'</div>' //두번째롤끝
					+'</div>'//row끝
					+'</div></div>');  
			$('#content_anlz').html(ui.a_col({id:"anlyz1",claz:"anlyz_form"}));
			$('#content_anlz').append(ui.a_col({id:"anlyz2",claz:"anlyz_form"}));
			$('#content_anlz').append(ui.a_col({id:"anlyz3",claz:"anlyz_form"}));
			$('#content_anlz').append(ui.a_col({id:"anlyz4",claz:"anlyz_form"}));
			//차트의시작
			let id = $.cookie('member')["memberId"];
 			$.getJSON($.ctx()+'/chart/'+id,d=>{
 			google.charts.load('current', {'packages':['corechart']});
 		    google.charts.setOnLoadCallback(drawChart);
 		    google.charts.setOnLoadCallback(drawStuff);
 		   function drawChart() { //별점 Chart
 			  var dataArea = google.visualization.arrayToDataTable([
                  ['평점', ''],
                  ['0.0',  0 ]
                ]);
 			  $.each(d.area,(i,j)=>{
                    	dataArea.addRow([j.grade+'',j.cntgrade*1]); 
   			  }); //each문
 			  dataArea.addRow(['5.0',0]);
 			 var optionsArea = {
 					backgroundColor: 'none',
                     hAxis: {title: '별점',  
                     titleTextStyle: {color: '#333'}},
                     vAxis: {minValue: 0},
                     colors: ['#fdcf33']
                   };
 			var chartArea = new google.visualization.AreaChart(document.getElementById('chart_div'));
            chartArea.draw(dataArea, optionsArea);
            
            //재료 Chart
            var dataDonut = google.visualization.arrayToDataTable([
                ['Brand', 'per'],
                ['',     0]
              ]);
            $.each(d.brand,(i,j)=>{
            	dataDonut.addRow([j.brand,j.brandSum*1]);
            }); //each문
            var optionsDonut = {
            		backgroundColor: 'none'
            		
                  };
            var chartDonut = new google.visualization.PieChart(document.getElementById('donutchart'));
            chartDonut.draw(dataDonut, optionsDonut);
 		   } //function끝
 		 
 		   //바 chart 재료별
 		  google.charts.load('current', {'packages':['bar']});
 		  google.charts.setOnLoadCallback(drawStuff);
		      function drawStuff() {
		        var data = new google.visualization.arrayToDataTable([
		          /*['Opening Move', 'Percentage'],
		          ["", 0]*/
		        ]);
		        data.addColumn('string', '재료');
		        data.addColumn('number', 'Percentage');
		        $.each(d.ingre,(i,j)=>{
	            	data.addRow([j.ingre+' ',j.ingreCnt*1]);
	            }); //each문
		        var options = {
		          title: '',
		          width: 700,
		          legend: { position: 'none' },
		          /*chart: { title: 'Chess opening moves',
		                   subtitle: 'popularity by percentage' },*/
		          bars: 'horizontal', // Required for Material Bar Charts.
		          backgroundColor: 'none',
		          /*chartArea: {backgroundColor: 'none'},*/
		          axes: {
		            x: {
		              0: { side: 'top', label: 'Percentage'} // Top x-axis.
		            }
		          },
		          bar: { groupWidth: "90%" },
		          colors: ['#fdcf33']
		        };
		        var chart = new google.charts.Bar(document.getElementById('top_x_div'));
		        chart.draw(data, google.charts.Bar.convertOptions(options));
		      }; //drawStuff 끝
		   //menu 차트
		    google.charts.load('current', {'packages':['corechart']});
		    google.charts.setOnLoadCallback(drawSeriesChart);
		    function drawSeriesChart() {
		        var data = google.visualization.arrayToDataTable([ 
		        ]);
		        data.addColumn('string', 'MENU');
		        data.addColumn('number', 'X');
		        data.addColumn('number', 'Y');
		        data.addColumn('string', 'COUNTRY');
		        data.addColumn('number', 'COUNT');
		        //건강식, 다이어트식, 동남아식, 분식, 양식, 일식, 중식, 한식 
		        //
		        let arrX = [ 6, 1, 5,0.5,2.5,6.8,5,6];
		        let arrY = [1.5,4.5,2.5,3,4,3.2,3.5,4];
		        let int = 0;
		        $.each(d.menu,(i,j)=>{
		        	int += 1;
	            	data.addRow([j.menu+' ', arrX[i]*1, arrY[i]*1, j.menu+'', j.menuCnt*1]);
	            }); //each문
		        var options = {
		         /* hAxis: {title: 'Life Expectancy'},
		          vAxis: {title: 'Fertility Rate'},*/
		          bubble: {textStyle: {fontSize: 11}},
		          backgroundColor: 'none'
		        };
		        var chart = new google.visualization.BubbleChart(document.getElementById('series_chart_div'));
		        chart.draw(data, options);
		      } //menu차트끝 
		  $('#anlyz1').append('<p>별점분포<p/>');
 		  $('#anlyz1').append('<div id="chart_div" style="width:800px; height:300px;"></div>');
 		 $('#anlyz2').append('<p>선호국가<p/>');
 		  $('#anlyz2').append('<div id="series_chart_div" style="width: 700px; height:370px;"></div>');
 		 $('#anlyz3').append('<p>나의 Top재료 8<p/>');
 		  $('#anlyz3').append('<div id="top_x_div" style="width: 800px; height: 300px;"></div>');
 		 $('#anlyz4').append('<p>나의 Top브랜드 5<p/>');
 		  $('#anlyz4').append('<div id="donutchart" style="width: 800px; height: 400px;"></div>');
 			}); //getjson끝 차트의끝
		},
         collect : ()=>{ //콜렉션
        	alert('아직 구현되지 않았습니다.');
        	ui.newpage();
			$('#k_header').addClass("title_yellow").append('<p>::콜렉션::</p>');
			let $k_content = $('#k_content');
			var down,x,left; // 콜렉션 폴더들 x축 scroll에 필요한 변수들
			let $title = $('<div/>').addClass('col_list_box').appendTo($k_content).append(
							$('<h4/>').text('나의 콜렉션들').attr({style:'display:inline;'}), 
							$('<a/>').addClass('btn-floating btn-lg').attr({style:'position:relative;','data-flag':true}).append(
								$('<i/>').addClass('fa fa-plus-square-o').attr({'aria-hidden':true}) // + 추가 버튼
							).click(e=>{  //버튼 클릭시 flag를 불러와서 true이면 input태크를 보여주고(show) false이면 안보여주기(hide)
								e.preventDefault();
								let target = $(e.currentTarget);
								if(target.data('flag')){
									$('#add_directory').show();
									target.data('flag',false);
								}else{
									$('#add_directory').hide();
									target.data('flag',true);
								}
							}),
							$('<div/>').attr({id:'add_directory',style:'position:absolute;z-index:1000;display:inline'}).hide().append(
									$('<input/>').attr({id:'add_dir_name'}).text('입력창'),
									$('<button/>').text('추가').click(e=>{
										let new_dir_name = $('#add_dir_name').val();
										let id = $.cookie('member')['memberId'];
										$.getJSON('',d=>{//id와 입력어를 가지고 DB에 저장
											//콜백으로 콜렉션 리스트에 방금 입력한 폴더를 그리기
											$('#card_group_dir').append(
												//이안은 샘플소스 
												$('<div/>').addClass('card col_card').append(
													$('<div/>').addClass('view overlay').append(
														$('<img/>').addClass('card-img-top').attr({src:$.img()+'/cmm/item/dosiroc (1).jpg'/*img 넣기*/,alt:'Card image cap',style:'pointer-events:none'}),
														$('<a/>').attr({href:'#','data-name':j}).append(
															$('<div/>').addClass('mask rgba-white-slight')
														).click(e=>{
															e.preventDefault();
															$card_group_list.empty();
															let list = [];
															for(let k=2;k<12;k++){
																list.push({img:$.img()+'/cmm/item/dosiroc ('+k+').jpg',itemName:'item_name'});
															}
															kaeun.tastes.collection_list({
																dir:e.currentTarget.dataset.name,
																parent:$('#card_group_dir'),
																list:list
															});
															 /*아래 리스트에 해당 콜랙션에 담긴 리스트 보여주기 */
														})
													),
													$('<div/>').addClass('card-body').append(
														$('<h4/>').addClass('card-title').text(j /*dir_name*/ )
														// <p class="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</p>
														// <button type="button" class="btn btn-primary btn-md">Read more</button>
													)
												)
												//샘플소스 끝
											);
										});
									})	
							)
				);
			let $card_group_dir = 
				$('<div/>').addClass('card-group col_card_group').attr({id:'card_group_dir',style:'overflow:auto;flex-flow:row nowrap;'}).appendTo($title)
					.mousedown(e=>{
						e.preventDefault();
					    down = true;
					    x = e.pageX;
					    left = $card_group_dir.scrollLeft();
					})
					.mousemove(e=>{
						if(down) {$card_group_dir.scrollLeft(left - e.pageX + x);};
					})
					.mouseup(e=>{down = false;});
			var down2,x2,left2;
			let $div = $('<div/>').addClass('col_list_box').appendTo($k_content).append(
							$('<h4/>').attr({'id':'col_title',style:'display:inline;'}),
							$('<a/>').addClass('btn-floating btn-lg').attr({style:'position:relative;','data-flag':true}).append(
									$('<i/>').addClass('fa fa-plus-square-o').attr({'aria-hidden':true})
								).click(e=>{
									e.preventDefault();
									let target = $(e.currentTarget);
									if(target.data('flag')){
										$('#search_col_list').show();
										target.data('flag',false);
									}else{
										$('#search_col_list').hide();
										target.data('flag',true);
									}
								}),
								$('<div/>').attr({id:'search_col_list',style:'position:absolute;z-index:1000;display:inline-block'}).hide().append(
										$('<input/>').text('입력창').attr({placeholder:'검색'}).keydown(e=>{if(e.keyCode === 13)e.preventDefault();}).keyup(e=>{
											//검색하기
											let searchWord = e.currentTarget.value; //input태크에 입력한 현재 검색어
											$.getJSON($.ctx()+'/navSearch/'+searchWord,d=>{ //다른 메소드를 사용해도 됨
												// 가져온 데이터로 아래의 div에 그리기, 넘어온 d는 List<HashMap<>>
												$.each(d,(i,j)=>{
													$('<div/>').addClass('card col_card').appendTo($('#searched_list')).append(
														$('<div/>').addClass('view overlay').append(
																$('<img/>').addClass('card-img-top').attr({src:j.img/*img 넣기*/,alt:'Card image cap',style:'pointer-events:none'}),
																$('<a/>').attr({'data-itemSeq':j.itemSeq}).append(
																	$('<div/>').addClass('mask rgba-white-slight')
																).click(evt=>{
																	evt.preventDefault();
																	//클릭하면 현재 디렉토리에 아이템 추가하기
																	let dir = $('#col_title').text(); //현재 선택된 dir_name
																	let item_seq = evt.currentTarget.dataset.itemSeq; 
																	//클릭한 아이템의 seq. 값이 안찍히면 evt.currentTarget.data('itemSeq') 해보기
																	
																	//getJSON uri 정하고 주석풀기
																	/*$.getJSON($.ctx()+'/???/'+dir+'/'+item_seq,data=>{
																		//DB에 저장한후 실시간으로 리스트에 추가하기..
																		$('#card_group_list').append(
																			$('<div/>').addClass('card col_card').append(
																					$('<div/>').addClass('view overlay').append(
																						$('<img/>').addClass('card-img-top').attr({src:j.imgimg 넣기,alt:'Card image cap',style:'pointer-events:none'}),
																						$('<a/>').append(
																							$('<div/>').addClass('mask rgba-white-slight')
																						).click(e=>{
																							e.preventDefault();
																							 //아이템 디테일 가기? 
																						})
																					),
																					$('<div/>').addClass('card-body').append(
																						$('<h4/>').addClass('card-title').text(j.itemName+x item_name )
																						// <p class="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</p>
																						// <button type="button" class="btn btn-primary btn-md">Read more</button>
																					)
																				)	
																		)
																	});*/
																	
																})
															),
															$('<div/>').addClass('card-body').append(
																$('<h4/>').addClass('card-title').text(j.itemName /*item_name*/ )
																// <p class="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</p>
																// <button type="button" class="btn btn-primary btn-md">Read more</button>
															)
													);
												});
											});
											
										}),
										$('<div/>').attr({id:'searched_list',style:'width:350px;height:400px;background-color:#fff;overflow-y:scroll;'})//검색된 아이템 리스트
								)
						);
			let $card_group_list = 
				$('<div/>').addClass('card-group col_card_group').attr({id:'card_group_list',style:'overflow:auto;flex-wrap:nowrap;'}).appendTo($div)
					.mousedown(e=>{
						e.preventDefault();
					    down2 = true;
					    x2 = e.pageX;
					    left2 = $card_group_list.scrollLeft();
					})
					.mousemove(e=>{
						if(down2) {$card_group_list.scrollLeft(left2 - e.pageX + x2);};
					})
					.mouseup(e=>{down2 = false;});
			let arr = ['wish','dir1','dir2','dir3','dir4','dir5','dir6','dir7','dir8'] ; /* 해당 유저의 dir_name들을 getJSON으로가져오기 */
			$.each(arr,(i,j)=>{
				$('<div/>').addClass('card col_card').appendTo($card_group_dir).append(
					$('<div/>').addClass('view overlay').append(
						$('<img/>').addClass('card-img-top').attr({src:$.img()+'/cmm/item/dosiroc (1).jpg'/*img 넣기*/,alt:'Card image cap',style:'pointer-events:none'}),
						$('<a/>').attr({href:'#','data-name':j}).append(
							$('<div/>').addClass('mask rgba-white-slight')
						).click(e=>{
							e.preventDefault();
							$card_group_list.empty();
							let list = [];
							for(let k=2;k<12;k++){
								list.push({img:$.img()+'/cmm/item/dosiroc ('+k+').jpg',itemName:'item_name'});
							}
							kaeun.tastes.collection_list({
								dir:e.currentTarget.dataset.name,
								parent:$card_group_list,
								list:list
							});
							 /*아래 리스트에 해당 콜랙션에 담긴 리스트 보여주기 */
						})
					),
					$('<div/>').addClass('card-body').append(
						$('<h4/>').addClass('card-title').text(j /*dir_name*/ )
						// <p class="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</p>
						// <button type="button" class="btn btn-primary btn-md">Read more</button>
					)
				);
			});
			let list = [];
			for(let k=2;k<12;k++){
				list.push({img:$.img()+'/cmm/item/dosiroc ('+k+').jpg',itemName:'item_name'});
			}
			kaeun.tastes.collection_list({
				dir:'wish',
				parent:$card_group_list,
				list:list
			});
         },
		 collection_list:d=>{
			 $('#col_title').text(d.dir);
			 $.each(d.list,(x,y)=>{
					$('<div/>').addClass('card col_card').appendTo(d.parent).append(
						$('<div/>').addClass('view overlay').append(
							$('<img/>').addClass('card-img-top').attr({src:y.img/*img 넣기*/,alt:'Card image cap',style:'pointer-events:none'}),
							$('<a/>').append(
								$('<div/>').addClass('mask rgba-white-slight')
							).click(e=>{
								e.preventDefault();
								 //아이템 디테일 가기? 
							})
						),
						$('<div/>').addClass('card-body').append(
							$('<h4/>').addClass('card-title').text(y.itemName+x /*item_name*/ )
							// <p class="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</p>
							// <button type="button" class="btn btn-primary btn-md">Read more</button>
						)
					);
				});
		 },
         test : ()=>{ 
        	 ui.newpage();
        	$('#k_header').append('테스트');
        	$('#k_header').append('<button id="testBtn" type="button" class="btn btn-default">cartAdd</button>')
 			$('#testBtn').click(e=>{
 				let itemSeq = Math.floor((Math.random() * 100) + 1);	  //x.itemSequ 
 				let quantity = Math.random()+1;	  //x.quantity
 				let flag = 'cart';
 				kaeun.payment.putTaste({itemSeq:itemSeq,quantity:quantity,flag:'cart'});
 			});
        	$('#k_header').append('<button id="testBtn2" type="button" class="btn btn-default">test2</button>')
        	$('#testBtn2').click(e=>{
 			});
        	$('#k_content').append('chart화면 test');  
        	$('#k_content').append('')
         }
};


