import { useLocation } from "react-router-dom";
import TodoItem from "./TodoItem";

function TodoList(props) {
    const location = useLocation();

    return (
        <div>
            <h1>Todo 목록 리스트</h1>
            {location.state == null ?
                <TodoItem data = {"해당 정보를 가져오지 못했습니다"} />
                :
                location.state.map((todo, idx) =>{
                    return(
                        <TodoItem key={idx} data = {todo} />
                    )
                })
            }
        </div>
    );

}

export default TodoList;