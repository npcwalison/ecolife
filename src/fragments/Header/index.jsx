import React from "react";
import { Container, Title, ButtonMenu } from "./styles";

import Icon from "react-native-vector-icons/Feather";



export default function Header({title}){

    return(
        <Container>
            <ButtonMenu>
                <Icon name="menu" size={35} color="#fff"/>
            </ButtonMenu>

            {title && (
                <Title>{title}</Title>
            )}
        </Container>
    )
}