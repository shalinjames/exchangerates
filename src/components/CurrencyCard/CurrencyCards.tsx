import React, { useContext } from "react";
import { RootStoreContext } from "../../models/RootStoreContext";
import CurrencyCardsViewModel from "./CurrencyCardsViewModel";
import CurrencyCardsView from "./CurrencyCardsView";

const CurrencyCards = () => {
    const rootStore = useContext(RootStoreContext);
    const conversionModel = new CurrencyCardsViewModel(rootStore)
    return <CurrencyCardsView viewModel={conversionModel} />
};

export default CurrencyCards;