import Ads from "../ads/Ads"
import Footer from "../footer/Footer"
import Product from "../product/Product"
import Logo from "./components/Logo"
import NotificationArea from "./components/NotificationArea"
import SearchBar from "./components/SearchBar"
import SubWrapper from "./components/SubWrapper"
import './style/homeStyle.css'
function Home() {

  return (
    <>
      <div className="header-main-wrapper">
        <div><Logo/></div>
        <div className="test1"><SearchBar/></div>
        <div><NotificationArea/></div>
      </div>
      <div>
        <SubWrapper/>
      </div>
      <div  style={{marginTop:"20px",display:'flex',gap:'10px',flexWrap:'wrap',padding:'25px',flexGrow:1,width: "100%"}}>
        <Ads/>
        <Ads/>
        <Ads/>
      </div>
      <div style={{display:'flex',justifyContent:'space-evenly',flexWrap:'wrap',padding:'10px'}}>
        <Product/>
        <Product/>
        <Product/>
        <Product/>
        <Product/>
        <Product/>
      </div>
      <div>
        <Footer/>
      </div>
    </>
  )
}

export default Home