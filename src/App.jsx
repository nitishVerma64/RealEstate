import Home from "./component/Home/Home"
import Header from "./component/header/Header"
import './App.css'
import Company from "./component/Compani/Company"
import Location from "./component/Location/Location"
import Value from "./component/Value/Value"
import Contact from "./component/Contact/Contact"
import Get from "./component/GetStarted/Get"
import Footer from "./component/Footer/Footer"


function App() {

  return (
    <div className="App">
      <div>
        <div className="white-gradient"></div>
        <Header/>
        <Home/>        
      </div>
      <Company/>
      <Location/>
      <Value/>
      <Contact/>
      <Get/>
      <Footer/>
    </div>
  )
}

export default App
