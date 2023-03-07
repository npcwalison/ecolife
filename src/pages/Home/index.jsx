import {
    Container,
    CardList
} from './styles';
import { format } from 'date-fns';

import Header from '../../fragments/Header';
import Card from '../../fragments/Card';

import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/auth';

import api from '../../services/api';
import { useIsFocused } from '@react-navigation/native';


export default function Home() {
    const isFocused = useIsFocused()
    const [listBalance, setListBalance] = useState([])
    const [dateMovements, setDateMovements] = useState(new Date())

    useEffect(()=>{
        let isActive = true;

        async function getMovements(){
            let dateFormated = format(dateMovements, 'dd/MM/yyyy')


            const balance = await api.get('/balance', {
                params: {
                    date: dateFormated
                }
            })

            if(isActive){
                setListBalance(balance.data)
            }
        }

        console.log(listBalance)

        getMovements();

        return () => isActive = false;

    }, [isFocused])

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
        </Container>
    )
}