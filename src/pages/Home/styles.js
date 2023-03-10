import styled from "styled-components";


export const Container = styled.View`
    flex: 1;
    align-items: center;
    background: #121222;
`;

export const CardList = styled.FlatList`
    margin-top: 20px;
    margin-bottom: 20px;
    max-height: 206px;
`;

export const Area = styled.View`
    background-color: #353566;
    flex-direction: row;
    justify-content: space-between;
    padding-left: 14px;
    padding-right: 14px;
    align-items: center;
    width: 100%;
    height: 50px;
`;

export const Title = styled.Text`
    margin-left: 5px;
    color: #fff;
    font-weight: bold;
    font-size: 18px;
`;

export const TouchableOpacity = styled.TouchableOpacity``;


export const List = styled.FlatList`
    flex: 1;
    width: 100%;
`;
