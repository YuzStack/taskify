import { AiFillDelete, AiFillEdit } from 'react-icons/ai';
import { MdCancel, MdDone } from 'react-icons/md';

import '../styles/styles.css';
import type { Todo } from '../types/todo';
import { useEffect, useRef, useState } from 'react';

interface SingleTodoProps {
  todo: Todo;
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

export default function SingleTodo({ todo, setTodos }: SingleTodoProps) {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [editInpValue, setEditInpValue] = useState<string>(todo.todo);

  const handleDone = function (todoId: string) {
    setTodos(curTodos =>
      curTodos.map(todo =>
        todo.id === todoId ? { ...todo, isDone: !todo.isDone } : todo,
      ),
    );
  };

  const handleDelete = function (todoId: string) {
    setTodos(curTodos => curTodos.filter(todo => todo.id !== todoId));
  };

  const handleUpdate = function (
    e: React.SubmitEvent<HTMLFormElement>,
    todoId: string,
  ) {
    e.preventDefault();

    setTodos(curTodos =>
      curTodos.map(todo =>
        todo.id === todoId ? { ...todo, todo: editInpValue } : todo,
      ),
    );
    setIsEditing(false);
  };

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(
    function () {
      inputRef.current?.focus();
    },
    [isEditing],
  );

  return (
    <form onSubmit={e => handleUpdate(e, todo.id)} className='todos__single'>
      {isEditing ? (
        <input
          ref={inputRef}
          type='text'
          value={editInpValue}
          onChange={e => setEditInpValue(e.target.value)}
          className='todos__single--text'
        />
      ) : todo.isDone ? (
        <s className='todos__single--text'>{todo.todo}</s>
      ) : (
        <span className='todos__single--text'>{todo.todo}</span>
      )}

      <div>
        <span
          className='icon'
          onClick={() => {
            if (!isEditing && !todo.isDone) {
              setIsEditing(true);
            }
          }}
        >
          <AiFillEdit />
        </span>

        <span className='icon'>
          <AiFillDelete onClick={() => handleDelete(todo.id)} />
        </span>

        {todo.isDone ? (
          <span className='icon' onClick={() => handleDone(todo.id)}>
            <MdCancel />
          </span>
        ) : (
          <span className='icon' onClick={() => handleDone(todo.id)}>
            <MdDone />
          </span>
        )}
      </div>
    </form>
  );
}
