import React, { useEffect } from 'react'
import { useInView } from 'react-intersection-observer';
import { FaWhatsapp } from 'react-icons/fa';


const Contact = () => {
    const { ref, inView } = useInView({
        threshold: 0.2,
        triggerOnce: true
    })

    const applyStyles = () => {
        const imgElement = document.querySelector('.ImProfile');
        if (imgElement) {
            imgElement.style.transform = 'translateY(-50px)';
            imgElement.style.opacity = '1';
            imgElement.style.transition = 'transform 0.5s, opacity 0.5s';
        }
    };
    useEffect(() => {
        if (inView) {
            setTimeout(() => {
                applyStyles();
            }, 700);
        }
    }, [inView])

    return (
        <div className='ProfileContainer' id='ProfileContainer'>
            <div className='ProfileItemLeft'>
                <div>
                    <h5 className='ProfileHead1'>
                        You Are Just One Text Away
                    </h5>
                </div>
                <div className='profileHead2'>
                    <p>
                        At AMA Solutions, our team consists of dedicated professionals that exceed client expectations and leveraging the latest industry trends and technologies.We believe in learn well,work well and live well.
                    </p>

                </div>
                <div>
                    <h1 className='ProfileHead3'>
                        Connect and Grow Fast
                    </h1>
                </div>
                <div>
                    <button className='ProfileButton2' >
                        <FaWhatsapp size={20} className='WhatsappIcon'/>
                        Connect Now
                    </button>
                </div>

            </div>
        </div>
    )
}
export default Contact;
