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
			$('#content_grid').empty().html('<div class="grid_cart_layout">'
					  +'<div class="grid_main"><div id="cart_content"/></div>'
					  +'<div class="grid_title_l"><div id="title_l"/></div>' 
					  +'<div class="grid_title_r"><div id="title_r"/></div>'
					  +'<div class="grid_footer"><div id="footer"/></div>'
					  +'</div>');
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
			$('#cart_content').append(k_ui.checkbox({id:'cart_all_chk',txt:'선택'}));
		/*table	$('<div/>').html('<table id="cart" class="table table-hover table-condensed">'
					+'<thead>'
					+'<tr>'
					+'<th style="width:50%">　상품정보</th>'
					+'<th style="width:10%">수량</th>'
					+'<th style="width:8%">금액</th>'
					+'<th style="width:22%" class="text-center">총액</th>'
					+'<th style="width:10%">주문</th>'
					+'</tr>'
					+'</thead>'
					//+'<tbody/><tfooter/>'
					+'</table>').appendTo($('#cart_content'));
			$('<tbody/>').html();*/
			$('#cart_content').append('<div id="cart_grid" class=cart-grid-container>' 
					+'<div class="item_headerinfo">상품정보</div>'
					+'<div class="item_header">수량</div>' 
					+'<div class="item_header">상품금액</div>'
					+'<div class="item_header">총액</div>'
					+'<div id="cart_header_end" class="item_header">주문</div></div>');
			let arr = [{img:'사진',name:'상품a',info:'블라블라',num:'3',price:'1000',total:'3000'},
						{img:'사진2',name:'상품b',info:'블라블라',num:'3',price:'1000',total:'3000'},
						{img:'사진3',name:'상품a',info:'블라블라',num:'3',price:'1000',total:'3000'}
					]; // 우선은더미 ????
			$.each(arr,(i,j)=>{ 
				//k_ui.checkbox({id:'',txt:''}); + 이거
				k_ui.n_div({clazz:'iteminfo',html:k_ui.checkbox({id:'cart_chk'+i,txt:''}),to:$('#cart_grid')});
				k_ui.n_div({clazz:'iteminfo1',html:'<img class="cart_img" src="http://tong.joins.com/wp-content/uploads/sites/3/2017/05/2017-05-25-11.01.25-1_resized_.jpg">',to:$('#cart_grid')});
				k_ui.n_div({clazz:'itemname',html:j.name+'<br/>'+j.info,to:$('#cart_grid')});
				$('<div/>').addClass('iteminfo').html(j.num).appendTo($('#cart_grid'));
				$('<div/>').addClass('iteminfo').html(j.price).appendTo($('#cart_grid'));
				$('<div/>').addClass('iteminfo').html(j.total).appendTo($('#cart_grid'));
				$('<div/>').addClass('iteminfo').html(k_ui.n_btn({id:'cart_order_btn'+i,size:'mini',color:'red',txt:'주문하기'}))
				.append('<br/>').append(k_ui.n_btn({id:'cart_gift_btn'+i,size:'mini',color:'yellow',txt:'선물하기'}))
				.append('<br/>').append(k_ui.n_btn({id:'cart_delete_btn'+i,size:'mini',color:'green',txt:'삭제하기'}))
				.appendTo(('#cart_grid'));
			});
			$('#cart_grid').append('<div class="item_result"><div id="cart_pay"></div></div>'); //주문결제		
			k_ui.n_btn({id:'cart_order_btn',size:'big',color:'red',txt:'주문하기'}).appendTo($('#cart_pay'));
			//$('#cart_pay').append(k_ui.n_btn({id:'cart_order_btn',size:'big',color:'red',txt:'주문하기'}));
		},
		payHis : ()=>{ //read some
			//$('#content_grid').html('<h2>구매함</h2><br><div>날짜선택: 목록보기:(구매완료/사용중) </div><br>');
			$('#content_grid').html('<div class="grid_standard_layout">'
					  +'<div class="grid_main"><div id="st_content"/></div>'
					  +'<div class="grid_title_l"><div id="title_l"/></div>' 
					  +'<div class="grid_title_r"><div id="title_r"/></div>'
					  +'</div>');
			$('#title_l').append('구매함');
			$('#title_r').append('<div class="cart_process">' //장바구니-결제-완료에 체크
		            +'<div class="row bs-wizard" style="border-bottom:0;">'
		            +'<div class="col-xs-3 bs-wizard-step complete">'
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
			$('#st_content').append('블라블라');
		},
		gift : ()=>{ //read some
			$('#content_grid').html('<div class="grid_standard_layout">'
					  +'<div class="grid_main"><div id="st_content"/></div>'
					  +'<div class="grid_title_l"><div id="title_l"/></div>' 
					  +'<div class="grid_title_r"><div id="title_r"/></div>'
					  +'</div>');
			$('#title_l').append('선물함');
			$('#title_r').append('');    
			$('#st_content').append('블라블라'); 
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
			$('#content_grid').html('<div class="grid_standard_layout">'
					  +'<div class="grid_main"><div id="st_content"/></div>'
					  +'<div class="grid_title_l"><div id="title_l"/></div>' 
					  +'<div class="grid_title_r"><div id="title_r"/></div>'
					  +'</div>');
			$('#title_l').append('취향분석');
			$('#title_r').append('');    
			$('#st_content').append('블라블라');   
		},
         collect : ()=>{ //콜렉션
        	 $('#content_grid').html('<div class="grid_standard_layout">'
					  +'<div class="grid_main"><div id="st_content"/></div>'
					  +'<div class="grid_title_l"><div id="title_l"/></div>' 
					  +'<div class="grid_title_r"><div id="title_r"/></div>'
					  +'</div>');
			$('#title_l').append('콜렉션');
			$('#title_r').append('');    
			$('#st_content').append('블라블라');   
         }
};

var k_ui = { //n_normal e_effect
		n_btn : x=>{ //x.id x.size(big,mini) x.color(red,blue,green,purple,yellow,grey)
			return $('<button/>').attr({type : 'button', id: x.id})
			.addClass('btn-two '+x.color+' '+x.size)
			.html(x.txt); //k_ui.n_btn({id:'',size:'mini',color:'red',txt:'주문하기'})
		},
		e_btn : x=>{ 
			return '';
		},
		checkbox : x=>{ //x.id x.txt //k_ui.checkbox({id:'',txt:''})
			let p = $('<div/>').addClass('form-check');
			$('<input/>').attr({type:'checkbox', id:x.id})
			.addClass('form-check-input').appendTo(p);
			$('<label/>').attr({type:'label'})
			.addClass('form-check-label').html(x.txt).appendTo(p);
			return p;
		},
		stndlayout : x=>{
		},
		n_div : x=>{ //clazz,html,to// k_ui.n_div({clazz:'',html:'',to:''});
			return $('<div/>').addClass(x.clazz).html(x.html).appendTo(x.to);
		}
	};
