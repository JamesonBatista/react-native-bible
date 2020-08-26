import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: #343434;
  margin: 10px 0px;
`;
export const FullView = styled.ScrollView``;
export const Scroll = styled.View``;
export const ListOption = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin: 10px 40px;
  align-items: center;
`;
export const ViewList = styled.TouchableOpacity`
  border-radius: 20px;
  width: 100px;
  align-items: center;
  justify-content: center;
`;

export const TextOption = styled.Text`
  font-size: ${(props) => (props.Text ? '20px' : '14px')};
  color: ${(props) => (props.Text ? '#fff' : 'gray')};
  letter-spacing: ${(props) => (props.Text ? '2px' : '0px')};
`;
export const Dot = styled.View`
  background-color: ${(props) => (props.Text ? '#fff' : 'gray')};
  width: 10px;
  height: 10px;
  border-radius: 5px;
  margin: 5px 0px;
`;
