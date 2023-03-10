import styled from "styled-components";


export const RegisterContainer = styled.View`
    flex-direction: row;
    width: 100%;
    padding-left: 5%;
    padding-right: 5%;
    justify-content: space-between;
    margin-top: 30px;
`;

export const RegisterTypeButton = styled.TouchableOpacity`
    background-color: ${props => props.checked ? '#353566' : 'transparent'};
    width: 47%;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    height: 45px;
    border-radius: 4px;
    border-width: 1.5px;
    border-color: ${props => props.checked ? '#3b3dbf' : 'transparent'};
    margin-bottom: 14px;
`;

export const RegisterLabel = styled.Text`
    margin-left: 8px;
    font-size: 17px;
    color: #fff;
`;