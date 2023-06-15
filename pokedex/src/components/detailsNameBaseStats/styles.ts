import styled from "styled-components/native";

interface ContainerProps {
  color: string;
}

export const BaseStatsContent = styled.View`
  justify-content: center;
  align-items: flex-end;
`;

export const BaseStatsText = styled.Text <ContainerProps>`
  font-size: 14px;
  font-family: 'Poppins-Bold';
  color: ${(props) => props.color};
  text-align: center;
  margin-left: 20px;
`;