import React from 'react';
import { Container } from './Main.styled';
import { Item } from './Item';

export const Main = ({ data }) => (
  <Container>
    {data.map(item => (
      <Item key={item.id} {...item} />
    ))}
  </Container>
);
