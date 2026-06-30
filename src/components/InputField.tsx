import { useRef } from 'react';
import '../styles/styles.css';
import type { Todo } from '../types/todo';

interface InputFieldProps {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  addTodo: (newTodo: Todo) => void;
}

export default function InputField({
  todo,
  setTodo,
  addTodo,
}: InputFieldProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = function (e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();

    if (todo) {
      addTodo({ id: crypto.randomUUID(), todo, isDone: false });
      setTodo('');
      inputRef.current?.blur();
    }
  };

  return (
    <form onSubmit={handleSubmit} className='input'>
      <input
        ref={inputRef}
        value={todo}
        onChange={e => setTodo(e.target.value)}
        type='text'
        placeholder='Enter a task'
        className='input__box'
      />
      <button className='input_submit'>Go</button>
    </form>
  );
}
