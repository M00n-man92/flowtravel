import { useState } from "react"

import "../../style/header/nav.scss"

export default function Navigation() {
  const [openRightSideBar, setOpenRight] = useState(false)

  const navDisplay = () => {
    return (
      <div className="navigtion">
        <div className="navigationspacing">
          <div className="navigationleft">
            <img src="/assets/flotravel-logo.png" alt="" />
          </div>
          <div className="navigationright">
            <div className="linkcontainer">
              <a
                href="#home"
                style={{
                  textDecoration: "none",
                  color: "black",
                  cursor: "pointer",
                }}
              >
                <span>Home</span>
              </a>
            </div>

            <div className="linkcontainer">
              <a
                href="#features"
                style={{
                  textDecoration: "none",
                  color: "black",
                  cursor: "pointer",
                }}
              >
                <span>Features</span>
              </a>
            </div>
            <div className="linkcontainer">
              <a
                href="#benefits"
                style={{
                  textDecoration: "none",
                  color: "black",
                  cursor: "pointer",
                }}
              >
                <span>Benefits and Offers</span>
              </a>
            </div>
            {/* <div className="linkcontainer">
            <a
              href="#reviews"
              style={{
                textDecoration: "none",
                color: "black",
                cursor: "pointer",
              }}
            >
              <span>Reviews</span>
            </a>
          </div> */}
            <div className="linkcontainer">
              <a
                href="#contacts"
                style={{
                  textDecoration: "none",
                  color: "#16476a",
                  cursor: "pointer",
                }}
              >
                <span>Contact</span>
              </a>
            </div>
          </div>
          <div className="burger">
            <div
              className="hamburger"
              onClick={(e) => {
                setOpenRight(!openRightSideBar)
                console.log(openRightSideBar)
              }}
            >
              <span className="lineone"></span>
              <span className="linetwo"></span>
              <span className="linehthree"></span>
            </div>
          </div>
        </div>
      </div>
    )
  }
  return {
    display: navDisplay,
    rightSetOpen: setOpenRight,
    isRightOpen: openRightSideBar,
  }
}
