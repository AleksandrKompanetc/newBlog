import { Link, NavLink, Outlet } from "react-router-dom";

const Header = () => {
    return (
        <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary nav-color header">
            <div className="container-fluid">
                <Link to='/' className="navbarBrand">SHARETRADE.com</Link>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="navbarItem">
                            <NavLink end to='/' className="nav-link navbarLink">Articles</NavLink>
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