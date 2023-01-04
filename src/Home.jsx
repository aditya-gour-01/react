import React from 'react';
import { NavLink } from 'react-router-dom';
import web from "../src/animate.jpeg";
import Common from './Common';
const Home=()=>{
    return(
        <>
            <Common name='Grow your business' imgsrc={web} visit="/service" btname="Get Started"/>
        </>
    )
}
export default Home;