import React from 'react'
import "../styles/Overview.css"
const Overview = () => {
  return (
    <div>
      <div> 
        <h3>Current Etheruem Price</h3>
        <span>ether price</span>
        <h3>Market Cap</h3>
        <span>market cap value</span>
      </div>

      <div>
        <h3>Total Transactions</h3>
        <span>Tx value</span>
        <h3>Median Gas Price</h3>
        <span>Gwei ($)</span>
      </div>

      <div>
        <h3>Latest Finalized Block</h3>
        <span>finalized Block number</span>
        <h3>Latest Safe Block</h3>
        <span>safe Block number</span>
      </div>
    </div>
  )
}

export default Overview