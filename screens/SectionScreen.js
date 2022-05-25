import React from 'react';
import styled from "styled-components";

class SectionScreen extends React.Component {
  render() {
    return (
      <Container>
        <Text>Section Screen</Text>
      </Container>
    )
  }
}

export default SectionScreen;

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Text = styled.Text`

`;