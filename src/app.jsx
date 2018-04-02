import React, { Component } from 'react';
import ReactDOM from 'react-dom'

const MyTest = () => 'hello my test22222';

class HelloMessage extends React.Component { render() {
    return (
      <div>
        <MyTest />
        <div>
          Hello 22222 222 {this.props.name}
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <HelloMessage name="Nikita" />,
  // document.body
  document.getElementById('root')
);

module.hot.accept(); // hot loader
