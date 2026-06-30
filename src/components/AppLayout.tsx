import { useState } from 'react';

import '../styles/App.css';
import InputField from './InputField';
import type { Todo } from '../types/todo';
import TodoList from './TodoList';

export default function AppLayout() {
  const [todo, setTodo] = useState<string>('');
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = function (newTodo: Todo) {
    setTodos(curTodos => [...curTodos, newTodo]);
  };

  return (
    <div className='App'>
      <h1 className='heading'>Taskify</h1>

      <InputField todo={todo} setTodo={setTodo} addTodo={addTodo} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}
