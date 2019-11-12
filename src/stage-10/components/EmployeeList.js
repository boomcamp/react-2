import React, { Component } from 'react';

export default class EmployeeList extends Component{
    render(){
        return( 
            <div>
                <ul className="listContainer">
                    {this.props.employees.map(x=>
                        <li className="listText" key={x.id} onClick={() => this.props.selectedEmp(x)}>
                           {x.name} 
                        </li>
                    )}
                </ul>
            </div>
        )
    }
}