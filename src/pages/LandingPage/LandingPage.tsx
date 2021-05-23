import React from "react";
import { Col, Row } from "antd";
import AddCurrency from "../../components/AddCurrency/AddCurrency";
import CurrencyCards from "../../components/CurrencyCard/CurrencyCards";

const LandingPage = () => {
    return <div className="landing-page" data-testid="landing-page" style={{ padding: 30 }}>
        <Row gutter={[32, 16]}>
            <CurrencyCards />
            <Col span={5}><AddCurrency /></Col>
        </Row>
    </div>
}

export default LandingPage;