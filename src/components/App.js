
import './App.css';
import NavBar from './NavBar';
import BarraGifs from './BarraGifs';
import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super()
    
    this.state = {
      gifs: []
    }

  }


  componentDidMount(){
    fetch('https://api.giphy.com/v1/gifs/trending?api_key=keKRpgfREXDm2qFAbAtsx2DTTci7jIue&limit=25&rating=g')
    .then(res => res.json())
    .then(data => {
      //console.log(data)
      this.setState({
        gifs: data.data
        
      })
     
    // console.log('me monte')
     //console.log(this.state)
    })
    .catch(error => console.log(error))

  }

 

  componentDidUpdate(){
   // console.log('me actualice')
    //console.log(this.state)
   // console.log(this.state.gifs[0].images)
    
  }

  


  render() {

    
    
    return (
    
      <div>
        <NavBar />
        <BarraGifs gifs={this.state.gifs} />
      </div>
    );
  }

};

export default App;
