import React, { Component } from 'react';
import {connect} from 'react-redux';
import moment from 'moment';
import SimplePieChart from './SimplePieChart';
import RankPieChart from './RankPieChart';
import HourPieChart from './HourPieChart';
import DayPieChart from './DayPieChart';
import WeekPieChart from './WeekPieChart';
const request = require('request');


const Stats = (props) => {
       <div className="newest">
       



        {props.selectedCoin.map((newData) =>
       
          {return(
       <div>
      
       
      </div>
        
        )}
        
      )}
     
       

    </div>
 
}

export default Stats



      
