import React, { useState, useEffect } from 'react';
import { FaFilePdf, FaHandPointDown } from 'react-icons/fa';

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

    return (
        <div className='myHome'>
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
                    <button className='ButtonResume'>
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
                    <TypingEffect />
                </div>
            </div>
        </div>
    )
}
