import { describe, it, expect } from "vitest";
import { todosPagePresenter } from "./todos-page.presenter";
import { initStore } from "../../../../business/store/store";
import { Dispatch } from "@reduxjs/toolkit";
import { TodosGatewayStub } from "../../../secondary/todos-gateway/TodosGatewayStub";

describe("Todos page presenter", () => {
  it("should return an empty array", () => {
    expect(
      todosPagePresenter({}, null as unknown as Dispatch).todos
    ).toStrictEqual([]);
  });

  it("should return a filled array", () => {
    expect(
      todosPagePresenter(someTodos, null as unknown as Dispatch).todos
    ).toStrictEqual([
      {
        id: "todo1",
        label: "Todos 1",
        isDone: false,
      },
      {
        id: "todo2",
        label: "Todos 2",
        isDone: true,
      },
    ]);
  });

  it("should execute the add and save todo usecase", () => {
    const todosGateway = new TodosGatewayStub();
    const store = initStore({ todosGateway });
    store.dispatch({
      type: "todos/retrieved",
      payload: {},
    });
    const id = todosPagePresenter({}, store.dispatch).add("new todo");
    expect(store.getState()).toStrictEqual({
      ...store.getState(),
      todos: {
        [id]: {
          label: "new todo",
          isDone: false,
        },
      },
    });
    expect(todosGateway.todos).toStrictEqual({
      [id]: {
        label: "new todo",
        isDone: false,
      },
    });
  });

  it("should execute the change and save status usecase", () => {
    const todosGateway = new TodosGatewayStub();
    let store = initStore({ todosGateway });
    store.dispatch({
      type: "todos/retrieved",
      payload: someTodos,
    });
    todosPagePresenter({}, store.dispatch).changeStatus("todo1", true);
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
    expect(todosGateway.todos).toStrictEqual({
      todo1: {
        label: "Todos 1",
        isDone: true,
      },
      todo2: {
        label: "Todos 2",
        isDone: true,
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
