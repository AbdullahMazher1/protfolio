import React, { useState, useEffect } from 'react';
import { FaFilePdf, FaHandPointDown } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';

export default function Home() {
    const texts = [
        "a Web Developer",
        "an iOS Developer",
        "a Product Designer",
        "a Graphic Designer"
    ];

    const TypingEffect = () => {
        const [currentText, setCurrentText] = useState("");
        const [isDeleting, setIsDeleting] = useState(false);
        const [loopNum, setLoopNum] = useState(0);
        const [typingSpeed, setTypingSpeed] = useState(150);

        useEffect(() => {
            const handleTyping = () => {
                const fullText = texts[loopNum % texts.length];
                setCurrentText(
                    isDeleting
                        ? fullText.substring(0, currentText.length - 1)
                        : fullText.substring(0, currentText.length + 1)
                );

                setTypingSpeed(isDeleting ? 30 : 160);

                if (!isDeleting && currentText === fullText) {
                    setTimeout(() => setIsDeleting(true), 500);
                } else if (isDeleting && currentText === "") {
                    setIsDeleting(false);
                    setLoopNum(loopNum + 1);
                }
            };

            const timer = setTimeout(handleTyping, typingSpeed);

            return () => clearTimeout(timer);
        }, [currentText, isDeleting, loopNum, typingSpeed]);

        return (
            <div className="WebDeveloperText">
                <div className='TypeText'>
                    I am {currentText}
                    <span className="cursor">|</span>
                </div>

            </div>
        );
    };
    const [ref, inView] = useInView({
        threshold: 0.2,
        triggerOnce: true,
    });
    useEffect(()=>{
        if(inView){
        setTimeout(() => {
            HandleAnimation();
        }, 100);
        }
    },[inView]);

      function HandleAnimation(){
        const element = document.querySelector('.myHomeleft');
        element.style.opacity = '1';
        element.style.transform = 'translateY(-50px)';
        const element1 = document.querySelector('.myHomenext');
        element1.style.opacity = '1';
        element1.style.transform = 'translateY(-50px)';
      }
      const handleDownload = () => {
        const link = document.createElement('a');
        link.href = `${process.env.PUBLIC_URL}/resume.pdf`;
        link.download = 'resume.pdf';
        link.click();
      };

    return (
        <div className='myHome' ref={ref} id='home'>
            <div className='myHomeleft'>
                <div className='HelloLine'>
                    <div className='HelloAndLine'>
                        <div>
                        <hr className='Line'></hr>
                        </div>
                        <div className='Hello'>Hello</div>
                    </div>

                </div>
                <div className='NameHead'>
                    <div>
                        <h1 className='Nameis'>
                            You have reached,
                        </h1>
                    </div>
                    <div>
                        <h1 className='AbdullahText'>
                            Abdullah Mazher
                        </h1>
                    </div>
                </div>
                <div>
                    <p className='ObjectiveText'>
                        <h6 className='AboutHead'>BS Computer Science, UET'25 || Mean Stack Developer.</h6>
                        A driven and dedicated individual with a strong work ethic and a sense of responsibility. Committed to
                        continuous improvement and eager to glean insights from every experience, I am poised to contribute to the
                        betterment of our nation by applying the knowledge acquired along my journey.
                    </p>
                </div>
                <div className='Home2Buttons'>
                    <div>
                        <h4 className='TouchSubHead'>
                            Let us Get in Touch
                            <FaHandPointDown className='Touchicon' size={18} />
                        </h4>
                    </div>
                    <button className='ButtonResume' onClick={handleDownload}>
                        <FaFilePdf className='pdfIcon' size={14} />
                        Download Resume
                    </button>
                </div>
            </div>
            <div className='myHomenext'>
                <div>
                    <img className='imME' src='1.png' alt="Abdullah Mazher" />
                </div>
                <div>
                    <TypingEffect/>
                </div>
            </div>
        </div>
    )
}
