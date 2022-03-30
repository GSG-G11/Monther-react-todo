const Navbar = (props) => {
    console.log("this is props" + props);
    const { openPopUp } = props;
    return(
        <nav>
            <h2>Manege Your Tasks</h2>
            <div className="dark-add">
                <img src="#" alt="Dark-mode Icon"/>
                <button onClick={ openPopUp }>Add Task</button>
            </div>
        </nav>
    )
}

export default Navbar;