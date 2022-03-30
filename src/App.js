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
  deleteToDo = (id) => {
    const toDosCards = this.state.toDos.filter((e) =>
      e.id !== id ? true : false
    );
    this.setState({ toDos: toDosCards });
  };

  render() {
    const { popUpDisplay, type, toDos } = this.state;
    return (
      <>
        <Navbar openPopUp={this.handleOpenPopUp} />
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
                id={task.id}
                title={task.title}
                desc={task.desc}
                date={task.date}
                type={task.type}
                deleteToDo={this.deleteToDo}
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
