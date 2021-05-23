import React from "react";
import { Col, Row } from "antd";
import AddCurrency from "../../components/AddCurrency/AddCurrency";
import CurrencyCards from "../../components/CurrencyCard/CurrencyCards";
import { RootStoreContextProvider } from "../../models/RootStoreContext";

const LandingPage = () => {
    return <RootStoreContextProvider>
        <div className="landing-page" data-testid="landing-page" style={{ padding: 30 }}>
            <Row gutter={[32, 16]}>
                <CurrencyCards />
                <Col span={5}><AddCurrency /></Col>
            </Row>
        </div>
    </RootStoreContextProvider>
}

export default LandingPage;