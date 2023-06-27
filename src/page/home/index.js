import "../../style/page/home/home.scss"

export default function Home() {
  return (
    <div className="home" id="home">
      <div className="homespacing">
        <div className="homeleft ">
          <div className="homedetailcontainer">
            <span className="top">
              SIMPLIFY TRAVEL PAYMENTS, IMPROVE CASH FLOW!
            </span>
            {/* <span className="lower">Try it yourself. Download now.</span> */}
            <div className="applicationlink">
              {/* <img src="/assets/google.png" alt="" />
              <img src="/assets/ios.png" alt="" /> */}
              <button>SIGNUP HERE</button>
            </div>
          </div>
        </div>
        <div className="homeright">
          <img
            className="biggerimage"
            src="/assets/Travel.jpg"
            alt=""
            // style={{ height: "66%" }}
          />
          {/* <img
            className="smallerimage"
            src="/assets/Free cartoon travel pictures.png"
            alt=""
          /> */}
        </div>
      </div>
    </div>
  )
}
