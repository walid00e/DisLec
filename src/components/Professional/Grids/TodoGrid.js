import './TodoGrid.css'

function TodoGrid(props){
    return (
        <div className="grid-container-todo-grid">
            {props.children}
        </div>
    );
}

export default TodoGrid;