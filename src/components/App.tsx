import * as React from 'react';
import CheckboxWithLabel from './CheckboxWithLabel/CheckboxWithLabel';

type AppProps = {
  message: string,
};

type AppState = {
  count: number,
}

// STATELESS FUCTIONAL COMPONENT
class App extends React.Component<AppProps, AppState> {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {this.props.message}
        <CheckboxWithLabel
          labelOn="On"
          labelOff="Off"
        />
      </div>
    );
  }
}


export default App;
