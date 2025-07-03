"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Navbar() {
  const pathname = usePathname()

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm fixed-top">
      <div className="container">
        <Link className="navbar-brand" href="/">
          STRUMFI TECH SRL
        </Link>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className={`nav-link ${pathname === "/" ? "active fw-bold" : ""}`} href="/">
                Acasă
              </Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${pathname === "/servicii" ? "active fw-bold" : ""}`} href="/servicii">
                Servicii
              </Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${pathname === "/contact" ? "active fw-bold" : ""}`} href="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
