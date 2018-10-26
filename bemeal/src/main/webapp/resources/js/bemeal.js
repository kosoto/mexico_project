var bemeal = bemeal || {};
bemeal = (()=>{
	var init =x=>{
		/*$(window).resize(()=>{ 브라우저의 사이즈 변화감지
			console.log("window 폭:"+$(window).width());
		});*/
		bemeal.router.init(x);
	};
	var onCreate =()=>{
		setContentView();
	};
	var setContentView =()=>{
		
	};
	return {init:init};
})();
bemeal.main = (()=>{
	var init =()=>{
		onCreate();
	};
	var onCreate=()=>{
		$.cookie.json=true;
		setContentView();
	};
	var setContentView=()=>{
		// nav
		$('#wrapper').append(bemeal.compo.nav());
		// header, content
		bemeal.router.main();
	};
	return {init:init};
})();
bemeal.router = {
		init : x=>{
			$.when(
				$.getScript(x+"/resources/js/router.js",()=>{
					$.extend(new Session(x));
				}),
				$.getScript(x+"/resources/js/util.js"),
				$.getScript(x+"/resources/js/comp.js"),
				$.Deferred(y=>{
					$(y.resolve);
				})
			).done(z=>{
				bemeal.main.init();
			});
		},
		main : ()=>{
			if($.cookie("member")!==undefined){
				$('.auth').show();
				$('.unAuth').hide();
			}else{
				$('.auth').hide();
				$('.unAuth').show();
			}
			/*메인화면 header, content 그리기*/
				$('header').remove();
				$('#content').remove();
				$('#wrapper')
				.append(
					$('<header/>').append(
							bemeal.compo.banner({
								id:'banner',
								arr:[{image:"/web/resources/img/cmm/banner/banner1.jpg"},{image:"/web/resources/img/cmm/banner/banner2.jpg"}]
							})
					),					
					$('<div/>').attr({id:'content'}).addClass('mainContent')
					/*,$('<footer/>')*/
				);
				/*footer 삭제
				$.getScript($.script()+"/ui/footer.js",()=>{
					$('footer').append(footerUI());
				});*/
				let $content = $('#content');
				let $carousels = $('<div/>').appendTo($content);
				let arr = [
					{category:'grade',title:'가장 평점이 높은'},
					{category:'buy',title:'가장 판매량이 높은'},
					{category:'wish',title:'가장 인기 있는'}
				];
				$.each(arr,(i,j)=>{ 
					$.getJSON($.ctx()+"/item/list/"+j.category+'/null',d=>{
						$carousels.append(
								bemeal.compo.carousel({
									id:'carousel'+i,
									title:j.title,
									arr:d.list,
									row_size:5
								})
						);
					});
				}); //$.each end

				let num = 0;
				let titles = {} || titles;
				let member = $.cookie('member');
				$.getJSON($.ctx()+'/tagList',d=>{
					tags = d;
					if(member!==undefined){
						titles = {
								gender:member['gender'],
								age:(member['age']+"").substring(0,1)+"0"
						};
					}
					for(let i=1;i<=20;i++){
						let temp = Math.floor(Math.random()*tags.length);
						titles['tag'+i] = tags[temp];
						tags.splice(temp,1);
					}
					let keySet = Object.keys(titles);
					let values = Object.values(titles);
					let p = {
							gender:'자가 좋아하는',
							age:'대가 좋아하는'
					};
					let $window = $(window);
					$window.on('scroll.category',e=>{
							if(keySet.length!=0 && $window.scrollTop()+$window.height()+80>$(document).height()){
								let key = keySet.pop();
								let value = values.pop();
								$.getJSON($.ctx()+"/item/list/"+key+"/"+value,d=>{
									setTimeout(() => {
										$carousels.append(
												bemeal.compo.carousel({
													id:'carousel'+key,
													title:(x=>{
														if(key==='gender'){
															return value+'성이 좋아하는'
														}
														if(key==='age'){
															return value+'대가 좋아하는'
														}
														if(key.substring(0,3)==='tag'){
															return '#'+value;
														}
														return '';
													})(),
													arr:d.list,
													row_size:5
												})
										);
									}, 750);
								}); 
							}
					});//scroll event end
				}); //getJSON tagList end
		}
};

bemeal.compo=(()=>{
	var nav = ()=>{
		return $('<nav/>').addClass('navbar fixed-top navbar-expand-lg navbar-light lighten-5 scrolling-navbar').append(
					$('<a/>').addClass('navbar-brand').attr({href:'#',id:'logo'}).append($('<strong/>').append($('<img/>').attr({src:$.img()+"/cmm/logo.png"}))).click(e=>{
						e.preventDefault();
						$(window).off('scroll.category');
						$('.nav-item').removeClass('active');
						$('#content').removeClass('mainContent');
						bemeal.router.main();
					}),
					$('<button/>').addClass('navbar-toggler').attr({
						type:'button','data-toggle':'collapse','data-target':'#navbarSupportedContent',
						'aria-controls':'navbarSupportedContent','aria-expanded':'false','aria-label':'Toggle navigation'
					}).append($('<span/>').addClass('navbar-toggler-icon')),
					$('<div/>').addClass('collapse navbar-collapse').attr('id','navbarSupportedContent').append(
						$('<ul/>').addClass('navbar-nav mr-auto').append(
							$('<li/>').addClass('nav-item').append(
								$('<a/>').addClass('nav-link').attr({href:'#',id:'menu'}).text('MENU').click(e=>{
									e.preventDefault();
									$('.nav-item').removeClass('active');
									$('#menu').parent().addClass('active');
									$.getScript($.script()+"/yoonho.js",()=>{
										$(window).off('scroll.category');
										$('#content').removeClass('mainContent');
										yoonho.service.list();
									})
								})
							),
							$('<li/>').addClass('nav-item').append(
								$('<a/>').addClass('nav-link unAuth').attr({href:'#',id:'join'}).text('JOIN').click(e=>{
									e.preventDefault();
									$('.nav-item').removeClass('active');
									$('#join').parent().addClass('active');
									$.getScript($.script()+"/junghoon.js",()=>{
										$(window).off('scroll.category');
										$('#content').removeClass('mainContent');
										junghoon.member.add();
									})
								})
							),
							$('<li/>').addClass('nav-item').append(
								$('<a/>').addClass('nav-link auth').attr({href:'#',id:'taste'}).text('TASTE').hide().click(e=>{
									e.preventDefault();
									$('.nav-item').removeClass('active');
									$('#taste').parent().addClass('active');
									$.getScript($.script()+"/kaeun.js",()=>{
										$(window).off('scroll.category');
										$('#content').removeClass('mainContent');
										kaeun.main.init();
									})
								})
							),
							$('<li/>').addClass('nav-item').append(
								$('<a/>').addClass('nav-link auth').attr({href:'#',id:'evaluate'}).hide().text('평가하기').click(e=>{
									e.preventDefault();
									$('.nav-item').removeClass('active');
									$('#evaluate').parent().addClass('active');
									$(window).off('scroll.category');
									$('#content').removeClass('mainContent');
									bemeal.evaluate.main();
								})
							)
						),
						$('<form/>').addClass('form-inline').append(
							$('<input/>').addClass('form-control mr-sm-2').attr({type:'text','aria-label':'Search'}).keydown(e=>{if(e.keyCode === 13)e.preventDefault();}).keyup(e=>{
								//검색하기
								let searchWord = e.currentTarget.value;
								console.log('검색어:'+searchWord);
								if(searchWord!==''){
									$.getJSON($.ctx()+"/navSearch/"+searchWord,d=>{
										$(window).off('scroll.category');
										bemeal.search.list({
											word:searchWord,
											list:d
										});
									});	
								}else{//검색어가 없으면 다시 메인
									bemeal.router.main();
								}
								
							}),
							$('<button/>').addClass('btn btn-outline-white btn-sm my-0').attr({style:'color:black!important',type:'button',id:'testSearch'}).text('Search').click(e=>{
								e.preventDefault();
								$.getScript($.script()+"/junghoon.js",()=>{
									//$(window).off('scroll.category');
									junghoon.service.search();
								})
							})
						),
						$('<li/>').addClass('nav-item dropdown').append(
							$('<a/>').addClass('nav-link dropdown-toggle').attr({id:'navbarDropdownMenuLink','data-toggle':'dropdown','aria-haspopup':'true','aria-expanded':'false'}).append(
								$('<i/>').addClass('fa fa-user')
							),
							$('<div/>').addClass('dropdown-menu dropdown-menu-right dropdown-unique').attr({id:'info','aria-labelledby':'navbarDropdownMenuLink'}).append(
								$('<a/>').addClass('dropdown-item unAuth').attr({href:'#',id:'login'}).text('로그인').click(e=>{
									e.preventDefault();
									$.getScript($.script()+"/junghoon.js",(e)=>{
										$(window).off('scroll.category');
										$('#content').removeClass('mainContent');
										junghoon.member.login();
									})
								}),
								$('<a/>').addClass('dropdown-item auth').attr({href:'#',id:'login_form'}).text('마이페이지').click(e=>{
									e.preventDefault();
									$.getScript($.script()+"/junghoon.js",(e)=>{
										$(window).off('scroll.category');
										$('#content').removeClass('mainContent');
										junghoon.service.mypage();
									})
								}),
								$('<a/>').addClass('dropdown-item auth').attr({href:'#'}).text('로그아웃').click(e=>{
									e.preventDefault();
									$.getScript($.script()+"/junghoon.js",(e)=>{
										$(window).off('scroll.category');
										//$('#content').removeClass('mainContent');
										$('.auth').hide();
										$('.unAuth').show();
										$.removeCookie('member');
										bemeal.router.main();
									})
								})
							)
						)
					)
				);
	};
	var carousel = x=>{/*x.id, x.title 슬라이드의 제목, x.arr 슬라이드에 보여질 이미지들, x.row_size 한번에 보여줄 이미지의 갯수*/
		let arr = x.arr;
		let row_size = x.row_size;
		let $div = $('<div/>').attr({id:x.id,'data-ride':'carousel'}).addClass('carousel slide')
					.append($('<h5/>').addClass('carousel-title').append($('<span/>').text(x.title)));
		let $ol = $('<ol/>').addClass('carousel-indicators').appendTo($div);
		let navi_size = x.arr.length/row_size;
		for(let i=0;i<navi_size;i++){
			$('<li/>').attr({'data-target':"#"+x.id,'data-slide-to':i}).addClass((i==0)?'active':'')
			.appendTo($ol);
		}
		//
		let $inner = $('<div/>').addClass('carousel-inner').appendTo($div);
		for(let i=0;i<navi_size;i++){
			let $temp = $('<div/>').addClass('carousel-item'+((i==0)?' active':'')).appendTo($inner);
			let $span = $('<span/>').appendTo($temp);
			for(let j=i*row_size;j<(i+1)*row_size;j++){
				$('<div/>').text(arr[j].itemName).appendTo($span);
				$('<img/>').attr({
					src:arr[j].img,
					alt:arr[j].itemName
					,
					style:"width:"+(100/row_size)+"%;height:150px"
				})
				.click(e=>{
					alert('도시락 누름');
					$.getScript($.script()+"/yoonho.js",()=>{
						yoonho.service.retrieve(arr[j].itemSeq);
					});
				})
				.addClass('img_hover')
				.appendTo($span);
			}
		}
		let arrows = ['prev','next'];
		for(let i=0;i<2;i++){
			$('<a/>').addClass('carousel-control-'+arrows[i]).attr({href:'#'+x.id,'data-slide':arrows[i], roll:'button'})
			.append(
					$('<span/>').addClass('carousel-control-'+arrows[i]+'-icon').attr('aria-hidden','true'),
					$('<span/>').addClass('sr-only').text(arrows[i])
			)
			.appendTo($div);
		}
		return $div.swipe({
					  swipe: function(event, direction, distance, duration, fingerCount, fingerData) {
						    if (direction == 'left') $(this).carousel('next');
						    if (direction == 'right') $(this).carousel('prev');
						  },
						  allowPageScroll:"vertical"
						});;
	};
	var banner = x=>{ /* x.id, x.arr 배너에 보여줄 이미지들*/
		let $div = $('<div/>').attr({id:x.id,'data-ride':'carousel'}).addClass('carousel slide')
					.append($('<h5/>').addClass('carousel-title').append($('<span/>').text(''))); /* text : 배너 제목*/
		let $ol = $('<ol/>').addClass('carousel-indicators').appendTo($div);
		let arr = x.arr;
		for(let i=0;i<arr.length;i++){
			$('<li/>').attr({'data-target':"#"+x.id,'data-slide-to':i}).addClass((i==0)?'active':'')
			.appendTo($ol);
		}
		let $inner = $('<div/>').addClass('carousel-inner').appendTo($div);
		for(let i=0;i<arr.length;i++){
			let $temp = $('<div/>').addClass('carousel-item'+((i==0)?' active':'')).appendTo($inner);
			let $span = $('<span/>').appendTo($temp);
			for(let j=i;j<(i+1);j++){
				$('<div/>').text('').appendTo($span); /*text : 배너 내용*/
				$('<img/>').attr({
					src:arr[j].image,
					style:"width:100%"
				})
				.click(e=>{
					alert('배너 누름');
				})
				.appendTo($span);
			}
		}
		let arrows = ['prev','next'];
		for(let i=0;i<2;i++){
			$('<a/>').addClass('carousel-control-'+arrows[i]).attr({href:'#'+x.id,'data-slide':arrows[i],roll:'button'})
			.append(
					$('<span/>').addClass('carousel-control-'+arrows[i]+'-icon').attr('aria-hidden','true'),
					$('<span/>').addClass('sr-only').text(arrows[i])
			)
			.appendTo($div);
		}
		return $div;
	};
	return {
		nav:nav,
		carousel:carousel,
		banner:banner
		};
})();

bemeal.evaluate=(()=>{
	var main=x=>{
		$('header').remove();
		$('#content').empty();
		let gradeCnt = 0;
		let itemCnt = 0;
		let width = 0;
		let id = $.cookie('member').memberId;
		let message = '';
		$.getJSON($.ctx()+'/grade/count/'+id,d=>{
			gradeCnt = d.gradeCnt;
			itemCnt = d.itemCnt;
			width = gradeCnt/itemCnt;
			$('<div/>').addClass('evaluate_progress').appendTo($('#content')).append(
					$('<div/>').addClass('evaluate_progress_ratings_count').attr({id:'gradeCnt'}).text(gradeCnt),
					$('<div/>').addClass('evaluate_progress_message').text('평가를 얼마나 했는지 확인해 보세요!'),
					$('<div/>').addClass('evaluate_progress_bar').append(
						$('<div/>').addClass('evaluate_progress_value').attr({id:'gradeWidth',style:'width:'+width*580+'px;','data-itemcnt':itemCnt})
					)
				);
				$('<div/>').appendTo($('#content')).attr({style:'height:85px'});
				let page = 1;
				loadPage({
					id:id,
					page:page++,
				});
				let $window = $(window);
				$window.on('scroll.category',e=>{
					if($window.scrollTop()+$window.height()+5>$(document).height()){
						loadPage({
							id:id,
							page:page++,
						});
					}
				});//scroll event end
		});
		
	};
	var loadPage=x=>{
		console.log(x);
		let memberId = x.id;
		$.getJSON($.ctx()+'/evaluate/'+memberId+'/'+x.page,d=>{//id와 page를 가지고 평가 하지 않은 제품들을 가져오기
			$.getScript($.script()+'/yoonho.js',()=>{
				if(d.pagination.existNext){ //다음 페이지가 존재할때만 
					let arr = d.list;
					let index = 0;
					let $content =  $('#content');
					for(let i=1;i<=5;i++){
						let $gift_slid = $('<div/>').addClass('card-group');
						$content.append(
								$('<div>').addClass('col').append(
										$('<div/>').addClass('card_row').append(
												$gift_slid
										)
								)
						);
						for(let j=1;j<=4;j++){
							let $gift_c = $('<div/>').addClass('card gift_c');
							let $gift_img = $('<div/>').addClass('gift_img').append(
									$('<img/>').attr({src:arr[index].img})
							).appendTo($gift_c);
							let $gift_details = $('<div/>').addClass('gift_details').appendTo($gift_c);
							let $h2 = $('<h2/>').addClass('evaluative_title').text(arr[index].itemName).appendTo($gift_details);
							let $star_rating_container = $('<div/>').attr({'data-seq':arr[index].itemSeq}).appendTo($gift_details)
							.starRating({ //https://github.com/nashio/star-rating-svg
								initialRating: 0, //초기값  
								starSize: 32,  //width속성값
								//minRating : 0,
								emptyColor : 'white',
								hoverColor : 'orange',
								activeColor : 'orange',
								ratedColor : 'orange',
								useGradient : false,
								strokeColor: 'orange',  //border color
								callback : (currentRating, $el)=>{
									let $gradeCnt = $('#gradeCnt');
									let $gradeWidth = $('#gradeWidth');
									let cnt = $gradeCnt.text()*1;
									let itemCnt = $gradeWidth.data('itemcnt')*1;
									if(currentRating!=0){
										let seq = $el.data('seq');
										$.ajax({
											url : $.ctx()+'/grade/evaluate',
											method : 'post',
											contentType : 'application/json',
											data : JSON.stringify({
												memberId:memberId,
												seq:seq,
												currentRating:currentRating*2
											}),
											success : r=>{
												console.log('grade/evluate 리턴:'+r);
												if(r==='add'){
													$gradeCnt.html(cnt+1);
													$gradeWidth.attr({style:'width:'+((cnt+1)/itemCnt)*580+'px'});
												}else if(r==='remove'){
													$el.starRating('setRating', 0);
													$gradeCnt.html(cnt-1);
													$gradeWidth.attr({style:'width:'+((cnt-1)/itemCnt)*580+'px'});
												}
											},
											error : (e1,e2,e3)=>{
												console.log(e1);
												console.log(e2);
												console.log(e3);
											}
										});
										/*$.getJSON($.ctx()+'/grade/evaluate/'+memberId+'/'+seq+'/'+(currentRating*2), r=>{
											console.log('grade/evluate 리턴:'+r);
											if(r==='add'){
												$gradeCnt.html(cnt+1);
												$gradeWidth.attr({style:'width:'+((cnt+1)/itemCnt)*580+'px'});
											}else if(r==='remove'){
												$el.starRating('setRating', 0);
												$gradeCnt.html(cnt-1);
												$gradeWidth.attr({style:'width:'+((cnt-1)/itemCnt)*580+'px'});
											}
										});*/
								   }
								} //callback end
								}); //star-rating end
							let $gift_msg = $('<div/>').addClass('gift_msg').appendTo($gift_details).append(
									$('<p/>').text(arr[index].explains),
									$('<a/>').addClass('evaluateToRetrieve').text('상세보기').attr({href:'#','data-seq':arr[index].itemSeq})
									.click(e=>{
										e.preventDefault();
										yoonho.service.retrieve(e.currentTarget.dataset.seq);
									})
							);
							$gift_slid.append($gift_c);
							index++;
						}
					}
				}
			});
			
		}); /* getJSON end*/
	};
	return {
		main:main,
		loadPage:loadPage
		}; 
})();

bemeal.search=(()=>{
	var list=x=>{
		$('header').remove();
		$('#content').empty();
		let arr = x.list;
		let word = x.word;
		let length = arr.length;
		let index = 0;
		let $content =  $('#content').append(
							$('<h5/>').addClass('search_page_head').append(
								$('<span/>').append(
										$('<span/>').text("'"),
										$('<span/>').text(word),
										$('<span/>').text("'")
								),
								$('<span/>').text('검색결과')
							)
						);
		for(let i=1;i<=((length>20)?5:Math.ceil(length/4));i++){
			let $gift_slid = $('<div/>').addClass('card-group');
			$content.append(
					$('<div>').addClass('col').append(
							$('<div/>').addClass('card_row').append(
									$gift_slid
							)
					)
			);
			for(let j=1;j<=4;j++){
				let flag = (arr[index]!==undefined);
				let $gift_c = $('<div/>').addClass('card gift_c').append(
									$('<div/>').addClass('gift_img').append(
										(()=>{
											if(flag){
												return $('<img/>').attr({src:arr[index].img})
											}else{
												return $('<img/>')
											}
										})()
									),
									$('<div/>').addClass('gift_details').append(
											$('<h2/>').addClass('evaluative_title').text((flag)?arr[index].itemName:''),
											$('<div/>').attr({'data-seq':(flag)?arr[index].itemSeq:0}),
											$('<div/>').addClass('gift_msg').append(
													$('<p/>').text((flag)?arr[index].explains:''),
													$('<a/>').addClass('evaluateToRetrieve').text('상세보기').attr({href:'#','data-seq':(flag)?arr[index].itemSeq:''})
													.click(e=>{
														e.preventDefault();
														if(e.currentTarget.dataset.seq!=0){
															$.getScript($.script()+'/yoonho.js',()=>{
																yoonho.service.retrieve(e.currentTarget.dataset.seq);
															});
														}
													})
											)
									)
							);
				if(!flag){
					$gift_c.attr('style','visibility: hidden;');
				}
				//let $gift_details = $('<div/>').addClass('gift_details').appendTo($gift_c);
				//let $h2 = $('<h2/>').addClass('evaluative_title').text((flag)?arr[index].itemName:'').appendTo($gift_details);
				//let $star_rating_container = $('<div/>').attr({'data-seq':(flag)?arr[index].itemSeq:0}).appendTo($gift_details)
				/*let $gift_msg = $('<div/>').addClass('gift_msg').appendTo($gift_details).append(
						$('<p/>').text((flag)?arr[index].explains:''),
						$('<a/>').addClass('evaluateToRetrieve').text('상세보기').attr({href:'#','data-seq':(flag)?arr[index].itemSeq:''})
						.click(e=>{
							e.preventDefault();
							if(e.currentTarget.dataset.seq!=0){
								yoonho.service.retrieve(e.currentTarget.dataset.seq);
							}
						})
				);*/
				$gift_slid.append($gift_c);
				index++;
			}
		}
	};
	return {list:list};
})();












