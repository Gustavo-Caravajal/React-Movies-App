import "./SliderItem.css"

export const SliderItem = ({ title, imageUrl }) => {
    return (
        <>
            <img className="item-image" src={`https://image.tmdb.org/t/p/original${imageUrl}`} alt={title} />
            <p>{title}</p>
        </>
    );
};