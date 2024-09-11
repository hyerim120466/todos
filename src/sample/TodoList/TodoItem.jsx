import React, { useState } from "react";

const TodoItem = ({
  id,
  text,
  isDone,
  onEdit,
  onDel,
  onMode,
  onSave,
  isMod,
}) => {
  const [txt, setTxt] = useState(text);
  return (
    <li className={isDone ? "on" : ""}>
      <div>
        {/* <span onClick={() => onEdit(id)}>✓</span> */}
        <input
          type="checkbox"
          checked={isDone}
          onChange={(e) => onEdit(e, id)}
        />
        {!isMod ? (
          <p>
            <em>{text}</em>
            <button onClick={() => onMode(id)}>수정</button>
          </p>
        ) : (
          <p>
            <input
              type="text"
              value={txt}
              onChange={(e) => setTxt(e.target.value)}
            />
            <button onClick={() => onSave(id, txt)}>저장</button>
          </p>
        )}
      </div>
      <button onClick={() => onDel(id)}>삭제</button>
    </li>
  );
};

export default TodoItem;
