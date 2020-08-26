import React, {useState, useEffect} from 'react';
import {Container, ListOption, TextOption, ViewList, Dot} from './styles';
import {List} from '../../API/index';
import StorieGroup from '../StorieGroup/index';
import StoriePerson from '../StoriePerson/index';
const CreateHistory = () => {
  const [data, setData] = useState([]);
  const [person, setPerson] = useState(false);
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
  const handleText = (text) => {
    if (text === 'Pessoal') {
      setPerson(text);
    } else if (text === 'Grupo') {
      setPerson(text);
    }
  };
  return (
    <Container>
      <ListOption>
        {List.map((item, index) => {
          return (
            <ViewList key={index} onPress={() => handleText(item.name)}>
              <TextOption Text={person === item.name}>{item.name}</TextOption>
              <Dot Text={person === item.name} />
            </ViewList>
          );
        })}
      </ListOption>
    </Container>
  );
};

export default CreateHistory;
