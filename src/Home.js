import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

function Home() {
  const navigate = useNavigate()

  function handleClick() {
    navigate("/login");
  }

  return (
    <div className="home">
      <div className="header">
        Welcome to&nbsp;
        <img
          height="65px"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiGn8trqQRs-iK_iRx46pJv7l8-tl4VAJzynBYkcTmCjgDPqeUmrthPooXqV7NwqViBQ&usqp=CAU"
          alt="Logo"
        />
      </div>
      <div className="about__1">
        <h1>Automate complex accounting processes and reduce costs</h1>
      </div>
      <div className="about__2">
          Finkraft helps enterprises achieve invoice data extraction &
          validation, and GST input claim compliances at scale. Poor compliance
          with invoice handling processes are the single largest driver of tax
          disputes and litigation for Indian enterprises. Our cutting-edge tech
          solutions aid finance teams to automate compliance critical processes
          delivering immediate monetary saving and long-term compliance
          safeguards.
      </div>
      <div className="box">
        <span>15%</span>
        <p>
          of India's largest corporations&nbsp;
          <br></br>
          use Finkraft GST & Recon solutions
        </p>
      </div>
      <div>
        <button className="login__btn" onClick={handleClick}>Login</button>
      </div>
    </div>
  );
}

export default Home;
