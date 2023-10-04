import { useDispatch, useSelector } from "react-redux";
import { TodoList } from "../component/organism/todo-list";
import { todosPagePresenter } from "./todos-page.presenter";
import { AppState } from "../../../../business/store/app-state";

export const TodosPage = () => {
  const dispatch = useDispatch();
  const todosPageViewModel = todosPagePresenter(
    useSelector((state: AppState) => state.todos),
    dispatch
  );
  const onAdd = todosPageViewModel.add;
  const onTodoStatusChanged = todosPageViewModel.changeStatus;
  return (
    <TodoList
      onAdd={onAdd}
      onTodoStatusChanged={onTodoStatusChanged}
      todos={todosPageViewModel.todos}
    />
  );
};
