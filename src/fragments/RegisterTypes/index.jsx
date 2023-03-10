import React, { useState } from 'react';
import {
    RegisterContainer,
    RegisterTypeButton,
    RegisterLabel
} from './styles';
import Icon from "react-native-vector-icons/Feather";


export default function RegisterTypes({ type, sendTypeChanged }){
    const [typeChecked, setTypeChecked] = useState(type)

    function changeType(name){
        if(name === 'receita') {
            setTypeChecked('receita')
            sendTypeChanged('receita')
        } else {
            setTypeChecked('despesa')
            sendTypeChanged('despesa')
        }
    }

    return(
        <RegisterContainer>
            <RegisterTypeButton
                    checked={ typeChecked === 'receita' ? true:false}
                    onPress={()=> changeType('receita')}
            >
                <Icon name="arrow-up" size={25} color="#fff"/>
                <RegisterLabel>
                    Receita
                </RegisterLabel>
            </RegisterTypeButton>

            <RegisterTypeButton
                checked={ typeChecked === 'despesa' ? true:false}
                onPress={()=> changeType('despesa')}
            >
                <Icon name="arrow-down" size={25} color="#fff"/>
                <RegisterLabel>
                    Despesa
                </RegisterLabel>
            </RegisterTypeButton>
        </RegisterContainer>
    )
}