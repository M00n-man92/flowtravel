import "./App.css"

import Navigation from "./header/nav"
import Features from "./page/features"
import Footer from "./page/footer"
import Home from "./page/home"
function App() {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Navigation />
      <Home />
      {/* <Zapp /> */}
      <Features />
      <Footer />
      {/* <Reviews /> */}
    </div>
  )
}

export default App
