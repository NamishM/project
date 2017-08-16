import React, { Component } from 'react';
import { getObjectDefinition } from '../api';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/styles';
import sqlFormatter from "sql-formatter";

class ObjectDefinition extends Component {
  constructor(props){
    super(props);

    this.state = {
      instance: props.instance,
      schema: props.schema,
      name: props.name,
      text: '',
      isFormatted: false
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  
  componentDidMount() {
    getObjectDefinition(
      {
        instance: this.state.instance,
        schema: this.state.schema,
        name: this.state.name,
      }
    ).then((data) => 
      this.setState({ text: data })
    );
  }

  componentWillReceiveProps({instance, schema, name}) {
    getObjectDefinition({instance, schema, name}).then((data) => 
      this.setState({ text: data })
    );
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <div
        className="objectDefinition"
      >
        <label>
          format
          <input
            name="isFormatted"
            type="checkbox"
            checked={this.state.isFormatted}
            onChange={this.handleInputChange}
          />
        </label>
        <SyntaxHighlighter wrapLines language='sql' style={atomOneDark}>
            {this.state.isFormatted ? sqlFormatter.format(this.state.text) : this.state.text}
        </SyntaxHighlighter>
      </div>
    );
  }
}

export default ObjectDefinition;