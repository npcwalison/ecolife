import {
    Container,
    CardList,
    Area,
    Title,
    TouchableOpacity,
    List
} from './styles';
import { format } from 'date-fns';
import { Modal } from 'react-native';

import Header from '../../fragments/Header';
import Card from '../../fragments/Card';
import StoryList from '../../fragments/StoryList';
import CalendarModal from '../../fragments/CalendarModal';

import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/auth';

import api from '../../services/api';
import { useIsFocused } from '@react-navigation/native';

import Icon from "react-native-vector-icons/Feather";


export default function Home() {
    const isFocused = useIsFocused()
    const [listBalance, setListBalance] = useState([])

    const [moviments, setMoviments] = useState([])

    const [ modalVisible, setModalVisible] = useState(false)

    const [dateMovements, setDateMovements] = useState(new Date())

    
    async function handleDelete(id){
        //console.log('deletado com sucesso' + id)
        try{
            await api.delete('/receives/delete', {
                params: {
                    item_id: id
                }
            })

            setDateMovements(new Date())
        }catch(err){
            console.log(`erro delete: ${err}`)
        }
    }
    //carregando dados
    useEffect(()=>{
        let isActive = true;

        async function getMovements(){
            let dateFormated = format(dateMovements, 'dd/MM/yyyy')


            const receives = await api.get('/receives', {
                params: {
                    date: dateFormated
                }
            })


            const balance = await api.get('/balance', {
                params: {
                    date: dateFormated
                }
            })

            if(isActive){
                setMoviments(receives.data)
                setListBalance(balance.data)
            }
        }

        //console.log(listBalance)

        getMovements();

        return () => isActive = false;

    }, [isFocused, dateMovements])

    function filterDateMoviments(dateSelected){
        //console.log(dateSelected)
        setDateMovements(dateSelected)
    }


    return (
        <Container>

            <Header title="Minhas Movimentações" />

            <CardList
                data={listBalance}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                ReyExtractor={ item => item.tag }
                renderItem={ ({item}) => ( <Card data={item}/> )}
            />

            <Area>
                <Title>Ultimas movimantações</Title>
                <TouchableOpacity onPress={ () => setModalVisible(true)}>
                    <Icon name="calendar" color="#fff" size={30}/>
                </TouchableOpacity>
            </Area>

            <List
                data={moviments}
                keyExtractor={ item => item.id }
                renderItem={({item})=> <StoryList data={item} handleDelete={handleDelete}/>}
                showsVerticalScrollIndicator={false}
            />

            <Modal
                visible={modalVisible}
                animationType="fade"
                transparent={true}
            >
                <CalendarModal
                    setVisible={ ()=> setModalVisible(false)}
                    handleFilter={filterDateMoviments}
                />
            </Modal>

        </Container>
    )
}