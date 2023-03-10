import React from 'react';
import { NavLink } from 'react-router-dom';
import web from "../src/animate.jpeg";
const Card = (props) => {
  return (
    <>

      <div className='col-md-4 col-10 mx-auto'>
        <div className="card" >
          <img src={props.imgsrc} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title font-weight-bold">{props.title}</h5>
            <p className="card-text">{props.content}</p>
            <a href={props.link} target="_blank" className="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div>

    </>

  )
}
export default Card;