export const Item = ({title, posterUrl}) => {
    return (
        <article className="card-item">
            <img className="image-item" src={posterUrl} alt={title} />
            <p className="title-item">{title}</p>
        </article>
    );
};