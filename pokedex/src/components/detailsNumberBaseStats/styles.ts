import styled from "styled-components/native";

interface IProps {
  color: string;
  width?: number;
}

export const BaseStatsContentContainer = styled.View`
  width: 245px;
  flex-direction: row;
  align-items: center;
  gap: 8px;
`;

export const ContainerProgressBar = styled.View <IProps>`
  width: 95%;
  height: 4px;
  border-radius: 4px;
  background-color: ${(props) => props.color};
`;

export const BaseStatsContent = styled.View`
  width: 245px;
  flex-direction: row;
  align-items: center;
  gap: 8px;
`;

export const BaseStatsNumber = styled.Text`
  font-size: 14.5px;
  font-family: "Poppins-Regular";
  text-align: left;
  width: 30px;
`;

export const ProgressBar = styled.View<IProps>`
  width: ${(props) => props.width}%;
  height: 4px;
  border-radius: 4px;
  background-color: ${(props) => props.color};
`;
