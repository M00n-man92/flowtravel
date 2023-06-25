import "./App.css"

import Navigation from "./header/nav"
import Features from "./page/features"
import Home from "./page/home"
import Reviews from "./page/reviews"
import Zapp from "./page/zapp"
function App() {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Navigation />
      <Home />
      <Zapp />
      <Features />
      <Reviews />
    </div>
  )
}

export default App
