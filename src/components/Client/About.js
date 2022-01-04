import React from "react";


const About = () => {
    return(
        <section class="container">
        <div class="profile-grid my-1">
         
        <div class="profile-top bg-primary p-2">
          <img
            class="round-img my-1"
            src="https://icons-for-free.com/iconfiles/png/512/business+finance+marketing+notebook+woman+icon-1320073244553154330.png"
            alt=""
          />
          <h1 class="large">Merin Mary Philip</h1>
          <p class="lead">Systems Engineer at Infosys</p>
          
        </div>

        <div class="profile-about bg-light p-2">
          {/* <h2 class="text-primary">About</h2>
          <p>
            Just another lost Soul
          </p>
          <div class="line"></div> */}
          <h2 class="text-primary">Skill Set</h2>
          <div class="skills">
            <div class="p-1"><i class="fa fa-check"></i> HTML</div>
            <div class="p-1"><i class="fa fa-check"></i> CSS</div>
            <div class="p-1"><i class="fa fa-check"></i> JavaScript</div>
            <div class="p-1"><i class="fa fa-check"></i> React</div>
          </div>
        </div>

        <div class="profile-exp bg-white p-2">
          <h2 class="text-primary">Experience</h2>
          <div>
            <h3 class="text-dark">Infosys</h3>
            <p>August 2021 - Current</p>
            <p><strong>Position: </strong>System Engineer</p>
            <p>
              <strong>Description: </strong>React Developer
            </p>
          </div>
        </div>


        <div class="profile-edu bg-white p-2">
          <h2 class="text-primary">Education</h2>
          <div>
            <h3>Marian Engineering College</h3>
            <p>2015 - 2019</p>
            <p><strong>Degree: </strong>B.Tech</p>
            <p><strong>Field Of Study: </strong>Computer Science Engineering</p>
          </div>
        </div>


      </div>
    </section>
   )
}
  
  export default About;