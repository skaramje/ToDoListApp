function App(){
    const [ todos, setTodos] = React.useState([
        {
            text: 'learn react',
            isCompleted: false,
        },
        {
            text: 'meet friend for lunch',
            isCompleted: false,
        },
        {
            text: 'build todo app',
            isCompleted: false,
        }
    ]);
    
    const addTodo = (text) => {
        const newTodos = [...todos,{text:text, isCompleted:false}];
        setTodos(newTodos);
    }

    const removeTodo = e => {
        const index = Number(e.target.id);
        /* key also works instead of id (curiosity sake) */
        let temp = [...todos];
        temp.splice(index,1);
        setTodos(temp);
    }

    return(
        <>
        {todos.map((todo, i) =>(
        <div className='todo' id={i} key={i} onClick={removeTodo}>{todo.text}</div>
        ))}
        
        <TodoForm addTodo={addTodo}/>
        </>
    );
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);