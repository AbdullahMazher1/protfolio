import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

export default function Values() {
  const array = ['Communication Skills', 'Collaboration & Team Work', 'Integrity and Transparency', 'Leading Qualities', 'Comitted & Hard Working'];
  const [index, setIndex] = useState(0);
  const [animationClass, setAnimationClass] = useState('');

  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      const interval = setInterval(() => {
        setAnimationClass('slide-out');
        setTimeout(() => {
          setIndex((prevIndex) => (prevIndex + 1) % array.length);
          setAnimationClass('slide-in');
        }, 1000);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [inView]);

  return (
    <div className='ValuesContainer' ref={ref}>
      <div className='ValuesUpperContainer'>
        <div className='ValuesOUR'>
           SOFT SKILLS
        </div>
        <div>
          <hr className='Valuesline'>
          </hr>
        </div>
      </div>
      <div className={`ValuesBottomContainer ${animationClass}`}>
        <h1 className='ValuesText'>{array[index]}</h1>
      </div>
    </div>
  );
}
