import { useContext } from "react";
import { MediaContext } from "./MediaContext";

export const useMediaContext = () => {
    return useContext(MediaContext);
};