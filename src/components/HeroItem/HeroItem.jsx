import './HeroItem.css'
import Modal from "react-bootstrap/Modal";
import { useState } from "react"
import { ModalBody, Ratio } from "react-bootstrap";
import { Link } from 'react-router-dom';


export const HeroItem = ({ id, type="movie", title, overview, poster_path, trailerUrl }) => {
    const [showTrailer, setShowTrailer] = useState(false);
    return (
        <>
            <div className="hero-data-container">
                <h2>{title}</h2>
                <p className='overview'>{overview}</p>
                <div className="buttons-container">
                    <button className="button" onClick={() => { setShowTrailer(true) }}>
                        Watch trailer
                    </button>
                    <Link to={`/${type}/${id}`}>
                        <button
                            className="button"
                            style={{ backgroundColor: "red", border: "1px solid red" }}
                        >Watch now</button>
                    </Link>
                </div>
            </div>
            <div className="poster-image-container">
                <img className="poster-img" src={`https://image.tmdb.org/t/p/original${poster_path}`} alt={overview} />
            </div>

            {trailerUrl && (
                <Modal
                    show={showTrailer}
                    onHide={() => { setShowTrailer(false) }}
                    centered
                    size="lg"
                >
                    <ModalBody className="p-0">
                        <Ratio aspectRatio="16x9">
                            <iframe
                                src={trailerUrl}
                            />
                        </Ratio>
                    </ModalBody>
                </Modal>
            )}
        </>
    );
};