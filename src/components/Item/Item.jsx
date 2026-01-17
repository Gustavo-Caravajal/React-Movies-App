import { Link } from 'react-router-dom';
import './Item.css'

export const Item = ({ id, mediaType, title, posterUrl }) => {
    return (
        <article className="card-item">
            <div className='image-wrapper'>
                <Link to={`/${mediaType}/${id}`}>
                    <img className="image-item" src={posterUrl} alt={title} />
                </Link>
            </div>
            <p className="title-item">{title}</p>
        </article>
    );
};