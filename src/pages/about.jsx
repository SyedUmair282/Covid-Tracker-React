import React from 'react';
import Header from './header'
import Footer from './footer'
import img from './images/about.jpg'
function About() {
  return (
    <div className="App">
       <Header/>
       <div className="container-fluid"  >
        <div className="row">
          <div className="col-md-12">

            <div className='row' >
              {/* left */}
              <div className='col-md-6' id="left-about">
                <img src={img} className='img-fluid' id="pre"/>
              </div>
              {/* Right */}
              <div className='col-md-6' id="right-about">
                <h1>Precautions of <span style={{color:'red'}}>Covid-19</span></h1>
                <ul>
                  <li>Wear a mask</li>
                  <li>Clean your hands</li>
                  <li>Keep a safe distance</li>
                </ul>
                <br />
                <br />
                <br />
                
              </div>
            </div>

          </div>
        </div>
      </div>
       <Footer/>
    </div>
  );
}

export default About;