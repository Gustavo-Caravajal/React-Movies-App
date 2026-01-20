import { Link } from "react-router-dom";
import "./Nav.css"


export const Nav = ({ showMenu, toggleMenu, scrollToTop }) => {

    return <>
        <nav className="nav-desktop">
            <ul className="nav-items">
                <li className="item">
                    <Link onClick={scrollToTop} className="link" to={"/"}>
                        Home
                    </Link>
                </li>
                <li className="item">
                    <Link onClick={scrollToTop} className="link" to={"/movie"}>
                        Movies
                    </Link>
                </li>
                <li className="item">
                    <Link onClick={scrollToTop} className="link" to={"/tv"}>
                        Tv Series
                    </Link>
                </li>
            </ul>
        </nav>

        {
            !showMenu ?
                <div className="hamburger-button-container">
                    <button className="hamburger-button" onClick={() => toggleMenu()}>☰</button>
                </div>
                :
                <nav className="nav-mobile">
                    <Link to={"/"}>
                        <img className="logo-mobile" src="/logo.png" alt="logo de la aplicacion de peliculas" />
                    </Link>
                    <button className="hamburger-button-open" onClick={() => toggleMenu()}>☰</button>
                    <h4 className="menu-title">Menu</h4>
                    <ul className="nav-items">
                        <li className="item" onClick={() => toggleMenu()}>
                            <Link className="link" to={"/"}>
                                Home
                            </Link>
                            <Link className="link" to={"/"}>
                                <img className="item-logo" src="/home.png" alt="home" />
                            </Link>
                        </li>
                        <li className="item" onClick={() => toggleMenu()} >
                            <Link className="link" to={"/movie"}>
                                Movies
                            </Link>
                            <Link className="link" to={"/movie"}>
                                <img className="item-logo" src="/movies.png" alt="movie" />
                            </Link>
                        </li>
                        <li className="item" onClick={() => toggleMenu()} >
                            <Link className="link" to={"/tv"}>
                                Tv Series
                            </Link>
                            <Link className="link" to={"/tv"}>
                                <img className="item-logo" src="/series.png" alt="serie" />
                            </Link>
                        </li>
                    </ul>
                </nav>
        }
    </>
};