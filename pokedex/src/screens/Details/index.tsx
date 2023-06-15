import React, { useEffect, useState } from 'react';
import { Image } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { Card } from '../../components/card';
import axios from 'axios';

interface CustomImageProps {
  sourceUrl: string;
  style?: any;
}

const CustomImage: React.FC<CustomImageProps> = ({ sourceUrl, style }) => {
  return <Image source={{ uri: sourceUrl }} style={style} />;
};

interface IPokemon {
  abilities: { ability: { name: string } }[];
  base_experience: number;
  forms: [];
  game_indices: [];
  height: number;
  held_lists: [];
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: { move: { name: string; url: string } }[];
  name: string;
  order: number;
  past_types: [];
  species: {};
  sprites: { front_default: string, other: { dream_world: { front_default: string }, home: { front_default: string }  }};
  stats: { base_stat: number }[];
  types: [{ type: { name: string } }];
  weight: number;
  color: string;
}

interface IDescription {
  flavor_text_entries: { flavor_text: string }[];
}


export function Details() {
  const [list, setList] = useState<IPokemon>();
  const [listdescriptions, setListDescriptions] = useState<IDescription>();
  const route = useRoute();
  const params = route.params && 'id' in route.params ? String(route.params.id) : undefined;
  const move1 = list?.abilities?.[0]?.ability?.name;
  const move2 = list?.abilities?.[1]?.ability?.name;
  const moveCamel = move1 ? move1.charAt(0).toUpperCase() + move1.slice(1) : '';
  const moveCamel2 = move2 ? move2.charAt(0).toUpperCase() + move2.slice(1) : '';
  const capitalizedName = list?.name ? list.name.charAt(0).toUpperCase() + list?.name.slice(1) : '';
  const Image = list?.sprites.front_default ? 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/' + list.id + '.png' : ' ';
  const description = listdescriptions?.flavor_text_entries[1].flavor_text.replace(/\n/g, ' ');

  useEffect(() => {
    if (params) {
      axios.get(`https://pokeapi.co/api/v2/pokemon-species/${params}`)
        .then(response => {
          setListDescriptions(response.data);
        })
        .catch(error => {
          console.log(error);
        });
    }
  }, [params]);

  useEffect(() => {
    if (params) {
      axios.get(`https://pokeapi.co/api/v2/pokemon/${params}`)
        .then(response => {
          setList(response.data);
        })
        .catch(error => {
          console.log(error);
        });
    }
  }, [params]);

  

  const types = list?.types.reduce((prev, current) => {
    if (prev === '') {
      return current.type.name;
    } else {
      return prev + ', ' + current.type.name;
    }
  }, '');

  if( list?.types[0].type.name === 'fire') {
    list.color = '#F57D31';
  } else if (list?.types[0].type.name === 'grass') {
    list.color = '#74CB48';
  } else if (list?.types[0].type.name === 'water') {
    list.color = '#6493EB';
  } else if (list?.types[0].type.name === 'bug') {
    list.color = '#A8B820';
  } else if (list?.types[0].type.name === 'normal') {
    list.color = '#A8A878';
  } else if (list?.types[0].type.name === 'poison') {
    list.color = '#A040A0';
  } else if (list?.types[0].type.name === 'electric') {
    list.color = '#F8D030';
  } else if (list?.types[0].type.name === 'ground') {
    list.color = '#E0C068';
  } else if (list?.types[0].type.name === 'fairy') {
    list.color = '#EE99AC';
  } else if (list?.types[0].type.name === 'fighting') {
    list.color = '#C03028';
  } else if (list?.types[0].type.name === 'psychic') {
    list.color = '#F85888';
  } else if (list?.types[0].type.name === 'rock') {
    list.color = '#B8A038';
  } else if (list?.types[0].type.name === 'ghost') {
    list.color = '#705898';
  } else if (list?.types[0].type.name === 'ice') {
    list.color = '#98D8D8';
  } else if (list?.types[0].type.name === 'dragon') {
    list.color = '#7038F8';
  } else if (list?.types[0].type.name === 'dark') {
    list.color = '#705848';
  } else if (list?.types[0].type.name === 'steel') {
    list.color = '#B8B8D0';
  } else if (list?.types[0].type.name === 'flying') {
    list.color = '#A890F0';
  }

  if (list && list.stats) {
    const stats = list.stats;
    const hp = stats[0].base_stat;
    const atk = stats[1].base_stat;
    const def = stats[2].base_stat;
    const spAtk = stats[3].base_stat;
    const spDef = stats[4].base_stat;
    const spd = stats[5].base_stat;
  
    return (
      <Card
        image={Image}
        name={capitalizedName}
        number={params}
        weight={list.weight}
        height={list.height}
        move1={moveCamel}
        move2={moveCamel2}
        hp={hp}
        atk={atk}
        def={def}
        spAtk={spAtk}
        spDef={spDef}
        spd={spd}
        description={description}
        color={list.color}
        type={types}
      />
    );
  }
  
  return null;
}
