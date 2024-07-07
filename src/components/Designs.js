import React, { useState, useEffect } from 'react';

export default function Designs() {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 480);

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
        <div className='DesinContainer'>
            <div className='ProjectsUpper'>
                <h2 className='NewProjectsHead'>Crafted Designs</h2>
                <p className='ProjectsPara'>
                    At AMA Solutions, we have successfully delivered numerous projects across web, mobile, and desktop platforms. Our projects range from responsive websites and high-performance mobile applications to robust desktop software, all tailored to meet specific business needs.
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
