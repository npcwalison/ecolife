import { useState } from 'react';
import {
    ModalContainer,
    Button,
    BtnText,
    ModalContent,
    ButtonFilter,
    ButtonFulterText
} from './styles';

import { Calendar, LocaleConfig } from 'react-native-calendars';



export default function CalendarModal({setVisible}){
    const [dateNow, setDateNow] = useState(new Date())
    const [markeddates, setMarkedDates] = useState({})


    function handleOnDayPress(date){
        console.log(setMarkedDates)

        setDateNow(new Date(date.dateString))


        let markedDay = {};

        markedDay[date.dateString] = {
            selected: true,
            selectedColor: '#3b3dbf',
            textColor: '#fff'
        }


        setMarkedDates(markedDay)
    }


    return(
        <ModalContainer>

            <Button onPress={()=> setVisible()}>
                <BtnText></BtnText>
            </Button>

            <ModalContent>

                <Calendar
                    onDayPress={handleOnDayPress}
                    markedDate={markeddates}
                    enableSwipeMonths={true}
                    theme={{
                        todayTextColor: '#ff0000',
                        selectedDayBackgroundColor: '#00adf5',
                        selectedDayTextColor: '#fff',
                    }}
                />

                <ButtonFilter>
                    <ButtonFulterText>Filtrar</ButtonFulterText>
                </ButtonFilter>
            </ModalContent>
        </ModalContainer>
    )
}