import React, {useState, useEffect} from 'react';
import {Text} from '../../components/Styles/TextStyle';
import {DataTest} from '../../API/index';
import {ViewInfo, Info} from './styles';
import {useNavigation} from '@react-navigation/native';

const FlatList = () => {
  const navigation = useNavigation();

  return (
    <>
      {DataTest.map((item, index) => {
        return (
          <ViewInfo key={index}>
            <Info onPress={() => navigation.navigate('History')}>
              <Text title bold>
                {item.title}
              </Text>
              <Text italic={'italic'} small>
                {item.description}
              </Text>
            </Info>
          </ViewInfo>
        );
      })}
    </>
  );
};

export default FlatList;
