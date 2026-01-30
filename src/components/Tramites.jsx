// Author: Sebastian escobar
import { tramites } from "../data/links"

export default function Tramites() {
  return (
    <details className="mb-3">
      <summary className="linktree-btn text-center">
        📂 Trámites disponibles
      </summary>

      <ul className="mt-3 ps-3" style={{ color: "rgba(255,255,255,0.95)" }}>
        {tramites.map((t, i) => (
          <li key={i} style={{ opacity: 0.95 }}>{t}</li>
        ))}
      </ul>
    </details>
  )
}
