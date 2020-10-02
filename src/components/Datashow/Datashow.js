import React,{ Component } from 'react';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import Button from 'react-bootstrap/Button';
import './Datashow.css';

const Datashow = (user,onButtonSubmit) => {
		return(
			<div className="main">
				<CardDeck>
					{user.map((data, index) => (
					  <Card key={index}>
					    <Card.Body>
					      <Card.Title className="card-title">{user.website}</Card.Title><hr/>
					      <Card.Text>
					        <strong>Username:</strong>{user.username}
		      				<strong>Password:</strong>{user.password}
					      </Card.Text>
					    </Card.Body>
					  </Card>
					 ))}
				</CardDeck>
					<div className="button">
	    				<button 
							className="f3 center w-30 bg-cyan"
							onClick={onButtonSubmit}>
							Add New Site
						</button>
	    			</div>
			</div>		
			);
}


export default Datashow;