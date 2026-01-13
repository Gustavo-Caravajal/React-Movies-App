import { useMediaContext } from "../../context/MediaContext/useMediaContext";
import { Slider } from "../Slider/Slider";
import './SliderContainer.css'

export const SliderContainer = ({ title}) => {
    const { mediaList } = useMediaContext();    
    return (
        <div className="slider-container">
            <div className="slider-header">
                <h3>{title}</h3>
                <a className="header-button">View all</a>
            </div>
            <div className="slider-body">
                <Slider className="slider" list={mediaList} />
            </div>
        </div>
    );
};