import * as React from 'react';

type props = {
  labelOn: string,
  labelOff: string,
}

type state = {
  isChecked: boolean,
}

export default class CheckboxWithLabel extends React.Component<props, state> {
  state = {
    isChecked: false,
  }

  onChange = () => {
    this.setState({ isChecked: !this.state.isChecked });
  }

  render() {
    return (
      <label htmlFor="">
        <input
          type="checkbox"
          checked={this.state.isChecked}
          onChange={this.onChange}
        />
        {this.state.isChecked ? this.props.labelOn : this.props.labelOff}
      </label>
    );
  }
}