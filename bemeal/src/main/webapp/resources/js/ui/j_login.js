function loginUI(){
	return '<div id="login_form">'
	+'  <div class="j_container">'
	+'    <label for="uname"><b>Username</b></label><br/>'
	+'    <input type="text" id="memberId" placeholder="Enter Username" required/><br/>'
	+'    <label for="psw"><b>Password</b></label><br/>'
	+'    <input type="password" id="password" placeholder="Enter Password" name="psw" required/>'
	+'		<p>계정이 없으신가요?<a id ="login_to_join" href="#"  style="color:dodgerblue"> 여기서 </a>회원가입하세요.</p>'
	+'    <button class="j_button" type="submit" id="login_submit_btn">Login</button>'
	+'    <label><br/>'
	+'      <input type="checkbox" checked="checked" name="remember"/> Remember me '
	+'    </label>'
	+'  </div>'
	+'</div> '
	
}