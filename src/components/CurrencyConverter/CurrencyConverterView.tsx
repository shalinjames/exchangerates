import React from "react";
import { Typography } from "@material-ui/core";

const CurrencyConverterView = ({ conversion, displayValueFrom, displayValueTo }: Record<string, any>) => {
    return <React.Fragment>
        <Typography variant="h4"> 1 {displayValueFrom} Equals </Typography>
        <Typography variant="subtitle1"> {conversion} {displayValueTo} </Typography>
    </React.Fragment>
}

export default CurrencyConverterView;