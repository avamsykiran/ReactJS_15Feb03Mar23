
import { Link } from 'react-router-dom';

const Header = ({ appTitle }) => (
    <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
        <div className="container-fluid">
            <Link to="/" className="navbar-brand">{appTitle}</Link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <Link class="nav-link" to="/">Outlets</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" to="/add">New Outlet</Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
);

export default Header;