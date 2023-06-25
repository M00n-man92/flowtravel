import "../../style/page/home/home.scss"

export default function Home() {
  return (
    <div className="home">
      <div className="homespacing">
        <div className="homeleft ">
          <div className="homedetailcontainer">
            <span className="top">Discover New Possibilities</span>
            <span className="lower">Try it yourself. Download now.</span>
            <div className="applicationlink">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/bang-clothing.appspot.com/o/google.png?alt=media&token=f609084c-e937-4148-bd72-56343232561b"
                alt=""
              />
              <img
                src="https://firebasestorage.googleapis.com/v0/b/bang-clothing.appspot.com/o/ios.png?alt=media&token=56c2e9c6-32e6-4f8b-b0a6-a13040e8301b"
                alt=""
              />
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
