import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import Edit from 'react-native-vector-icons/Entypo';
import {StatusBar} from 'react-native';
Edit.loadFont();
Icon.loadFont();
import FlatList from '../FlatList/index';
import {Container, AddButton, ScrollView} from './styles';
import CreateHistory from '../CreateHistory/index';

const HomeScreen = ({navigation}) => {
  return (
    <Container>
      <CreateHistory />
      <StatusBar barStyle="light-content" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <FlatList />
      </ScrollView>
      <AddButton onPress={() => navigation.navigate('Person')}>
        <Edit name="edit" size={50} color="#454545" />
      </AddButton>
    </Container>
  );
};

export default HomeScreen;
