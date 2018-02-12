import React from 'react'

const Stocks = (props) => (
  <div className="mine">

    
    
      <label id="coin-names">My Coins</label>
        
           
    <table>
      <tr>
        <th>Type</th>
        <th>Amount</th>
        <th>Total</th>
      </tr>
     
            
         
      {props.yourCoins.map((coin) =>
       <tr>
        <td id="left" key={coin._id}>{coin.name} ({coin.symbol})</td>
        <td id="center" value={coin._id}>{coin.amount}</td>
        <td id="right" value={coin._id}>{coin.price_usd}</td>
      </tr>
         
      )}
      </table>
   
    
  </div>
)

export default Stocks