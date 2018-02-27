import React from 'react'

const Stocks = (props) => (
  <div className="mine">

    
    
      <label id="coin-names">My Portfolio</label>
        
          
    <table>
      <tr>
        <th>Type</th>
        <th>Amount</th>
        <th>Current</th>
        <th>Total</th>
        <th>Edit</th>
      </tr>
     
            
         
      {props.yourCoins.map((coin) =>
        { if(coin.amount > 0)
          {return(
       <tr>
        <td id="left" onClick={ ()=>props.selectCoin(coin)} key={coin._id}>{coin.name} ({coin.symbol})</td>
        <td id="amount" value={coin._id}>{coin.amount}</td>
        <td id="right" value={coin._id}>{coin.price_usd}</td>
        <td id="total" value={coin._id}>{coin.price_usd * coin.amount}</td>
        {/*<td>{props.count}</td>*/}
        
        <td value={coin._id}><button id="plus" onClick={ ()=>props.edit(coin, 1)}> + </button></td>
        <td value={coin._id}><button id="plus" onClick={ ()=>props.edit(coin, -1)} > - </button></td>
      </tr>
        )}
        }
      )}
      </table>
       

    </div>
 
)

export default Stocks