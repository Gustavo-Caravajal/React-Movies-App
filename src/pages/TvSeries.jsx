import { ItemListContainer } from "../components/ItemListContainer/ItemListContainer";
import { getSeries } from "../services/media";

export const TvSeries = () => {
    return <ItemListContainer fetchFunction={getSeries} mediaType={"tv"} title={"TV Series"}/>
};