import Home from "./component/Home/Home"
import Header from "./component/header/Header"
import './App.css'
import Company from "./component/Compani/Company"
import Location from "./component/Location/Location"
import Value from "./component/Value/Value"

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
    </div>
  )
}

export default App
