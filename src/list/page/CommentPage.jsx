import React from "react";
import Comments from "../component/Comments";

const comments = [
    {name : "하이요",
     comment : "안녕하세요, 반갑습니다."
    },
    {name : "예시입니다",
     comment : "안녕하세요, 예시입니다."
    },
    {name : "테스트",
     comment : "안녕하세요, 테스트입니다."
    },
    {name : "김보석",
     comment : "어디야"
    }
];

function CommentPage(props) {
    return (
        <div>
            { // 태그로 감싸져있지만 스크립트 언어를 쓸 수 있음. jsx의 특징
            comments.map( (comment) => { // map을 통해 반복함
                return( //props를 전달받고 앨리먼츠를 생성 후 반환을 해야 렌더링이 가능함
                    <Comments name = {comment.name} comment = {comment.comment} />
                )
            })
            }
        </div>
    );

}

export default CommentPage;