import React, {useState, useEffect} from "react";

function CountPage(props){
    const capacity = 10;
    const[cnt, setCnt] = useState(0); // useState, Hook 때문에 상태를 관리할 수 있게 됨(양방향 통신). 원래 그냥 변수만 선언 시 반영이 바로 안됨
    const [isFull, setIsFull] = useState(false);
    const [isEmpty, setIsEmpty] = useState(false);

    const cntUpHandler = () => {
        setCnt((cnt) => cnt+1);
    }

    const cntDownHandler = () => {
        setCnt((cnt) => cnt-1);
    }
    useEffect( ()=> {
        setIsFull(cnt >= capacity);
        setIsEmpty(cnt <= 0);
    }, [cnt]);

    return(
        <div>
            <p>
                {`입장인원 : ${cnt}`}
            </p>
            <button onClick={cntUpHandler} disabled={isFull}>입장</button>
            <button onClick={cntDownHandler} disabled={isEmpty}>퇴장</button>
            {isFull && <p style={{color:"red"}}>정원이 가득찼습니다.</p>}
        </div>
    );
}

export default CountPage;