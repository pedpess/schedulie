import styled from 'styled-components/native';
import { Color } from './color';

export const TextBold30 = styled.Text`
  font-size: 30px;
  font-family: 'RobotoBold';
`;

export const TextRegular22 = styled.Text`
  font-size: 22px;
  font-family: 'RobotoRegular';
`;

export const TextMedium22 = styled.Text`
  font-size: 22px;
  font-family: 'RobotoMedium';
`;

interface TextBold16Props {
  color?: Color;
}

export const TextBold16 = styled.Text<TextBold16Props>`
  font-size: 16px;
  font-family: 'RobotoBold';
  color: ${({ color }): string => color || Color.BLACK};
`;
