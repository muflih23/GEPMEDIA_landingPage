import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import styles from './slider.module.css';

function LargeSlider(){
    return (
        <div className={styles.large_slider}>
            <Carousel 
            autoPlay={true} 
            centerMode={false}
            emulateTouch={true}
            stopOnHover={true}
            labels={true}
            showIndicators={true} 
            showThumbs={false}
            showArrows={false}
            infiniteLoop={true}
            interval={5000}
            showStatus={false}>
                <div>
                    <img src='/slide1.png' className={styles.large_image}/>
                </div>
                <div>
                    <img src='/slide2.png' className={styles.large_image}/>
                </div>
                <div>
                    <img src='/slide3.png' className={styles.large_image}/>
                </div>
            </Carousel>
        </div>
    )
}

export default LargeSlider