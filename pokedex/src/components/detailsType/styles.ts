import styled from "styled-components/native";

interface ContainerProps {
  color: string;
}

export const Container = styled.View <ContainerProps>`
  padding: 2px 8px 2px 8px;
  background-color: ${(props) => props.color};
  margin-top: 56px;
  border-radius: 16px;
  justify-content: center;
  align-items: center;
`;

// export const Content = styled.View`
//     width: 35px;
//     height: 30%;
//     flex: 1;
//     background-color: #F57D31;
//     border-radius: 10px;
//     padding: 2px;
// `;

export const TypeComponent = styled.Text`
    font-size: 12px;
    font-family: 'Poppins-Bold';
    color: #fff;
    text-align: center;
`;