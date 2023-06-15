import React from 'react';
import Ionicons from "@expo/vector-icons/AntDesign";
import { Container } from './styles';
import { Input } from 'native-base';

interface SearchBarProps {
  value: string;
  onChangeText: (text: string) => void;
  onSearch: () => void;
  onClear: () => void;
}

export function SearchBar({ value, onChangeText, onSearch, onClear }: SearchBarProps) {
  const handleSearch = () => {
    onSearch();
  };

  const handleClear = () => {
    onClear();
  };

  return (
    <Container>
      <Input
        borderColor={'#E0E0E0'}

        borderRadius={10}
        _focus={{
          backgroundColor: '#ffffff',
          borderColor: '#666666',
        }}
        bg={'#ffffff'}
        padding={0}
        height={'100%'}
        width={'100%'}
        fontFamily={'Poppins-Regular'}
        _hover={{
          backgroundColor: '#ffffff',
        }}
        InputLeftElement={
          <Ionicons
            name="search1"
            size={8}
            color="#979797"
            style={{fontFamily: 'Poppins-Regular',position:'absolute', paddingLeft: 132 }}
          />
        }
        InputRightElement={
          value !== '' ? (
            <Ionicons name="close" size={14} color="#979797" style={{marginRight:5}} onPress={handleClear} />
          ) : undefined
        }
        placeholder="Procurar"
        style={{
          height: 24,
          textAlign: 'center',
        }}
        value={value}
        onChangeText={onChangeText}
        onSubmitEditing={handleSearch}
      />
    </Container>
  );
}
