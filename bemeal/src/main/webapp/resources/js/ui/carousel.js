function carouselUI(x){
	let $div = $('<div/>').attr({id:x.id,'data-ride':'carousel'}).addClass('carousel slide');
	let $ol = $('<ol/>').addClass('carousel-indicators').appendTo($div);
	let arr = x.arr;
	for(let i=0;i<x.navi_size;i++){
		let $li = $('<li/>').attr({'data-target':"#"+x.id,'data-slide-to':i});
		if(i == 0) $li.addClass('active');
		$li.appendTo($ol);
	}
	let $inner = $('<div/>').addClass('carousel-inner').appendTo($div);
	for(let i=0;i<x.navi_size;i++){
		let $temp = $('<div/>').addClass('item').appendTo($inner);
		let $span = $('<span/>').appendTo($temp);
		if(i == 0) $temp.addClass('active');
		for(let j=i*x.row_size;j<(i+1)*x.row_size;j++){
			$('<div/>').text(arr[j].itemName).appendTo($span);
			$('<img/>').attr({
				src:arr[j].image,
				alt:arr[j].itemName,
				style:"width:20%"
			}).appendTo($span);
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
}

'<div id="myCarousel" class="carousel slide" data-ride="carousel">'
+'<!-- Indicators -->'
+'<ol class="carousel-indicators">'
  +'<li data-target="#myCarousel" data-slide-to="0" class="active"></li>'
  +'<li data-target="#myCarousel" data-slide-to="1"></li>'
  +'<li data-target="#myCarousel" data-slide-to="2"></li>'
+'</ol>'
+'<!-- Wrapper for slides -->'
+'<div class="carousel-inner">'
  +'<div class="item active"><span>'
    +'<img src="/web/resources/img/cmm/image2.jpg" alt="Los Angeles" style="width:33%;">'
    +'<img src="/web/resources/img/cmm/image2.jpg" alt="Los Angeles" style="width:33%;">'
    +'<img src="/web/resources/img/cmm/image2.jpg" alt="Los Angeles" style="width:33%;"></span>'
  +'</div>'
  +'<div class="item"><span>'
    +'<img src="/web/resources/img/cmm/image2.jpg" alt="Chicago" style="width:33%;">'
    +'<img src="/web/resources/img/cmm/image2.jpg" alt="Chicago" style="width:33%;">'
    +'<img src="/web/resources/img/cmm/image2.jpg" alt="Chicago" style="width:33%;"></span>'
  +'</div>    '
  +'<div class="item"><span>'
    +'<img src="/web/resources/img/cmm/image2.jpg" alt="New york" style="width:33%;">'
    +'<img src="/web/resources/img/cmm/image2.jpg" alt="New york" style="width:33%;">'
    +'<img src="/web/resources/img/cmm/image2.jpg" alt="New york" style="width:33%;"></span>'
  +'</div>'
+'</div>'
+'<!-- Left and right controls -->'
+'<a class="left carousel-control" href="#myCarousel" data-slide="prev">'
  +'<span class="glyphicon glyphicon-chevron-left"></span>'
  +'<span class="sr-only">Previous</span>'
+'</a>'
+'<a class="right carousel-control" href="#myCarousel" data-slide="next">'
  +'<span class="glyphicon glyphicon-chevron-right"></span>'
  +'<span class="sr-only">Next</span>'
+'</a>'
+'</div>'
