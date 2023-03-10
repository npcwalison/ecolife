import styled from "styled-components";


export const Background = styled.View`
    flex: 1;
    background: #121222;
`;

export const Input = styled.TextInput.attrs({
    placeholderTextColor: "#bbb",
})`
    width: 96%;
    font-size: 14px;
    padding: 10px;
    margin-top: 10px;
    background-color: #EFEFEF;
    border-radius: 4px;
    background-color: #353566;
    color:#fff;
`;

export const Button = styled.TouchableOpacity`
    width: 96%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    background-color: #e08800;
    border-radius: 4px;
    margin-top: 30px;
`;

export const ButtonText = styled.Text`
    color: #fff;
    font-size: 18px;
    font-weight: 600;
`;
