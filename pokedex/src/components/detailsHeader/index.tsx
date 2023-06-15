import React from 'react';
import { TouchableOpacity } from 'react-native';
import * as Styled from './styles';
import { useNavigation } from '@react-navigation/native';
import { LeftArrawIcon } from '@components';

interface DetailsHeaderProps {
  name?: string;
  number: string;
}

export function DetailsHeader({ name, number }: DetailsHeaderProps) {
  const navigate = useNavigation();

  return (
    <Styled.Container>
      <Styled.Content>
        <TouchableOpacity onPress={() => navigate.goBack()}>
          <LeftArrawIcon />
        </TouchableOpacity>
        <Styled.NameComponent>{name}</Styled.NameComponent>
      </Styled.Content>

      <Styled.NumberComponent>{number}</Styled.NumberComponent>

    </Styled.Container>
  );
}