import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
      <div class="container-fluid">

        <Link class="navbar-brand" to="/">
          TECH-STORE
        </Link>

        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">

          <ul class="navbar-nav">

            <li class="nav-item">
              <Link class="nav-link active" aria-current="page" to="/">
                Inicio
              </Link>
            </li>

            <li class="nav-item">
              <Link class="nav-link active" to="/product-list">
                Lista de Productos
              </Link>
            </li>

            <li class="nav-item">
              <Link class="nav-link disabled" href="/pricing">
                Pricing
              </Link>
            </li>

            <li class="nav-item">
              <Link class="nav-link disabled">Disabled</Link>
            </li>

          </ul>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
