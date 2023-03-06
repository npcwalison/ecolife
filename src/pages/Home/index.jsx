import {
    Container,
    CardList
} from './styles';

import Header from '../../fragments/Header';
import Card from '../../fragments/Card';


export default function Home() {
    const listUser = [
        {
            'id': 1,
            'name': "GUILHERME",
            'valor': 1232,
            'bgColor': "#f15104"
        },
        {
            'id': 2,
            'name': "GUILHERME",
            'valor': 1232,
            'bgColor': "#0d9fb3"
        },
        {
            'id': 3,
            'name': "GUILHERME",
            'valor': 1232,
            'bgColor': "#a425df"
        },
    ]

    return (
        <Container>
            <Header title="Minhas Movimentações" />
            <CardList
                data={listUser}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                ReyExtractor={ item => item.tag }
                renderItem={ ({item}) => ( <Card data={item}/> )}
            />
        </Container>
    )
}