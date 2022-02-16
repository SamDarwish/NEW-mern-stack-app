import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Messages from './Messages'
import Home from './Home'
import Header from './Header'
import Footer from './Footer'
import About from './About'

const App = props => {
  return (
    <div className="App">
      <Router>
        <Header />
        <main className="App-main">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/messages" element={<Messages />}></Route>
            <Route path="/about" element={<About />}></Route>
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  )
}

export default App
