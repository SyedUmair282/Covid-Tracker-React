import React from 'react';
import './head.css';
import {Link} from 'react-router-dom';



function Header() {
  return (
    <div className="container-fluid" id='main'>
      <div className='row'>
          <div className='col-md-10 col-12 mx-auto'>
          <nav className="navbar navbar-expand-lg">
                <a className="navbar-brand" href="/"><i className="fa fa-virus" style={{color:'red',fontSize:'23px'}}></i> Covid-19 Tracker <i className="fa fa-virus"style={{color:'red',fontSize:'23px'}}></i></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" style={{marginTop:'7px',fontSize:'20px',fontWeight:'bold'}}>&#10507;</span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                        <Link to="/" className="btn">Home</Link>
                        </li>
                        <li className="nav-item">
                        <Link to="/covid" className="btn">Covid-19</Link>
                        </li>
                        <li className="nav-item">
                        <Link to="/about" className="btn">About</Link>
                        </li>
      
                    </ul>
   
                </div>
            </nav>
          </div>
        </div>
    </div>
  );
}

export default Header;