import React, { Component } from 'react'

export class EmployeeList extends Component {
    
    render() {
        return (
            <div>
                <ul className='listContainer'>
                    {this.props.employees.map(employee=>{
                        return <li className='listText' key={employee.id} onClick={()=>{
                            this.props.selectEmployee(employee)
                        }}>{employee.name}</li>
                    })}
                </ul>
            </div>
        )
    }
}

export default EmployeeList

