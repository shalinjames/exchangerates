import React, { useContext } from "react";
import { RootStoreContext } from "../../models/RootStoreContext";
import RootStore from "../../models/RootStore";
import CurrencyCardsViewModel from "./CurrencyCardsViewModel";
import CurrencyCardsView from "./CurrencyCardsView";

const CurrencyCards = () => {
    const rootStore = useContext(RootStoreContext);
    const conversionModel = new CurrencyCardsViewModel(rootStore[RootStore.type.CURRENCY_CONVERSIONS])
    return <CurrencyCardsView viewModel={conversionModel} />
};

export default CurrencyCards;