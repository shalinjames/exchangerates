import React from 'react';
import { Grid, Card, CardContent } from "@material-ui/core"
import CurrencyConverter from "../CurrencyConverter/CurrencyConverter"

interface CurrencyCardProps {
    from: string,
    to: string,
    conversion: string
}

const CurrencyCard = (props: CurrencyCardProps) => {
    return <Grid item xs>
        <Card data-testid="currency-card" style={{ width: 300 }}>
            <CardContent>
                <CurrencyConverter {...props} />
            </CardContent>
        </Card>
    </Grid>
}


export default CurrencyCard;