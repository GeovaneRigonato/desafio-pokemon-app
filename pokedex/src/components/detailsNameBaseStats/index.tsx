import React from 'react';
import * as Styled from './styles';

interface DetailsNameBaseStatsProps {
    color: string;
}

export function DetailsNameBaseStats( { color }: DetailsNameBaseStatsProps) {
    return (
        <Styled.BaseStatsContent>
            <Styled.BaseStatsText color={color}>HP</Styled.BaseStatsText>
            <Styled.BaseStatsText color={color}>ATK</Styled.BaseStatsText>
            <Styled.BaseStatsText color={color}>DEF</Styled.BaseStatsText>
            <Styled.BaseStatsText color={color}>SATK</Styled.BaseStatsText>
            <Styled.BaseStatsText color={color}>SDEF</Styled.BaseStatsText>
            <Styled.BaseStatsText color={color}>SPD</Styled.BaseStatsText>
        </Styled.BaseStatsContent>
    );
}