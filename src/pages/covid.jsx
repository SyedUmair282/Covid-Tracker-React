import React,{useEffect,useState} from 'react';
import Header from './header'
import Footer from './footer'
import './main.css'
import CountUp from 'react-countup';



function Covid() {

  const [country, setCountry] = useState();
  const [code, setCode] = useState();
  const [date, setDate] = useState();
  const [nconfirm, setNconfirm] = useState();
  const [ndeath, setNdeath] = useState();
  const [nrecover, setNrecover] = useState();
  const [tconfirm, setTconfirm] = useState();
  const [tdeath, setTdeath] = useState();
  const [trecover, setTrecover] = useState();
  const [spin, setSpin] = useState(true);

  
  const covid19=async()=>{
    const result=await fetch('https://api.covid19api.com/summary');
    const final_result=await result.json();
    
    let country1=final_result.Countries[129].Country;
    let country_code=final_result.Countries[129].CountryCode;
    let date=final_result.Countries[129].Date;
    let NewConfirmed=final_result.Countries[129].NewConfirmed;
    let NewDeaths=final_result.Countries[129].NewDeaths;
    let NewRecovered=final_result.Countries[129].NewRecovered;
    let TotalConfirmed=final_result.Countries[129].TotalConfirmed;
    let TotalDeaths=final_result.Countries[129].TotalDeaths;
    let TotalRecovered=final_result.Countries[129].TotalRecovered;
    setCountry(country1);
    setCode(country_code);
    setDate(date);
    setNconfirm(NewConfirmed);
    setNdeath(NewDeaths);
    setNrecover(NewRecovered);
    setTconfirm(TotalConfirmed);
    setTdeath(TotalDeaths);
    setTrecover(TotalRecovered)
    setSpin(false)
  }
  
  useEffect(() => {
    covid19();
  }, []);

  return (
    <div className="App">
      <Header/>
      
      {spin?<div className="spinner-grow text-danger"  style={{alignSelf:"center",position:"absolute",top:"40%",width:"5rem",height:"5rem"}}></div>:<div className="container-fluid">
        <div className="row">
          <div className="col-md-10 col-12 mx-auto" id="rowss">
            <div id="rowss2">
              <h1>Country</h1>
              <h3>{country}</h3>
            </div>
            <div id="rowss2">
              <h1>Country Code</h1>
              <h3>{code}</h3>
            </div>
            <div id="rowss2">
              <h1>Date</h1>
              <h3>{date}</h3>
            </div>
          </div>



          <div className="col-md-10 col-12 mx-auto" id="rowss">
          <div id="rowss2">
              <h1>New Confirmed</h1>
              <h3><CountUp end={nconfirm}/></h3>
            </div>
            <div id="rowss2">
              <h1>New Deaths</h1>
              <h3><CountUp end={ndeath}/></h3>
            </div>
            <div id="rowss2">
              <h1>New Recovered</h1>
              <h3><CountUp end={nrecover}/></h3>
            </div>
          </div>



          <div className="col-md-10 col-12 mx-auto" id="rowss">
            <div id="rowss2">
              <h1>Total Confirmed</h1>
              <h3><CountUp end={tconfirm}/></h3>
            </div>
            <div id="rowss2">
              <h1>Total Deaths</h1>
              <h3><CountUp end={tdeath}/></h3>
            </div>
            <div id="rowss2">
              <h1>Total Recovered</h1>
              <h3><CountUp end={trecover}/></h3>
            </div>
          </div>
        </div>
      </div>}
      <br />
      <br />
      <Footer/>
    </div>
  );
}

export default Covid;