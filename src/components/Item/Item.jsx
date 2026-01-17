import './Item.css'

export const Item = ({ title, posterUrl }) => {
    return (
        <article className="card-item">
            <div className='image-wrapper'>
                <img className="image-item" src={posterUrl} alt={title} />
            </div>            
            <p className="title-item">{title}</p>
        </article>
    );
};