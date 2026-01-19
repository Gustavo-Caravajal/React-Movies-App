import { Link } from "react-router-dom";
import { Nav } from "../Nav/Nav";
import "./Header.css"
export const Header = () => {
    return (
        <header>
            <Link to={"/"}>
                <img className="logo" src="/logo.png" alt="logo de la aplicacion de peliculas" />
            </Link>
            <Nav />
        </header>
    );
};