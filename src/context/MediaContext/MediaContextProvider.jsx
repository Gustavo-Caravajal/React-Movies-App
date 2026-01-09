import { MediaContext } from "./MediaContext";

export const MediaContextProvider = ({children}) => {
    



    return (
        <MediaContext.Provider>
            {children}
        </MediaContext.Provider>
    );
};