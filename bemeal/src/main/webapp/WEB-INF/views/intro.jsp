<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!doctype html>
<html lang="en">
<head>
<title>Home</title>

<link rel="shortcut icon" href="${context}/resources/img/favicon.ico">
<link rel="stylesheet"	href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap.min.css">
<link rel="stylesheet"	href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap-theme.min.css">

<script	src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script	src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/js/bootstrap.min.js"></script>
<script	src="https://cdnjs.cloudflare.com/ajax/libs/jquery-cookie/1.4.1/jquery.cookie.min.js"></script>
<script	src="${context}/resources/js/intro.js"></script>

<style>
.menu-li {
	font-size: 1.7rem;
	list-style:none;
	font-weight: 800;
    letter-spacing: .5rem;
    text-transform: uppercase;
    text-align:center;
    margin: 0.5rem;
    transition:.5s;
}
.menu-li:hover {
	color:#F68657;
    letter-spacing: .8rem;
    margin: 1rem;
}
.menu-img {
	background-image:url(${context}/resources/img/pink_tae.jpg);
	background-position: center center;
	background-size: cover;
	background-repeat: no-repeat;
	border-radius:100%;
	height:200px;
	width:200px;
	margin:auto;
}
.menu-container {
	flex:0 0 300px;
	width:300px;
	background-color:#fff;
	border: 1px solid #eee;
}
.menu-item {
	 margin-top: calc((800px - 100%)/2);
}
.intro-container {
	width:calc(100% - 300px);
	background-color:#fff;
	overflow-y:hidden;
}
.intro-section {
	height:33%;
	padding : 2.5rem 5rem;
	border: 1px solid #eee;
	transition:1s;
}
.intro-section:hover {
	cursor:pointer;
}
.intro-section.active {
	height:100%;
}
.intro-container button.close{
	display:none;
	outline:none;
}
.intro-section p {
	font-weight:800;
	margin:0;
	font-size: 3rem;
}
.intro-section:last-child p {
	color:#F68657;
}
.close-btn {
	position: absolute;
	right: 7px;
	top:0; 
	z-index: 2; 
	color:#383A3F; 
	font-size:2.5em
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
     
}
@media only screen and (max-width: 767px) {
    .menu-container {
		flex:0 0 100%;
		width:100%;
		height:400px;
	}
	.intro-container {
		width:100%;
		height:800px
	}
	.menu-item {
	 margin-top: 5rem;
	}
	.close-btn {
	top:400px; 
	}
}
</style>
</head>
<body>

<div class="" style="margin:0;padding:0;">
	<div class="row clearfix"  style="margin:0;padding:0;">
		<div style="width:100%;height:-webkit-fill-available;flex-wrap:wrap;display:flex;">
			<div class="menu-container">
				<div class="menu-item"">
					<div class="menu-img"></div>
					<div>
						<ul style="width:100%;padding:0;margin:4rem 0;">
							<li class="menu-li">SOUNDLAB</li>
							<li class="menu-li">YOUTUBE</li>
							<li class="menu-li">GITHUB</li>
						</ul>
					</div>
				</div>
			</div>
			<div class="intro-container">
				<button class="close close-btn" aria-label="Close" >
						<span aria-hidden="true">×</span>
				</button>
				<div class="intro-section">
					
					<p>INTRODUCE</p>
				</div>
				<div class="intro-section">
					<p>SKILL</p>
				</div>
				<div class="intro-section">
					<p>TIP</p>
				</div>
			</div>		
		</div>
	</div>
</div>
 
	<script>
		$('.intro-section')
		.click(function(e){
			let $this = $(this);
			$this.addClass('active');
			$this.siblings('button').css('display','block');
			$this.siblings('div').css('display','none');
		});
		$('.intro-container button.close')
		.click(function(e){
			let $this = $(this);
			$this.css('display','none');
			$this.siblings('div').removeClass('active').css('display','block');
		});
	</script>
</body>
</html>