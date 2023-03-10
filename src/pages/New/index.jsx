import { useState, useContext } from 'react';
import { Platform } from 'react-native';
import { SafeAreaView, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native';
import {
    Background,
    Input,
    Button,
    ButtonText
} from './styles';

import { useNavigation } from '@react-navigation/native';

import { AuthContext } from '../../contexts/auth';
import Header from '../../fragments/Header';
import RegisterTypes from '../../fragments/RegisterTypes';


export default function New() {
    const { register } = useContext(AuthContext)
    const navigation = useNavigation()

    const [labelInput, setLabelInput] = useState('')
    const [valueInput, setValueInput] = useState('')
    const [type, setType] = useState('receita')

    function sendData(){
        Keyboard.dismiss()
        if(isNaN(parseFloat(valueInput)) || type === null) {
            alert('Preencha todos os campos')
            return;
        }
        
        Alert.alert(
            'Confirmando dados',
            `Tipo: ${type} - Valor: ${parseFloat(valueInput)}`,
            [
                {
                    text: 'Cancelar',
                    style: 'cancel'
                },
                {
                    text: 'Continuar',
                    onPress: () => {
                        register(labelInput, valueInput, type)
                        setLabelInput('');
                        setValueInput('');
                        navigation.navigate('Home')
                    }
                }
            ]
        )
    }

    return (
        <TouchableWithoutFeedback onPress={()=> Keyboard.dismiss()}>
            <Background>
                <Header title="Registrando" />
                <SafeAreaView style={{ marginTop: 50, alignItems: 'center' }}>
                    <Input
                        placeholder="Descrição do registro"
                        value={labelInput}
                        onChangeText={(text)=> setLabelInput(text)}
                    />
                    <Input
                        placeholder="Valor desejado"
                        value={valueInput}
                        onChangeText={(text)=> setValueInput(text)}
                        keyboardType="numeric"
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