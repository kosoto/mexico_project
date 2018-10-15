"use strict"
var kaeun = kaeun || {};
kaeun = (()=>{
     var init =x=>{
      /*alert("스크립 "+ $.script() +" web:"+$.ctx());
          kaeun.router.init(x);*/
      kaeun.main.init();
     };
     return {init:init}
})();
kaeun.main=(()=>{
	 var user;
     var init =()=>{  //session값 가져올꺼임
           onCreate(); 
     };
     var onCreate =()=>{ 
           setContentView();
     };
     var setContentView =()=>{ 
    	 kaeun.home.mytaste();
     };
     return {init:init};
})();

kaeun.home = {
           mytaste :()=>{ //첫화면
               alert("home 들어옴");
               $.when(	 $.getScript($.script()+"/ui/k_aside.js"),
                          $.getScript($.script()+"/ui/k_Home.js"),
                          $.Deferred(y=>{
                               $(y.resolve);
                          })
                    ).done(x=>{
                    	  $('header').remove();	
                          $('#content').html(k_HomeUI());
                           $('#side_grid').html(asideUI());
                          //side menu시작
                           $('#slide-submenu').on('click',function() {				        
                        	        $(this).closest('.list-group').fadeOut('slide',function(){
                        	        	$('.mini-submenu').fadeIn();	
                        	        });
                        	      });
                        		$('.mini-submenu').on('click',function() {
                        	        $(this).next('.list-group').toggle('slide');
                        	        $('.mini-submenu').hide();
                        		});
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
                        		//content_home 시작
                        		 $('#content_grid').html("Home");                   
                        	}) //done끝나는지점
           }
           };
//payment관련 해서 : cart, payHis, present
kaeun.payment = (()=>{
	var ctx;
	var init= ()=>{
		ctx = $.ctx();
		onCreate();
	};
	var onCreate = ()=>{
		setContentView();
	};
	var setContentView=()=>{ //들어오는 값에 따라... 
		
	};
	return{init:init};
	})();


//cart,payHis,present
kaeun.payments = {
		cart : ()=>{ //read some
			$.getScript($.script()+'/comp.js',()=>{
			kui.content_g();
			//$('<div/>').html("footer").addClass("grid_footer").attr({id:"footer"}).appendTo($('#content_grid'));
			$('#title_l').addClass('cart_title').append('<h2>장바구니<h2>');
			$('#title_r').append('<div class="cart_process">' //장바구니-결제-완료
		            +'<div class="row bs-wizard" style="border-bottom:0;">'
		            +'<div class="col-xs-3 bs-wizard-step complete">'
		            //"https://t1.daumcdn.net/cfile/tistory/21522A4E5537613D33">
		            +'<div class="text-center bs-wizard-stepnum">장바구니</div>'
		            +'<div class="progress"><div class="progress-bar"></div></div>'
		            +'<a href="#" class="bs-wizard-dot"></a>'
		            +'<div class="bs-wizard-info text-center"></div>'
		            +'</div>'
		            +'<div class="col-xs-3 bs-wizard-step active"><!-- complete -->'
		            +'<div class="text-center bs-wizard-stepnum">결제</div>'
		            +'<div class="progress"><div class="progress-bar"></div></div>'
		            +'<a href="#" class="bs-wizard-dot"></a>'
		            +'<div class="bs-wizard-info text-center"></div>'
		            +'</div>'
		            +'<div class="col-xs-3 bs-wizard-step disabled"><!-- complete -->'
		            +'<div class="text-center bs-wizard-stepnum">완료</div>'
		            +'<div class="progress"><div class="progress-bar"></div></div>'
		            +'<a href="#" class="bs-wizard-dot"></a>'
		            +'<div class="bs-wizard-info text-center"></div>'
		            +'</div>  '
		            +'</div> '
		            +'</div>'
		            +'</div>');
			kui.checkbox({id:'cart_all_chk',txt:'선택'}).appendTo($('#content_g'));
			kui.btn({id:'cart_delteall_btn',size:'mini',color:'white',txt:'전체삭제'}).appendTo($('#content_g'));
			$('#content_g').append('<div id="cart_grid" class=list-grid-container>' 
					+'<div class="item_headerinfo">상품정보</div>'
					+'<div class="item_header">수량</div>' 
					+'<div class="item_header">상품금액</div>'
					+'<div class="item_header">총액</div>'
					+'<div id="cart_header_end" class="item_header">주문</div></div>');
			let arr = [{img:'사진',name:'상품a',info:'블라블라',num:'3',price:'1000',total:'3000'},
						{img:'사진2',name:'상품b',info:'블라블라',num:'3',price:'1000',total:'3000'},
						{img:'사진3',name:'상품a',info:'블라블라',num:'3',price:'1000',total:'3000'}
					]; 
			$.each(arr,(i,j)=>{ //grid_list R
				kui.grid_list({
					to: $('#cart_grid'),
					c1:kui.checkbox({id:'cart_chk'+i,txt:''}),
					c2:'<img class="cart_img" src="http://tong.joins.com/wp-content/uploads/sites/3/2017/05/2017-05-25-11.01.25-1_resized_.jpg">',
					c3:j.name+'<br/>'+j.info,
					c4:j.num,
					c5:j.price,
					c6:j.total,
					c7: $('<div/>').attr({id:'cart_btns'+i})	
				});
				kui.btn({id:'cart_order_btn'+i,size:'mini',color:'red',txt:'구매하기'}).appendTo($('#cart_btns'+i));
				$('#cart_btns'+i).append('<br/>').append(kui.btn({id:'cart_gift_btn'+i,size:'mini',color:'redp',txt:'선물하기'}))
				.append('<br/>').append(kui.btn({id:'cart_delete_btn'+i,size:'mini',color:'white',txt:'삭제하기'}));
			});
			kui.grid_list({ 
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
			kui.btn({id:'cart_gift_btn',size:'big',color:'redp',txt:'선물하기'}).appendTo($('#cart_pay'));
			kui.btn({id:'cart_order_btn',size:'big',color:'red',txt:'구매하기'}).appendTo($('#cart_pay'));
			/*$('#cart_pay').append(kui.btn({id:'cart_order_btn',size:'big',color:'grey',txt:'주문하기'}));*/
		});
		},
		payHis : ()=>{ //read some
			//$('#content_grid').html('<h2>구매함</h2><br><div>날짜선택: 목록보기:(구매완료/사용중) </div><br>');
			$.getScript($.script()+'/comp.js',()=>{
			kui.content_g();
			$('#title_l').append('구매 ｜선물');
			$('#title_r'); 
			$('#content_g').append('★받은선물함'); //슬라이드
			$('<div/>').html("구매내역").addClass("grid_main").attr({id:"content_g2"}).appendTo($('#content_g'));
			//contentG2 : 구매내역에 대한코딩
			$('#content_g2').append('<div id="pay_Search"></div>'
									+'<div id="pay_list" class=list-grid-container>' 
									+'<div class="item_header">구매날짜</div>' 
									+'<div class="item_headerinfo_pay">상품정보</div>'
									+'<div class="item_header">수량</div>' 
									+'<div class="item_header">상품금액</div>'
									+'<div class="item_header">총액</div>'
									+'<div id="cart_header_end" class="item_header">내역</div></div>');
			kui.n_div({clazz:'panel panel-default',html:$('<div id="pay_panel"/>').addClass("panel-body"),to:$('#pay_Search')}); //search
			
			$('#pay_panel').html('<div class="grid_layout">'
					  +'<div class="grid_title_l"><div id="search_form">'
					  +'구매기간:　<input class="form-control" type="date" value="2018-07-19" id="example-date-input">'
						+'　　~　　<input class="form-control" type="date" value="2018-10-19" id="example-date-input">'
						+'<br>'
						+'상품명　:　<input type="text" class="form-control" id="usr">'
						+'　상태 :　<select class="form-control" id="sel1">'
						+'<option>사용완료</option>'
						+'<option>사용중</option>'
					    +'<option>선물</option>'
						+'</select>'
					  +'</div></div>' 
					  +'<div class="grid_title_r"><div id="search_btn">'
					  +'★검색버튼'
					  +'</div></div>'
					  +'</div>');
			/*('#pay_panel_grid')
			.html('<div class="grid_layout"><div class="grid_title_l><div id="search_form">ㅎㅎ</div></div><div class="grid_title_r><div id="search_btn">ㅎㅎ</div></div></div>')
			.appendTo($('#pay_panel'));*/
			let arr = [{img:'사진',name:'상품a',info:'블라블라',num:'3',price:'1000',total:'3000'},
						{img:'사진2',name:'상품b',info:'블라블라',num:'3',price:'1000',total:'3000'},
						{img:'사진3',name:'상품a',info:'블라블라',num:'3',price:'1000',total:'3000'}
					]; 
			$.each(arr,(i,j)=>{
				kui.grid_list({
					to: $('#pay_list'),
					c1:"2018/10/01", //가능하다면 같은날짜는 합쳐서 ㅎㅎ 
					c2:'<img class="cart_img" src="http://tong.joins.com/wp-content/uploads/sites/3/2017/05/2017-05-25-11.01.25-1_resized_.jpg">',
					c3:j.name+'<br/>'+j.info,
					c4:j.num,
					c5:j.price,
					c6:j.total,
					c7: "사용완료or<br/>선물(to.Id)"	
				});
			}); //each완료
			$('<div/>').html("★페이지네이션 자리").addClass("grid_footer").attr({id:"footer"}).appendTo($('#content_grid')); 
			})//getscript지우기
		},
		gift : ()=>{ //read some
			$.getScript($.script()+'/comp.js',()=>{
			kui.content_g();
			$('#title_l').append('받은선물함');
			$('#title_r').append('');    
			$('#content_g').append('블라블라');
			})//getscript지우기
		},
		write : ()=>{ //taste write
			
		},
		update : ()=>{ //taste update
			
		},
		del : ()=>{ //taste delete되는부분
			
		}
};

kaeun.tastes = {
		analysis : ()=>{ //취향분석
			$.getScript($.script()+'/comp.js',()=>{
			kui.content_g();
			$('#title_l').append('취향분석');
			$('#title_r').append('');    
			$('#content_g').append('블라블라');  
			}) //getscript지우기
		},
         collect : ()=>{ //콜렉션
        	 kui.content_g();
			$('#title_l').append('콜렉션');
			$('#title_r').append('');    
			$('#content_g').append('블라블라');
         }
};
