import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom';
import Header3 from './Header3'
import ObjectDefinition from './ObjectDefinition';

class DbEntity extends Component {
  // = ({entity, schemaName, instance, download = false, Columns, Row}) => (
  constructor(props){
    super(props);
    this.state = {
      viewObjectDefinition: false,
    };
  }
  render(){
    const {
      entity, schemaName, instance, download = false, Columns, Row
    } = this.props;
    
    return (
      <div>
        <Header3>
          <Link to={`/${instance}/${schemaName}/${entity.name}`}>
            {entity.name}
          </Link>
          {download ? 
            <a 
              href={`/${instance}/${schemaName}/${entity.name}?asClass=true`}
              download
            >- get C# class</a> : null
          }
        </Header3>
        <div>{entity.desc}</div>
        <table>
          <thead>
            <Columns />
          </thead>
          <tbody>
            {entity.ids.map((id) => (
              <Row
                key={id}
                entity={entity.entities[id]}
                name={entity.name}
                instance={instance}
                schemaName={schemaName}
              />
            ))}
          </tbody>
        </table>
        <h4>
          <a
            onClick={() => this.setState({viewObjectDefinition: !this.state.viewObjectDefinition})}
          >{this.state.viewObjectDefinition ? 'hide' : 'view'} {entity.name} definition</a>
        </h4>
        {this.state.viewObjectDefinition ?
          <ObjectDefinition
            instance={instance}
            schema={schemaName}
            name={entity.name}
          /> : null
        }
      </div>
    );
  }
}

export default DbEntity;