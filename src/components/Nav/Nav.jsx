import { Link } from "react-router-dom";
import "./Nav.css"

export const Nav = () => {
    return (
        <nav>
            <ul className="nav-items">
                <li className="item"><Link className="link" to={"/"}>Home</Link></li>
                <li className="item"><Link className="link" to={"/movie"}>Movies</Link></li>
                <li className="item"><Link className="link" to={"/tv"}>Tv Series</Link></li>
            </ul>
        </nav>
    );
};