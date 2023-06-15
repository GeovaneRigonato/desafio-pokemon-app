import React from 'react';
import * as Styled from './styles';

interface DetailsTypeProps {
  type: string;
  color? : string;
}


export function DetailsType( { type, color }: DetailsTypeProps) {
  return (
    <Styled.Container
      color={color ? color : 'blue'}
    >
            <Styled.TypeComponent>{type}</Styled.TypeComponent>
    </Styled.Container>
  );
}