import React, { Component } from 'react';
import {connect} from 'react-redux';
import moment from 'moment';

import {PieChart, Pie, Legend, Tooltip} from 'recharts';



const data = [{name: 'Group A', value: 400},
                  ];
  
  
const WeekPieChart = (props) => {
  
    return (
      <PieChart width={100} height={100}>
        <Pie data={props.coinPrice} dataKey="price_usd" innerRadius={40} outerRadius={50} fill="deepskyblue"/>
        <Tooltip/>
       </PieChart>
    );
  }



export default connect()(WeekPieChart);






