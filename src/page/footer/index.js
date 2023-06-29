import "../../style/page/footer/footer.scss"

import {
  Facebook,
  Instagram,
  Language,
  LinkedIn,
  LocationOn,
  Phone,
  Twitter,
} from "@mui/icons-material"
export default function Footer() {
  return (
    <div className="footer" id="contacts">
      <div className="footerspacing">
        <div className="footercontainer">
          <div className="footerlist">
            <div className="individual">
              <img
                className="flowtravelicon"
                src="/assets/flotravel-logo.png"
                alt=""
              />
              <div
                className="coulms"
                style={{
                  display: "flex",
                  flexDirection: "row",
                  width: "100%",
                  justifyContent: "space-around",
                  marginTop: "15px",
                }}
              >
                <Twitter style={{ color: "#16476a" }} />
                <Instagram style={{ color: "#16476a" }} />
                <Facebook style={{ color: "#16476a" }} />
                <LinkedIn style={{ color: "#16476a" }} />
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
                <LocationOn style={{ color: "#16476a" }} />
                <span>Salama Park, Daffodil Street Plot 14, Lusaka.</span>
              </div>
            </div>
            <div className="individual">
              <span>Contact Us</span>
              <div className="coulms">
                <div style={{ display: "flex" }}>
                  <Phone style={{ color: "#16476a" }} />
                  <span>+260976627838</span>
                </div>
                <div style={{ display: "flex" }}>
                  <Phone style={{ color: "#16476a" }} />
                  <span>+260953016937</span>
                </div>
                <div style={{ display: "flex" }}>
                  <Language style={{ color: "#16476a" }} />
                  <span>www.flotravel.com </span>
                </div>
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
