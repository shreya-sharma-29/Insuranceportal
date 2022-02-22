import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these EPIC Destinations!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/Addpolicy.png'
              text='click to add policy details'
              label='Admin'
              path='/services'
            />
            <CardItem
              src='images/Applicantdata.png'
              text='click to add applicant data'
              label='Admin'
              path='/services'
            />
          
          
            <CardItem
              src='images/Policydetails.png'
              text='click to check existing policy details'
              label='Admin'
              path='/services'
            />
            
            </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
