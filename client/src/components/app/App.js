import { Component, httpStatus, React, styled } from 'appReact';

import AppHeader from 'components/appHeader/AppHeader';
import data from 'data/data.json';

class App extends Component {
  state = {
    response: ''
  };

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    console.log('callApi');

    const response = await fetch('http://localhost:5000/api/hello');
    console.log('response', response, response.body);

    const body = await response.json();
    console.log('body', body);

    if (response.status !== httpStatus.OK) throw Error(body.message);

    return body;
  };

  render() {
    const { response } = this.state;
    console.log(response);

    return (
      <div>
        <AppHeader />
        <AppIntro>To get started, edit <code>{data.path}</code> and save to reload.</AppIntro>

        <p className="App-intro">{response}</p>
      </div>
    );
  }
}

const AppIntro = styled.p`
  font-size: large;
  text-align: center;
`;

export default App;