import styled from 'styled-components/native';

export const Text = styled.Text`
  letter-spacing: 1px;
  margin-bottom: 5px;
  text-align: center;
  margin: ${(props) => (props.margin ? '10px 10px' : '0px 0px')};
  font-weight: ${(props) => (props.selected ? '700' : '500')};
  color: ${(props) => props.color ?? '#343434'};
  font-style: ${(props) => props.italic ?? 'normal'};
  ${({light, black, cyan}) => {
    switch (true) {
      case light:
        return 'color: #fff';
      case black:
        return 'color: #000';
      case cyan:
        return 'color: cyan';
      default:
        break;
    }
  }};
  ${({bold, lbold, minibold}) => {
    switch (true) {
      case bold:
        return 'font-weight: bold';
      case lbold:
        return 'font-weight: 400';
      case minibold:
        return 'font-weight: 700';
      default:
        break;
    }
  }};
  ${({small, medium, large, title, title1, title2, title3}) => {
    switch (true) {
      case small:
        return 'font-size: 12px';
      case medium:
        return 'font-size: 14px';
      case large:
        return 'font-size: 16px';
      case title:
        return 'font-size: 24px';
      case title1:
        return 'font-size: 26px';
      case title2:
        return 'font-size: 28px';
      case title3:
        return 'font-size: 30px';
      default:
        break;
    }
  }};
  ${({letter}) => {
    switch (true) {
      case letter:
        return 'letter-spacing: 5px';
      default:
        break;
    }
  }}
  ${({opacity}) => {
    switch (true) {
      case opacity:
        return 'opacity: 0.5px';

      default:
        break;
    }
  }}
  ${({margin, margin1, margin2, margin3}) => {
    switch (true) {
      case margin:
        return 'margin: 10px 0px';
      case margin1:
        return 'margin: 0px 10px';
      case margin2:
        return 'margin: 20px 0px';
      case margin3:
        return 'margin: 0px 20px';

      default:
        break;
    }
  }}
`;

export const Input = styled.TextInput`
  background-color: gray;
  padding: 16px 16px;
  width: 90%;
  margin: 10px 20px;
  border-radius: 10px;
  color: #fff;
`;
export const colors = {
  primary: '#343434',
  white: '#fff',
};
