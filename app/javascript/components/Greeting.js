import React from "react"
import { Connect } from "react-redux"
import { createStructuredSelector } from "reselect"

const GET_GREETINGS_REQUEST = "GET_GREETINGS_REQUEST"
const GET_GREETINGS_SUCCESS = "GET_GREETINGS_SUCCESS"

function getGreetings() {
  return dispatch => {
    dispatch({ type: GET_GREETINGS_REQUEST });
    return fetch('v1/greetings.json')
      .then(response =>  response.json())
      .then((json) =>  {
        const data = {
          name: json.name,
          id: json.id
        }
        dispatch(getGreetingsSuccess(data))
      })
      .catch(error => console.log(error));
  };
};

export function getGreetingsSuccess(json) {
  return {
    type: GET_GREETINGS_SUCCESS,
    json
  };
};

class Greeting extends React.Component {
  render() {
    const { greetings } = this.props;
    const arr = []
    arr.push(greetings)
    const greetingList = arr.map((greeting) => {
      return <li key={greeting.id}>{greeting.name}</li>
    })

    return (
      <React.Fragment>
        <h2>How to say Hello World in different languages {this.props.greeting} </h2>
        <p>Click the button below to get a random greeting</p>
        <br/>
        <button className="btn" onClick={() => this.props.getGreetings()}>Get Greetings</button>
        <br />
        <ul>{greetingList}</ul>
      </React.Fragment>
    );
  }
}

const structuredSelector = createStructuredSelector({
  greetings: state => state.greetings,
})

const mapDispatchToProps = { getGreetings };

export default Connect(structuredSelector, mapDispatchToProps)(Greeting);
