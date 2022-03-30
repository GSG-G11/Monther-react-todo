const Navbar = (props) => {
  const { openPopUp, numberOfToDos } = props;
  return (
    <nav>
      <h2>Manege Your Tasks</h2>
      <div className="dark-add">
        <p>You have <span>{numberOfToDos()}</span> ToDos</p>
        <button onClick={openPopUp}>Add Task</button>
      </div>
    </nav>
  );
};

export default Navbar;
