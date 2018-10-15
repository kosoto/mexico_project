var bemeal = bemeal || {};
bemeal = (()=>{
	var init =x=>{
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
		setContentView();
	};
	var setContentView=()=>{
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
				$.Deferred(y=>{
					$(y.resolve);
				})
			).done(z=>{
				bemeal.main.init();
			});
		},
		main : ()=>{
			/*메인화면 그리기*/
			$.getScript($.script()+"/ui/navi.js",()=>{
				$('#wrapper').html(naviUI())
				.append(
					$('<header/>').append(
							bemeal.compo.banner({
								id:'banner',
								arr:[{image:"/web/resources/img/cmm/banner1.jpg"},{image:"/web/resources/img/cmm/banner2.jpg"}]
							})
					),
					$('<div/>').attr({id:'content'}),
					$('<footer/>')
				);
				
				$.getScript($.script()+"/ui/footer.js",()=>{
					$('footer').append(footerUI());
				});
				
				let $content = $('#content');
				let $carousels = $('<div/>').appendTo($content);

				$.getJSON($.ctx()+"/item/list/first",d=>{
					$carousels.append(
							bemeal.compo.carousel({
								id:'carousel1',
								title:'가장 평점이 높은',
								arr:d.list,
								row_size:5
							})
					);
				}); /*getJSON end*/
				
				$.getJSON($.ctx()+"/item/list/second",d=>{
					$carousels.append(
							bemeal.compo.carousel({
								id:'carousel2',
								title:'가장 인기 있는',
								arr:d.list,
								row_size:5
							})
					);
				}); /*getJSON end*/
				
				$.getJSON($.ctx()+"/item/list/third",d=>{
					$carousels.append(
							bemeal.compo.carousel({
								id:'carousel3',
								title:'가장 판매량이 높은',
								arr:d.list,
								row_size:5
							})
					);
				}); /*getJSON end*/
				
				// 무한 스크롤 테스트
				let num = 4;
				/*
				 * 무한 스크롤로 추가되는 카테고리들을 어떻게 정할지 고민 필요
				 * case 1 : DB에서 카테고리들을 가져와서 js에서 배열로 저장해둔 후 배열에서 랜덤으로 카테고리를 뽑아내서 결정
				 * 			js에서 java로 데이터를 요청할때 카테고리이름만 전송하면 됨.
				 * 			java에서 카테고리를 가져올때 전부가 아니라 화면에 보여주고 싶은 갯수 만큼만 가져올것
				 * case 2 : js에서 java로 데이터롤 요청하면 java에서 DB에서 이미 화면에 뿌려지지 않은 카테고리를 검색하여 js로 전송
				 * 			이 경우 js에서 이미 검색된 배열정보를 java로 보내주어야함.  
				 */
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
				
				
				$('#logo').click(e=>{
					bemeal.router.main();
				});

				$('#taste').click(e=>{
					alert('taste click');
					$.getScript($.script()+"/kaeun.js",()=>{
						/*가야 할 곳은 개인이 알아서*/
						$window.off('scroll');
						kaeun.init();
					})
				});
				$('#menu').click(e=>{
					alert('1.menu click');
					$.getScript($.script()+"/yoonho.js",()=>{
						/*가야 할 곳은 개인이 알아서*/
						$window.off('scroll');
						yoonho.service.list();

					})
				});
				$('#login').click(e=>{
					alert('login click');
					$.getScript($.script()+"/junghoon.js",(e)=>{
						/*가야 할 곳은 개인이 알아서*/
						$window.off('scroll');
						junghoon.member.login();
					})
				});
				$('#join').click(e=>{
					alert('join click');
					$.getScript($.script()+"/junghoon.js",()=>{
						/*가야 할 곳은 개인이 알아서*/
						$window.off('scroll');
						junghoon.member.add();
					})
				});
				$('#evaluate').click(e=>{
					alert('evaluate 클릭');
					bemeal.evaluate.main();
				});
				$('#sam').click(e=>{
					alert('sam click');
					$.getScript($.script()+"/sam.js",()=>{
						$window.off('scroll');
						sam.util.popup();
					})
				});
				
			
			});
			
		}
};
bemeal.compo=(()=>{
	var carousel = x=>{/*x.id, x.title 슬라이드의 제목, x.arr 슬라이드에 보여질 이미지들, x.row_size 한번에 보여줄 이미지의 갯수*/
		let arr = x.arr;
		let row_size = x.row_size;
		let $div = $('<div/>').attr({id:x.id,'data-ride':'carousel'}).addClass('carousel slide')
					.append($('<h5/>').addClass('carousel-title').append($('<span/>').text(x.title)));
		let $ol = $('<ol/>').addClass('carousel-indicators').appendTo($div);
		let navi_size = x.arr.length/row_size;
		for(let i=0;i<navi_size;i++){
			let $li = $('<li/>').attr({'data-target':"#"+x.id,'data-slide-to':i});
			if(i == 0) $li.addClass('active');
			$li.appendTo($ol);
		}
		let $inner = $('<div/>').addClass('carousel-inner').appendTo($div);
		for(let i=0;i<navi_size;i++){
			let $temp = $('<div/>').addClass('item').appendTo($inner);
			let $span = $('<span/>').appendTo($temp);
			if(i == 0) $temp.addClass('active');
			for(let j=i*row_size;j<(i+1)*row_size;j++){
				$('<div/>').text(arr[j].itemName).appendTo($span);
				$('<img/>').attr({
					src:arr[j].image,
					alt:arr[j].itemName,
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
		let arrows = [['left','prev'],['right','next']]
		for(let i=0;i<2;i++){
			$('<a/>').addClass(arrows[i][0]+' carousel-control').attr({href:'#'+x.id,'data-slide':arrows[i][1]})
			.append(
					$('<span/>').addClass('glyphicon glyphicon-chevron-'+arrows[i][0]),
					$('<span/>').addClass('sr-only').text(arrows[i][1])
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
			let $li = $('<li/>').attr({'data-target':"#"+x.id,'data-slide-to':i});
			if(i == 0) $li.addClass('active');
			$li.appendTo($ol);
		}
		let $inner = $('<div/>').addClass('carousel-inner').appendTo($div);
		for(let i=0;i<arr.length;i++){
			let $temp = $('<div/>').addClass('item').appendTo($inner);
			let $span = $('<span/>').appendTo($temp);
			if(i == 0) $temp.addClass('active');
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
		let arrows = [['left','prev'],['right','next']]
		for(let i=0;i<2;i++){
			$('<a/>').addClass(arrows[i][0]+' carousel-control').attr({href:'#'+x.id,'data-slide':arrows[i][1]})
			.append(
					$('<span/>').addClass('glyphicon glyphicon-chevron-'+arrows[i][0]),
					$('<span/>').addClass('sr-only').text(arrows[i][1])
			)
			.appendTo($div);
		}
		return $div;
	};
	return {
		carousel:carousel,
		banner:banner
		};
})();

bemeal.evaluate=(()=>{
	var main=x=>{
		$('header').remove();
		let $header = $('<div/>').addClass('evaluate_header').append(
				$('<div/>').addClass('evaluate_header_count').text('10')  //text에 개인이 평가한 갯수 표시
		);
		let $content_list = $('<div/>').addClass('evaluate_content_list');
		let page = 1;
		$.getJSON($.ctx()+'/item/evaluate/id/'+page,d=>{//id는 로그인한 사람의 아이디
			console.log(d.list);
			$.each(d.list,(i,j)=>{
				let $content = $('<div/>').addClass('evaluate_content').appendTo($content_list);
				let $img = $('<img/>').addClass('evaluate_img').attr({src:j.image});
				$img.appendTo($content);
				let overlay = $('<div/>').addClass('evaluate_overlay').appendTo($content)
					.append(
							$('<div/>').addClass('evaluate_title'),
							$('<div/>').addClass('star-rating')
					);
			});
		});
		page++; //페이지수 증가
		$('#content').empty().append(
				$header,$content_list
		);
	};
	return {main:main}; 
})();











