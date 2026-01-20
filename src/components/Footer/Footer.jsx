import "./Footer.css"

export const Footer = () => {
    return (
        <footer>
            <img className="logo" src="/logo.png" alt="logo de la aplicacion de peliculas" />
            <ul className="grid-list">
                <li><a className="footer-link" >Home</a></li>
                <li><a className="footer-link" >Contact Us</a></li>
                <li><a className="footer-link" >Term Of Services</a></li>
                <li><a className="footer-link" >About Us</a></li>
                <li><a className="footer-link" >Live</a></li>
                <li><a className="footer-link" >FAQ</a></li>
                <li><a className="footer-link" >Premium</a></li>
                <li><a className="footer-link" >Privacy Policy</a></li>
                <li><a className="footer-link" >You Most Watch</a></li>
                <li><a className="footer-link" >Recent Release</a></li>
                <li><a className="footer-link" >Top IMDB</a></li>
            </ul>
        </footer>
    );
};