import React from "react"
import { Link} from "react-router-dom"
import Footer from "./Footer"

function Home() {
    return (
        <div className="w3-light-grey">
      <div >
       
  
  
          <div className="w3-content w3-margin-top" style = {{maxWidth:"1400px"}} >
  
  
            <div className="w3-row-padding">
  
  
              <div className="w3-third">
  
                <div className="w3-white w3-text-grey w3-card-4">
                  <div className="w3-display-container">
                    <img src="/w3images/avatar_hat.jpg"
                      style={
                        { width: '100%' }
                      }
                      alt="Avatar" />
                    <div className="w3-display-bottomright w3-container w3-text-black">
                      <h2>Jumbo Pere</h2>
                    </div>
                  </div>
                  <div className="w3-container">
                    <p>
                      <i className="fa fa-briefcase fa-fw w3-margin-right w3-large w3-text-teal"></i>Designer</p>
                    <p>
                      <i className="fa fa-home fa-fw w3-margin-right w3-large w3-text-teal"></i>Lagos, Nigeria</p>
                    <p>
                      <i className="fa fa-envelope fa-fw w3-margin-right w3-large w3-text-teal"></i>jumboperebara0@gmail.com </p>
                                    
                    <p>
                      <i className="fa fa-phone fa-fw w3-margin-right w3-large w3-text-teal"></i>+2349032276546</p>
                    <hr />
  
                    <p className="w3-large">
                      <b>
                        <i className="fa fa-asterisk fa-fw w3-margin-right w3-text-teal"></i>Skills</b>
                    </p>
                    <p>Web Design</p>
                    <div className="w3-light-grey w3-round-xlarge w3-small">
                      <div className="w3-container w3-center w3-round-xlarge w3-teal"
                        style={
                          { width: "75%" }
                        }>75%</div>
                    </div>
                    <p> Management</p>
                    <div className="w3-light-grey w3-round-xlarge w3-small">
                      <div className="w3-container w3-center w3-round-xlarge w3-teal"
                        style={
                          { width: "75%" }
                        }>75%</div>
                    </div>
                    
                    
                    <p>MERN (MongoDB, Express, React, and NodeJs</p>
                    <div className="w3-light-grey w3-round-xlarge w3-small">
                      <div className="w3-container w3-center w3-round-xlarge w3-teal"
                        style={
                          { width: "75%" }
                        }>75%</div>
                    </div>
  
                    <br />
  
                    <p className="w3-large w3-text-theme">
                      <b>
                        <i className="fa fa-globe fa-fw w3-margin-right w3-text-teal"></i>Languages</b>
                    </p>
                    <p>English</p>
                    <div className="w3-light-grey w3-round-xlarge">
                      <div className="w3-round-xlarge w3-teal"
                        style={
                          {
                            height: "24px",
                            width: "90%"
                          }
                        }>90%</div>
                    </div>
                    <p>Igbo</p>
                    <div className="w3-light-grey w3-round-xlarge">
                      <div className="w3-round-xlarge w3-teal"
                        style={
                          {
                            height: "24px",
                            width: "55%"
                          }
                        }>55%</div>
                    </div>
                    <p>French</p>
                    <div className="w3-light-grey w3-round-xlarge">
                      <div className="w3-round-xlarge w3-teal"
                        style={
                          {
                            height: "24px",
                            width: "25%"
                          }
                        }>25%</div>
                    </div>
                    <br />
                  </div>
                </div>
                <br />
  
              </div>
  
  
              <div className="w3-twothird">
               
  
                <div className="w3-container w3-card w3-white w3-margin-bottom">
                  <h2 className="w3-text-grey w3-padding-16">
                    <i className="fa fa-suitcase fa-fw w3-margin-right w3-xxlarge w3-text-teal"></i>Work Experience</h2>
                  <div className="w3-container">
                    <h5 className="w3-opacity">
                      <b>Front End Developer
                                          </b>
                    </h5>
                    <h6 className="w3-text-teal">
                      <i className="fa fa-calendar fa-fw w3-margin-right"></i>Jul 2020 -
                                          <span className="w3-tag w3-teal w3-round">Current</span>
                    </h6>
                    <hr />
                  </div>
                  <div className="w3-container">
                    <h5 className="w3-opacity">
                      <b>Web Developer
                                          </b>
                    </h5>
                    <h6 className="w3-text-teal">
                      <i className="fa fa-calendar fa-fw w3-margin-right"></i>Jul 2020 -
                                          <span className="w3-tag w3-teal w3-round">Current</span>
                    </h6>
                    <hr />
                  </div>
                  <div className="w3-container">
                    <h5 className="w3-opacity">
                      <b>BackEnd Developer</b>
                    </h5>
                    <h6 className="w3-text-teal">
                      <i className="fa fa-calendar fa-fw w3-margin-right"></i>Jun 2010 - Mar 2012</h6>
                    <p>
                      I use MongoBD
                                      </p>
                    <br />
                  </div>
              
                </div>

                <div className = "w3-container w3-card w3-white w3-margin-bottom">
                <h2 className="w3-text-grey w3-padding-16"> My Projects
                  </h2>
                  <div className ="w3-container">
                    <h5 className = "w3-opacity">
                    <Link to ="/students">School App</Link>
                  
                    </h5>
                    <h5 className = "w3-opacity">
                    <Link to ="/file">Upload App</Link>
                  
                    </h5>
                     </div>
                </div>
  
                <div className="w3-container w3-card w3-white">
                  <h2 className="w3-text-grey w3-padding-16">
                    <i className="fa fa-certificate fa-fw w3-margin-right w3-xxlarge w3-text-teal"></i>Education</h2>
                  <div className="w3-container">
                    <h5 className="w3-opacity">
                        
                      <b>Always Learning</b>
                    </h5>
                    <h6 className="w3-text-teal">
                      <i className="fa fa-calendar fa-fw w3-margin-right"></i>Forever</h6>
                    <p>Web Development! All I need to know in one place, The Internet</p>
                    <p> Never stop learning. </p>
                    <hr />
                  </div>
                  <div className="w3-container">
                    <h5 className="w3-opacity">
                      <b>Federal College Of Fisheries And Marine Technology, Victoria Island, Lagos.</b>
                    </h5>
                    <h6 className="w3-text-teal">
                      <i className="fa fa-calendar fa-fw w3-margin-right"></i>2016 - 2018</h6>
                    <p>I studied Marine Engineering at F.C.F.M.T from 2016-2018 where I got my National Dipolma 
                    </p>
                    <hr />
                  </div>
                </div>
  
  
              </div>
  
            </div>
  <Footer/>
  
  
          </div>
        
        
       
      
         
        </div>
      </div>
    );
  }
  
  export default Home;
  