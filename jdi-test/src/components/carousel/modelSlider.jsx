import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import CarouselItem from "react-bootstrap/esm/CarouselItem";
import ModelOne from "../models3d/modelOne";
import ModelTwo from "../models3d/modelTwo";

const ModelSlider = () =>{
    return(
        <Carousel interval={null}>
            <CarouselItem style={{
                width: '100px',
                height: '100px',
            }}>
                {/* <img src="sample2.jpg" alt="first "/> */}
                {/* <ModelOne/> */}
                {/* <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>this is a 3D model</p>
                </Carousel.Caption> */}
            </CarouselItem>
            <CarouselItem style={{
                width: '100px',
                height: '100px',
            }}>
                {/* <ModelTwo/> */}
                {/* <img src="sample2.jpg" alt="second "/>
                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>this is the second Image</p>
                </Carousel.Caption> */}
            </CarouselItem>
            <CarouselItem>
                <img src="sample2.jpg" alt="third "/>
                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>this is the third Image</p>
                </Carousel.Caption>
            </CarouselItem>
        </Carousel>
    );
}

export default ModelSlider;