function loginUI(){
	return '<div id="login_form">'
	+'  <div class="j_container">'
	+'    <label for="uname"><b>Username</b></label>'
	+'    <input type="text" placeholder="Enter Username" name="uname" required/>'
	+'    <label for="psw"><b>Password</b></label>'
	+'    <input type="password" placeholder="Enter Password" name="psw" required/>'
	+'		<p>계정이 없으신가요?<a id ="login_to_join" href="#"  style="color:dodgerblue"> 여기서 </a>회원가입하세요.</p>'
	+'    <button class="j_button" type="submit" id="login_submit_btn" class="login_submit_btn" >Login</button>'
	+'    <label>'
	+'      <input type="checkbox" checked="checked" name="remember"/> Remember me '
	+'    </label>'
	+'  </div>'
	+'</div> '
	
}