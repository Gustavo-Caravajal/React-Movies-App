import { useMediaContext } from "../../context/MediaContext/useMediaContext";
import { Slider } from "../Slider/Slider";
import './SliderContainer.css'

export const SliderContainer = ({ title}) => {
    const { mediaList } = useMediaContext();    
    return (
        <div className="slider-container">
            <div>
                <h3>{title}</h3>
                <a>View all</a>
            </div>
            <div>
                <Slider list={mediaList} />
            </div>
        </div>
    );
};