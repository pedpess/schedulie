import React from "react";
import styled from "styled-components/native";
import { OpeningHours } from "./src/screens";

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export default function App() {
  return (
    <Container>
      <OpeningHours />
    </Container>
  );
}
