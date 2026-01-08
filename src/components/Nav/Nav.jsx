import "./Nav.css"

export const Nav = () => {
    return (
        <nav>
            <ul className="nav-items">
                <li className="item"><a className="link" href="/">Home</a></li>
                <li className="item"><a className="link" href="/">Movies</a></li>
                <li className="item"><a className="link" href="/">Tv Series</a></li>
            </ul>
        </nav>
    );
};