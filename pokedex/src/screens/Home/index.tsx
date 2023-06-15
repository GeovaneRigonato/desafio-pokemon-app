import React, { useEffect, useRef, useState } from 'react';
import { ScrollView, TouchableOpacity } from 'react-native';
import * as Styled from './styles';
import { SearchBar, ListPokemons } from '@components';
import { Header } from '../../components/header';
import axios from 'axios';

interface ListPokemonsProps {
  name: string;
  url: string;
}

interface IPokemon {
  abilities: [];
  base_experience: number;
  forms: [];
  game_indices: [];
  height: number;
  held_items: [];
  id: string;
  is_default: boolean;
  location_area_encounters: string;
  moves: [{ move: { name: string; url: string } }];
  name: string;
  order: number;
  past_types: [];
  species: {};
  sprites: { front_default: string, other: { dream_world: { front_default: string }, home: { front_default: string } } };
  stats: [{ base_stat: number }];
  types: [{ type: { name: string } }];
  weight: number;
  color: string;
}

export function Home() {
  const [listPokemons, setListPokemons] = useState<ListPokemonsProps[]>([]);
  const [list, setList] = useState<IPokemon[]>([]);
  const [offset, setOffset] = useState(0);
  const [limit, setLimit] = useState(30);
  const [totalPokemons, setTotalPokemons] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchedPokemon, setSearchedPokemon] = useState<IPokemon[] | null>(null);


  const scrollViewRef = useRef<ScrollView>(null);

  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon/')
      .then(response => {
        setTotalPokemons(response.data.count);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`)
      .then(response => {
        setListPokemons(response.data.results);
      })
      .catch(error => {
        console.log(error);
      });
  }, [offset, limit]);

  useEffect(() => {
    if (listPokemons && listPokemons.length > 0) {
      const fetchData = async () => {
        const promises = listPokemons.map((item: ListPokemonsProps) =>
          axios.get(item.url).then(response => response.data)
        );
        const pokemonData: IPokemon[] = await Promise.all(promises);

        const modifiedPokemonData = pokemonData.map((item: IPokemon) => {
          item.name = item.name[0].toUpperCase() + item.name.slice(1);
          item.sprites.front_default = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${item.id}.png`;

          if (item.types[0].type.name === 'grass')
            item.color = '#74CB48';
          else if (item.types[0].type.name === 'fire')
            item.color = '#F57D31';
          else if (item.types[0].type.name === 'water')
            item.color = '#6493EB';
          else if (item.types[0].type.name === 'bug')
            item.color = '#808000';
          else if (item.types[0].type.name === 'normal')
            item.color = '#808080';
          else if (item.types[0].type.name === 'poison')
            item.color = '#800080';
          else if (item.types[0].type.name === 'electric')
            item.color = '#F9CF30';
          else if (item.types[0].type.name === 'ground')
            item.color = '#FFA500';
          else if (item.types[0].type.name === 'fairy')
            item.color = '#FFC0CB';
          else if (item.types[0].type.name === 'fighting')
            item.color = '#FFA500';
          else if (item.types[0].type.name === 'psychic')
            item.color = '#FF1493';
          else if (item.types[0].type.name === 'rock')
            item.color = '#808080';
          else if (item.types[0].type.name === 'ghost')
            item.color = '#800080';
          else if (item.types[0].type.name === 'ice')
            item.color = '#98D8D8';
          else if (item.types[0].type.name === 'dragon')
            item.color = '#800000';
          else if (item.types[0].type.name === 'dark')
            item.color = '#808080';
          else if (item.types[0].type.name === 'steel')
            item.color = '#808080';
          else if (item.types[0].type.name === 'flying')
            item.color = '#808080';

          return item;
        });

        setList(modifiedPokemonData);
      };
      fetchData();
    }
  }, [listPokemons]);

  const handleNext = () => {
    if (offset + limit < totalPokemons) {
      setOffset(offset + limit);
      scrollViewRef.current?.scrollTo({ y: 0, animated: true });
    }
  };

  const handlePrevious = () => {
    if (offset - limit >= 0) {
      setOffset(offset - limit);
      scrollViewRef.current?.scrollTo({ y: 0, animated: true });
    }
  };

  const handleSearch = () => {
    if (searchQuery.trim() === '') {
      setSearchedPokemon(null);
      return;
    }

    const formattedQuery = searchQuery.toLowerCase();

    const foundPokemons = list.filter((pokemon: IPokemon) =>
      pokemon.name.toLowerCase().includes(formattedQuery)
    );

    setSearchedPokemon(foundPokemons.length > 0 ? foundPokemons : null);
  };


  const handleClearSearch = () => {
    setSearchQuery('');
    setSearchedPokemon(null);
  };

  const displayList = searchedPokemon ? [searchedPokemon] : list;

  return (
    <Styled.ContainerPai>
      <Styled.Content>
        <Styled.ContainerHeader>
          <Header />
          <SearchBar
            value={searchQuery}
            onChangeText={setSearchQuery}
            onSearch={handleSearch}
            onClear={handleClearSearch}
          />
        </Styled.ContainerHeader>
        <ScrollView ref={scrollViewRef}>
          <Styled.ContainerChild>
            {searchedPokemon && searchedPokemon.length > 0 ? (
              searchedPokemon.map((item: IPokemon) => (
                <ListPokemons key={item.id} name={item.name} image={item.sprites.front_default} color={item.color} number={item.id} />
              ))
            ) : (
              displayList.map((item: any) => (
                <ListPokemons key={item.id} name={item.name} image={item.sprites.front_default} color={item.color} number={item.id} />
              ))
            )
            }
          </Styled.ContainerChild>
          {searchedPokemon && searchedPokemon.length > 0 ? (
            <></>
          ) : (
            <Styled.ButtonContainer>
              <TouchableOpacity onPress={handlePrevious}>
                <Styled.ButtonText>Voltar</Styled.ButtonText>
              </TouchableOpacity>
              <TouchableOpacity onPress={handleNext}>
                <Styled.ButtonText>Avançar</Styled.ButtonText>
              </TouchableOpacity>
            </Styled.ButtonContainer>
          )}

        </ScrollView>
      </Styled.Content>
    </Styled.ContainerPai>
  );

}

