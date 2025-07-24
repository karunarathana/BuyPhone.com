import './product.css'
function Product() {
  return (
    <div className='product-main-wrapper'>
      <div className='product-image'>
        <div className='test-image'>
          <img src="https://buyabans.com/themes/buyabans/assets/images/icon/extra-save-new.png" alt="Washing Machine"
            width="50%" />
        </div>
        <div className='test'>
          <div className='product-OFF-indicator'>
            <p>43%</p>
            <p>OFF</p>
          </div>
          <div className='tag-off'>
            <p>Extra</p>
            <p>5%</p>
          </div>
        </div>
      </div>
      <p>Nipun Snadeepa Karunarathna</p>
      <p>Total</p>
      <button>Buy</button>
    </div>
  )
}

export default Product