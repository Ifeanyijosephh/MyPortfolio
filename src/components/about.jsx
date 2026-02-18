import react from 'react'
import { useEffect } from 'react'

function about() {
    return (
        <section id='aboutSection' dataAos='fade-up'>
            <h2 id='aboutHeading'>
            About <span style={{colour: 'rgb(65, 65, 255)'}}> Me </span>
            </h2>        
            <article id='aboutMe'>
                <p>
                    I'm a Passionate Web Developer driven by curiosity, creativity, and a deep love for technology. 
                    My work goes beyond writing clean, efficient code - I focus on solving problems, crafting seamless user experiences, and bringing ideas to life on the web.
                </p>
                <p>
                     With a strong foundation in <span style={{fontWeight: 'bold'}}> React JS, and Vanilla JS for building clean front-end. </span>, 
                     I also leverage tools like <span style={{fontWeight: 'bold'}}> Firebase </span> to build dynamic, scalable, and secure applications. From authentication and real-time database to cloud functions and hosting, I integrate backend power into intuitive, responsive frontends.
                </p>
                <p>
                    <span style={{fontWeight: 'bold'}}> My Mission is Simple: </span> To craft web experiences that don't just work, but inspire.
                </p>
            </article>

                <div className='profilePicture' data-aos='fade-up' data-aos-once='true' data-aos-duration='1000' data-aos-easing='ease-in-out'>
                    <img src='images/profile.png' alt='Ifeanyi Joseph' id='mainPic' />

                    <h2 className="skillHeading">Skills & <span className="expertise">Expertise</span></h2>
                    <p className="skillDes"> A comprehensive overview of my skills and proficiency levels across various technologies and development tools </p>
                </div>

        </section>
    )
}
// will add the rating for projects, technologies and dedication after the article.