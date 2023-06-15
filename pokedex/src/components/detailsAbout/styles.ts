import styled from "styled-components/native";

export const Container = styled.View`
  widht: 100%;
  height: 48px;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 24px;
`;

export const WeightContainer = styled.View`
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

export const HeightContainer = styled.View`
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

export const IconContent = styled.View`
  flex: 1;
  flex-direction: row;
  border-radius: 12px;
  padding: 4px;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;

export const TextContent = styled.View`
  flex: 1;
  flex-direction: column;
  border-radius: 12px;
  align-items: flex-start;
  justify-content: center;
  padding: 4px;
`;

export const NumberText = styled.Text`
  font-size: 12px;
  font-family: 'Poppins-Regular';
  text-align: center;
`;

export const TextComponent = styled.Text`
  font-size: 10px;
  font-family: 'Poppins-Regular';
  text-align: center;
`;

export const LineComponent = styled.View`
    width: 1px;
    height: 100%;
    background-color: #E0E0E0;
    margin-top: 8px;
    margin-bottom: 8px;
`;
