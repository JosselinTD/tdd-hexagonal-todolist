import { Todos } from "../../../../business/model/Todos";
import { addTodo } from "../../../../business/usecase/add-todo/add-todo";
import { changeStatus } from "../../../../business/usecase/change-status/change-status";
import { saveTodos } from "../../../../business/usecase/save-todos/save-todos";

export function todosPagePresenter(
  todos: Todos | null,
  dispatch: (usecase: any) => any
) {
  return {
    todos: todos
      ? Object.entries(todos).map(([id, todo]) => ({
          ...todo,
          id,
        }))
      : [],
    add: (value: string) => {
      const id = dispatch(addTodo(value));
      dispatch(saveTodos());
      return id;
    },
    changeStatus: (id: string, status: boolean) => {
      dispatch(changeStatus(id, status));
      dispatch(saveTodos());
    },
  };
}
