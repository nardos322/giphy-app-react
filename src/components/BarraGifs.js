import React, { Component } from "react";
import Gif from './Gif'

function BarraGifs(props) {



    console.log(props.gifsRandom)
    if (props.gifsRandom.haveGifs === false) {
        return (

            <div className="container">
                <div className="row text-center">

                    <Gif img={props.gifs.gifs[0].images.original.url} title={props.gifs.gifs[0].title}></Gif>
                    <Gif img={props.gifs.gifs[1].images.original.url} title={props.gifs.gifs[1].title}></Gif>
                    <Gif img={props.gifs.gifs[2].images.original.url} title={props.gifs.gifs[2].title}></Gif>
                    <Gif img={props.gifs.gifs[3].images.original.url} title={props.gifs.gifs[3].title}></Gif>

                </div>
            </div>
        )
    }  else if(props.gifsRandom.gifRandom1 !== '' && props.gifsRandom.gifRandom2 !== '' && props.gifsRandom.gifRandom3  !== '' && props.gifsRandom.gifRandom4 !== '') {
        return (
            <div className="container">
                <div className="row text-center">
                    <Gif img={props.gifsRandom.gifRandom1.images.original.url} title={props.gifsRandom.gifRandom1.title}></Gif>
                    <Gif img={props.gifsRandom.gifRandom2.images.original.url} title={props.gifsRandom.gifRandom2.title}></Gif>
                    <Gif img={props.gifsRandom.gifRandom3.images.original.url} title={props.gifsRandom.gifRandom3.title}></Gif>
                    <Gif img={props.gifsRandom.gifRandom4.images.original.url} title={props.gifsRandom.gifRandom4.title}></Gif>


                </div>
            </div>
        )
    }




}

export default BarraGifs;