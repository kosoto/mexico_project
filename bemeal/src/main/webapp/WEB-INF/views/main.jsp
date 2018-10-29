<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">

<title>Be meal</title>
<!-- 홈페이지 로고 -->
<link rel="shortcut icon" href="${context}/resources/img/cmm/icon.ico">
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
<!-- star-rating-svg -->
<script src="${context}/resources/js/jquery/star-rating-svg.js"></script>
<link rel="stylesheet" type="text/css" href="${context}/resources/css/star-rating-svg.css">
<!-- kaeun chart -->
<script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>

</head>
<body>
<!-- MDB -->
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/mdbootstrap/4.5.11/js/mdb.min.js"></script>
	<div id="wrapper"></div>
	<script>
		bemeal.init('${context}');
	</script> 
</body>
</html>