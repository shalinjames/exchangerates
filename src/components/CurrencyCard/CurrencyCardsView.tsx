import { observer } from "mobx-react";
import React from "react";
import CurrencyCard from "./CurrencyCard";


const CurrencyCardsView = observer(({ viewModel }: Record<string, any>) => viewModel
    .getConversions()
    .map((card: Record<string, string>) => <CurrencyCard
        key={card.id}
        from={card.from}
        to={card.to}
        conversion={card.conversion}
    />)
)

export default CurrencyCardsView;


