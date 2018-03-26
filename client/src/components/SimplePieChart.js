import React, { Component } from 'react';
import {connect} from 'react-redux';
import moment from 'moment';

import {PieChart, Pie, Legend, Tooltip} from 'recharts';

//const {PieChart, Pie, Legend, Tooltip} = Recharts;

const data = [{name: 'Group A', value: 400},
                  ];

    
  const SimplePieChart = (props) => {
  
  
    return (

      <PieChart width={100} height={100}>
        <Pie data={props.coinData} dataKey="price_usd" Legend={props.coinData} innerRadius={40} outerRadius={50} fill="deeppink"/>
        
        <Tooltip/>
       </PieChart>
    );
  }


export default connect()(SimplePieChart);






