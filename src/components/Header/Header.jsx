import { Link } from "react-router-dom";
import { Nav } from "../Nav/Nav";
import "./Header.css"
import { useState } from "react";
export const Header = () => {
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
        scrollToTop();
    }

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    return (
        <header className={showMenu ? "menu-open" : ""}>
            <Link to={"/"}>
                <img className="logo" src="/logo.png" alt="logo de la aplicacion de peliculas" />
            </Link>
            <Nav showMenu={showMenu} toggleMenu={toggleMenu} scrollToTop={scrollToTop}/>
        </header>
    );
};