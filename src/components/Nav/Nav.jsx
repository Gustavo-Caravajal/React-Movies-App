import { Link } from "react-router-dom";
import "./Nav.css"
import { useState } from "react";

export const Nav = () => {
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    }

    return <>
        <nav className="nav-desktop">
            <ul className="nav-items">
                <li className="item">
                    <Link className="link" to={"/"}>
                        Home
                    </Link>
                </li>
                <li className="item">
                    <Link className="link" to={"/movie"}>
                        Movies
                    </Link>
                </li>
                <li className="item">
                    <Link className="link" to={"/tv"}>
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
                        <img className="logo-mobile" src="../../public/logo.png" alt="logo de la aplicacion de peliculas" />
                    </Link>
                    <button className="hamburger-button" onClick={() => toggleMenu()}>☰</button>
                    <h4 className="menu-title">Menu</h4>
                    <ul className="nav-items">
                        <li className="item" onClick={() => toggleMenu()}>
                            <img className="item-logo" src="../../../public/home.png" alt="home" />
                            <Link className="link" to={"/"}>
                                Home
                            </Link>
                        </li>
                        <li className="item" onClick={() => toggleMenu()} >
                            <img className="item-logo" src="../../../public/movies.png" alt="movie" />
                            <Link className="link" to={"/movie"}>
                                Movies
                            </Link>
                        </li>
                        <li className="item" onClick={() => toggleMenu()} >
                            <img className="item-logo" src="../../../public/series.png" alt="serie" />
                            <Link className="link" to={"/tv"}>
                                Tv Series
                            </Link>
                        </li>
                    </ul>
                </nav>
        }
    </>
};