import React from 'react';
import { Dropdown } from 'semantic-ui-react';

class UserDropDown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e, { value }) {
    this.props.updateSelectedUser(value, this.props.fromOrTo);
  }

  render() {
    return (
      <div>
        <Dropdown
          placeholder="Search user"
          className='icon'
          onChange={this.handleChange}
          search
          selection
          options={this.props.usersDropDownOption}
        />
      </div>
    );
  }
}

export default UserDropDown;
