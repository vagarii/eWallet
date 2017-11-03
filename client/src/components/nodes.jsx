import React from 'react';
import { Dropdown } from 'semantic-ui-react';

class NodeDropDown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e, { value }) {
    this.props.updateSelectedNode(value, this.props.fromOrTo);
  }

  render() {
    return (
      <div>
        <Dropdown
          placeholder="Search valid node"
          className='icon'
          onChange={this.handleChange}
          search
          selection
          options={this.props.nodeDropDownOptions}
        />
      </div>
    );
  }
}

export default NodeDropDown;
