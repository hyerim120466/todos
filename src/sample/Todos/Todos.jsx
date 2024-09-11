import { useRef, useState } from "react";
import TodoInput from "../TodoInput/TodoInput";
import TodoList from "../TodoList/TodoList";
import "./Todos.scss";

const Todos = () => {
  const [todos, setTodos] = useState([]);
  const no = useRef(1);
  // {id: 1 , text: 'xxx', isDone:false}
  /*   const [isMod, setIsMod] = useState(false); // 테스트용 삭제 */

  // 추가
  const onAdd = (text) => {
    setTodos([
      ...todos,
      {
        id: no.current++,
        text,
        isDone: false,
        isMod: false,
      },
    ]);
  };

  // 삭제
  const onDel = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // 수정
  const onEdit = (e, id) => {
    const { checked } = e.target;
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: checked } : todo
      )
    );
  };

  // 데이터 수정
  const onMode = (id) => {
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, isMod: true } : todo))
    );
  };

  // 데이터 저장
  const onSave = (id, text) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isMod: false, text } : todo
      )
    );
  };

  return (
    <div className="Todos">
      <h2>할 일 만들기</h2>
      <TodoInput onAdd={onAdd} />
      <TodoList
        todos={todos}
        onDel={onDel}
        onEdit={onEdit}
        onMode={onMode}
        onSave={onSave}
      />
    </div>
  );
};

export default Todos;

/* 
    1. css 처리는 html/css 처럼 전체 스타일 style.scss 만들고
       연결해서 사용가능 ( 모든 css style.css 관리) : 나쁜 예

    2. 보통은 
       컴포넌트 하나에 css(scss) 하나씩 연결 처리
       
    3. 이후 설명....   
*/
