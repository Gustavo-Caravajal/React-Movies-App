import "./Footer.css"

export const Footer = () => {
    return (
        <footer>
            <img className="logo" src="../../public/logo.png" alt="logo de la aplicacion de peliculas" />
            <ul className="grid-list">
                <li><a className="link" href="/">Home</a></li>
                <li><a className="link" href="/">Contact Us</a></li>
                <li><a className="link" href="/">Term Of Services</a></li>
                <li><a className="link" href="/">About Us</a></li>
                <li><a className="link" href="/">Live</a></li>
                <li><a className="link" href="/">FAQ</a></li>
                <li><a className="link" href="/">Premium</a></li>
                <li><a className="link" href="/">Privacy Policy</a></li>
                <li><a className="link" href="/">You Most Watch</a></li>
                <li><a className="link" href="/">Recent Release</a></li>
                <li><a className="link" href="/">Top IMDB</a></li>
            </ul>
        </footer>
    );
};