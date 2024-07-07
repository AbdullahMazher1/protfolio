import React, { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'

export default function SkillsDisplay() {

  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  useEffect(()=>{
    if(inView){
      setTimeout(() => {
        HandleProgress();
      }, 200);
    }
  }, [inView])

  function HandleProgress() {
    const elements = [
      { selector: '.ProgressPercent1', width: '90%', backgroundColor: 'rgb(74, 202, 117)' },
      { selector: '.ProgressPercent2', width: '90%', backgroundColor: 'rgb(129, 34, 207)' },
      { selector: '.ProgressPercent3', width: '75%', backgroundColor: 'rgb(19, 68, 160)' },
      { selector: '.ProgressPercent4', width: '80%', backgroundColor: 'rgb(241, 88, 177)' },
      { selector: '.ProgressPercent5', width: '80%', backgroundColor: 'rgb(35, 139, 224)' },
    ];

    elements.forEach((element) => {
      const el = document.querySelector(element.selector);
      if (el) {
        el.style.width = element.width;
        el.style.backgroundColor = element.backgroundColor;
      }
    });
  }
  return (
    <div className='SkillsDisplay'>
      <div className='SkillsLeft'>
        <img className='ImSkills' src='16.png' />
      </div>
      <div className='SkillsNext' ref={ref}>
        <div>
          <h2 className='SkillsShowHead'>
            Web Development Expertise
          </h2>
        </div>
        <div className='SkillShowBar' >
          <div>
            Html
          </div>
          <div className='ProgressBar'>
            <div className='ProgressPercent1'>

            </div>
          </div>
          <div className='SkillDisp'>
            Intermediate rip on Html with hand zone experience of 3 years
          </div>
        </div>
        <div className='SkillShowBar'>
          <div>
            CSS
          </div>
          <div className='ProgressBar'>
            <div className='ProgressPercent2'>

            </div>
          </div>
          <div className='SkillDisp'>
            Intermediate grip on Html with hand zone experience of 2 years
          </div>
        </div>
        <div className='SkillShowBar'>
          <div>
            node.js
          </div>
          <div className='ProgressBar'>
            <div className='ProgressPercent3'>

            </div>
          </div>
          <div className='SkillDisp'>
            Intermediate grip on CSS with hand zone experience of 2 years
          </div>
        </div>
        <div className='SkillShowBar'>
          <div>
            React.js
          </div>
          <div className='ProgressBar'>
            <div className='ProgressPercent4'>

            </div>
          </div>
          <div className='SkillDisp'>
            Intermediate grip on Html with hand zone experience of 2 years
          </div>
        </div>
        <div className='SkillShowBar'>
          <div>
            Next.js
          </div>
          <div className='ProgressBar'>
            <div className='ProgressPercent5'>

            </div>
          </div>
          <div className='SkillDisp'>
            Intermediate grip on Html with hand zone experience of 1 years
          </div>
        </div>
      </div>
    </div>
  )
}
