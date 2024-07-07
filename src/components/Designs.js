import React, { useState, useEffect } from 'react';
import { InView, useInView } from 'react-intersection-observer';

export default function Designs() {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 480);

    const [ref, inView] = useInView({
        threshold: 0.2,
        triggerOnce: true,
    });

    const slideup = () => {
        const container = ref.current;
        if (container) {
            container.style.paddingTop = '-50px';
        }
    };

    useEffect(() => {
        if (inView) {
            setTimeout(() => {
                slideup();
            }, 200);
        }
    }, [inView]);
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 480);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className='DesinContainer' ref={ref}>
            <div className='ProjectsUpper'>
                <h2 className='NewProjectsHead'>Crafted Designs</h2>
                <p className='ProjectsPara'>
                    I have successfully delivered numerous projects across web, mobile, and desktop platforms. Our projects range from responsive websites and high-performance mobile applications to robust desktop software, all tailored to meet specific business needs.
                </p>
            </div>
            {isMobile ? (
                <div className='MyProductsMobile'>
                    <div className='MyProducts'>
                        <div className='Product'>
                            <img className='ImProduct' src='00.jpg' />
                        </div>
                        <div className='Product'>
                            <img className='ImProduct' src='01.jpeg' />
                        </div>
                    </div>
                    <div className='MyProducts1'>
                        <div className='Product'>
                            <img className='ImProduct' src='03.jpeg' />
                        </div>
                        <div className='Product'>
                            <img className='ImProduct' src='04.jpeg' />
                        </div>

                    </div>
                    <div className='MyProducts2'>
                        <div className='Product'>
                            <img className='ImProduct' src='05.png' />
                        </div>
                        <div className='Product'>
                            <img className='ImProduct' src='02.jpeg' />
                        </div>
                    </div>
                </div>
            ) : (
                <>
                    <div className='MyProducts'>
                        <div className='Product'>
                            <img className='ImProduct' src='00.jpg' />
                        </div>
                        <div className='Product'>
                            <img className='ImProduct' src='01.jpeg' />
                        </div>
                        <div className='Product'>
                            <img className='ImProduct' src='02.jpeg' />
                        </div>
                    </div>
                    <div className='MyProducts1'>
                        <div className='Product'>
                            <img className='ImProduct' src='03.jpeg' />
                        </div>
                        <div className='Product'>
                            <img className='ImProduct' src='04.jpeg' />
                        </div>
                        <div className='Product'>
                            <img className='ImProduct' src='05.png' />
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}
