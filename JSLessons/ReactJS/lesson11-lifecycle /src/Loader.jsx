// https://reactgo.com/react-display-loading-screen/

import React from 'react';

class Loader extends React.Component {
  state = {
    loading: true
  };

  componentDidMount() {
    this.fakeRequest().then(() => {
      const el = document.querySelector(".loader-container");
      if (el) {
        el.remove();  // removing the spinner element
        this.setState({ loading: false }); // showing the app
      }
    });
  }

  fakeRequest = () => {
    return new Promise(resolve => setTimeout(() => resolve(), 5000));
  };

  render() {
    if (this.state.loading) {
      return null; //app is not ready (fake request is in process)
    }

    return (
      <div className="App">
        <h1>Hello React</h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
        <img src="https://avatars2.githubusercontent.com/u/39895671?s=400"
        alt="react-icon"/>
      </div>
    );
  }
}

export default Loader;