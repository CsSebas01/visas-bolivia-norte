// Author: Sebastian escobar
import logo from "../assets/logo.png"

export default function ProfileHeader() {
  return (
    <div className="text-center mb-4">
      <img
        src={logo}
        alt="Visas Bolivia Norte"
        style={{
          width: "96px",
          height: "96px",
          objectFit: "contain",
          marginBottom: "16px",
          animation: "float 4s ease-in-out infinite"
        }}
      />

      <h4
        className="fw-bold mb-1"
        style={{ color: "#ffffff", letterSpacing: "0.5px" }}
      >
        VISAS BOLIVIA NORTE
      </h4>

      <p className="small" style={{ color: "rgba(255,255,255,0.85)" }}>
        Viaja ya · Trámites · Asesoría
      </p>
    </div>
  )
}
