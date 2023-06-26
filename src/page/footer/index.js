import "../../style/page/footer/footer.scss"
export default function Footer() {
  return (
    <div className="footer">
      <div className="footerspacing">
        <div className="footercontainer">
          <div className="footerlist">
            <div className="individual">
              <img src="/assets/flotravel-logo.png" alt="" />
              <div className="coulms">
                <span>Click Happy.</span>
              </div>
            </div>
            <div className="individual">
              <span>About</span>
              <div className="coulms">
                <span>About Us</span>
                <span>Privacy</span>
                <span>Disclaimer</span>
                <span>Cookies</span>
              </div>
            </div>
            <div className="individual">
              <span>Address</span>
              <div className="icons">
                <span>
                  One Canada Square Canary Wharf, London E14 5AB, United Kingdom
                </span>
              </div>
            </div>
            <div className="individual">
              <span>Contact Us</span>
              <div className="coulms">
                <span>+44 20 3287 6539</span>
                <span>flomart@flocash.com</span>
              </div>
            </div>
          </div>
          <div className="lastelement">
            <span> © 2023 Flocash™ .</span>
            <span>All Rights Reserved.</span>
          </div>
        </div>
      </div>
    </div>
  )
}
