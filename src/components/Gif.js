import { render } from "@testing-library/react";
import React from "react";


function Gif(props) {
    
    
        return (
            <div className="col-lg-3 col-md-6 mb-4">
                <div className="card h-100">
                    <img className="card-img-top" src= {props.img} alt=""/>
                        <div className="card-body">
                            <h4 className="card-title">{props.title}</h4>
                        </div>
                </div>
            </div>

        )

}

export default Gif;