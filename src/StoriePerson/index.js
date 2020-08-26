import React, {useRef, useEffect, useState} from 'react';
import {Text, Input, colors} from '../../components/Styles/TextStyle';
import {useNavigation} from '@react-navigation/native';
import Edit from 'react-native-vector-icons/Entypo';
Edit.loadFont();
import {Modalize} from 'react-native-modalize';
import {Picker} from '@react-native-community/picker';
import {Container, InputStorie, ViewIcon, ListBooks} from './styles';

const StoriePerson = () => {
  const modalizeRef = useRef(null);
  const [data, setData] = useState([]);
  const [book, setBook] = useState('');

  const onOpen = () => {
    modalizeRef.current?.open();
  };
  useEffect(() => {
    GetData();
  }, []);
  async function GetData() {
    const result = await fetch('https://bibleapi.co/api/books')
      .then((response) => response.json())
      .then((json) => {
        return setData(json);
      });
    console.log(data);
  }

  return (
    <Container>
      <Text>Ola Person</Text>
      <Input
        placeholder="Digite o Título"
        maxLength={30}
        placeholderTextColor="white"
        underlineColorAndroid="transparent"
      />
      <ViewIcon onPress={onOpen}>
        <Text light opacity small>
          clique para pesquisar um versículo...
        </Text>
        <Edit name="open-book" color={colors.white} size={30} />
      </ViewIcon>
      <InputStorie
        placeholder="Digite o Texto"
        placeholderTextColor="white"
        multiline={true}
        numberOfLines={4}
        underlineColorAndroid="transparent"
      />
      <Modalize ref={modalizeRef} snapPoint={300}>
        <ListBooks>
          <Picker
            selectedValue={book}
            style={{height: 50, width: 100, marginLeft: 20}}
            onValueChange={(itemValue, itemIndex) => setBook(itemValue)}>
            {data?.map((item, index) => {
              return <Picker.Item label={item.name} value={item.name} />;
            })}
          </Picker>
        </ListBooks>
      </Modalize>
    </Container>
  );
};

export default StoriePerson;
