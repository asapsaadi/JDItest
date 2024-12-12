import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import CarouselItem from "react-bootstrap/esm/CarouselItem";

const ModelSlider = () =>{
    return(
        <Carousel interval={null}>
            <CarouselItem>
                <img src="sample2.jpg" alt="first "/>
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>this is the first Image</p>
                </Carousel.Caption>
            </CarouselItem>
            <CarouselItem>
                <img src="sample2.jpg" alt="second "/>
                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>this is the second Image</p>
                </Carousel.Caption>
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