import React from "react";
import { Typography } from 'antd';

const CurrencyConverterView = ({ conversion, displayValueFrom, displayValueTo }: Record<string, any>) => {
    const { Text, Title } = Typography;
    return <React.Fragment>
        <Text type="secondary"> 1 {displayValueFrom} Equals </Text>
        <Title level={3}> {conversion} {displayValueTo} </Title>
    </React.Fragment>
}

export default CurrencyConverterView;