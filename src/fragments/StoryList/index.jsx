import React, { useMemo } from "react";
import { 
    Container,
    ViewType,
    NameType,
    Valor
} from "./styles";
import { Alert } from "react-native";

import Icon from "react-native-vector-icons/Feather";



export default function StoryList({ data, handleDelete }) {
    const colorType = useMemo(()=> {
        if(data.type === 'receita') {
            return 'green'
        } else if(data.type === 'despesa') {
            return 'red'
        }
    },[data])

    function dataRegister(id, description, date){
        Alert.alert(
            `Movimentação feita em ${date}`,
            `${description}`,
            [
                {
                    text: 'Voltar',
                    style: 'cancel'
                },
                {
                    text: 'Deletar',
                    onPress: () => {
                        Alert.alert(
                            `Deseja deletar essa movimentação?`,
                            `Ao deletar, você perdera esse dado permanentemente`,
                            [
                                {
                                    text: 'Não',
                                    style: 'cancel'
                                },
                                {
                                    text: 'Sim',
                                    onPress: () => {
                                        handleDelete(id)
                                    }
                                }
                            ]
                        )
                    }
                }
            ]
        )
    }


    return (
        <Container onPress={ () => dataRegister(data.id, data.description, data.date)}>
            <ViewType bgTypeColor={colorType}>
                <Icon name={ data.type === 'receita' ? "arrow-up" : "arrow-down"} color="#fff" size={20}/>
                <NameType>{data.type}</NameType>
            </ViewType>
            <Valor>R$ {data.value}</Valor>
        </Container>
    )
}