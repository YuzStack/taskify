import type { Todo } from '../types/todo';
import '../styles/styles.css';
import SingleTodo from './SingleTodo';

interface TodoListProps {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

export default function TodoList({ todos, setTodos }: TodoListProps) {
  return (
    <ul className='todos'>
      {todos.map(todo => (
        <SingleTodo key={todo.id} todo={todo} setTodos={setTodos} />
      ))}
    </ul>
  );
}
