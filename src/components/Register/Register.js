import React from 'react';

class Register extends React.Component {

	constructor(props){
		super(props);
		this.state = {
			password:'',
			username:''
		}
	}

	onPasswordChange = (event) => {
		this.setState({password:event.target.value})
	}

	onUserChange = (event) => {
		this.setState({username:event.target.value})
	}

	onRegisterSubmit = () =>{
		console.log(this.state)
		fetch('https://localhost:3001/Register',{
			method: 'POST',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({
				username:this.state.username,
				password:this.state.password
			})
		})
		//this.props.onRouteChange('home')
		.then(response => response.json())
		.then(user => {
			if(user.id){
				this.props.onLoadUser(user)
				this.props.onRouteChange('SignIn')
			}
		})
	}

	render() {
		return (
		<article className="br2 ba dark-gray b--black-10 mv4 w-80 w-50-m w-25-l mw6 center shadow-1">
			<main className="pa4 black-80">
			  <form className="measure center">
			    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
			      <legend className="f2 fw6 ph0 mh0">Register</legend>
			      <div className="mt3">
			        <label className="db fw6 lh-copy f6" htmlFor="name">Username</label>
			        <input onChange={this.onUserChange} className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" name="name"  id="name" required/>
			      </div>
			      <div className="mv3">
			        <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
			        <input onChange={this.onPasswordChange} className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password" required/>
			      </div>
			    </fieldset>
			    <div className="">
			      <input onClick={this.onRegisterSubmit} className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib shadow-5" type="submit" value="Register"/>
			    </div>
			  </form>
			</main>
		</article>
		);
	}
}

export default Register;