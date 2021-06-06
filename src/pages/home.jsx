import React from 'react';
import Header from './header'
import Footer from './footer'
import First from './images/image1.jpg'
import Second from './images/image2.jpg'
import Third from './images/image3.png'
import './main.css'
import {Link} from 'react-router-dom';


function Home() {
  return (
    <div className="App">
      <Header/>
      <div className="container-fluid"  >
        <div className="row">
          <div className="col-md-12">

            <div className='row' >
              {/* left */}
              <div className='col-md-6' id="left">
                <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img className="d-block w-100 img-fluid" src={First} alt="First slide"/>
                    </div>
                    <div className="carousel-item">
                      <img className="d-block w-100" src={Second} alt="Second slide"/>
                    </div>
                    <div className="carousel-item">
                      <img className="d-block w-100" src={Third} alt="Third slide"/>
                    </div>
                  </div>
                </div>
              </div>
              {/* Right */}
              <div className='col-md-6' id="right">
                <br />
                <br />
                <h1 style={{wordSpacing:"10px"}}>Get <span style={{color:"red"}}>Pakistan</span> Update Of <span style={{color:"red"}}>CORONA VIRUS</span> From Here</h1>
                <br />
                <Link to="/covid" className="btn btn-danger">Track now</Link>
                <br />
                <br />
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

export default Home;