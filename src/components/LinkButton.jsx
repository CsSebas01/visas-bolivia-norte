// Author: Sebastian escobar

export default function LinkButton({ title, url, icon }) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="linktree-btn d-flex align-items-center justify-content-center gap-2 mb-3"
    >
      <span>{icon}</span>
      <span>{title}</span>
    </a>
  )
}
