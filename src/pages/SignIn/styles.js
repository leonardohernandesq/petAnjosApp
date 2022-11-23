import styled from 'styled-components/native';

export const Container = styled.KeyboardAvoidingView`
flex:1;
align-items: center;
margin-top: 70px;
`;


export const AreaInput = styled.View`
flex-direction: row;
background: rgba(0,0,0,0.20);
width: 90%;
margin-bottom: 15px;
border-radius: 7px;
align-items:center;
`;

export const Input = styled.TextInput`
width:85%;
height:50px;
padding:8px;
font-size: 18px;
color: #FFF;
`;

export const SubmitButton = styled.TouchableOpacity`
    align-items: center;
    justify-content: center;
    background-color: #00b94a;
    width: 90%;
    height: 45px;
    border-radius: 7px;
    margin-top: 10px;
`;

export const SubmitButtonOff = styled.TouchableOpacity`
    align-items: center;
    justify-content: center;
    width: 90%;
    height: 45px;
    border-radius: 7px;
    margin-top: 10px;
`;

export const SubmitText = styled.Text`
    font-size: 19px;
    color: #fff
`;

export const SubmitTextOff = styled.Text`
    font-size: 19px;
    color: #00b94a
`;


