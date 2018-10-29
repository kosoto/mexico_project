function collectionUI(){	
	let $card_group = $('<div/>').addClass('card-group');
	let $card = 
		$('<div/>').addClass('card mb-3').appendTo($card_group).append(
			$('<div/>').addClass('view overlay').append(
				$('<img/>').addClass('card-img-top').attr({src:''/*img 넣기*/,alt:'Card image cap'}),
				$('<a/>').attr({href:'#'}).append(
					$('<div/>').addClass('mask rgba-white-slight')
				).click(e=>{
					e.preventDefault();
					/* 아래 리스트에 해당 콜랙션에 담긴 리스트 보여주기 */
				})
			),
			$('<div/>').addClass('card-body').append(
				$('h4/>').addClass('card-title').text(''/* dir_name */)
				// <p class="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</p>
				// <button type="button" class="btn btn-primary btn-md">Read more</button>
			)
		);
	return ;
}