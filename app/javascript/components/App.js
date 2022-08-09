import React from "react"
import PropTypes from "prop-types"
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"

import Greeting from "./Greeting"
import store from '../redux/store';


class App extends React.Component {
  render () {
    return (
      <Provider store={store}>
        <Router>
          <Routes>
            <Route path="/" element={<Greeting />} />
          </Routes>
        </Router>
      </Provider>
    );
  }
}

export default App