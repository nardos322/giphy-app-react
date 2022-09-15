
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
      haveGifs: false
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
    fetch('https://api.giphy.com/v1/gifs/random?api_key=MFhSopoO8vHA8GS6D0oWeS1tF6ev4Jqb&tag=&rating=g')
      .then(res => res.json())
      .then(data => {

        this.setState({
          gifRandom1: data.data,
          haveGifs: true
        })


      })
    fetch('https://api.giphy.com/v1/gifs/random?api_key=MFhSopoO8vHA8GS6D0oWeS1tF6ev4Jqb&tag=&rating=g')
      .then(res => res.json())
      .then(data => {
        this.setState({
          gifRandom2: data.data
        })

      })
    fetch('https://api.giphy.com/v1/gifs/random?api_key=MFhSopoO8vHA8GS6D0oWeS1tF6ev4Jqb&tag=&rating=g')
      .then(res => res.json())
      .then(data => {
        this.setState({
          gifRandom3: data.data
        })

      })
    fetch('https://api.giphy.com/v1/gifs/random?api_key=MFhSopoO8vHA8GS6D0oWeS1tF6ev4Jqb&tag=&rating=g')
      .then(res => res.json())
      .then(data => {
        this.setState({
          gifRandom4: data.data
        })

      })

     

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


  }

};

export default App;
