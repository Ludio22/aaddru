import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import test from '../media/test.jpg';
import test1 from '../media/test1.jpg';
import test2 from '../media/test2.jpg';
import '@splidejs/splide/dist/css/themes/splide-sea-green.min.css';
import '../css/main.css'


const Main = (props) => {
    return ( 
        <section>
            <div className="main">
                <p className="main__about">{props.main.about}</p>
                <Splide options={{
                    type: 'loop',
                    autoWidth: true,
                    autoplay: true,
                    focus: 'center',
                    width: '40%',
                    trimSpace: true,
                    padding: {
                        left: '20%',
                        right: '20%',
                        top: '2%',
                    },
                    gap: '1em',
                }}>
                    <SplideSlide>
                        <img style={{height: "30vh"}} src={test} alt="1" />
                    </SplideSlide>
                    <SplideSlide>
                        <img style={{height: "30vh"}} src={test1} alt="2" />
                    </SplideSlide>
                    <SplideSlide>
                        <img style={{height: "30vh"}} src={test2} alt="3" />
                    </SplideSlide>
                </Splide>
            </div>
        </section>
    );
}

export default Main;