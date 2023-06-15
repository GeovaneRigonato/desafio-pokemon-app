import styled from "styled-components/native";

export const ContainerPai = styled.View`
  background-color: #ffffff;
  padding: 16px;
  height: 100%;
  width: 100%;
  flex-direction: column;
  align-self: center;
  justify-content: flex-start;
  align-items: center;
`;

export const Content = styled.View`
  background-color: #F7F7F7;
  width: 100%;
  height: 100%;
  flex-direction: column;
  align-self: center;
  justify-content: flex-start;
  align-items: center;
  margin-top: 16px;
  border-radius: 16px;
`;

export const ButtonContainer = styled.View`
  width: 50%;
  flex-direction: row;
  align-self: center;
  justify-content: space-between;
  align-items: center;
  margin-top: 16px;
  margin-bottom: 16px;
    `;


export const ContainerHeader = styled.View`
  width: 100%;
  flex-direction: column;
  align-self: center;
  gap: 16px;
`;
export const ContainerChild = styled.View`
  margin-top: 16px;
  margin-right: 8px;
  flex-flow: row wrap;
  align-self: center;
  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.Text`
  font-size: 14px;
  font-family: 'Poppins-Regular';
  color: #666666;
  text-decoration: underline;
`;