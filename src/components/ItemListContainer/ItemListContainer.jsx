import { useEffect, useState } from "react";
import { searchMedia } from "../../services/media";
import { ItemList } from "../ItemList/ItemList";
import { SearchInput } from "../SearchInput/SearchInput";
import './ItemListContainer.css'

export const ItemListContainer = ({ fetchFunction, mediaType, title }) => {
    const [inputValue, setInputValue] = useState("");
    const [media, setMedia] = useState([]);
    const [query, setQuery] = useState("");
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);

    useEffect(() => {
        const fetchMedia = async () => {
            setLoading(true);
            let data;
            if (query.trim()) {
                data = await searchMedia(mediaType, query, page)
            }
            else {
                data = await fetchFunction(page);
            }

            setMedia((prev) => page === 1 ? data.results : [...prev, ...data.results]);
            setLoading(false)
        }
        fetchMedia();
    }, [fetchFunction, page, query, mediaType]);

    return (<section className="media-section">
        <h2>{title}</h2>
        <div className="media-search">
            <div className="search-container">
                <SearchInput
                    inputValue={inputValue}
                    setInputValue={setInputValue}
                    setQuery={setQuery}
                    resetPage={() => setPage(1)}
                />
            </div>
            <div className="items-container">
                <ItemList list={media} mediaType={mediaType} />
            </div>
            <div className="load-button-container">
                <button
                    className="load-more"
                    disabled={loading}
                    onClick={() => { setPage((page) => page + 1) }}
                >
                    {loading ? "Loading" : "Load more"}
                </button>
            </div>
        </div>
    </section>);
};