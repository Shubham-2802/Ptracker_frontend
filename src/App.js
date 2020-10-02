import React, { Component } from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import Signin from './components/Signin/Signin';
import Register from './components/Register/Register';
import Datashow from './components/Datashow/Datashow';
import InputData from './components/InputData/InputData';


const initialState = {
      input:'',
      route: 'SignIn',
      isSignedIn: false,
      user: {
        id:'',
        username:'',
        joined:''
      }
    }             

class App extends Component {

  constructor() {
    super();
    this.state = initialState;
  }

  onLoadUser = (data) =>{
    this.setState({user: {
        id:data.id,
        username:data.username,
        joined:data.joined
    }})
  }

  onButtonSubmit = () => {
      this.props.onRouteChange('InputData');
  }

  onRouteChange = (route) => {
    if(route === 'Datashow') {
      this.setState({isSignedIn:true})
    }
    else if (route === "signout"){
      this.setState(initialState)
    } 
    this.setState({route: route})
    }
  
  render() {
      return (
      <div className="App">
        <Navigation isSignedIn={this.state.isSignedIn} 
                    onRouteChange={this.onRouteChange} />
        {   
            this.state.route === 'Datashow'
            ? <Datashow user={this.state.user} onButtonSubmit={this.onButtonSubmit}/>
            : this.state.route === 'InputData'
              ? <InputData onRouteChange={this.onRouteChange}/>
              : (this.state.route === 'SignIn'
                         ?  <Signin onLoadUser={this.onLoadUser} onRouteChange={this.onRouteChange}/>
                         :  <Register onLoadUser={this.onLoadUser} onRouteChange={this.onRouteChange}/>
                         )
                
        }
      </div>
    );
  }
}

export default App;
