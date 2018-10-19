<%@ page language="java" contentType="text/html; charset=UTF-8"
   pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">

<title>Be meal</title>
<!-- 홈페이지 로고 -->
<link rel="shortcut icon" href="">
<!-- jquery -->
<script src="${context}/resources/js/jquery/jquery.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery.touchswipe/1.6.4/jquery.touchSwipe.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-cookie/1.4.1/jquery.cookie.min.js"></script>
<script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js" integrity="sha256-T0Vest3yCU7pafRw9r+settMBX6JkKN06dqBnpQ8d30=" crossorigin="anonymous"></script>
<script src="${context}/resources/js/jquery/popup.js"></script>
<!-- bootstrap 4-->
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>
<!-- MDB -->
<link href="https://cdnjs.cloudflare.com/ajax/libs/mdbootstrap/4.5.11/css/mdb.min.css" rel="stylesheet">
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
<!-- our resources -->
<script src="${context}/resources/js/bemeal.js"></script>
<link rel="stylesheet/less" type="text/css" href="${context}/resources/css/bemeal.less">
<link rel="stylesheet" type="text/css" href="${context}/resources/css/yoonho.css">
<link rel="stylesheet/less" type="text/css" href="${context}/resources/css/junghoon.less">
<link rel="stylesheet" type="text/css" href="${context}/resources/css/kaeun.css">
<link rel="stylesheet" type="text/css" href="${context}/resources/css/sam.css">
<!-- less compiler -->
<script src="//cdnjs.cloudflare.com/ajax/libs/less.js/3.7.1/less.min.js"></script>
<!--  kaeun font -->
<link href="https://fonts.googleapis.com/css?family=Do+Hyeon|Gothic+A1|Nanum+Pen+Script" rel="stylesheet">
<!-- Rate Yo -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/rateYo/2.3.2/jquery.rateyo.min.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/rateYo/2.3.2/jquery.rateyo.min.js"></script>
</head>
<body>
<!-- MDB -->
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/mdbootstrap/4.5.11/js/mdb.min.js"></script>
	<div class="wrapper"></div>
	<div class="wrapper"></div>
	<script>
		$('.wrapper').rateYo({
		    starWidth: "40px",//폭
		    rating:2.5,
		    normalFill: "#A0A0A0", //배경색
		    ratedFill: "#ffb763",  //채워질 색 (단일색)
		    spacing   : "0px", //별 간격
		    numStars: 5, //별 갯수
		    minvalue:0.5,
		    maxValue: 5, // 최댓값
		    halfStar: true, //반쪽 별쓰기, 0.5단위로 별이 그려짐
		    onInit: function (rating, rateYoInstance) {
		       $.getJSON("",function(){
		          if(d!==undefined){
		      //id를 가지고 db을 검색해서 입력된 rating정보가 있으면 setter로 별갯수 입력  
		      }else{
		      //입력된 rating이 없으면 default 값으로 0  
		      }
		       });
		     
		    },
		    onSet: function (rating, rateYoInstance) {
		      if($(this).rateYo("option","rating")==0){
		      $.ajax();// 입력된 rating정보가 없으면 id와 rating을 가지고가서 db에 입력하기  
		        //그리고 세팅된 rating으로 별을 다시 그리기 setter 메소드 사용하기
		      }else{
		        $.ajax();
		        $(this).rateYo("option","rating","0");
		        //이미 입력된 정보가 있으면 별을 지우고 DB에서도 정보를 지우기
		      }
		    }
		  });
	</script> 
</body>
</html>