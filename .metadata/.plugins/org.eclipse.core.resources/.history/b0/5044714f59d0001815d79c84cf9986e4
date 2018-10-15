var kui = { 
		btn : x=>{  //kui.btn({id:'',size:'mini',color:'red',txt:'주문하기'})
			// size : big, mini // color (red, blue, gree, purple, yellow, grey, redp )-> kaeun.css 버튼 참조
			return $('<button/>').attr({type : 'button', id: x.id})
			.addClass('btn-two '+x.color+' '+x.size)
			.html(x.txt);
		},
		e_btn : x=>{ //efect 버튼
			return '';
		},
		checkbox : x=>{ //kui.checkbox({id:'',txt:''})
			let p = $('<span/>').addClass('form-check');
			$('<input/>').attr({type:'checkbox', id:x.id})
			.addClass('form-check-input').appendTo(p);
			$('<label/>').attr({type:'label'})
			.addClass('form-check-label').html(x.txt+"　").appendTo(p);
			return p;
		},
		content_g : x=>{ // kui.content_g();
			return $('#content_grid').empty().html('<div class="grid_layout">'
					  +'<div class="grid_title_l"><div id="title_l"/></div>' 
					  +'<div class="grid_title_r"><div id="title_r"/></div>'
					  +'<div class="grid_main"><div id="content_g"/></div>'
					  +'</div>');
		},
		stndlayout : x=>{
		},
		n_div : x=>{ // kui.n_div({clazz:'',html:'',to:''});
			return $('<div/>').addClass(x.clazz).html(x.html).appendTo(x.to);
		},
		div : x=>{return $('<div/>').attr({id:x});}, // kui.div("id");
		span : x=>{return $('<span/>').attr({id:x});}, // kui.span("id"};
		grid_list : x=>{ //kui.cart_list({c1:"",c2:"",c3:"",c4:"",c5:"",c6:"",c7:""})
			let t = x.to; 
			return kui.n_div({clazz:'iteminfo',html:x.c1,to:t})
				  +kui.n_div({clazz:'iteminfo1',html:x.c2,to:t})
				 + kui.n_div({clazz:'itemname',html:x.c3,to:t})
				 + kui.n_div({clazz:'iteminfo',html:x.c4,to:t})
				 + kui.n_div({clazz:'iteminfo',html:x.c5,to:t})
				 + kui.n_div({clazz:'iteminfo',html:x.c6,to:t})
				 + kui.n_div({clazz:'iteminfo',html:x.c7,to:t});
		}
};


