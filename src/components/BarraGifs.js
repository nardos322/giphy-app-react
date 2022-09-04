import React, { Component } from "react";
import Gif from './Gif'

function BarraGifs (props) {


   

         
        //console.log(props)
        
        return (
            
            <div className="container">
                <div className="row text-center">
                    <Gif gif1 = {props.gifs[0]} img = {props.gifs[0]}/>
                    <Gif gif2 = {props.gifs[1]} img = {props.gifs[1]}/>
                    <Gif gif3 = {props.gifs[2]} img = {props.gifs[2]}/>
                    
                </div>
            </div>
        )
    
}

export default BarraGifs;