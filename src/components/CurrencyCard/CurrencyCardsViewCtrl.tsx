import React from "react";
import CurrencyCardsView from "./CurrencyCardsView";

const CurrencyCardsViewCtrl = ({ viewModel }: Record<string, any>) => {


    const handleAdd = ({ from, to }: Record<string, string>) => {
        // setCards([...cards, { id: getUniqueId(), from, to }]);
    }
    return <CurrencyCardsView cards={viewModel.getConversions()} handleAdd={handleAdd} />
}

export default CurrencyCardsViewCtrl;