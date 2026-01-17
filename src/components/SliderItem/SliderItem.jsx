import { Link } from "react-router-dom";
import "./SliderItem.css"

export const SliderItem = ({ id, mediaType, title, imageUrl }) => {

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    return (
        <>
            <Link to={`/${mediaType}/${id}`}>
                <img onClick={scrollToTop} className="item-image" src={`https://image.tmdb.org/t/p/original${imageUrl}`} alt={title} />
            </Link>
            <p>{title}</p>
        </>
    );
};