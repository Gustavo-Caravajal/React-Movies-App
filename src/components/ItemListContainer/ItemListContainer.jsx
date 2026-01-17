import { useEffect, useState } from "react";
import { searchMedia } from "../../services/media";
import { ItemList } from "../ItemList/ItemList";
import { SearchInput } from "../SearchInput/SearchInput";

export const ItemListContainer = ({ fetchFunction, typeMedia, title }) => {
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
                data = await searchMedia(typeMedia, query, page)
            }
            else {
                data = await fetchFunction(page);
            }

            setMedia((prev) => page === 1 ? data.results : [...prev, ...data.results]);
            setLoading(false)
        }
        fetchMedia();
    }, [fetchFunction, page, query, typeMedia]);

    return (<section className="media-section">
        <div className="title-container">
            <h2>{title}</h2>
        </div>
        <div className="search-container">
            <SearchInput
                inputValue={inputValue}
                setInputValue={setInputValue}
                setQuery={setQuery}
                resetPage={() => setPage(1)}
            />
        </div>
        <div className="items-container">
            <ItemList list={media} />
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
    </section>);
};