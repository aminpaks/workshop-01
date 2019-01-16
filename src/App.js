import React, { Component } from 'react';
import { Container } from './App.styled';
import { GlobalStyles } from './global.styled';
import { Main } from './Main';
import { data } from './data';

class App extends Component {
  render() {
    return (
      <>
        <GlobalStyles />
        <Container>
          <Main data={data} />
        </Container>
      </>
    );
  }
}

export default App;
