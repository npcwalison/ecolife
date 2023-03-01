import styled from "styled-components";


export const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    background: #121222;
`;

export const Logo = styled.Image`
    width: 200px;
    height: 200px;
`;

export const Text = styled.Text`
    color: #fff;
`;

export const InputArea = styled.View`
    width: 96%;
    align-self: center;
`;
// attrs is used to change the placeholder color
export const Input = styled.TextInput.attrs({
    placeholderTextColor: "#fff"
  })`
    font-size: 14px;
    padding: 10px;
    margin-top: 5px;
    background-color: #EFEFEF;
    border-radius: 4px;
    width: 100%;
    background-color: #353566;
`;

export const Button = styled.TouchableOpacity`
    width: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px;
    background-color: #e08800;
    border-radius: 4px;
    margin-top: 20px;
`;

export const Link = styled.TouchableOpacity`
        margin-top: 5px;
`;