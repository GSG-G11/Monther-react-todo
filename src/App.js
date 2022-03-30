import React from "react";
import "./index";
import Navbar from "./Components/Navbar";
import Popup from "./Components/Popup";

class App extends React.Component {
  state = {
    popUpDisplay: false,
  };

  handleOpenPopUp = () =>
    this.setState((prevState) => ({ popUpDisplay: true }));
  handleClosePopUp = () =>
    this.setState((prevState) => ({ popUpDisplay: false }));

  render() {
    const { popUpDisplay } = this.state;
    return (
      <>
        <Navbar openPopUp={this.handleOpenPopUp} />
        <hr />
        <Popup trigger={popUpDisplay} closePopUp={this.handleClosePopUp} />
      </>
    );
  }
}

export default App;
