import styled from "styled-components";


export const Container = styled.View`
    flex: 1;
    align-items: center;
    background: #121222;
`;

//CARD
export const Card = styled.View`
    width: 323.52px;
    height: 204.01px;
    border-radius: 8px;
    margin-top: 20px;
    padding: 10px 30px;
    background-color: #f15104;
`;
export const Bank = styled.Text`
    color: #fff;
    font-weight: 800;
`;
export const Chip = styled.Image`
    width: 56.69px;
    height: 45.35px;
    border-radius: 8px;
    margin-top: 35px;
`;

export const CardDataContainer = styled.View`
    color: #fff;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 10px;
`;

export const CardData = styled.Text`
    color: #fff;
    font-size: 18px;
`;
export const NameCard = styled.Text`
    color: #fff;
    font-size: 18px;
    text-transform: uppercase;
    margin-top: 10px;
`;
