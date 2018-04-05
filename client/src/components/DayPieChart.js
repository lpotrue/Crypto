import React, { Component } from 'react';
import {connect} from 'react-redux';
import moment from 'moment';

import {PieChart, Pie, Legend, Tooltip} from 'recharts';



  
  
const DayPieChart = (props) => {
const percentFormatter = (percent) => Number(percent);

    return (
      <PieChart width={100} height={100}>
    <Pie data={props.latestPrices} dataKey="price_usd" Legend={props.latestPrices} innerRadius={40} outerRadius={50} fill="lime"/>
        <Tooltip/>
       </PieChart>
    );
  }



export default connect()(DayPieChart);






