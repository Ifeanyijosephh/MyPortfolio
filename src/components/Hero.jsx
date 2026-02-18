import react from 'react'

function ctaButton({href, label}){
    return (
        <a href={href}>{label}</a>
     )
}
function Hero() {
    return (
        <>
             <section id='heroSection'>
                <p id='pHello'> &lt; Hello, I'm &gt;</p>
                <h1 id='myName'> Ifeanyi </h1>
                <p id='mySkill'> A Full Stack Developer <br /> & Digital Problem Solver </p>
                <p id='heroIntro'> I design and build, modern, responsive, and user-focused websites that works seamlessly.  <br />
                From concept to code, i turn ideas into functional, engaging, and high performing web experiences. <br />
                Your Vision, My Code. Let's create something expectional</p><br/>

                <ctaButton className='viewCTA' href='#projectSection' label='View My Projects'/>
                <ctaButton className='getCTA' href='#contactSection' label='Get in Touch'/>
             </section>
        </>
    )
}