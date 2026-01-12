import Modal from "react-bootstrap/Modal";
import { useState } from "react"
import { ModalBody, Ratio } from "react-bootstrap";

export const HeroItem = ({ title, overview, poster_path, trailerUrl }) => {
    const [showTrailer, setShowTrailer] = useState(false);

    return (
        <>
            <div>
                <h2>{title}</h2>
                <p>{overview}</p>
                <div>
                    <button onClick={() => { setShowTrailer(true) }}>
                        Watch trailer
                    </button>
                    <button>Watch now</button>
                </div>
            </div>
            <div>
                <img src={`https://image.tmdb.org/t/p/original${poster_path}`} alt={overview} />
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