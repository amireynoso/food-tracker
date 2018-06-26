import React from 'react';
import styled from 'styled-components';

const meals = ['Breakfast', 'Lunch', 'Snack', 'Dinner'];

const Title = styled.h2`
  font-size: 20px;
`;

export default function Day() {
  return meals.map(meal => <Title>{meal}</Title>);
}
