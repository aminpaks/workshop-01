import React from 'react';
import { Container } from './Item.styled';

export const Item = ({ title, creditCardType }) => (
  <Container>
    <span>{title}</span>
    <strong>{creditCardType}</strong>
  </Container>
);
