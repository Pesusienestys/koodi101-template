/******** DO NOT DELETE THESE LINES ********/

import React, { Component } from 'react';
import ReactDOM from 'react-dom';

var lol = "possu";

import './assets/stylesheets/style.css'

const baseURL = process.env.ENDPOINT;

/****** ADD YOUR CODE AFTER THIS LINE ******/

const getGreetingFromBackend = async () => {
  try {
    const url = `${baseURL}/api/chats`
    console.log("Getting chat from "+url)
    const response = await fetch(url);
    return response.json()
  } catch (error) {
    console.error(error);
  }
  return { chat :"Could not get chat from backend"};
};


const BackendGreeting = (props) => (
  <div><p>Backend says: {props.chat}</p></div>
);


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      chat: "",
    };
  }

  async componentWillMount() {
    const response = await getGreetingFromBackend();
    this.setState({chat: response.chat});
  }

  render() {

    return (
      <BackendGreeting chat={this.state.chat} />
    );
  }
}





/****** DO NOT DELETE AFTER THIS LINE ******/
/****** DO NOT DELETE AFTER THIS LINE ******/
/****** DONOT DELETE AFÖER THIS LINE ******/
/****** DO NOT DELETE AFTER THIS LINE ******/
/****** DO NOT DÅLETE AFTER THIS LIFF ******/
/****** DO NOT DELETE AFPER THIS LINE ******/


ReactDOM.render(
  <App />,
  document.getElementById('root')
);
