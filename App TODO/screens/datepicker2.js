import React, { Component } from 'react';
import DatePicker from 'react-native-datepicker';

class Datepicker2 extends Component {
  constructor(props) {
    super(props);
    const {init} = this.props;
    this.state = {
      date: init,
    }
  }

  onDateChange = (date) => {
    this.setState({ date: date });
    const { getDate } = this.props;
    getDate && getDate(date)
  }

  render() {
    return (
      <DatePicker
        style={{ width: 200 }}
        date={this.state.date}
        mode="date"
        placeholder="Select date"
        format="DD-MM-YYYY"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        customStyles={{
          dateIcon: {
            position: 'absolute',
            left: 0,
            top: 4,
            marginLeft: 0
          },
          dateInput: {
            marginLeft: 36
          }
        }}
        onDateChange={this.onDateChange}
      />
    );
  }
}

export default Datepicker2;