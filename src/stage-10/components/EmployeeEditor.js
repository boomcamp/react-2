import React, { Component } from 'react';

export default class EmployeeEditor extends Component{
    constructor(){
        super();
        this.state = {
            employee: null,
            originalEmployee: null,
            notModified: false
        }
    }

    componentWillReceiveProps(prevProp){
        if(prevProp.selected !== this.props.selected){
            this.setState({
              employee: Object.assign({}, prevProp.selected),
              originalEmployee: prevProp.selected,
              notModified: false
            })
        }
    }
    
    handleChange(propName, val){
        if(this.state.notModified){this.setState({ notModified: false })};
        
        var employeeCopy = Object.assign({}, this.state.employee);
        employeeCopy[propName] = val;
        this.setState({employee: employeeCopy});
    }

    save = () =>{
        this.state.originalEmployee.updateName(this.state.employee.name);
        this.state.originalEmployee.updatePhone(this.state.employee.phone);
        this.state.originalEmployee.updateTitle(this.state.employee.title);
        this.setState({ notModified:true })
        this.props.refreshList()
    }

    cancel = () =>{
        this.setState({
            employee: Object.assign({}, this.props.selected),
            notModified: true
        })
    }

    render(){
        return(
            <div className="infoCard">
                {this.state.employee ? (
                    <div>
                        <span id="employeeID"> ID: {this.state.employee.id+1} </span>
                        <p id="employeeTitle"> {this.state.originalEmployee.name} </p>
                        <br />
                        <button
                            id="saveBtn"
                            className="confirmationButton"
                            disabled={this.state.notModified}
                            onClick={this.save}
                        >
                        {' '}
                        Save{' '}
                        </button>
                        <button
                            className="neutralButton"
                            disabled={this.state.notModified}
                            onClick={this.cancel}
                        >
                        {' '}
                        Cancel{' '}
                        </button>
                        <br />
                        <span className="placeholderText"> Name </span>
                        <input
                            className="materialInput"
                            value={this.state.employee.name}
                            onChange={e => {
                                this.handleChange('name', e.target.value);
                        }}
                        />
                        <span className="placeholderText"> Phone Number </span>
                        <input
                            className="materialInput"
                            value={this.state.employee.phone}
                            onChange={e => {
                                this.handleChange('phone', e.target.value);
                        }}
                        />
                        <span className="placeholderText"> Title </span>
                        <input
                            className="materialInput"
                            value={this.state.employee.title}
                            onChange={e => {
                                this.handleChange('title', e.target.value);
                        }}
                        />
                    </div>
                ): (
                    <p id="noEmployee"> No Employee Selected </p>
                )}
            </div>
        );
    }
}