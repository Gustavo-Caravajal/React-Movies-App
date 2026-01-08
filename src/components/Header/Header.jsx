import { Nav } from "../Nav/Nav";
import "./Header.css"
export const Header = () => {
    return (
        <header>
            <img className="logo" src="../../public/logo.png" alt="logo de la aplicacion de peliculas" />
            <Nav/>
        </header>
    );
};