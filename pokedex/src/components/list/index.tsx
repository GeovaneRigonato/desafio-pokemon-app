import React, { useEffect } from 'react';
import { TouchableOpacity, Image } from 'react-native';
import * as Styled from './styles';
import { useNavigation } from '@react-navigation/native';;

interface ListPokemonsProps {
    name?: string;
    image: string;
    number: string;
    color?: string;
}


interface CustomImageProps {
    sourceUrl: string;
    style?: any;
  }
  
  const CustomImage: React.FC<CustomImageProps> = ({ sourceUrl, style }) => {
    return <Image source={{ uri: sourceUrl }} style={style} />;
  };



export function ListPokemons({ name, image, number, color }: ListPokemonsProps) {
    const navigate = useNavigation();

    const numberPokemon = Number(number) > 99 ? number : Number(number) > 9 ? `0${number}` : `00${number}`;

    return (
        <Styled.Container >
            <Styled.ContainerPokemons>
                <TouchableOpacity onPress={ () => navigate.navigate('details', { id: number })}>
                    <Styled.ContainerList color={color}>
                        <Styled.NumberComponent color={color}>{`#${numberPokemon}`}</Styled.NumberComponent>
                        <Styled.ContainerImage>
                            <CustomImage sourceUrl={image} style={{ width: 65, height: 65,  }} />
                        </Styled.ContainerImage>
                        <Styled.ContainerName color={color}>
                            <Styled.NameComponent>{name}</Styled.NameComponent>
                        </Styled.ContainerName>
                    </Styled.ContainerList>
                </TouchableOpacity>
            </Styled.ContainerPokemons>
        </Styled.Container>
    );
}