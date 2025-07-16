import React, {useState} from "react";

function UserLogin(props) {
    const [id, setId] = useState("");
    const [pwd, setPwd] = useState("");
    const loginHandler = async(event, id, pwd) => {
        //const reponse = await axios.post()
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
            <from onSubmit={(event) => loginHandler(event, id, pwd)}>
                아이디: <input type="text" value={id} onChange={idHandler}/><br/>
                패스워드: <input type="password" value={pwd} onChange={pwdHandler}/><br/>
                <button type="submit">login</button>
            </from>
       </div> 
    );
}

export default UserLogin;