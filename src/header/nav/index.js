import "../../style/header/nav.scss"

export default function Navigation() {
  return (
    <div className="navigtion">
      <div className="navigationspacing">
        <div className="navigationleft">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/bang-clothing.appspot.com/o/flotravel-logo.png?alt=media&token=f2736b3f-6fa0-458f-8d45-3eca9abb54b0"
            alt=""
          />
        </div>
        <div className="navigationright">
          <div className="linkcontainer">
            <span>Home</span>
          </div>
          <div className="linkcontainer">
            <span>TheApp</span>
          </div>
          <div className="linkcontainer">
            <span>Features</span>
          </div>
          <div className="linkcontainer">
            <span>Reviews</span>
          </div>
          <div className="linkcontainer">
            <span>Contact</span>
          </div>
        </div>
      </div>
    </div>
  )
}
