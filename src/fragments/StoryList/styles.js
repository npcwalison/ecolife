import styled from "styled-components";

//CARD
export const Container = styled.TouchableOpacity`
    width: 100%;
    height: 50px;
    padding-left: 14px;
    padding-right: 14px;
    margin-top: 10px;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
`;

export const ViewType = styled.View`
    background-color: ${props => props.bgTypeColor};
    flex-direction: row;
    align-items: center;
    border-radius: 3px;
    padding: 4px 10px;
`;

export const NameType = styled.Text`
    color: #fff;
    font-size: 16px;
    margin-left: 4px;
`;

export const Valor  = styled.Text `
    font-size: 20px;
    color: #fff;
`;