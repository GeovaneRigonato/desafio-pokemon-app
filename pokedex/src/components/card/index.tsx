import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import * as Styled from './styles';
import { DetailsType, DetailsNameBaseStats, DetailsNumberBaseStats } from '@components';
import { DetailsHeader } from '../detailsHeader';
import { DetailsAbout } from '../detailsAbout';
import { LeftIcon, RightIcon } from '@components';
import { useNavigation } from '@react-navigation/native';

const TransparentPokeball = require('../../assets/TransparentPokeball.png');

interface CustomImageProps {
  sourceUrl: string;
  style?: any;
}

const CustomImage: React.FC<CustomImageProps> = ({ sourceUrl, style }) => {
  return <Image source={{ uri: sourceUrl }} style={style} />;
};

interface DetailsProps {
  name?: string;
  number?: string;
  weight?: number;
  height?: number;
  move1?: string;
  move2?: string;
  hp?: number;
  atk?: number;
  def?: number;
  spAtk?: number;
  spDef?: number;
  spd?: number;
  description?: string;
  color?: string;
  image?: string;
  type?: string;
}
export function Card({ name, number, weight, height, move1, move2, hp, atk, def, spAtk, spDef, spd, description, color, image, type }: DetailsProps) {

  const typesArray = type ? type.split(',') : [];
  let TypeCamel = '';
  let TypeCamel1 = '';
  let colorType1: string | undefined;
  if (typesArray.length > 0) {
    TypeCamel = typesArray[0].charAt(0).toUpperCase() + typesArray[0].slice(1);
  }
  if (typesArray.length > 1) {
    TypeCamel1 = typesArray[1].charAt(1).toUpperCase() + typesArray[1].slice(2);
  }


  if (typesArray[0] === 'fire') {
    colorType1 = '#F57D31';
  } else if (typesArray[0] === 'water') {
    colorType1 = '#6890F0';
  } else if (typesArray[0] === 'grass') {
    colorType1 = '#78C850';
  } else if (typesArray[0] === 'electric') {
    colorType1 = '#F8D030';
  } else if (typesArray[0] === 'ice') {
    colorType1 = '#98D8D8';
  } else if (typesArray[0] === 'fighting') {
    colorType1 = '#C03028';
  } else if (typesArray[0] === 'poison') {
    colorType1 = '#A040A0';
  } else if (typesArray[0] === 'ground') {
    colorType1 = '#E0C068';
  } else if (typesArray[0] === 'flying') {
    colorType1 = '#A890F0';
  } else if (typesArray[0] === 'psychic') {
    colorType1 = '#F85888';
  } else if (typesArray[0] === 'bug') {
    colorType1 = '#A8B820';
  } else if (typesArray[0] === 'rock') {
    colorType1 = '#B8A038';
  } else if (typesArray[0] === 'ghost') {
    colorType1 = '#705898';
  } else if (typesArray[0] === 'dark') {
    colorType1 = '#705848';
  } else if (typesArray[0] === 'dragon') {
    colorType1 = '#7038F8';
  } else if (typesArray[0] === 'steel') {
    colorType1 = '#B8B8D0';
  } else if (typesArray[0] === 'fairy') {
    colorType1 = '#EE99AC';
  } else if (typesArray[0] === 'normal') {
    colorType1 = '#A8A878';
  }


  let colorType2: string | undefined;

  if (typesArray[1] === ' fire') {
    colorType2 = '#F57D31';
  } else if (typesArray[1] === ' water') {
    colorType2 = '#6890F0';
  } else if (typesArray[1] === ' grass') {
    colorType2 = '#78C850';
  } else if (typesArray[1] === ' electric') {
    colorType2 = '#F8D030';
  } else if (typesArray[1] === ' ice') {
    colorType2 = '#98D8D8';
  } else if (typesArray[1] === ' fighting') {
    colorType2 = '#C03028';
  } else if (typesArray[1] === ' poison') {
    colorType2 = '#A040A0';
  } else if (typesArray[1] === ' ground') {
    colorType2 = '#E0C068';
  } else if (typesArray[1] === ' flying') {
    colorType2 = '#A890F0';
  } else if (typesArray[1] === ' psychic') {
    colorType2 = '#F85888';
  } else if (typesArray[1] === ' bug') {
    colorType2 = '#A8B820';
  } else if (typesArray[1] === ' rock') {
    colorType2 = '#B8A038';
  } else if (typesArray[1] === ' ghost') {
    colorType2 = '#705898';
  } else if (typesArray[1] === ' dark') {
    colorType2 = '#705848';
  } else if (typesArray[1] === ' dragon') {
    colorType2 = '#7038F8';
  } else if (typesArray[1] === ' steel') {
    colorType2 = '#B8B8D0';
  } else if (typesArray[1] === ' fairy') {
    colorType2 = '#EE99AC';
  } else if (typesArray[1] === ' normal') {
    colorType2 = '#A8A878';
  }

  const navigate = useNavigation();
  const nextId = String(Number(number) + 1);
  let prevId = String(Number(number) - 1);
  if(Number(number) === 1) {
    prevId = '1';
  }
  const numberPokemon = Number(number) > 99 ? number : Number(number) > 9 ? `0${number}` : `00${number}`;
  return (
    <Styled.Container>
      <Styled.Content
        color={color ? color : 'blue'}
      >
        <Styled.ContainerHeader>
          <DetailsHeader
            name={name}
            number={`#${numberPokemon}`}
          />
        </Styled.ContainerHeader>

        <Styled.ImagesContainer>
          <Styled.ImagePokeball source={TransparentPokeball} />
          <Styled.ImageContent>
            <TouchableOpacity style={{ zIndex: 1, marginTop:-80, width:100,height:100, alignItems:'center', justifyContent:'center'}} onPress={ () => navigate.navigate('details', { id: prevId })}>
              <LeftIcon />
            </TouchableOpacity>
            <CustomImage sourceUrl={image ? image : ''} style={{ width: 215, height: 215, marginTop: -160, }} />
            <TouchableOpacity style={{ zIndex: 1, marginTop:-80, width:100,height:100, alignItems:'center', justifyContent:'center' }} onPress={ () => navigate.navigate('details', { id: nextId })}>
              <RightIcon />
            </TouchableOpacity>
          </Styled.ImageContent>
        </Styled.ImagesContainer>

        <Styled.DetailsContainer>
          <Styled.DetailsContent>
            <DetailsType color={colorType1} type={TypeCamel} />
            {typesArray.slice(1).map((type, index) => (
              <DetailsType key={index} color={colorType2} type={TypeCamel1} />
            ))}
          </Styled.DetailsContent>
          <Styled.AboutTextComponent
            color={color ? color : 'blue'}
          >About</Styled.AboutTextComponent>
          <Styled.DetailsAboutContainer>
            <DetailsAbout
              weight={weight ? weight : 0}
              height={height ? height : 0}
              move1={move1 ? move1 : ''}
              move2={move2 ? move2 : ''}
            />
          </Styled.DetailsAboutContainer>
          <Styled.DescriptionTextComponent>{description}</Styled.DescriptionTextComponent>
          <Styled.BaseStatsTextComponent
            color={color ? color : 'blue'}
          >Base Stats</Styled.BaseStatsTextComponent>

          <Styled.BaseStatsContainer>

            <Styled.BaseStatsContentContainer1>
              <DetailsNameBaseStats
                color={color ? color : 'blue'} />
              <Styled.LineComponent />

              <Styled.BaseStatsContent>
                <DetailsNumberBaseStats
                  widhtBarHp={hp ? hp : 0}
                  widhtBarAtk={atk ? atk : 0}
                  widhtBarDef={def ? def : 0}
                  widhtBarSpAtk={spAtk ? spAtk : 0}
                  widhtBarSpDef={spDef ? spDef : 0}
                  widhtBarSpd={spd ? spd : 0}
                  color={color ? color : 'blue'}
                  hp={hp ? hp : 0}
                  atk={atk ? atk : 0}
                  def={def ? def : 0}
                  spAtk={spAtk ? spAtk : 0}
                  spDef={spDef ? spDef : 0}
                  spd={spd ? spd : 0}
                />
              </Styled.BaseStatsContent>
            </Styled.BaseStatsContentContainer1>


          </Styled.BaseStatsContainer>

        </Styled.DetailsContainer>



      </Styled.Content>
    </Styled.Container>
  );
}