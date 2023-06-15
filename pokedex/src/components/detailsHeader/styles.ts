import styled from "styled-components/native";

export const Container = styled.View`
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    padding: 0 24px;
    margin-top: 25px;
`;

export const Content = styled.View`
    flex-direction: row;
    align-items: center;
    gap: 16px;
`;

export const NameComponent = styled.Text`
    font-size: 24px;
    color: white;
    font-family: 'Poppins-Bold';
`;

export const NumberComponent = styled.Text`
    font-size: 12px;
    color: white;
    font-family: 'Poppins-Bold';
`;

export const ImageComponent = styled.Image`
    width: 28px;
    height: 20px;
`;

