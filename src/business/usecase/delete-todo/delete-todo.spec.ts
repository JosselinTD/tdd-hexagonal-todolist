import { describe, it, expect } from "vitest";
import { initStore } from "../../store/store";
import { deleteTodo } from "./delete-todo";

describe("Delete a todo", () => {
  it("should not delete anything when not called", () => {
    let store = initStore({});
    store.dispatch({
      type: "todos/retrieved",
      payload: someTodos,
    });
    expect(store.getState()).toStrictEqual({
      ...store.getState(),
      todos: someTodos,
    });
  });

  it("should delete asked todo", () => {
    let store = initStore({});
    store.dispatch({
      type: "todos/retrieved",
      payload: someTodos,
    });
    store.dispatch(deleteTodo("todo1"));
    expect(store.getState()).toStrictEqual({
      ...store.getState(),
      todos: {
        todo2: store.getState().todos!.todo2,
      },
    });
  });
});

const someTodos = {
  todo1: {
    label: "Todos 1",
    isDone: false,
  },
  todo2: {
    label: "Todos 2",
    isDone: true,
  },
};
