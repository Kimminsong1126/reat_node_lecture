import React, {use, useState} from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/axios";

function UserLogin(props) {
    const [id, setId] = useState("");
    const [pwd, setPwd] = useState("");
    // 훅을 사용해서 이동을 담당하는 변수 선언
    const moveUrl = useNavigate();

    const loginHandler = async(event, id, pwd) => {
        const data = {
            id ,
            pwd
        }
        //const response = await axios.get(url, {param : data});
        //const response = await axios.post(url, data); // await을 통해 비동기가 아닌 동기 통신으로 볼 수 있음
        const response = await api.get("/todos");
        console.log(response);
        
        moveUrl("/todo/list",
            {state : response.data}
        );
    };
    // 사용자가 값을 작성할 때 마다 값을 저장해 이벤트를 발생함 -> 상태관리
    const idHandler = (event) => {
        setId(event.target.value);
    }
    const pwdHandler = (event) => {
        setPwd(event.target.value);
    }

    return (
       <div>
            아이디: <input type="text" value={id} onChange={idHandler}/><br/>
            패스워드: <input type="password" value={pwd} onChange={pwdHandler}/><br/>
            <button onClick={() => loginHandler(id, pwd)}>login</button>
       </div> 
    );
}

export default UserLogin;