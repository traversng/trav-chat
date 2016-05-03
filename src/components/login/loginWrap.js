// LOGIN WRAPPER
class LoginWrap extends Component {
	render() {
		return(
			<div>
			<h1 className="text-center">Trav Chat</h1>
			<h3>Login with your social accounts for awesomeness</h3>
			   <FaceBookLoginBtn />
			   <GooglePlusLoginBtn />
			   <GithubLoginBtn />          
			</div>
		);
	}
};