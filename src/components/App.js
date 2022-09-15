
import './App.css';
import NavBar from './NavBar';
import BarraGifs from './BarraGifs';
import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super()

    this.state = {
      gifs: [],
      gifRandom1: '',
      gifRandom2: '',
      gifRandom3: '',
      gifRandom4: '',
      
    }

  }


  componentDidMount() {
    fetch('https://api.giphy.com/v1/gifs/trending?api_key=keKRpgfREXDm2qFAbAtsx2DTTci7jIue')
      .then(res => res.json())
      .then(data => {

        this.setState({
          gifs: data.data

        })


      })
      .catch(error => console.log(error))

  }


  gifsRandom = () => {

    
    this.setState({
      gifRandom1: Math.floor(Math.random()*51),
      gifRandom2: Math.floor(Math.random()*51),
      gifRandom3: Math.floor(Math.random()*51),
      gifRandom4: Math.floor(Math.random()*51),
      
    })
    
    console.log('hiciste click')

  }

  componentDidUpdate() {



  }



  render() {

    if (this.state.gifs.length === 0) {
      console.log('cargando..')
    } else {
      return (

        <div>
          <NavBar gifsRandom={this.gifsRandom} />
          <BarraGifs gifs={this.state} gifsRandom={this.state} />
        </div>
      );
    }
//

  }

};

export default App;
