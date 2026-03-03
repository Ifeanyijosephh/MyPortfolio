function CtaButton({ className, href, label }) {
    return (
        <a className={className} href={href}>{label}</a>
    )
}

function Hero() {
    return (
        <>
            <section id='heroSection' className='w-full text-center pt-[clamp(100px,20vh,150px)] px-4'>
                <p className='text-cyan-300'> &lt; Hello, I'm </p>
                <h1 id='myName' className='text-2xl md:text-3xl font-bold text-blue-500 pt-3 pb-2'
                style={{ textShadow: '0 0 20px #71b1fc, 0 0 40px #60a5fa, 0 0 80px #1f71f7' }}
                 > Ifeanyi </h1>
                <p id='mySkill' className='text-cyan-400 text-xl font-bold pt-3 pb-4'> A MERN Stack  <br /> Software Developer /&gt;</p>
                <p id='heroIntro' className='text-cyan-500 pt-4 text-sm leading-relaxed'> I design and build, modern, responsive, and user-focused websites that works seamlessly.  <br />
                From concept to code, i turn ideas into functional, engaging, and high performing web experiences. <br />
                <span className='font-bold'>Your Vision, My Code. Let's create something expectional.</span></p><br/>
                <div className='flex justify-center gap-4'>

                <CtaButton className='bg-blue-600 text-white text-center text-sm font-semi-bold p-2 rounded-[0.7rem]' href='#projectSection' label='View My Projects' />
                <CtaButton className='bg-transparent border-2 border-cyan-400 text-sm text-white text-center font-bold p-2 rounded-[0.7rem]' href='#contactSection' label='Get in Touch' />
                
                </div>
            </section>
        </>
    )
}

export default Hero
