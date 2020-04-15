import styled from 'styled-components/native';
import { Color } from '../Theme';

export const Container = styled.View`
  width: 350px;
  height: 440px;
  background-color: ${Color.WHITE};
  border-radius: 20px;
  shadow-color: ${Color.BLACK};
  shadow-offset: 0px 2px;
  shadow-opacity: 0.25;
  shadow-radius: 4px;
  elevation: 5;
  padding-horizontal: 30px;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 30px;
`;

export const List = styled.View`
  border-top-width: 1px;
  margin-top: 12px;
  margin-bottom: 30px;
`;

export const ListItem = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-vertical: 10px;
  border-bottom-width: 0.5px;
  border-color: ${Color.GREY_3};
`;

export const ListItemWrapper = styled.View`
  flex-direction: row;
  align-items: center;
`;
