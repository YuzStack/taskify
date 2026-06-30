import { createContext, useContext, useReducer, type ReactNode } from 'react';
import type { Todo } from '../types/todo';

interface TodosContextType {
  todos: Todo[];
  dispatch: React.Dispatch<Actions>;
}

const TodosContext = createContext<TodosContextType | undefined>(undefined);

type Actions =
  | { type: 'todos/add'; payload: string }
  | { type: 'todos/remove'; payload: string }
  | { type: 'todos/done'; payload: string };

function reducer(curState: Todo[], action: Actions): Todo[] {
  switch (action.type) {
    case 'todos/add':
      return [
        ...curState,
        { id: crypto.randomUUID(), todo: action.payload, isDone: false },
      ];
    case 'todos/remove':
      return curState.filter(todo => todo.id !== action.payload);
    case 'todos/done':
      return curState.map(todo =>
        todo.id === action.payload ? { ...todo, isDone: !todo.isDone } : todo,
      );
    default:
      throw new Error('Unkown action type');
  }
}

export default function TodosProvider({ children }: { children: ReactNode }) {
  const [todos, dispatch] = useReducer(reducer, []);

  return (
    <TodosContext.Provider value={{ todos, dispatch }}>
      {children}
    </TodosContext.Provider>
  );
}

export function useTodos() {
  const context = useContext(TodosContext);
  if (!context)
    throw new Error('TodosContext was used outside of TodosProvider');

  return context;
}
