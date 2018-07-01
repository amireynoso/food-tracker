import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import styled from 'styled-components';

import Header from './components/Header';
import Day from './sections/Day';
import Calendar from './sections/Calendar';

const Wrapper = styled.div`
  font-family: 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
    'Segoe UI Symbol';
  font-size: 16px;
  color: #222;
`;

class FoodTracker extends Component {
  render() {
    return (
      <Router>
        <Wrapper>
          <Header />
          {/* <Route path="/meal/:mealId" component={MealShow} />
          <Route path="/meal/:mealId/edit" component={MealEdit} />
          <Route path="/meal/new" component={MealNew} />
          <Route path="/type" component={Type} />*/}
          <Route exact path="/" component={Calendar} />
          <Route path="/day/:dayId?" component={Day} />
        </Wrapper>
      </Router>
    );
  }
}

export default FoodTracker;
