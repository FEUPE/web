export function App() {
  return (
    
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="https://feupe.github.io/web">
            FEUPE
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="https://feupe.github.io/web/conocenos">
                  Conócenos
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="https://feupe.github.io/web/convenios">
                  Convenios
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="https://feupe.github.io/web/proyectos">
                  Proyectos
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Federaciones
                </a>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <li>
                    <a className="dropdown-item" href="#">
                      FEUCE Esmeraldas
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      FEUCE Ambato
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      FEUCE Manabí
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      FEUCE Ibarra
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      FEUCE Quito
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      FEUCE Santo Domingo
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      FEDEUTE
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      FEUPS
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
  );
}
