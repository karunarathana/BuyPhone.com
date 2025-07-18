import Logo from "./components/Logo"
import NotificationArea from "./components/NotificationArea"
import SearchBar from "./components/SearchBar"
import './style/homeStyle.css'
function Home() {
  return (
    <>
      <div className="header-main-wrapper">
        <div><Logo/></div>
        <div><SearchBar/></div>
        <div><NotificationArea/></div>
      </div>
    </>
  )
}

export default Home