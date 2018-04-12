import React, { Component } from 'react';
import {connect} from 'react-redux';
import {PieChart, Pie, Tooltip} from 'recharts';
import moment from 'moment';    
  
const SimplePieChart = (props) =>{

     return(
      
      <PieChart width={100} height={100}>
        <Pie data={props.coinData} dataKey="price_usd" innerRadius={40} outerRadius={50} fill="deeppink"/>
       <Tooltip/>
     </PieChart>
     );
   }
  
    
export default connect()(SimplePieChart);

//0)(SimplePieChart1)(SimplePieChart2)(SimplePieChart3)(SimplePieChart4);

