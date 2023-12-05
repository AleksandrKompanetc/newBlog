import { Link, NavLink, Outlet } from "react-router-dom";

const Header = () => {
    return (
        <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary nav-color header">
            <div className="container-fluid">
                <Link to='/' className="navbar-brand">SHARETRADE.com</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink end to='/' className="nav-link">Articles</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/info' className="nav-link">PostPage</NavLink>
                        </li>
                        <li className="nav-item">
                            {/* <a className="nav-link" href="#">Pricing</a> */}
                        </li>
                        <li className="nav-item">
                            {/* <a className="nav-link disabled" aria-disabled="true">Disabled</a> */}
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        <Outlet />
        </>
    )
}

export default Header;