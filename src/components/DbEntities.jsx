import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom';

import Header from './Header.jsx';
import Header2 from './Header2';
import Loading from './loading/Loading';

class DbEntities extends Component {
  constructor(props){
    super(props);

    this.getData = props.getData;

    this.state = {
      match: props.match,
      ids: [],
      entities: {},
      isLoading: false,
    };
  }

  componentDidMount() {
    this.setState({ isLoading: true});
    this.getData(this.state.match.params).then((data) => 
      this.setState({ ids: data.ids, entities: data.entities, isLoading: false })
    );
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ isLoading: true});
    this.getData(nextProps.match.params).then((data) => 
      this.setState({ ids: data.ids, entities: data.entities, isLoading: false })
    );
  }

  render() {
    const instance = this.state.match.params.instance;
    const entities = this.state.entities;
    const {
      DbEntity: Entity,
      title,
      type,
    } = this.props;
    return (
      <div>
        <Header>{title}</Header>
        {this.state.isLoading ?
          <Loading text="Loading..." /> :
          this.state.ids.map((id) => (
            <div key={id}>
              <Header2>
                <Link to={`/${instance}/${entities[id].name}`}>
                  {entities[id].name}
                </Link>
                -
                <Link to={`/${instance}/${entities[id].name}/${type}`}>
                  {type} only
                </Link>
              </Header2>
              <div>{entities[id].desc}</div>
              {entities[id].ids.map((pid) => (
                <Entity
                  entity={entities[id].entities[pid]}
                  schemaName={entities[id].name}
                  instance={instance}
                  key={pid}
                />
              ))}
            </div>
          ))
        }
      </div>
    );
  }
}

export default DbEntities;
