function contact() {
    return (
         <section classNameName="contactSection" id="contactSection">
                <article id="contactText" data-aos="fade-up" data-aos-once="true">
                    <h3 classNameName="contactHeading">Get In <span id="touch">Touch</span></h3>
                    <p className="contactMainText">
                        Ready to start your next project? Let's collaborate and create something amazing together. I'm always excited to work on new challenges and innovative ideas.
                    </p>
                </article>
            <div className="connectWrapper" data-aos="fade-up" data-aos-once="true" data-aos-duration="1000" data-aos-easing="ease-in-out">
                <div className="socialsConnect" id="socialsConnect">
                    <h3 id="socialsConnectHeading">Let's Connect</h3>
                    <div className="userInfo">
                    <span className="userIcon"><i className="fas fa-user"></i></span>
                    <p className="userInfoText"><span className="emailText">Ifeanyi Joseph </span><br/>
                    Front-end Developer</p>
                    </div>
                    <div className="userInfo">
                    <span className="userIcon"><i className="fas fa-message"></i></span>
                    <p className="userInfoText"> <span className="emailText"> josephify304@gmail.com</span> <br/>
                    Avaliable for freelance work</p>
                    </div>
                </div>
                <h3 className="followButtons">Follow me on:</h3>
                <div className="socials1" >
                    <div className="Cta">
                      <p className="socialNames"><span className="box1"></span>
                        <a href="https://www.linkedin.com/in/ifeanyichukwu-joseph-orji-234826360?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=andriod_app" aria-label="LinkedIn CTA button">LinkedIn </a></p>
                    </div>
                    <div className="Cta">
                      <p className="socialNames"><span className="box2"></span> 
                        <a href="https://x.com/ifeanyiijosephh?t=i-pXPYDOmlfmlcNoZcZ2w&s=09" aria-label="Twitter CTA button">Twitter</a></p>
                    </div>
                </div>
                <div className="socials2">
                    <div className="Cta">
                      <p className="socialNames"><span className="box3"></span></p>  
                        <a href="https://github.com/ifeanyijosephh" aria-label="Github CTA button">Github</a>
                    </div>
                    <div className="Cta">
                      <p className="socialNames"><span className="box4"></span> 
                        <a href="mailto:ifecodigitalservices@gmail.com" aria-label="Email CTA button"> Email </a></p>
                    </div>
                </div>
            </div>
                <div className="formWrapper" id="formWrapper" data-aos="fade-up" data-aos-once="true" data-aos-duration="1000" data-aos-easing="ease-in-out">
                    <h3 className="formHeading">Send a Message</h3>
                    <form action="https://formspree.io/f/xqaloqrr" method="post" id="contactForm" role="form" aria-roledescription="Contact Form" />
                        <input type="text" id="name" name="name" placeholder="Your name" required aria-label="Name Input" /><br/>
                        <input type="email" id="email" name="email" placeholder="Your Email" required aria-label="Email Input" /><br/>
                        <textarea id="textarea" name="message" placeholder="Your message..." required aria-label="Message Box"></textarea>
                        <br>
                        <button type="submit" id="submitButton" aria-label="Submite Message Button ">Send message</button>
                    </form>
                </div>
            </section>
    )
}