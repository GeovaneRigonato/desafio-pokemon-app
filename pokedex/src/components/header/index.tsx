import React from 'react';
import { PokeballIcon } from '../icons/Pokeball';
import { DownArrawIcon } from '../icons/DownArraw';
import {
  ContainerDesafioPokemon,
  ContainerHeader,
  ContainerPokeball,
  TextComponent,
  ContainerArraw,
  HashComponent,

} from './styles';

export function Header() {
  return (
    <ContainerDesafioPokemon>
      <ContainerHeader>
        <ContainerPokeball>
          <PokeballIcon />
          <TextComponent>Pokédex</TextComponent>
        </ContainerPokeball>
        <ContainerArraw>
          <HashComponent>#</HashComponent>
          <DownArrawIcon />
        </ContainerArraw>

      </ContainerHeader>
    </ContainerDesafioPokemon>
  );
}