import './ads.css'

function Ads() {
  return (
    <div className='ads-main-wrapper'>
      <div className='ads-image'>
        <img style={{ }} src="https://buyabans.com/themes/buyabans/assets/images/icon/extra-save-new.png" alt="Washing Machine"
          width="300" />
        <div className='OFF-indicator'>
          <p>43%</p>
          <p>OFF</p>
        </div>
      </div>
      <div className='ads-details-main-wrapper'>
        <p className='ads-title'>Abans 5L air Fryer(Black)</p>
        <div className='ads-flex-main-wrapper'>
          <div className='ads-flex-left-wrapper'>
            <p>Rs.49,990</p>
            <h3>Rs.19,000</h3>
            <p>Monthly</p>
            <h3>Rs.417</h3>
          </div>
          <div className='ads-flex-right-wrapper'>
            <h2>SAVE</h2>
            <h2>RS. 30,000</h2>
          </div>
        </div>
        <button className='buy-button'>BUY NOW</button>
      </div>
    </div>
  )
}

export default Ads