import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

import Nav from './Components/Nav/nav'

class Main extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <Nav />
      </div>
    )
  }
}


ReactDOM.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>,
  document.getElementById('root')
)
