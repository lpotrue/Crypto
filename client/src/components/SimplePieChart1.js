import React, { Component } from 'react';
import {connect} from 'react-redux';
import {PieChart, Pie, Tooltip} from 'recharts';
import moment from 'moment';    
  
const SimplePieChart1 = (props) => { 

 
    return (
      <PieChart id="pcrank" width={100} height={100}>
        <Pie data={props.coinData} dataKey="rank" innerRadius={40} outerRadius={50} fill="blueviolet"/>
        <Tooltip/>
	   </PieChart>
    );
  }


export default connect()(SimplePieChart1);






