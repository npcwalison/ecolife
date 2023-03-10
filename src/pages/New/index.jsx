import { useState, useContext } from 'react';
import { Platform } from 'react-native';
import { SafeAreaView, TouchableWithoutFeedback, Keyboard } from 'react-native';
import {
    Background,
    Container,
    Input,
    Button,
    ButtonText
} from './styles';

import { AuthContext } from '../../contexts/auth';
import Header from '../../fragments/Header';
import RegisterTypes from '../../fragments/RegisterTypes';


export default function New() {
    const { register } = useContext(AuthContext)

    const [labelInput, setLabelInput] = useState('')
    const [valueInput, setValueInput] = useState('')
    const [type, setType] = useState('receita')

    function sendData(){
        register(labelInput, valueInput)
    }

    return (
        <TouchableWithoutFeedback onPress={()=> Keyboard.dismiss()}>
            <Background>
                <Header title="Registrando" />
                <SafeAreaView style={{ marginTop: 14, alignItems: 'center' }}>
                    <Input
                        placeholder="Descrição do registro"
                        value={labelInput}
                        onChangeText={(text)=> setLabelInput(text)}
                    />
                    <Input
                        placeholder="Valor desejado"
                        value={valueInput}
                        onChangeText={(text)=> setValueInput(text)}
                    />
                    <RegisterTypes type={type} sendTypeChanged={ (item) => setType(item)}/>
                    <Button onPress={()=> sendData()}>
                        <ButtonText>Registrar</ButtonText>
                    </Button>
                </SafeAreaView>
            </Background>
        </TouchableWithoutFeedback>
    )
}