import styled from 'styled-components/native';
import { Color } from './color';

export const TextBold24 = styled.Text`
  font-size: 24px;
`;

interface TextRegular16Props {
  color?: Color;
}

export const TextRegular16 = styled.Text<TextRegular16Props>`
  font-size: 16px;
  color: ${({ color }): string => color || Color.BLACK};
`;

export const TextMedium16 = styled.Text`
  font-size: 16px;
`;

interface TextBold16Props {
  color?: Color;
}

export const TextBold12 = styled.Text<TextBold16Props>`
  font-size: 12px;
  color: ${({ color }): string => color || Color.BLACK};
`;
