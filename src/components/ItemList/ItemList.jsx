import { Item } from "../Item/Item";

export const ItemList = ({ list }) => {

    return <>{
        list.length ?
            list.map((item) => (
                <Item
                    key={item.id}
                    title={item.title || item.name}
                    posterUrl={`https://image.tmdb.org/t/p/original${item.poster_path}`}
                />
            ))
            :
            <p>loading...</p>
    }</>;
};