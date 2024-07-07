import React, { useEffect } from 'react'
import { useInView } from 'react-intersection-observer';
import { FaWhatsapp } from 'react-icons/fa';


const Contact = () => {
    const { ref, inView } = useInView({
        threshold: 0.2,
        triggerOnce: true
    })

    const applyStyles = () => {
        const imgElement = document.querySelector('.ProfileItemLeft');
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
        <div className='ProfileContainer' id='ProfileContainer' ref={ref}>
            <div className='ProfileItemLeft'>
                <div>
                    <h5 className='ProfileHead1'>
                        You Are Just One Text Away
                    </h5>
                </div>
                <div className='profileHead2'>
                    <p>
                    Contact me directly where I lead a team of dedicated professionals committed to surpassing client expectations. We specialize in integrating cutting-edge industry trends and technologies to deliver exceptional results. At AMA Solutions, we prioritize a balanced approach to learning, working, and living well.
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
