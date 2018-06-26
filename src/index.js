import React from 'react';
import ReactDOM from 'react-dom';
import FoodTracker from './FoodTracker';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<FoodTracker />, document.getElementById('root'));
registerServiceWorker();
