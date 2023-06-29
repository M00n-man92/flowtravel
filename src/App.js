import "./App.css"
import Dropdown from "./header/dropdown"

import Navigation from "./header/nav"
import Features from "./page/features"
import Footer from "./page/footer"
import Home from "./page/home"
function App() {
  const { display, rightSetOpen, isRightOpen } = Navigation()
  console.log(isRightOpen)
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
      onClick={(e) => {
        isRightOpen && rightSetOpen(false)
      }}
    >
      {display()}
      {isRightOpen && <Dropdown />}
      <Home />
      {/* <Zapp /> */}
      <Features />
      <Footer />
      {/* <Reviews /> */}
    </div>
  )
}

export default App
