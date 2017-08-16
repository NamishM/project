import React, { Component } from 'react';
import Header from './Header.jsx';
import {
  Link,
} from 'react-router-dom';
import { getAvailableDatabases } from '../api'

class AvailableDatabases extends Component {
  constructor(props){
    super(props);

    this.state = {
      databases: []
    };
  }

  componentDidMount() {
    getAvailableDatabases().then((data) =>
      this.setState({ databases: data })
    )
  }

  componentWillReceiveProps() {
    getAvailableDatabases().then((data) =>
      this.setState({ databases: data })
    )
  }

  render() {
    return (
      <div>
        <Header>Available Databases</Header>
        <table>
          <thead>
            <tr>
              <th className="c1">Name</th>
              <th className="c7">Value</th>
            </tr>
          </thead>
          <tbody>
            {this.state.databases.map((database) => (
              <tr>
                <td><Link to={`/${database.ConnectionName}`}>{database.ConnectionName}</Link></td>
                <td>{database.ConnectionString}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default AvailableDatabases;
