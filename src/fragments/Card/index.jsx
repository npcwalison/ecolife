import React, { useMemo } from "react";
import { 
    Container,
    Bank,
    Chip,
    CardDataContainer,
    CardData,
    NameCard,
} from "./styles";



export default function Card({ data }) {

    const labelName = useMemo(() => {
        if(data.tag === 'saldo') {
            return {
                label: 'Saldo Atual',
                color: '#3b3dbf'
            }
        } else if(data.tag === 'receita') {
            return {
                label: 'Entradas de hoje',
                color: '#00b94a'
            }
        } else if(data.tag === 'despesa') {
            return {
                label: 'Saidas de hoje',
                color: '#ef463a'
            }
        }
    }, [data])

    return (
        <Container bgcolor={labelName.color}>
            <Bank>ECOLIFE</Bank>
            <Chip
                source={require('../../assets/chip.png')}
            />
            <CardDataContainer>
                <CardData>{labelName.label}</CardData>
                <CardData>R$ {data.saldo}</CardData>
            </CardDataContainer>
            <NameCard>GUILHERME</NameCard>
        </Container>
    )
}