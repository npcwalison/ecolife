import React from "react";
import { 
    Container,
    Bank,
    Chip,
    CardDataContainer,
    CardData,
    NameCard,
} from "./styles";



export default function Card({ data }) {

    return (
        <Container bgcolor={data.bgColor}>
            <Bank>ECOLIFE</Bank>
            <Chip
                source={require('../../assets/chip.png')}
            />
            <CardDataContainer>
                <CardData>Valor Atual:</CardData>
                <CardData>R$ 12,22</CardData>
            </CardDataContainer>
            <NameCard>{data.name}</NameCard>
        </Container>
    )
}