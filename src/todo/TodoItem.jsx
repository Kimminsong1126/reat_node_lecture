function TodoItem(props) {

    return (
        <div>
            {props.data.id}<br/>
            {props.data.subject}<br/>
            {JSON.stringify(props.data.completed)}<br/>
        </div>
    );

}

export default TodoItem;