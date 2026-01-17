import { ItemListContainer } from "../../src/components/ItemListContainer/ItemListContainer";
import { getMovies } from "../../src/services/media";

export const Movies = () => {
    return <ItemListContainer fetchFunction={getMovies} mediaType={"movie"} title={"Movies"}/>
};