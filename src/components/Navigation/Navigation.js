import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from "react-bootstrap/Nav";
import 'bootstrap/dist/css/bootstrap.css';

const Navigation = ({onRouteChange,isSignedIn}) => {

	if(isSignedIn){
		return (
			<Navbar
				        variant="dark"
				        expand="md"
				        className="animate-navbar nav-theme justify-content-between">
					  <div>
						  <Navbar.Brand href="#home">
							  <div className='white f3'>
						        {`Password Manager`}
						      </div>
						  </Navbar.Brand>
					  </div>
					  <div>
						  <Navbar.Toggle aria-controls="basic-navbar-nav" />
						  <Navbar.Collapse id="basic-navbar-nav">
						    <Nav className="mr-auto">
						      <p onClick={() => onRouteChange('signout')} className="f3 link dim black underline pa3 pointer"> SignOut </p>
						    </Nav>
						  </Navbar.Collapse>
					  </div>
				</Navbar>
		        );
	}
	else {
		return (
			<div>
				<Navbar
				        variant="dark"
				        expand="md"
				        className="animate-navbar nav-theme justify-content-between">
					  <div>
						  <Navbar.Brand>
							  <div className='white f3'>
						        {`Password Manager`}
						      </div>
						  </Navbar.Brand>
					  </div>
					  <div>
						  <Navbar.Toggle aria-controls="basic-navbar-nav" />
						  <Navbar.Collapse id="basic-navbar-nav">
						    <Nav className="mr-auto">
						      <p onClick={() => onRouteChange('SignIn')} className="f3 link dim black pa3 pointer">Home</p>
						    </Nav>
						  </Navbar.Collapse>
					  </div>
				</Navbar>		
			</div>
		);
	}
	
}

export default Navigation;