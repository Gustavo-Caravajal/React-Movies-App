import { Link } from "react-router-dom";
import { useMediaContext } from "../../context/MediaContext/useMediaContext";
import { Slider } from "../Slider/Slider";
import './SliderContainer.css'

export const SliderContainer = ({ title, mediaType }) => {
    const { mediaList } = useMediaContext();

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth" // opcional
        });
    };
    return (
        <div className="slider-container">
            <div className="slider-header">
                <h3>{title}</h3>
                <Link className="link-button" to={`/${mediaType}`}>
                    <a onClick={scrollToTop} className="header-button">View all</a>
                </Link>
            </div>
            <div className="slider-body">
                <Slider className="slider" list={mediaList} mediaType={mediaType} />
            </div>
        </div>
    );
};