import "../../style/page/zapp/zapp.scss"

export default function Zapp() {
  return (
    <div className="zapp" id="app">
      <div className="zappspacing">
        <div className="zappleft">
          <span>Simplify payments, improve cash flow</span>
        </div>
        <div className="zappright">
          <span className="detailtop">
            Join more than a million of happy users
          </span>
          <span className="detailedbottom">
            Enjoy the convenience with our one-stop solution for flights,
            hotels, tour packages, and more.
          </span>
          <button>Download the Application</button>
        </div>
      </div>
    </div>
  )
}
