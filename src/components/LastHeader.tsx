import React, { FC, Fragment, ReactNode } from "react";
import Header from '../layouts/Header';
import setting from ".././img/setting.png"
import search from ".././img/search.png"
import ellipsis from ".././img/three-ellipsis.png"

interface Props {
  children: ReactNode;
}
const LastHeader:React.FC = (): JSX.Element =>{
 
  return (
     <>
     <div className="mainbox2">
		<div className="box1"><p>Shipment</p></div>
		<div className="box2">
			<select>
				<option>Departed</option>
				<option>1</option>
				<option>2</option>
				<option>3</option>
			</select>
		</div>
		<div className="box3">
			<div className="in-progress">
				<p>In Progress&nbsp;&nbsp;&nbsp;&nbsp;x</p>
			</div>
			
		</div>
		<div className="box4">
			<div className="departeds">
				<p>Departed</p>
			</div>
			
		</div>
		<div className="box4">
			<div className="departeds">
				<p> Arrived </p>
			</div>
			
		</div>
		<div className="box5"><p>+ Add View (3 / 5)</p></div>
		<div className="box6">
			<div className="new-btn">+ New</div>
		</div>
		<div className="box7">
			<input type="search" name="Search" placeholder="Search"/>
			<img src={search}/>
		</div>
		<div className="box8">
			<select>
				<option>List</option>
				<option>1</option>
				<option>2</option>
				<option>3</option>
			</select>
		</div>
		<div className="box9">
				<img src={setting}/>		
		</div>
		<div className="box10">
				<img src={ellipsis}/>		
		</div>
	</div>
     </>
  )
}

export default LastHeader;