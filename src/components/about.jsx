import SkillsMarquee from "./SkillMarque"

function SkillMeterLabel({ id, value, label }) {
    return (
        <>
            <label htmlFor={id}>
                <span className="labels2">{label}</span>
                <span>{value}%</span>
            </label>
            <meter id={id} value={value} min={0} max={100}>{value}%</meter>
        </>
    )
}

function About() {
    return (
        <section id='aboutSection' className='w-full text-center pt-[clamp(80px,15vh,120px)] '>
            <h2 id='aboutHeading' className='text-2xl md:text-3xl font-bold text-cyan-300'>
            About <span style={{ color: 'rgb(65, 65, 255)' }}> Me </span>
            </h2>        
            <article id='aboutMe' className='text-cyan-500 text-sm leading-relaxed pt-4 px-6'>
                <p>
                    I'm a Passionate Web Developer driven by curiosity, creativity, and a deep love for technology. 
                    My work goes beyond writing clean, efficient code,
                     I focus on solving problems, crafting seamless user experiences, and bringing ideas to life on the web.
                </p>
                <p>
                     With a strong foundation in <span style={{fontWeight: 'bold', color: '#67e8f9'}}> React JS, Tailwind CSS for building clean and scalable front-end, Node.js, Express.js and MongoDB to build strong and functional Backend.</span>
                     I also leverage tools like <span style={{fontWeight: 'bold', color: '#67e8f9'}}> Firebase and Supabase </span> to build dynamic, scalable, and secure applications. From authentication and real-time database to cloud functions and hosting, I integrate backend power into intuitive, responsive frontends.
                </p><br/>
                <p>
                    <span style={{fontWeight: 'bold'}}> My Mission is Simple: </span>  To craft web experiences that don't just work, but inspire.
                </p>
            </article>

                <div className='h-auto w-100% flex flex-col items-center gap-6 pt-10'>
                    <img src='images/profile.png' alt='Ifeanyi Joseph' id='mainPic' className='justify-self-center w-38 h-38 rounded-full object-cover border-2 border-cyan-500' />

                    <p className='text-cyan-300 text-lg font-bold text-center'>Ifeanyi Joseph <br /> <span className='text-sm font-normal text-cyan-500'> Full-Stack Software Developer</span> </p>
                </div>

            <div className='w-100% pt-8 flex flex-col md:text-center text-cyan-400' id='skillSection'>

                    <h2 className="text-2xl md:text-3xl font-bold text-cyan-300 pb-4">Skills & <span style={{ color: 'rgb(65, 65, 255)' }}>Expertise</span></h2>
 
            <SkillsMarquee />
            </div>
            <div className='learningBox' data-aos='fade-up' data-aos-once='true' data-aos-duration='1000' data-aos-easing='ease-in-out'>
                <h3 id='learningHeading'> Always <span id='learning'>Learning </span></h3>
                <p id='learningQuote'>
                    Fueled by passion and curiosity, I'm constantly exploring new technologies and refining my skills in order to stay ahead in the ever-evolving tech world. <br/> <span style={{fontWeight: 'bold'}}> Always learning, always evolving</span>
                </p>
            </div>

        </section>
    )
}

export default About

// will add the rating for projects, technologies and dedication after the article.
