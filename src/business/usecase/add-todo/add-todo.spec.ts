import { describe, it, expect } from "vitest";
import { initStore } from "../../store/store";
import { addTodo } from "./add-todo";

describe("Add todo", () => {
  it("should not add a todo when not asked", () => {
    const store = initStore({});
    store.dispatch({
      type: "todos/retrieved",
      payload: {},
    });
    expect(store.getState()).toStrictEqual({
      ...store.getState(),
      todos: {},
    });
  });
  it("should add a todo", () => {
    const store = initStore({});
    store.dispatch({
      type: "todos/retrieved",
      payload: {},
    });
    const id = store.dispatch(addTodo("new todo"));
    expect(store.getState()).toStrictEqual({
      ...store.getState(),
      todos: {
        [id]: {
          label: "new todo",
          isDone: false,
        },
      },
    });
  });
});
