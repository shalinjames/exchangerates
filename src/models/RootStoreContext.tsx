import { createContext } from "react";
import RootStore from "./RootStore";

const rootStore = new RootStore();

export const RootStoreContext = createContext(rootStore.getStores());

export const RootStoreContextProvider = (props: any) => {
    return <RootStoreContext.Provider value={rootStore.getStores()}>
        {props.children}
    </RootStoreContext.Provider>
}


