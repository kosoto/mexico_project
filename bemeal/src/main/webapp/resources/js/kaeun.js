"use strict"
var kaeun = kaeun || {};
kaeun.main=(()=>{
	 var user;
     var init =()=>{  //session값 가져올꺼임
           onCreate(); 
     };
     var onCreate =()=>{  
           setContentView();
           //navi btn 
     		$('#cart_btn').click(e=>{
     			kaeun.payments.cart();
     		});
     		$('#payHis_btn').click(e=>{	
     			kaeun.payments.payHis();
     		});
     		$('#gift_btn').click(e=>{	
     			kaeun.payments.gift();
     		});
     		$('#analysis_btn').click(e=>{	
     			kaeun.tastes.analysis();
     		});
     		$('#collect_btn').click(e=>{	
     			kaeun.tastes.collect();
     		});
     		$('#k_home_btn').click(e=>{
     			 kaeun.main.init();
     		});
     		$('#test_btn').click(e=>{
     			kaeun.tastes.test();
    		});

     };
     var setContentView =()=>{ 
    	 kaeun.lot.set();
    	 kaeun.ui.main();
     };
     return {init:init};
})();

//payment관련 해서 : cart, payHis,present
kaeun.payment = (x=>{ //kaeun.payment(cart); kaeun.payment(payHis);
	var ctx;
	var init= ()=>{
		onCreate();
	};
	var onCreate = ()=>{
		setContentView();
		//그린다음에 이벤트 
	};
	var setContentView=()=>{ //들어오는 값에 따라... 
		
	};
	return{init:init};
	})();

kaeun.lot = {
		set : ()=>{
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
       					  $('<div>').addClass("list-group").html(
       							 ui.div({id:'k_home_btn',clazz:'navi_home'}).html("HOME")	
       					  )
       			  )
       	   )
       	   $('#k_navi').append(
       			ui.div({id:"cart_btn",clazz:"button_base b01_simple_rollover"}).html("장바구니"),
       			ui.div({id:"payHis_btn",clazz:"button_base b01_simple_rollover"}).html("구매함"),
       			ui.div({id:"gift_btn",clazz:"button_base b01_simple_rollover"}).html("선물함"),
       			ui.div({id:"analysis_btn",clazz:"button_base b01_simple_rollover"}).html("취향분석"),
       			ui.div({id:"collect_btn",clazz:"button_base b01_simple_rollover"}).html("콜렉션"),
       			ui.div({id:"test_btn",clazz:"button_base b01_simple_rollover"}).html("테스트")
       	   )
       	   $('#k_contentlot').append(
       			$('<div>').addClass("container").append(
       					ui.div({id:"k_header",clazz:"k_header"}),
       					ui.div({id:"k_content",clazz:"k_content"}),
       					ui.div({id:"k_footer",clazz:"k_footer"})
       			)
       	   )
		},
		setContent : ()=>{
			
		}
};

kaeun.ui = { 
		  main : ()=>{
      		//home화면
      		 $('#k_content').html('<div class="accordian">'
    				 +'        <ul>'
    				 +'        <li>'
    				 +'        <div class="image_title">'
    				 +'          <a href="https://www.youtube.com/channel/UCXTfDJ60DBmA932Du6B1ydg">장바구니</a>'
    				 +'        </div> '
    				 +'        <a href="https://www.youtube.com/channel/UCXTfDJ60DBmA932Du6B1ydg">'
    				 +'          <img class="k_home_img" src="https://cdn.pixabay.com/photo/2014/08/14/14/21/shish-kebab-417994_960_720.jpg"/>'
    				 +'        </a>'
    				 +'        </li>'
    				 +'        <li>'
    				 +'        <div class="image_title">'
    				 +'          <a href="">구매내역</a>'
    				 +'        </div>'
    				 +'        <a href="https://www.youtube.com/channel/UCXTfDJ60DBmA932Du6B1ydg">'
    				 +'          <img class="k_home_img" src="https://images.pexels.com/photos/749353/pexels-photo-749353.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"/>'
    				 +'        </a>'
    				 +'        </li>'
    				 +'        <li>'
    				 +'        <div class="image_title">'
    				 +'          <a href="https://www.youtube.com/channel/UCXTfDJ60DBmA932Du6B1ydg">선물함</a>'
    				 +'        </div>'
    				 +'        <a href="">'
    				 +'          <img class="k_home_img" src="https://images.pexels.com/photos/1050244/pexels-photo-1050244.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"/>'
    				 +'        </a>'
    				 +'        </li>'
    				 +'        <li>'
    				 +'        <div class="image_title">'
    				 +'          <a href="#">취향분석</a>'
    				 +'        </div>'
    				 +'        <a href="https://www.youtube.com/channel/UCXTfDJ60DBmA932Du6B1ydg">'
    				 +'          <img class="k_home_img" src="https://cdn.pixabay.com/photo/2014/12/08/11/49/love-560783_960_720.jpg"/>'
    				 +'        </a>'
    				 +'        </li>'
    				 +'        <li>'
    				 +'        <div class="image_title">'
    				 +'          <a href="#">콜렉션</a>'
    				 +'        </div>'
    				 +'        <a href="https://www.youtube.com/channel/UCXTfDJ60DBmA932Du6B1ydg">'
    				 +'           <img class="k_home_img" src="https://cdn.pixabay.com/photo/2017/04/05/01/16/food-2203732_960_720.jpg"/>'
    				 +'        </a>'
    				 +'        </li>'
    				 +'        </ul>'
    				 +'        </div>'); 
		  }
          };

//cart,payHis,present
kaeun.payments = {
		cart : ()=>{ //cart List
			ui.newpage();
			$('#k_header').addClass('cart_title').append('<h2>장바구니<h2>');
			ui.checkbox({id:'cart_all_chk',txt:'선택'}).appendTo($('#k_content'));
			ui.btn({id:'cart_delteall_btn',size:'mini',color:'white',txt:'선택삭제'}).appendTo($('#k_content'));
			kaeun.tastes.cartList();
		}, 
		payment : ()=>{ //payment 화면
			
		},
		payHis : ()=>{ //read some
			//$('#k_contentlot').html('<h2>구매함</h2><br><div>날짜선택: 목록보기:(구매완료/사용중) </div><br>');
			ui.newpage();
			var day = new Date();
            var prevDate = new Date(new Date().setMonth(new Date().getMonth()-1));
            let pageNo = "1";
            let flag = ["buy","gift"];
            let keyword = null;
			$('#k_header').append('구매함');
			/*$('#k_content') 
			$('<div/>').html("구매내역").addClass("grid_main").attr({id:"content_g"}).appendTo($('#k_content'));*/
			//contentG2 : 구매내역에 대한코딩
			$('#k_content').append('<div id="pay_Search"></div>');
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
				console.log('시작: '+prevDate + ' 끝: ' + day + ' flag: '+flag+' keyword: '+keyword+' pageNo: '+pageNo);
				kaeun.tastes.payHisList({prevDate:prevDate,day:day,pageNo:pageNo,flag:flag,keyword:keyword});
			})
			//flag:default가 buy+gift임 */
		},
		gift : ()=>{ //read some
			ui.newpage();
			$('#k_header').append('받은선물함');
			$('#k_header').append('');    
			$('#k_content').append('<div id="gift_content" class="container"/>')
			// .append('<div class="col"><div id="gift_slid" class="card-group"/></div>'); //card-deck쓰면 떨어짐
			for(let i=1;i<5;i++){
				$('#gift_content').append($('<div>').addClass('col').append($('<div/>').addClass('card_row').append($('<div/>').attr({id:'gift_slid'+i}).addClass('card-group'))));
				for(let j=1;j<5;j++){	
					/*$('#gift_slid'+i).append(ui.img_card({url:'https://images.pexels.com/photos/884596/pexels-photo-884596.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
						txt:'From.★',id:'gift'+i+'_'+j}));*/
				$('#gift_slid'+i).append(      '<div class="card gift_c">'
						+'            <div class="gift_img"><img src="https://images.pexels.com/photos/884596/pexels-photo-884596.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"></div>'
						+'            <div class="gift_details">'
						+'                <h2>아이템이름 <br><span>From.★</span></h2>'
						+'                <div class="gift_msg">'
						+'                    <p>메세지 Lorem Ipsum has been the industrys standard</p>'
						+'                </div>'
						+'                <div class="gift_link">'
						+'                    <h4>공유하기</h4>'
						+'                    <ul>'
						+'                        <li><img src="https://lh3.ggpht.com/yVfPv-yLjIuBjpKj41NLkLXmuVv8XzH0m2hf-_sz9lQDv9WB9SX0McB8Jn4bQe4w5Q=s180"></li>'
						+'                        <li><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7RW2RsbPREvGOUDjo8tGC8maxYImJJ7n5v1HKnz6wmlTLlLhI"></li>'
						+'                    </ul>'
						+'                </div>'
						+'            </div>'
						+'        </div>');
				}
			}
			// ★ 페이지네이션
		},
		giftPopup : x=>{
			var toId = '';
			var chkId = false;
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
												.keydown(e=>{if(e.keyCode === 13)e.preventDefault();})
												.keyup(e=>{
															  toId = e.currentTarget.value;
															  console.log(toId);
															  if(toId!==''){
																  chkId = true;
																  //★겟제이슨 멤버 retrieve가 있으면 true로 바뀜
															  }else{
															  }
															})
														)
								   ,$('<div/>').addClass("form-group")
								   		.append(
								   				$('<label/>').html("Message")
												,$('<textarea/>').attr({type:"text",id:"gift_msg"}).addClass("form-control")
								   				)
						   		   ,ui.btn({id:'gift_submit',size:'big',color:'black',txt:'보내기'})
										)
				},
				midClick:true,
				overflowY:'auto',
				removalDelay:'0',
				type:'inline'}); 
			$('#gift_submit').click(e=>{
				//chkId가 true일때만!
				//★ 보내려는 사람 아이디랑,메세지도 함께 넣어야하는데... 잘못하면 payList쿼리가 깨진다?
				console.log('payList: '+x);
				console.log('toId: '+$('#gift_toId').val());
				console.log('msg: '+$('#gift_msg').val());
				kaeun.tastes.payList({payList:x,toId:$('#gift_toId').val(),msg:$('#gift_msg').val()});
				
			});
			return false;
		},
		putTaste : x=>{ //taste write
			alert(x.flag);
			$.ajax({
					url: $.ctx()+'/cart/post',
					type: 'POST',
					contentType : 'application/json',
	                data : JSON.stringify({id : $.cookie('member')["memberId"],
					                	itemSeq: x.itemSeq,
					                	quantity: x.quantity,
					                	flag: x.flag}),
	                success : d=>{
	                	if(d>0){
	                		
	                	}else{
	                		alert('삽입실패');
	                	}
	                },
	                error : (x,y,z)=>{}
				})
		},
		deleteCart : x=>{ //ajax post? 
			$.ajax({
				url: $.ctx()+'/cart/delete',
				type: 'POST',
				contentType : 'application/json',
                data : JSON.stringify({delList : x.delList}),
                success : d=>{
                	if(d>0){
                		kaeun.tastes.cartList();
                	}else{
                		alert('삭제실패');
                	}
                },
                error : (x,y,z)=>{}
			})
		},
		listCart : x=>{
			let testId = 'test1';
			
		},
		update : ()=>{ //taste update
			
		},
		del : ()=>{ //taste delete되는부분
			
		}
};

kaeun.tastes = { //kaeun.tastes.cartList()
		payList : x=>{ //결제중 
            $('#cart_grid').remove();
            $('#k_content').append('<div id="cart_grid" class=list-grid-container>'
                       +'<div class="item_header">No</div>'
                       +'<div class="item_headerinfo_pay">상품정보</div>'
                       +'<div class="item_header">수량</div>'
                       +'<div class="item_header">상품금액</div>'
                       +'<div class="item_header">총액</div>'
                       +'<id="cart_header_end" class="item_header">내역</div></div>');    
            let payList = [];
            $.each(x.payList,(i,j)=>{
                 payList.push({itemSeq:j.itemSeq,quantity:j.quantity});
                 ui.grid_list({
                       to: $('#cart_grid'),
                       c1:'No.'+(i+1),
                       c2:'<img class="cart_img" src="'+j.img+'">',
                       c3:j.itemName+'<br/>'+j.explains,
                       c4:j.quantity,
                       c5:j.price,
                       c6:j.quantity*j.price,
                       c7: $('<div/>').attr({id:'cart_btns'+i}) 
                 });  
            }); //each문 끝
                 $('#cart_grid').append('<div class="item_result"><div id="cart_pay"></div></div>'); //주문결제  
                 ui.btn({id:'cart_gift_submit',size:'big',color:'red',txt:'결제하기'}).appendTo($('#cart_pay'))
                 .click(e=>{
                       $.ajax({
                            url: $.ctx()+'/pay/post',
                            type: 'POST',
                            contentType : 'application/json',
                       data : JSON.stringify({id : $.cookie('member')["memberId"],
                                                 payList:payList
                                                 }),
                       success : d=>{
                            if(d>0){
                                  alert('결제완료');
                            }else{
                                  alert('삽입실패');
                            }
                       },
                       error : (x,y,z)=>{}
                       }); //ajax 끝                   
            }) //click끝
		},
		cartList : ()=>{ //장바구니
			$('#cart_grid').remove();
			$('#k_content').append('<div id="cart_grid" class=list-grid-container>' 
					+'<div class="item_headerinfo">상품정보</div>'
					+'<div class="item_header">수량</div>' 
					+'<div class="item_header">상품금액</div>'
					+'<div class="item_header">총액</div>'
					+'<div id="cart_header_end" class="item_header">주문</div></div>');
			let testId = $.cookie('member')["memberId"];
			$.getJSON($.ctx()+'/taste/list/'+testId+'/cart',d=>{ //getjosn시작
				
				$.each(d,(i,j)=>{ //grid_list R
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
					alert("해당 상품을 구매하시겠습니까?");
					let payList =  [{itemSeq:d[i].itemSeq,
                        quantity:d[i].quantity,
                        itemName:d[i].itemName,
                        price:d[i].price,
                        explains:d[i].explains,
                        img:d[i].img}];
					let delList = [d[i].tasteSeq];
					kaeun.tastes.payList({payList:payList});
				});
				$('<br/>').appendTo($('#cart_btns'+i));
				ui.btn({id:'cart_gift_btn'+i,size:'mini',color:'red',txt:'선물하기'}).appendTo($('#cart_btns'+i))
				.click(e=>{
					alert("해당상품을 선물하시겠습니까?");
					let payList =  [{itemSeq:d[i].itemSeq,
                        quantity:d[i].quantity,
                        itemName:d[i].itemName,
                        price:d[i].price,
                        explains:d[i].explains,
                        img:d[i].img}];
					kaeun.payments.giftPopup(payList);
				});
				$('<br/>').appendTo($('#cart_btns'+i));
				ui.btn({id:'cart_delete_btn'+i,size:'mini',color:'white',txt:'삭제하기'}).appendTo($('#cart_btns'+i))
				.click(e=>{
					alert(d[i].tasteSeq+" 삭제하시겠습니까?");
					let delList = [d[i].tasteSeq];
					kaeun.payments.deleteCart({delList:delList});
					
				});		
				}); //each문끝
				ui.grid_list({ 
					to: $('#cart_grid'),
					c1:"",
					c2:"",
					c3:"",
					c4:"총 3개",
					c5:"",
					c6:"결제예정금액: ",
					c7:"100000원"
				})
				$('#cart_grid').append('<div class="item_result"><div id="cart_pay"></div></div>'); //주문결제	
				ui.btn({id:'cart_gift_submit',size:'big',color:'red',txt:'선물하기'}).appendTo($('#cart_pay'));
				ui.btn({id:'cart_order_submit',size:'big',color:'black',txt:'구매하기'}).appendTo($('#cart_pay'));
				$('#cart_gift_submit').click(e=>{
					alert("선택상품들을 선물하시겠습니까?");
					let payList = []; 
					for(let i=0;i<$('input:checkbox[name="cartchk"]').length-1;i++){
						if($('input:checkbox[id="cart_chk'+i+'"]').is(":checked")){
							payList.push({itemSeq:d[i].itemSeq,
                                quantity:d[i].quantity,
                                itemName:d[i].itemName,
                                 price:d[i].price,
                                explains:d[i].explains,
                                 img:d[i].img});
						}
					}
					kaeun.payments.giftPopup(payList);
				})
				/*이벤트들 모음*/
				$('#cart_all_chk').change(function () {
			    $('.form-check-input').prop('checked',this.checked);
				});
				$('#cart_delteall_btn').click(e=>{
				//선택삭제
					let delList = [];
					for(let i=0;i<$('input:checkbox[name="cartchk"]').length-1;i++){
						if($('input:checkbox[id="cart_chk'+i+'"]').is(":checked")){
							delList.push(d[i].tasteSeq);
						}
					}
					kaeun.payments.deleteCart({delList:delList});
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
					kaeun.tastes.payList({payList:payList});
				})//cart_order_submit 끝
		}) //getjson끝		
		},
		payHisList : x=>{
			//kaeun.tastes.payHisList({prevDate:prevDate,day:day,pageNo:pageNo,flag:flag,keyword:keyword});
			$('#pay_list').remove();
			$('#pageNation').remove();
			$('#k_content').append('<div id="pay_list" class="list-grid-container">' 
					+'<div class="item_header">구매날짜</div>' 
					+'<div class="item_headerinfo_pay">상품정보</div>'
					+'<div class="item_header">수량</div>' 
					+'<div class="item_header">상품금액</div>'
					+'<div class="item_header">총액</div>'
					+'<id="cart_header_end" class="item_header">내역</div></div>');
			$.ajax({
				url: $.ctx()+'/payhis/search',
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
    								.attr('style','cursor:pointer')
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
                		/*$('<div/>').html('<ul class="pagination pagination-sm">'
        						+'<li class="page-item"><a class="page-link" href="#">Previous</a></li>'
        						+'<li class="page-item"><a class="page-link" href="#">1</a></li>'
        						+'<li class="page-item"><a class="page-link" href="#">2</a></li>'
        						+'<li class="page-item"><a class="page-link" href="#">3</a></li>'
        						+'<li class="page-item"><a class="page-link" href="#">Next</a></li>'
        						+'</ul>').addClass("grid_footer").appendTo($('#k_content')); */
                },
                error : (x,y,z)=>{}
			}); //ajax끝
		},
		analysis : ()=>{ //취향분석
			ui.newpage();
			$('#k_header').append('취향분석'); 
			$('#k_content').append('<div id="content_t" class=col><div class="taste-background">'
					+'<div class="row">'
					+'<div class="col-md-auto">'
					+'<div class="mytaste_text">'
					/*+'M <br/>'
					+'Y <br/>'
					+' 　<br/>'*/
					/*+'　T <br/>'
					+'A <br/>'
					+'S <br/>'
					+'T <br/>'
					+'E <br/>'*/
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
			$('#content_anlz').append(ui.a_col({id:"anlyz5",claz:"anlyz_form"}));
			$('#content_anlz').append(ui.a_col({id:"anlyz6",claz:"anlyz_form"}));
			$('#content_anlz').append(ui.a_col({id:"anlyz7",claz:"anlyz_form"}));
			$('#anlyz7').html('일번째취향');
			//차트의시작
			let testId = 'test1';
 			$.getJSON($.ctx()+'/chart/'+testId,d=>{
 			google.charts.load('current', {'packages':['corechart']});
 		    google.charts.setOnLoadCallback(drawChart);
 		   google.charts.setOnLoadCallback(drawStuff);
 		   function drawChart() {  
 			   //별점 Chart
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
            		backgroundColor: 'none',
                    title: '나의 Top5 브랜드'
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
		          title: '나의 TOP8 도시락 재료',
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
		          bar: { groupWidth: "90%" }
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
	            	console.log(j.menu,j.menuAvg,j.menuCnt);
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
		  $('#anlyz7').html('');
 		  $('#anlyz1').append('<div id="chart_div" style="width: auto; height: auto;"></div>');
 		  $('#anlyz2').append('<div id="series_chart_div" style="width: 100%; height: 400px;"></div>');
 		 $('#anlyz3').append('<div id="top_x_div" style="width: 90%; height: 300px;"></div>');
 		  $('#anlyz4').append('<div id="donutchart" style="width: 100%; height: 300px;"></div>');
 			}); //getjson끝 차트의끝
		},
         collect : ()=>{ //콜렉션
        	 ui.newpage();
			$('#k_header').append('콜렉션');
			$('#k_header').append('');  
			$('#k_content').append('');
				
         },
         test : ()=>{ 
        	 ui.newpage();
        	$('#k_header').append('테스트');
        	$('#k_header').append('<button id="testBtn" type="button" class="btn btn-default">cartAdd</button>')
 			$('#testBtn').click(e=>{
 				let itemSeq = 5;	  //x.itemSequ 
 				let quantity = 2;	  //x.quantity
 				let flag = 'cart';
 				kaeun.payments.putTaste({itemSeq:itemSeq,quantity:quantity,flag:'cart'});
 			});
        	$('#k_header').append('<button id="testBtn2" type="button" class="btn btn-default">delPayhis</button>')
        	$('#testBtn2').click(e=>{
 				kaeun.payments.listCart();
 			});
         }
};

kaeun.chart = {
		loadArea : ()=>{
		},
		drawArea : ()=>{
		}
};

