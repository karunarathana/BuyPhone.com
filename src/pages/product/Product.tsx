import './product.css'
import productImage from '../../assets/react.svg'

function Product() {
  return (
    <div className='product-main-wrapper'>
      <div className='product-image'>
        <div className='test-image'>
          <img src={productImage} alt="Washing Machine"
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
      <div className='product-details-div'>
        <p>Nipun Snadeepa Karunarathna</p>
        <p>
          <span className="old-price">Rs. 49,990</span>
          &nbsp;
          <span className="new-price">Rs. 19,000</span>
        </p>
      </div>
      <div className='product-buy-button-div'>
        <button>Buy</button>
      </div>
    </div>
  )
}

export default Product