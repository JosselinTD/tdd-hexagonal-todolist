import { Todo } from "../molecule/todo";
import { AddTodo } from "../molecule/add-todo";
import { Header } from "../molecule/header";

export interface Todo {
  id: string;
  label: string;
  isDone: boolean;
}

interface TodoList {
  todos: Todo[];
  onAdd: (value: string) => void;
  onTodoStatusChanged: (todoId: string, isDone: boolean) => void;
}

export const TodoList = ({ todos, onAdd, onTodoStatusChanged }: TodoList) => {
  return (
    <div className="max-w-full p-8 bg-gray-800 rounded-lg shadow-lg w-96 text-gray-200">
      <Header label="Todo list" />
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          isDone={todo.isDone}
          label={todo.label}
          onClick={() => onTodoStatusChanged(todo.id, !todo.isDone)}
        />
      ))}
      <AddTodo onAdd={onAdd} />
    </div>
  );
};
