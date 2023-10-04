import { describe, it, expect } from "vitest";
import { initStore } from "../../store/store";
import { retrieveTodos } from "./retrieve-todos";
import { TodosGatewayStub } from "../../../adapter/secondary/todos-gateway/TodosGatewayStub";

describe("Retrieve todos", () => {
  it("should return null when usecase not called", () => {
    let store = initStore({});
    expect(store.getState()).toStrictEqual({
      ...store.getState(),
      todos: null,
    });
  });

  it("should return an empty array when there is no todos", async () => {
    const todosGateway = new TodosGatewayStub();
    let store = initStore({ todosGateway });
    await store.dispatch(retrieveTodos());
    expect(store.getState()).toStrictEqual({
      ...store.getState(),
      todos: {},
    });
  });

  it("should return a filled array when there is todos", async () => {
    const todosGateway = new TodosGatewayStub();
    todosGateway.todos = someTodos;
    let store = initStore({ todosGateway });
    await store.dispatch(retrieveTodos());
    expect(store.getState()).toStrictEqual({
      ...store.getState(),
      todos: someTodos,
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
