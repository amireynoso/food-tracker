import React from 'react';
import styled from 'styled-components';
import Back from '../../components/Back';

const meals = ['Breakfast', 'Lunch', 'Snack', 'Dinner'];

const Title = styled.h2`
  font-size: 20px;
`;

export default function Day() {
  return (
    <div>
      <Back />
      {meals.map(meal => <Title key={meal}>{meal}</Title>)}
    </div>
  );
}
