import React, { Component } from 'react';

import Employee from './models/Employee';

// components
import Header from './components/Header';
import EmployeeList from './components/EmployeeList';
import EmployeeEditor from './components/EmployeeEditor';
class App extends Component {
  // constructor
  constructor(){
    super();
    this.state = {
      employees: [ 
        new Employee(0,'Mark Jowen Medes', 12345678, 'Back End'), 
        new Employee(1,'Clark Owen Amor', 23456789, 'Front End'),
        new Employee(2,'Delfin Danias', 345678910, 'Fullstack') 
      ],
      selectedEmployee: null,
    };
    this.selectEmployee = this.selectEmployee.bind(this);
    this.refresh = this.refresh.bind(this);
  }
  // selectEmployee
  selectEmployee(employee){
    this.setState({selectedEmployee: employee})
    console.log({selectedEmployee: employee})
  }
  // refresh
  refresh(){
    this.setState(this.state)
  }
  render() {
    return (
      <div id="app">
        <Header />
        <div className="main-container">
          {/* // render EmployeeList here // render EmployeeEditor here */}
          <EmployeeList employees={this.state.employees} selectEmployee={this.selectEmployee}/>
          <EmployeeEditor selected={this.state.selectedEmployee} refreshList={this.refresh}
          />
        </div>
      </div>
    );
  }
}

export default App;
