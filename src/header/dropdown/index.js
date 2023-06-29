import "../../style/header/dropdown.scss"

export default function Dropdown() {
  return (
    <div className="dropdown">
      <a
        href="#home"
        style={{
          textDecoration: "none",
          color: "#16476a",
          cursor: "pointer",
        }}
      >
        <span>Home</span>
      </a>
      <a
        href="#features"
        style={{
          textDecoration: "none",
          color: "#16476a",
          cursor: "pointer",
        }}
      >
        <span>Features</span>
      </a>
      <a
        href="#benefits"
        style={{
          textDecoration: "none",
          color: "#16476a",
          cursor: "pointer",
        }}
      >
        <span>Benefits and Offers</span>
      </a>
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
  )
}
