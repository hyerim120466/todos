import { useRef, useState } from "react";
import "./TodoInput.scss";

const TodoInput = ({ onAdd }) => {
  const [text, setText] = useState("");
  const textRef = useRef(null);
  const changeInput = (e) => {
    setText(e.target.value);
  };
  const onSubmit = (e) => {
    // 페이지가 새로 고침되는 기본 동작을 막아준다
    // 이벤트가 발생했을 때 브라우저가 기본적으로 수행하는 동작을 중단시킨다
    e.preventDefault();
    if (!text.trim()) return;
    onAdd(text);
    setText("");
    textRef.current.focus();
  };
  return (
    <form className="TodoInput" onSubmit={onSubmit}>
      <input type="text" ref={textRef} value={text} onChange={changeInput} />
      <button type="submit">추가</button>
    </form>
  );
};

export default TodoInput;
