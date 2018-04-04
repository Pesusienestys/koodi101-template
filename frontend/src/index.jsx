/******** DO NOT DELETE THESE LINES ********/

import React, { Component } from 'react';
import ReactDOM from 'react-dom';

var lol = "possu";

import './assets/stylesheets/style.css'

const baseURL = "http://195.201.28.133:9000";

/****** ADD YOUR CODE AFTER THIS LINE ******/

const getGreetingFromBackend = async () => {
  try {
    const url = `${baseURL}/api/greeting`
    console.log("Getting chat from "+url)
    const response = await fetch(url);
    const shit = await response.json()
    return shit['greeting']
  } catch (error) {
    console.error(error);
  }
  return { chat :"Could not get chat from backend"};
};

const getTempFromBackend = async () => {
  try {
    const url = `${baseURL}/api/chats`
    console.log("Getting chat from "+url)
    const response2 = await fetch(url);
    const shit2 = await response2.json()
    const shit21 = await shit2.results
    console.log(shit21)
    const shitray = await shit21.slice(Math.max(shit21.length - 1, 0))
    console.log("moii2")
    return await shitray
  } catch (error) {
    console.error(error);
  }
  return { chat :"Could not get saa from backend"};
};


const BackendGreeting = (props) => (
  <div><h1>Sää on {props.chat}.</h1></div>
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
    const response2 = await getTempFromBackend();
    this.setState({chat: response});
  }

  render() {

    return (
      <BackendGreeting chat={this.state.chat} />,
      document.getElementById("ismo").innerHTML="Ismo",
      <div></div>
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
