import styled from "styled-components/native";

interface ContainerListProps {
    color?: string;
}


export const Container = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 0px 0px 8px 8px;
`;

export const ContainerPokemons = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: center;
    align-content: flex-start;
`;

export const ContainerList = styled.View <ContainerListProps>`
background-color: '#ffffff';
    width: 104px;
    height: 112px;
    align-items: flex-end;
    justify-content: flex-start;
    border: 1px solid ${(props) => props.color};
    border-radius: 8px;
`;
export const ContainerName = styled.View <ContainerListProps>`
    width: 103px;
    height: 25%;
    flex-direction: row;
    align-items: center;
    margin-right: -0.5px;
    justify-content: center;
    background-color: ${(props) => props.color};
    border-radius: 0 0 8px 8px;
`;


export const ContainerImage = styled.View`
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;



export const NumberComponent = styled.Text <ContainerListProps>`
    margin-right: 8px;
    font-size: 12px;
    color: ${(props) => props.color};
    font-family: 'Poppins-Regular';
`;

export const NameComponent = styled.Text `
    font-size: 12px;
    color: #fff;
    font-family: 'Poppins-Regular';
`;

export const ImageComponent = styled.Image`
    width: 100%;
    height: 100%;
    border-radius: 8px;
`;

