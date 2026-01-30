// Author: Sebastian escobar

import ProfileHeader from "../components/ProfileHeader"
import { mainLinks } from "../data/links"
import LinkButton from "../components/LinkButton"
import Tramites from "../components/Tramites"
import Socials from "../components/Socials"

export default function Home() {
  return (
    <div className="container min-vh-100 d-flex justify-content-center align-items-center px-3">
      <div className="link-card w-100" style={{ maxWidth: "420px" }}>
        <ProfileHeader />

        {mainLinks.map((l, i) => (
          <LinkButton key={i} {...l} />
        ))}

        <Tramites />
        <Socials />

        <p className="text-center small mt-4" style={{ opacity: 0.7 }}>
          © 2026 · Visas Bolivia Norte
        </p>
      </div>
    </div>
  )
}
