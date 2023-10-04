import { describe, it, expect } from "vitest";
import { initStore } from "../../store/store";
import { changeStatus } from "./change-status";

describe("Change status", () => {
  it("shouldnt change the status when not asked", () => {
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
  it("should change the status", () => {
    let store = initStore({});
    store.dispatch({
      type: "todos/retrieved",
      payload: someTodos,
    });
    store.dispatch(changeStatus("todo1", true));
    expect(store.getState()).toStrictEqual({
      ...store.getState(),
      todos: {
        ...someTodos,
        todo1: {
          ...someTodos.todo1,
          isDone: true,
        },
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
