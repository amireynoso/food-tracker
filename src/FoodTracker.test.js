import React from 'react';
import ReactDOM from 'react-dom';
import FoodTracker from './FoodTracker';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<FoodTracker />, div);
  ReactDOM.unmountComponentAtNode(div);
});
