import React, { Component } from 'react';
import { Container } from './App.styled';
import { GlobalStyles } from './global.styled';

class App extends Component {
  render() {
    return (
      <>
        <GlobalStyles />
        <Container>
          <div>Add your components here!</div>
        </Container>
      </>
    );
  }
}

export default App;
