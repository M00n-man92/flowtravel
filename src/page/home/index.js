import "../../style/page/home/home.scss"

export default function Home() {
  return (
    <div className="home" id="home">
      <div className="homespacing">
        <div className="homeleft ">
          <div className="homedetailcontainer">
            <span className="top">Discover New Possibilities</span>
            <span className="lower">Try it yourself. Download now.</span>
            <div className="applicationlink">
              <img src="/assets/google.png" alt="" />
              <img src="/assets/ios.png" alt="" />
            </div>
          </div>
        </div>
        <div className="homeright">
          <img className="biggerimage" src="/assets/bigger.png" alt="" />
          <img className="smallerimage" src="/assets/smaller.png" alt="" />
        </div>
      </div>
    </div>
  )
}
