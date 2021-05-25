import React from "react";
import { Grid } from "@material-ui/core"
import AddCurrency from "../../components/AddCurrency/AddCurrency";
import CurrencyCards from "../../components/CurrencyCard/CurrencyCards";
import { RootStoreContextProvider } from "../../models/RootStoreContext";

const LandingPage = () => {
    return <RootStoreContextProvider>
        <div className="landing-page" data-testid="landing-page" style={{ padding: 30 }}>
            <Grid container spacing={3}>
                <CurrencyCards />
                <Grid xs><AddCurrency /></Grid>
            </Grid>
        </div>
    </RootStoreContextProvider>
}

export default LandingPage;