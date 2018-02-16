import React from 'react'

const Stocks = (props) => (
  <div className="mine">

    
    
      <label id="coin-names">My Coins</label>
        
           
    <table>
      <tr>
        <th>Type</th>
        <th>Current Price</th>
        <th>Amount</th>
        <th>Total</th>
        
        <th>  - </th>
        <th> + </th>
      </tr>
     
            
         
      {props.yourCoins.map((coin) =>
       <tr>
        <td id="left" key={coin._id}>{coin.name} ({coin.symbol})</td>
        <td id="right" value={coin._id}>{coin.price_usd}</td>
        <td id="amount" value={coin._id}>{coin.amount}</td>
        <td id="total" value={coin._id}>{coin.price_usd * coin.amount}</td>
        <td>{props.count}</td>
        
        <td value={coin._id}><button onClick = { ()=>props.edit(coin, 1)}> + </button></td>
        <td value={coin._id}><button onClick={ ()=>props.edit(coin, -1)} > - </button></td>
      </tr>
         
     
         
      )}
      </table>
   
    
  </div>
)

export default Stocks