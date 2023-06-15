import React from 'react';
import * as Styled from './styles';
import { WeightIcon, HeightIcon } from '@components';


interface DetailsAboutProps {
    weight: number;
    height?: number;
    move1: string;
    move2?: string;
}

export function DetailsAbout( { weight, height, move1, move2 }: DetailsAboutProps) {
    //transformWeight fazer 115 para 11.5
    const transformWeight = weight.toString().split('');
    const detailHeight = height ?? 0;

    let tranformedNumber;
    if (transformWeight.length === 2) {
        const firstPart = transformWeight[0];
        const secondPart = transformWeight[1];
        tranformedNumber = `${firstPart}.${secondPart}`;
    }
    else if( transformWeight.length === 3) {
        const firstPart = transformWeight[0];
        const secondPart = transformWeight[1];
        const thirdPart = transformWeight[2];
        tranformedNumber = `${firstPart}${secondPart}.${thirdPart}`;
    }
    else if( transformWeight.length === 4) {
        const firstPart = transformWeight[0];
        const secondPart = transformWeight[1];
        const thirdPart = transformWeight[2];
        const fourthPart = transformWeight[3];
        tranformedNumber = `${firstPart}${secondPart}${thirdPart}.${fourthPart}`;
    }

    //transformHeight 60 para 0.6
    const transformHeight = (detailHeight / 10).toString().split('');

    let transformHeightNumber;
    if(transformHeight.length === 1) {
        const firstPart = transformHeight[0];
        transformHeightNumber = `${firstPart}.0`;
    }
    else if (transformHeight.length === 2) {
        const firstPart = transformHeight[0];
        const secondPart = transformHeight[1];
        transformHeightNumber = `${firstPart}.${secondPart}`;
    }
    else if( transformHeight.length === 3) {
        const firstPart = transformHeight[0];
        const secondPart = transformHeight[1];
        const thirdPart = transformHeight[2];
        transformHeightNumber = `${firstPart}${secondPart}${thirdPart}`;
    }
    
    else    if( transformHeight.length === 4) {
        const transform = (detailHeight / 100).toString().split('');
        const firstPart = transform[0];
        const secondPart = transform[1];
        const thirdPart = transform[2];
        const fourthPart = transform[3];
        transformHeightNumber = `${firstPart}${secondPart}${thirdPart}${fourthPart}`;
    }



    return (
        <Styled.Container>
            <Styled.WeightContainer>
                <Styled.IconContent>
                    <WeightIcon />
                    <Styled.NumberText>{`${tranformedNumber} kg`}</Styled.NumberText>
                </Styled.IconContent>
                <Styled.TextComponent>Weight</Styled.TextComponent>
            </Styled.WeightContainer>
            <Styled.LineComponent />
            <Styled.HeightContainer>
                <Styled.IconContent>
                    <HeightIcon />
                    <Styled.NumberText>{`${transformHeightNumber} m`}</Styled.NumberText>
                </Styled.IconContent>
                <Styled.TextComponent>Height</Styled.TextComponent>
            </Styled.HeightContainer>
            <Styled.LineComponent />
            <Styled.HeightContainer>
                <Styled.TextContent>
                    <Styled.NumberText>{move1}</Styled.NumberText>
                    <Styled.NumberText>{move2}</Styled.NumberText>
                </Styled.TextContent>
                <Styled.TextComponent>Moves</Styled.TextComponent>
            </Styled.HeightContainer>
        </Styled.Container>
    );
}