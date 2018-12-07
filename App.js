import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    temperature: "",
    humidity: "",
    image: "",
    location: "",
    error: ""
  };

  handleClick = async(e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    
    if(city && country){
    const api = await fetch(`http://api.apixu.com/v1/current.json?key=8585e574c307411ea26131730180612&q=
    ${country}/${city}.json`);
    const rtr = await api.json();
    
  this.setState({
    temperature: rtr.current.temp_c,
    humidity: rtr.current.humidity,
    image: rtr.current.condition.icon,
    location: rtr.location.name,
    error: ""
  });
}

else {
    this.setState({
      temperature: "",
      humidity: "",
      image: "",
      location: "",
      error: "Wrong Input"
    
    })
     
  }
}

  render() {
    return (
      <div className = "container">
      <center>
          <div className= "card" id= "card1">
          <h1>My First Weather App</h1>

          <form onSubmit= {this.handleClick}>
            <input type= "text" placeholder= "Enter City" name= "city" className= "form-control" /> <br></br>
          <input type= "text" placeholder= "Enter Country" name= "country" className= "form-control" /> <br></br>
          <button className= "btn btn-info">Get Weather</button>
          </form>

          {this.state.image!=''?<img src={this.state.image} width="100px" height="100px" />:''}

          {this.state.location!=''?<h3>Location:{this.state.location}</h3>:''}

            {this.state.temperature!=''?<h3>Temerature:{this.state.temperature} in degrees celcius</h3>:''}

            {this.state.humidity!=''?<h3>Humidity:{this.state.humidity}%</h3>:''}

            {this.state.error!=''?<h3>Temerature:{this.state.error}</h3>:''}
          </div>

          
        
      </center>
      </div>
    );
  }
};

export default App;
