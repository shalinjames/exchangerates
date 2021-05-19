import { Col, Row } from "antd";
import React, { useState } from "react";
import AddNewCurrency from "../../components/Currency/AddNewCurrency";
import CurrencyCard from "../../components/CurrencyCard/CurrencyCard";

const LandingPage = () => {

    const getUniqueId = () => Date.now();

    const [cards, setCards] = useState([{ id: getUniqueId(), from: "EUR", to: "INR" }]);

    const handleAdd = ({ from, to }: Record<string, string>) => {
        setCards([...cards, { id: getUniqueId(), from, to }]);
    }

    return <div className="landing-page" data-testid="landing-page" style={{ padding: 30 }}>
        <Row gutter={[32, 16]}>
            {cards.map(card => {
                return <CurrencyCard key={card.id} from={card.from} to={card.to} ></CurrencyCard>
            })}
            <Col span={5}>
                <AddNewCurrency handleAdd={handleAdd}></AddNewCurrency>
            </Col>

        </Row>
    </div>
}

export default LandingPage;