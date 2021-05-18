import { Col, Row } from "antd";
import React, { useState } from "react";
import AddNewCurrency from "../../components/Currency/AddNewCurrency";
import CurrencyCard from "../../components/CurrencyCard/CurrencyCard";

const LandingPage = () => {

    const getUniqueId = () => Math.floor(Math.random() * 100).toString();

    const [cards, setCards] = useState([{ title: "EUR->INR", id: getUniqueId() }]);

    const handleAdd = () => {
        setCards([...cards, { title: "", id: getUniqueId() }]);
    }

    return <div className="landing-page" style={{ padding: 30 }}>
        <Row gutter={[32, 16]}>
            {cards.map(card => {
                return <Col span={5} key={card.id}>
                    <CurrencyCard title={card.title}>EUR to INR</CurrencyCard>
                </Col>
            })}
            <Col span={5}>
                <AddNewCurrency handleAdd={handleAdd}></AddNewCurrency>
            </Col>

        </Row>
    </div>
}

export default LandingPage;