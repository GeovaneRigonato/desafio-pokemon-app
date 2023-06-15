import styled from "styled-components/native";

interface ContainerListProps {
  color: string;
}


export const Container = styled.View`
  flex: 1;
  padding: 28px 12px 12px 12px;
`;

export const ContainerHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
  z-index: 2;
`;

export const ImagesContainer = styled.View`
  widht: 100%;
  flex: 1;
  align-items: center;
  justify-content: center;
  margin-top: -170px;
  z-index: 1;
`;

export const ImageContent = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

export const DetailsContainer = styled.View`
  width: 100%;
  flex: 1;
  align-items: center;
  background-color: #fff;
  margin-top: -225px;
  border-radius: 8px;
  gap: 16px;
`;

export const DetailsContent = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  gap: 16px;
`;

export const DetailsAboutContainer = styled.View`
  width: 100%;
  align-items: flex-start;
  margin-left: 24px;
  border-radius: 8px;
  gap: 16px;
`;

export const BaseStatsContainer = styled.View`
  flex: 1;
  width: 100%;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: row;
  gap: 8px;
`;

export const BaseStatsContent2 = styled.View`
  flex: 1;
  width: 100%;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  gap: 14px;
  margin-top: 6px;
`;

export const BaseStatsContentContainer1 = styled.View`
flex: 1;
flex-direction: row;
align-items: center;
gap:8px;
`;

export const Content = styled.View <ContainerListProps>`
  flex: 1;
  background-color: ${(props) => props.color};
  border-radius: 12px;
  padding: 4px;
`;

export const BaseStatsContent = styled.View`
  justify-content: flex-start;
  align-items: flex-end;
`;

export const BaseStatsContentContainer = styled.View`
  width: 245px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
`;

export const ImagePokemon = styled.Image`
  margin-top: -135px;
`;

export const ImagePokeball = styled.Image`
  margin-top: -60px;
  margin-right: -140px;
`;

export const AboutTextComponent = styled.Text <ContainerListProps>`
  font-size: 20px;
  color: ${(props) => props.color};
  text-align: center;
  font-family: 'Poppins-Bold';
`;

export const BaseStatsTextComponent = styled.Text <ContainerListProps>`
  font-size: 20px;
  color: ${(props) => props.color};
  text-align: center;
  font-family: 'Poppins-Bold';
`;

export const DescriptionTextComponent = styled.Text`
  font-size: 12px;
  font-family: 'Poppins-Regular';
  color: #212121;
  text-align: justify;
  margin-left: 20px;
  margin-right: 20px;
`;

export const BaseStatsText = styled.Text <ContainerListProps>`
  font-size: 14px;
  font-family: 'Poppins-Bold';
  color: ${(props) => props.color};
  text-align: center;
  margin-left: 20px;
`;

export const BaseStatsNumber = styled.Text`
  font-size: 14px;
  font-family: 'Poppins-Regular';
  text-align: center;
`;

export const LineComponent = styled.View`
  width: 1px;
  height: 130px;
  background-color: #e0e0e0;
`;

export const LineComponent2 = styled.View <ContainerListProps>`
  width: 100%;
  height: 4px;
  border-radius: 4px;
  background-color: ${(props) => props.color};
`;
