import { ItemListContainer } from "../../src/components/ItemListContainer/ItemListContainer";
import { getSeries } from "../../src/services/media";

export const TvSeries = () => {
    return <ItemListContainer fetchFunction={getSeries} mediaType={"tv"} title={"TV Series"}/>
};