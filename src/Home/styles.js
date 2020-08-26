import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: #343434;
  flex: 1;
`;
export const HeaderButtons = styled.View`
  width: 100%;
  height: 70px;
  background-color: transparent;
  justify-content: center;
  align-items: flex-end;
  margin: 20px 0px;
`;
export const TouchButton = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: white;
  margin: 0px 10px;
  padding: 3px 3px;
  border-radius: 30px;
`;

export const ScrollView = styled.ScrollView`
  margin: 10px 10px;
  border-radius: 10px;
`;

export const AddButton = styled.TouchableOpacity`
  bottom: 10px;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 0;
  margin: 0px 10px;
  background-color: gray;
  width: 60px;
  height: 60px;
  border-radius: 50px;
`;
