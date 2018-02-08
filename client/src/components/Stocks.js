import React from 'react'

const Stocks = (props) => (
  <div>
    <h1>About Pa</h1>
    <p>Did you get here via Redux?</p>
    <ul>
      {props.yourCoins.map((coin) =>
       <li key={coin._id}>{coin.name}</li>
                

      )}
    </ul>
  </div>
)

export default Stocks