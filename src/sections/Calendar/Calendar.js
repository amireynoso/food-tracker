import React from 'react';
import { withRouter } from 'react-router-dom';
import DayPicker from 'react-day-picker';
import moment from 'moment';
import MomentLocaleUtils from 'react-day-picker/moment';
import 'moment/locale/es';

import 'react-day-picker/lib/style.css';
import './Calendar.css';

class Calendar extends React.Component {
  render() {
    return (
      <DayPicker
        localeUtils={MomentLocaleUtils}
        showOutsideDays
        locale="es"
        onDayClick={this.handleDayClick.bind(this)}
      />
    );
  }

  handleDayClick(day) {
    const date = moment(day).format('DD-MM-YYYY');
    this.props.history.push(`/day/${date}`);
  }
}

export default withRouter(Calendar);
