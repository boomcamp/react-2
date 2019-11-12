import React, { Component } from 'react'

export default class EmployeeList extends Component {
    render() {
        return (
            <div>
                <ul className="listContainer">
                    {this.props.employees.map(employee => {
                        return( 
                            <li className="listText" key={employee.id} onClick={() => this.props.selectEmployee(employee)}>
                                {' '}{employee.name}{' '}
                            </li>
                        )
                        })
                    }
                </ul>
            </div>
        );
    }
}
