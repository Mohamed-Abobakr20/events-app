import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark fixed-top">
      <div className="container">
        <Link className="navbar-brand fs-3 fw-semibold" href="/">
          Events App
        </Link>
        <button
          className="navbar-toggler d-lg-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapsibleNavId"
          aria-controls="collapsibleNavId"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="collapsibleNavId">
          <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
            <li className="nav-item">
              <Link
                className="nav-link fs-6 fw-semibold"
                href="/events"
                aria-current="page">
                Browse All Events
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
