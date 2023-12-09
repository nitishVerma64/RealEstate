import Home from "./component/Home/Home"
import Header from "./component/header/Header"
import './App.css'
import Company from "./component/Compani/Company"
import Location from "./component/Location/Location"

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
    </div>
  )
}

export default App
