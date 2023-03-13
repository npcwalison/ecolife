import styled from 'styled-components/native';


export const ModalContainer = styled.View`
    flex: 1;
    background-color: rgba(34,34,34, 0.4);
`;

export const Button = styled.TouchableWithoutFeedback``;

export const BtnText = styled.View`
    flex: 1;
`;

export const ModalContent = styled.View`
    flex: 2;
    justify-content: center;
    background-color: #fff;
    padding: 14px;
`;

export const ButtonFilter = styled.TouchableOpacity`
    width: 100%;
    background-color: #f15104;
    align-self: center;
    border-radius: 8px;
    margin-top: 20px;
`;

export const ButtonFulterText = styled.Text`
    font-size: 18px;
    font-weight: 600;
    align-self: center;
    color: #fff;
    margin: 10px 20px;
`;