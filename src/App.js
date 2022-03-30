import React from "react";
import "./index";
import Navbar from "./Components/Navbar";
import Popup from "./Components/Popup";
import Filter from "./Components/Filter";
import Card from "./Components/Card";

class App extends React.Component {
  state = {
    popUpDisplay: false,
    type: "All",
    toDos: [],
  };

  numberOfToDos = () => {
    const numOfToDos = this.state.toDos.length;
    if(numOfToDos) return numOfToDos 
    return '0'
  };
  handleOpenPopUp = () => this.setState({ popUpDisplay: true });
  handleClosePopUp = () => this.setState({ popUpDisplay: false });
  changeType = (e) => this.setState({ type: e.target.value });
  addToDos = (e) => {
    e.preventDefault();
    const { title, desc, date, type } = e.target;
    const toDoData = {
      id: Date.now(),
      title: title.value,
      desc: desc.value,
      date: date.value,
      type: type.value,
    };
    this.setState((prevState) => {
      return { toDos: [...prevState.toDos, toDoData] };
    });
  };

  render() {
    const { popUpDisplay, type, toDos } = this.state;
    return (
      <>
        <Navbar
          openPopUp={this.handleOpenPopUp}
          numberOfToDos={this.numberOfToDos}
        />
        <hr />
        <Filter changeType={this.changeType} />
        <div className="cards">
          {toDos
            .filter((task) => {
              if (type === "All") return true;
              return task.type === type;
            })
            .map((task) => (
              <Card
                title={task.title}
                desc={task.desc}
                date={task.date}
                type={task.type}
              />
            ))}
        </div>
        <Popup
          trigger={popUpDisplay}
          closePopUp={this.handleClosePopUp}
          addToDos={this.addToDos}
        />
      </>
    );
  }
}

export default App;
