import React from 'react';
import styled from 'styled-components/native';
import useCustomFont from './src/hooks/useCustomFont';
import { OpeningHours } from './src/screens';

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export default function App(): React.ReactElement {
  useCustomFont();

  return (
    <Container>
      <OpeningHours />
    </Container>
  );
}
