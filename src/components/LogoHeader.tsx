import React, { Fragment, useCallback } from "react";
import file from ".././img/file.png"
import logo from ".././img/logo.png"
import noti from ".././img/noti.png"
import setting from ".././img/setting.png"
import plus from ".././img/plus.png"

const LogoHeader: React.FC = (): JSX.Element => {
  
    return (
      <Fragment>
         <div className="container-fluid">
        <header className="navbar navbar-expand navbar-dark flex-column flex-md-row bd-navbar">
        <a className="navbar-brand mr-0 mr-md-2"  aria-label="Bootstrap">
		  	<div className="logo">
				<img src={logo}/>
			</div>
		</a>

	    <div className="dropdown-box">
			<select className="border-none">
	  			<option value="volvo">Coles Supermaket</option>
	  			<option value="saab">1</option>
	  			<option value="opel">2</option>
	  			<option value="audi">3</option>
			</select>
		</div>

	  	<div className="navbar-nav-scroll ml-md-auto" style={{paddingRight:"20px",marginLeft:"auto"}}>
		    <ul className="navbar-nav bd-navbar-nav flex-row">
		      <li className="nav-item">
		        <span className="nav-link"><img src={file} width="30"/></span>
		      </li>
		      <li className="nav-item">
		        <span className="nav-link"><img src={noti} width="30"/></span>
		      </li>
		      <li className="nav-item">
		        <span className="nav-link"><img src={setting} width="30"/></span>
		      </li>
		      <li className="nav-item">
		        <span className="nav-link"><img src={plus} width="30"/></span>
		      </li>
		    </ul>
	  	</div>

	  	<div className="circle">
		  <p className="circle-inner">AY</p>
		</div>
	  	<div className="dropdown-box">
			<select id="cars">
	  			<option value="volvo"> Ashwani Kumar</option>
	  			<option value="saab">Sign In</option>
	  			<option value="opel">Sign Out</option>
			</select>
		</div>

	</header>

        </div>
      </Fragment>
    );
  };
  
  export default LogoHeader;