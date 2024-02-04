'use client'
import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

export default class NextJsCarousel extends Component {
    render() {
        return (
            <div>
                <Carousel autoPlay infiniteLoop>
                    <div>
                        <img src="/banner2img.jpg" alt="image1" />
                        {/* <p className="legend">Image 1</p> */}

                    </div>
                    <div>
                        <img src="/earth-banner.jpg" alt="image2" />
                        {/* <p className="legend">Image 2</p> */}

                    </div>
                    <div>
                        <img src="/solar-panels-aerial.jpg" alt="image3" />
                        {/* <p className="legend">Image 3</p> */}

                    </div>
                    <div>
                        <img src="/wind_farm.jpg" alt="image4" />
                        {/* <p className="legend">Image 4</p> */}

                    </div>
                </Carousel>
            </div>
        );
    }
};
