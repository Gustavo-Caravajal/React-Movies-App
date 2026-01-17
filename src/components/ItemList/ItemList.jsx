import { Item } from "../Item/Item";

export const ItemList = ({ list, mediaType }) => {

    return <>{
        list.length ?
            list.map((item) => (
                <Item
                    key={item.id}
                    id={item.id}
                    mediaType={mediaType}
                    title={item.title || item.name}
                    posterUrl={`https://image.tmdb.org/t/p/original${item.poster_path}`}
                />
            ))
            :
            <p>loading...</p>
    }</>;
};