import React,{ Component } from 'react';
import './Signin.css';

class Signin extends Component{

	constructor(props){
		super(props);
		this.state = {
			username:'',
			password:''
		}
	}

	onUserChange = (event) => {
		this.setState({username:event.target.value})
	}

	onPasswordChange = (event) => {
		this.setState({password:event.target.value})
	}

	onSigninSubmit = () =>{
		this.props.onRouteChange('Datashow');}
	// 	fetch('https://localhost:3001/signIn',{
	// 		method: 'POST',
	// 		headers: {'Content-Type': 'application/json'},
	// 		body: JSON.stringify({
	// 			username:this.state.username,
	// 			password:this.state.password
	// 		})
	// 	})
	// 	.then(response => response.json())
	// 	.then(response => {
 //        if (response) {
	//                 fetch('https://localhost:3001/Showuserdata',{
	//                 method: 'get',
	//                 headers: {'Content-Type': 'application/json'},
	//                 body: JSON.stringify({
	//                   id:this.state.user.id
	//             })
	//           })
	// 		.then(user => {
	// 			//console.log(user)
	// 			if(user.id){
	// 				this.props.onLoadUser(user);
	// 				this.props.onRouteChange('Datashow');
	// 				}
	// 			})
	// 		}
	// 	})
	// }

	render() {
		const { onRouteChange } = this.props;
		return (
		<div>	
		<article className="br2 ba dark-gray b--black-10 mv4 w-80 w-50-m w-25-l mw6 center shadow-1">
			<main className="pa4 black-80">
			  <div className="measure center">
			    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
			      <legend className="f2 fw6 ph0 mh0">Sign In</legend>
			      <div className="mt3">
			        <label className="db fw6 lh-copy f6">Username</label>
			        <input 
				        onChange={this.onUserChange} 
				        className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
				        type="text" 
				        name="user-name"  
				        id="user-name"  required
			        />
			      </div>
			      <div className="mv3">
			        <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
			        <input 
				        onChange={this.onPasswordChange} 
				        className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
				        type="password" 
				        pattern="[a-zA-Z0-9]*"
				        name="password"  
				        id="password"
				        required
			        />
			      </div>
			    </fieldset>
			    <div className="">
			      <input 
				      onClick={this.onSigninSubmit} 
				      className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib shadow-5" 
				      type="submit" 
				      value="Sign in"
			      />
			    </div>
			    <div className="lh-copy mt3">
			      <p onClick={() => onRouteChange('Register')} className="pointer f6 link dim black db">Not a User?Register</p>
			    </div>
			  </div>
			</main>
		</article>
		</div>
		);
	}
	
}

export default Signin;