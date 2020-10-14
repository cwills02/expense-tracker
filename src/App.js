import React from 'react';

import Auxillary from './Auxillary';
import Header from './Header/Header';
import classes from './App.module.css';

class App extends React.Component {
  state = {
    rows: [],
    inputName: '',
    inputDate: '',
    inputAmount: '',
    sum: 0,
  }

  totalExpenseHandler() {
    let sum = parseInt(this.state.sum);
    let amount = parseInt(this.state.inputAmount);
    let newSum = sum + amount;
    this.setState({
      sum: newSum,
    })
  };

  onInputNameChange(e) {
    this.setState({
      inputName: e.target.value
    });
  }

  onInputDateChange(e) {
    this.setState({
      inputDate: e.target.value
    });
  }

  onInputAmountChange(e) {
    this.setState({
      inputAmount: e.target.value
    });
  }

  addRow() {
    let rows = this.state.rows;
    let inputName = this.state.inputName;
    let inputDate = this.state.inputDate;
    let inputAmount = this.state.inputAmount;
    rows.push([`${inputName}: ${inputDate} ------ $${inputAmount}`]);
    this.setState({
      rows
    });
    this.totalExpenseHandler();
    this.clearFields();
  }

  clearFields() {
    let inputName = this.state.inputName;
    let inputDate = this.state.inputDate;
    let inputAmount = this.state.inputAmount;
    inputName = '';
    inputDate = '';
    inputAmount = '';
    this.setState({
      inputName,
      inputDate,
      inputAmount
    });
  }

  renderTableData() {
    let rows = this.state.rows;
    return (
      <tr className={classes.Rows}>
        {
          rows.map((value, index) => {
            return(
            <td className={classes.Td} key={index}>
              {value}
              <button onClick={() => this.deleteRowHandler(index)}>Delete Expense</button>
            </td>
            );
          })
        }
      </tr>
    );
  }

  deleteRowHandler(index) {
    let rows = this.state.rows;
    rows.splice(index, 1);
    this.setState({ 
      rows,
    });
  }

  render() {
    return(
      <Auxillary>
        <Header />
        <h4>
          Name:
          <input type="text" 
            value={this.state.inputName}
            onChange={(e) => this.onInputNameChange(e)}
          />
        </h4>
        <div className={classes.InputFields}>
          <h4>
            Date:
            <input type="text" 
            value={this.state.inputDate}
            onChange={(e) => this.onInputDateChange(e)}
            />
          </h4>
          <h4>
            Amount:
          <input type="text" 
          value={this.state.inputAmount}
          onChange={(e) => this.onInputAmountChange(e)}
          />
          <div>
          </div>
          </h4>
        </div>
        <button onClick={() => this.addRow()}>
          Add Expense
        </button>
        <h4>Total Expense: ${this.state.sum}</h4>
        <div className={classes.Wrapper}>
          <table>
            <thead>
              <tr>
                <th>
                  Expense
                </th>
              </tr>
            </thead>
            <tbody>
            {this.renderTableData()}
            </tbody>
          </table>
        </div>
      </Auxillary>
    );
  }
}

export default App;
