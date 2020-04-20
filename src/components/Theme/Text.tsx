import styled from 'styled-components/native';
import { Color } from './color';

export const TextBold24 = styled.Text`
  font-size: 24px;
  font-family: 'RobotoBold';
`;

interface TextRegular16Props {
  color?: Color;
}

export const TextRegular16 = styled.Text<TextRegular16Props>`
  font-size: 16px;
  font-family: 'RobotoRegular';
  color: ${({ color }): string => color || Color.BLACK};
`;

export const TextMedium16 = styled.Text`
  font-size: 16px;
  font-family: 'RobotoMedium';
`;

interface TextBold16Props {
  color?: Color;
}

export const TextBold12 = styled.Text<TextBold16Props>`
  font-size: 12px;
  font-family: 'RobotoBold';
  color: ${({ color }): string => color || Color.BLACK};
`;
