import "../../style/header/nav.scss"

export default function Navigation() {
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
              href="#app"
              style={{
                textDecoration: "none",
                color: "black",
                cursor: "pointer",
              }}
            >
              <span>TheApp</span>
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
              href="#reviews"
              style={{
                textDecoration: "none",
                color: "black",
                cursor: "pointer",
              }}
            >
              <span>Reviews</span>
            </a>
          </div>
          <div className="linkcontainer">
            <a
              href="#contact"
              style={{
                textDecoration: "none",
                color: "black",
                cursor: "pointer",
              }}
            >
              <span>Contact</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
