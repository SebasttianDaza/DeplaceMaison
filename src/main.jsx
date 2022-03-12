import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Nav from './Components/Nav/nav';
import Header from './Components/Header/header';

class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Nav />
        <Header />
      </div>
    );
  }
}

ReactDOM.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>,
  document.getElementById('root')
);
