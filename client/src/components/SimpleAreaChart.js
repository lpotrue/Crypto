import React, { Component } from 'react';
import {connect} from 'react-redux';
import moment from 'moment';

import {AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Line, Legend} from 'recharts';
const data = [
      {name: 'Page A', uv: 4000, pv: 2400, amt: 2400},
      {name: 'Page B', uv: 3000, pv: 1398, amt: 2210},
      {name: 'Page C', uv: 2000, pv: 9800, amt: 2290},
      {name: 'Page D', uv: 2780, pv: 3908, amt: 2000},
      {name: 'Page E', uv: 1890, pv: 4800, amt: 2181},
      {name: 'Page F', uv: 2390, pv: 3800, amt: 2500},
      {name: 'Page G', uv: 3490, pv: 4300, amt: 2100},
];

const tickFormatter = (tick) => moment(Number(tick) * 1000).format("MMM Do YYYY"); 
const priceFormatter = (price) => Number(price);
const SimpleAreaChart = (props) => {

    
  	 return (
        <div>
        
    	<AreaChart width={500} height={300} data={props.coinData}
            margin={{top: 0, right: 0, left: 0, bottom: 0}}>
       <XAxis dataKey="last_updated" tickFormatter={tickFormatter}/>
       <YAxis />
       <CartesianGrid strokeDasharray="3 3"/>
       <Tooltip label={tickFormatter.format}/>
     
       <Area type="monotone" dataKey="price_usd"  stroke="#00008B" activeDot={{r: 8}}/>
       <Line type="monotone" dataKey="last_updated" stroke="#82ca9d"/>

      </AreaChart>

      </div>
    );
  
}


export default connect()(SimpleAreaChart);
