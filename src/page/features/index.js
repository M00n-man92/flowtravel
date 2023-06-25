import "../../style/page/features/features.scss"

export default function Features() {
  return (
    <div className="features" id="features">
      <div className="featuresspacing">
        <div className="feature">
          <span className="featurestitle" style={{ marginBottom: "20px" }}>
            Features
          </span>

          <div className="lists">
            <div className="listcontainer">
              <img
                className="icons"
                src="/assets/Premium Vector _ Green checkmark badge or icon, concept element_  glass button. green color. modern check mark icon or sign for use in web, ui, apps and games_"
                alt=""
              />
              <span className="listdescription">
                Accepted by most Airlines, Tours and Hotel operators.
              </span>
            </div>
            <div className="listcontainer">
              <img
                className="icons"
                src="/assets/Desktop Pc Vector Hd Images, Desktop Cpu Personal Computer Repair Pc Icon, Computer Repair, Repair, Cpu PNG Image For Free Download.png"
                alt=""
              />
              <span className="listdescription">
                Webportal service yo help you manage your account and generate
                reports.
              </span>
            </div>
            <div className="listcontainer">
              <img
                className="icons"
                src="/assets/Computer Icon.png"
                alt=""
                style={{ borderRadius: "53px", marginRight: "10px" }}
              />
              <span className="listdescription">
                Travel booking tools from FloCash enabled airline of GDS.
              </span>
            </div>
            <div className="listcontainer">
              <img
                className="icons"
                src="/assets/currencyblack.png"
                style={{ borderRadius: "50px", marginRight: "10px" }}
                alt=""
              />
              <span className="listdescription">
                Wide range of loading methods using your local currency.
              </span>
            </div>
            <div className="listcontainer">
              <img
                className="icons"
                src="/assets/Passport textured.png"
                alt=""
              />
              <span className="listdescription">
                Instant ticket issuance. Create convenience for our customers.
              </span>
            </div>
            <div className="listcontainer">
              <img
                className="icons"
                src="/assets/Coronavirus fear stalls 14th IATA World Air Cargo Symposium.jpg"
                alt=""
                style={{ objectFit: "cover" }}
              />
              <span className="listdescription">
                Available for both BSP and Non-BSP agents.
              </span>
            </div>
          </div>
        </div>
        <div className="feature">
          <span className="featurestitle">Benefits and Offers</span>
          <div className="benefitlists">
            <div className="benefitcontainer">
              <img src="/assets/download.png" alt="" />
              <span className="featurestitle">Earn Cashback</span>
              <span className="featuresdescription">
                Earn cash back every time you pay using FlowCash virtual card.
              </span>
            </div>
            <div className="benefitcontainer">
              <img
                src="/assets/currencyblack.png"
                alt=""
                style={{ borderRadius: "50%" }}
              />
              <span className="featurestitle">Save FX Costs</span>
              <span className="featuresdescription">
                Most compitative rates direct from Africa's largest banks to
                save on your FX costs.
              </span>
            </div>
            <div className="benefitcontainer">
              <img
                src="/assets/2x.jpg"
                alt=""
                style={{ borderRadius: "50%" }}
              />
              <span className="featurestitle">Double Commission</span>
              <span className="featuresdescription">
                Get double commission and discounts for selected travel
                products.
              </span>
            </div>
            <div className="benefitcontainer">
              <img src="/assets/Stocks revenue color icon.jpg" alt="" />
              <span className="featurestitle">Improved Cash Flow</span>
              <span className="featuresdescription">
                No need to keep large desposits with airlines and larger travel
                agents.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
