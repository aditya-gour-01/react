import React from 'react';
import { NavLink } from 'react-router-dom';
import web from "../src/About.jpeg";
import Common from './Common';
const About=()=>{
    return(
        <>
              <Common name='Welcome to Home Page' imgsrc={web} visit="/contact" btname="Contact Now"/>
        </>
    )
}
export default About;