import styled from "styled-components";


export const Background = styled.View`
    flex: 1;
    background: #121222;
`;

export const Container = styled.KeyboardAvoidingView`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

export const Logo = styled.Image`
    width: 200px;
    height: 200px;
    margin-bottom: 30px;
`;

export const InputArea = styled.View`
    width: 96%;
    align-self: center;
    `;
// attrs is used to change the placeholder color
export const Input = styled.TextInput.attrs({
    placeholderTextColor: "#bbb"
})`
    font-size: 14px;
    padding: 10px;
    margin-top: 10px;
    background-color: #EFEFEF;
    border-radius: 4px;
    width: 100%;
    background-color: #353566;
    color: #fff;
    `;

export const Button = styled.TouchableOpacity`
    width: 96%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    background-color: #e08800;
    border-radius: 4px;
    margin-top: 45px;
    `;

export const ButtonText = styled.Text`
    color: #fff;
    font-size: 14px;
`;