import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import CarouselItem from "react-bootstrap/esm/CarouselItem";
import ModelOne from "../models3d/modelOne";
import ModelTwo from "../models3d/modelTwo";

const ModelSlider = () =>{
    return(
        <Carousel interval={null} style={{width: '100vw',height: '100vh'}}>
            <CarouselItem style={{width: '100vw',height: '100vh'}} id="myItem"> 
                <ModelOne/>
            </CarouselItem>
            <CarouselItem style={{width: '100vw',height: '100vh'}}>
                <ModelTwo/>
            </CarouselItem>
            <CarouselItem>
               <ModelOne/>
            </CarouselItem>
        </Carousel>
    );
}

export default ModelSlider;