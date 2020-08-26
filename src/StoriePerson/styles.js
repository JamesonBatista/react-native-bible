import styled from 'styled-components/native';
import {colors} from '../../components/Styles/TextStyle';

export const Container = styled.ScrollView`
  flex: 1;
  background-color: ${colors.primary};
`;
export const InputStorie = styled.TextInput`
  background-color: gray;
  width: 90%;
  height: 400px;
  margin: 10px 20px;
  border-radius: 10px;
  color: #fff;
  padding: 10px 10px;
`;
export const ViewIcon = styled.TouchableOpacity`
  background-color: gray;
  padding: 10px 10px;
  width: 90%;
  margin: 10px 20px;
  border-radius: 10px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const ListBooks = styled.View``;
