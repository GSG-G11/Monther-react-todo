import React from "react";
import "./index";
import Navbar from "./Components/Navbar";
import Popup from "./Components/Popup";

class App extends React.Component {
  state = {
    popUpDisplay: false,
    toDos : [],
  };

  handleOpenPopUp = () => this.setState({ popUpDisplay: true });
  handleClosePopUp = () => this.setState({ popUpDisplay: false });
  addToDos = (e) => {
    //  const toDoData = { title: 'M', desc: 'mmmmmmmmmmmmmm', date: '15/3/2020' };
    const { value } = e.target;
    const { toDos } = this.state;
    toDos.push(value);
    console.log(this.state);
  }

  render() {
    const { popUpDisplay } = this.state;
    return (
      <>
        <Navbar openPopUp={this.handleOpenPopUp} />
        <hr />
        <Popup trigger={popUpDisplay} closePopUp={this.handleClosePopUp} addToDos={this.addToDos}/>
      </>
    );
  }
}

export default App;
